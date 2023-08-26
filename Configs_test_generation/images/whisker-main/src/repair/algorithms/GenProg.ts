import {RepairChromosome} from "../chromosomes/RepairChromosome";
import {SearchAlgorithmDefault} from "../../whisker/search/algorithms/SearchAlgorithmDefault";
import {RepairProperties} from "../../whisker/search/SearchAlgorithmProperties";
import {Selection} from "../../whisker/search/Selection";
import {RepairFitnessFunction} from "../fitness-functions/RepairFitnessFunction";
import Arrays from "../../whisker/utils/Arrays";
import {ChromosomeGenerator} from "../../whisker/search/ChromosomeGenerator";
import {NotYetImplementedException} from "../../whisker/core/exceptions/NotYetImplementedException";
import {FitnessFunction} from "../../whisker/search/FitnessFunction";
import {PromisePool} from "@supercharge/promise-pool";
import {StatisticsCollector} from "../../whisker/utils/StatisticsCollector";
import {Container} from "../../whisker/utils/Container";
import {IllegalArgumentException} from "../../whisker/core/exceptions/IllegalArgumentException";
import {CSVSchema} from "../utils/CSVSchema";

export class GenProg extends SearchAlgorithmDefault<RepairChromosome> {
    protected override _properties: RepairProperties<RepairChromosome>;
    private _selectionOperator: Selection<RepairChromosome>;
    protected override _fitnessFunction: RepairFitnessFunction;

    // The best chromosomes found so far, across all generations. Sorted by fitness with the best individual at the end.
    private _elite: Array<RepairChromosome>;

    // The GA population.
    private _population: Array<RepairChromosome>;

    override async findSolution(): Promise<Map<number, RepairChromosome>> {
        this._searchStarted();

        this._elite = [];
        this._population = [];

        this._population = await this._generateInitialPopulation();

        while (!(await this._stoppingCondition.isFinished(this))) {
            this._population = await this._generateOffspring(this._population);
            this._iterationCompleted();
        }

        return new Map(this.getCurrentSolution().entries());
    }

    private async _generateInitialPopulation(): Promise<Array<RepairChromosome>> {
        Container.debugLog(`Generating initial population`);

        // Put the initial variant once into the initial population.
        const population = [this._properties.initialVariant.clone()];

        // The rest of the population is filled with other chromosomes produced by the generator (e.g., random
        // chromosomes, or mutants of the initial variant.)
        while (population.length < this._properties.populationSize - 1) {
            population.push(this._chromosomeGenerator.get());
        }

        await this._evaluateAndSortByFitness(population);
        this._elite = population.slice(population.length - this._properties.elitismSize);

        return population;
    }

    /**
     * First evaluates the fitness of the population, and then sorts it by fitness, from the worst to the best
     * chromosome. Returns a map that tells the fitness for every chromosome in the population.
     *
     * @param population the population to evaluate
     * @private
     */
    private async _evaluateAndSortByFitness(population: Array<RepairChromosome>): Promise<Map<RepairChromosome, number>> {
        Container.debugLog(`Evaluating population`);

        const timings = new Map<RepairChromosome, number>();

        // Note: the resulting fitness values are ignored here. We only run the fitness functions to populate the
        // fitness cache of each chromosome as a side effect. The fitness values can be retrieved from the cache later.
        const {results, errors} = await PromisePool
            .for(population)
            .withConcurrency(this._properties.numberOfJobs)
            .onTaskStarted((chromosome) => {
                timings.set(chromosome, Date.now());
            })
            .onTaskFinished((chromosome) => {
                const time = Date.now() - timings.get(chromosome);
                timings.set(chromosome, time);
                Container.debugLog(' - Finished evaluating', chromosome.hashCode, 'after', time, 'ms');
            })
            .useCorrespondingResults()
            .process(async (chromosome, index, pool) => {
                if (await this._stoppingCondition.isFinished(this)) {
                    return pool.stop();
                }

                return await chromosome.getFitness(this._fitnessFunction);
            });

        for (const [chromosome, result] of Arrays.zip(population, results)) {
            // A chromosome is only viable if test execution produced a non-empty trace. For example, the project could
            // be malformed, making execution impossible. Otherwise, we deem it viable, even if all tests failed, as
            // long as they were executed. Note that the original GenProg requires at least one successful test run.
            chromosome.viable = (
                result !== PromisePool.notRun &&
                result !== PromisePool.failed &&
                chromosome.statistics.total > 0
            );
        }

        for (const {message, item: chromosome} of errors) {
            // I think this should never happen, but better safe than sorry...
            console.error('Error during fitness evaluation of chromosome', chromosome.hashCode, ':', message);
            chromosome.viable = false;
            timings.set(chromosome, Number.NaN);
        }

        const fitnessMap = await this._shuffleThenSortByFitness(population);

        if (this.listenerCount("evaluation") > 0) {
            const now = Date.now() - this._startTime;
            const data = this._prepareDataForLogging(population, fitnessMap, timings, now);
            this.emit("evaluation", data);
        }

        return fitnessMap;
    }

    private async _generateOffspring(population: Array<RepairChromosome>): Promise<Array<RepairChromosome>> {
        Container.debugLog(`Generating offspring`);

        const viable = await this._filterViableChromosomes(population);
        const parents = await this._select(viable);
        const offspring = this._crossOverAndMutate(parents);
        const fitnessMap = await this._evaluateAndSortByFitness(offspring);
        this._applyElitism(offspring, fitnessMap);
        return offspring;
    }

    private async _filterViableChromosomes(population: Array<RepairChromosome>): Promise<Array<RepairChromosome>> {
        // Discard individuals that are not viable, e.g., variants that do not compile or had an error.
        let viable = population.filter((c) => c.viable);

        if (viable.length === 0) {
            Container.debugLog(`WARNING: The entire population is inviable! Performing random restart...`)
            // FIXME: must also update the stopping condition (increase the number of fitness evaluations accordingly)?
            viable = await this._generateInitialPopulation();
        }

        return viable
    }

    private async _select(viable: Array<RepairChromosome>): Promise<Array<RepairChromosome>> {
        const parents = new Array<RepairChromosome>();

        while (parents.length < this._properties.populationSize / 2) {
            const parent = await this._selectionOperator.apply(viable, this._fitnessFunction)
            parents.push(parent);
        }

        return parents;
    }

    private _crossOverAndMutate(parents: Array<RepairChromosome>): Array<RepairChromosome> {
        const offspring = new Array<RepairChromosome>();

        if (this._properties.operatorOrder === "crossover then mutation") {
            this._crossOver(offspring, parents);
            this._mutate(offspring);
        } else {
            this._mutate(parents);
            this._crossOver(offspring, parents);
        }

        // Elitism (1):
        // Unless already contained in the population, temporarily insert the elitist chromosomes.
        // The population size can increase up to `this._properties.populationSize + ELITISM_SIZE`.
        for (const e of this._elite) {
            if (!offspring.some((o) => o.equals(e))) {
                offspring.push(e);
            }
        }

        return offspring;
    }

    private _crossOver(offspring: Array<RepairChromosome>, parents: Array<RepairChromosome>): void {
        for (const [parent1, parent2] of Arrays.batches(parents, 2)) {
            const [child1, child2] = parent1.crossover(parent2);
            offspring.push(parent1, parent2, child1, child2);
        }
    }

    private _mutate(offspring: Array<RepairChromosome>): void {
        for (let i = 0; i < offspring.length; i++) {
            offspring[i] = offspring[i].mutate();
        }
    }

    /**
     * Shuffles the given population, then sorts it by fitness in-place, from the worst fitness to best, and returns
     * a map with the computed fitness values.
     *
     * @param population the population to sort
     * @private
     */
    private async _shuffleThenSortByFitness(population: Array<RepairChromosome>): Promise<Map<RepairChromosome, number>> {
        /*
         * Shuffling before sorting is essential to eliminate positional bias in the population:
         * (1) We want genetic drift in the elite such that chromosomes of equal fitness can displace the current elite.
         * (2) Workaround for a bug in rank selection (issue #211) for chromosomes of equal fitness.
         */
        Arrays.shuffle(population);

        /*
         * Associates every chromosome in the given population with its corresponding fitness value. This is primarily
         * useful to work around the limitations of JavaScript's Array combinators not working with Promise-based
         * callbacks, e.g., sort and reduce. Apparently, this workaround is known as "Schwartzian transform" in Perl
         * (https://stackoverflow.com/a/45661316).
         */
        const fitnessValues = await Promise.all(population.map((c) => c.getFitness(this._fitnessFunction)));
        const fitnessMap = new Map(Arrays.zip(population, fitnessValues));
        population.sort((c, d) => this._fitnessFunction.compare(fitnessMap.get(c), fitnessMap.get(d)));
        return fitnessMap;
    }

    private _applyElitism(offspring: Array<RepairChromosome>, fitnessMap: Map<RepairChromosome, number>) {
        // Elitism (2):
        // The new elite is formed by the best chromosomes in the population.
        // The worst chromosomes are removed until the population size is restored.
        this._elite = offspring.slice(offspring.length - this._properties.elitismSize);
        offspring.splice(0, offspring.length - this._properties.populationSize);

        Container.debugLog('New elite:', this._elite.map((c) => c.hashCode));
        Container.debugLog('Fitness:  ', this._elite.map((c) => fitnessMap.get(c)));
    }

    override setSelectionOperator(selectionOperator: Selection<RepairChromosome>): void {
        this._selectionOperator = selectionOperator;
    }

    setProperties(properties: RepairProperties<RepairChromosome>): void {
        if (properties.populationSize % 4 !== 0) {
            throw new IllegalArgumentException(`Population size must be divisible by 4`);
        }

        if (properties.elitismSize % 2 !== 0) {
            throw new IllegalArgumentException(`Elitism size must be divisible by 2`);
        }

        if (properties.elitismSize > properties.populationSize) {
            throw new IllegalArgumentException(`Elitism size ${properties.elitismSize} must not be bigger than population size ${properties.populationSize}`);
        }

        this._properties = properties;
        this._stoppingCondition = properties.stoppingCondition;
    }

    setChromosomeGenerator(generator: ChromosomeGenerator<RepairChromosome>): void {
        this._chromosomeGenerator = generator;
    }

    setFitnessFunction(fitnessFunction: RepairFitnessFunction): void {
        this._fitnessFunction = fitnessFunction;
    }

    setFitnessFunctions(): never {
        throw new NotYetImplementedException();
    }

    setLocalSearchOperators(): never {
        throw new NotYetImplementedException();
    }

    getNumberOfIterations(): number {
        return this._iterations;
    }

    getCurrentSolution(): Array<RepairChromosome> {
        // Callers assume index 0 identifies the best chromosome.
        return [...this._population].reverse();
    }

    getFitnessFunctions(): Iterable<FitnessFunction<RepairChromosome>> {
        return [this._fitnessFunction];
    }

    getStartTime(): number {
        return this._startTime;
    }

    private _searchStarted(): void {
        this._startTime = Date.now();
        StatisticsCollector.getInstance().startTime = this._startTime;
        StatisticsCollector.getInstance().iterationCount = 0;
        this._iterations = 0;
    }

    private _iterationCompleted(): void {
        StatisticsCollector.getInstance().incrementIterationCount();
        this._iterations++;
    }

    private _prepareDataForLogging(
        population: Array<RepairChromosome>,
        fitnessMap: Map<RepairChromosome, number>,
        timings: Map<RepairChromosome, number>,
        now: number,
    ): CSVSchema {
        return population.map((c) => ({
            iteration: this._iterations,
            hashCode: c.hashCode,
            viable: c.viable,
            fitness: c.viable ? fitnessMap.get(c) : -1,
            numPass: c.statistics.totalPassed,
            numFail: c.statistics.totalFailed,
            passing: c.statistics.passingTests,
            failing: c.statistics.failingTests,
            time: timings.get(c) ?? Number.NaN,
            now: now,
        }));
    }
}
