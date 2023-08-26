/*
 * Copyright (C) 2020 Whisker contributors
 *
 * This file is part of the Whisker test generator for Scratch.
 *
 * Whisker is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Whisker is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Whisker. If not, see http://www.gnu.org/licenses/.
 *
 */

import {RepairChromosome} from "../chromosomes/RepairChromosome";
import {SearchAlgorithmDefault} from "../../whisker/search/algorithms/SearchAlgorithmDefault";
import {ChromosomeGenerator} from "../../whisker/search/ChromosomeGenerator";
import {RepairFitnessFunction} from "../fitness-functions/RepairFitnessFunction";
import {StatisticsCollector} from "../../whisker/utils/StatisticsCollector";
import {RandomSearchProperties} from "../../whisker/search/SearchAlgorithmProperties";
import {Container} from "../../whisker/utils/Container";
import {FitnessFunction} from "../../whisker/search/FitnessFunction";
import {PromisePool} from "@supercharge/promise-pool";
import Arrays from "../../whisker/utils/Arrays";
import {CSVSchema} from "../utils/CSVSchema";

// A copy of Random Search allowing parallel fitness evaluations.
export class RepairRandomSearch extends SearchAlgorithmDefault<RepairChromosome> {
    protected override _fitnessFunction: RepairFitnessFunction;

    protected override _properties: RandomSearchProperties<RepairChromosome>;

    setChromosomeGenerator(generator: ChromosomeGenerator<RepairChromosome>): void {
        this._chromosomeGenerator = generator;
    }

    setFitnessFunction(fitnessFunction: RepairFitnessFunction): void {
        StatisticsCollector.getInstance().fitnessFunctionCount = 1;
        this._fitnessFunction = fitnessFunction;
    }

    setFitnessFunctions(fitnessFunctions: Map<number, RepairFitnessFunction>): void {
        this._fitnessFunctions = fitnessFunctions;
        StatisticsCollector.getInstance().fitnessFunctionCount = fitnessFunctions.size;
    }

    setProperties(properties: RandomSearchProperties<RepairChromosome>): void {
        this._properties = properties;
        this._stoppingCondition = this._properties.stoppingCondition;
    }

    /**
     * Returns a list of possible admissible solutions for the given problem.
     * @returns Solution for the given problem
     */
    async findSolution(): Promise<Map<number, RepairChromosome>> {
        this._startTime = Date.now();
        StatisticsCollector.getInstance().iterationCount = 0;
        StatisticsCollector.getInstance().coveredFitnessFunctionsCount = 0;
        StatisticsCollector.getInstance().startTime = Date.now();

        let bestIndividual: RepairChromosome | null = null;
        this._bestIndividuals = new Array<RepairChromosome>();
        let bestFitness: number | null = null;

        while (!(await this._stoppingCondition.isFinished(this))) {
            const candidateChromosomes = await this.generateCandidates();
            const candidateChromosome: RepairChromosome = candidateChromosomes.keys()[Symbol.iterator]().next().value;

            if (!candidateChromosome) {
                Container.debugLog(`WARNING: no chromosome was viable!`);
                continue;
            }

            const candidateFitness = candidateChromosomes.get(candidateChromosome);

            if (bestFitness === null || this._fitnessFunction.compare(candidateFitness, bestFitness) > 0) {
                bestFitness = candidateFitness;
                bestIndividual = candidateChromosome;
                this._bestIndividuals = [bestIndividual];
            } else if (this._fitnessFunction.compare(candidateFitness, bestFitness) === 0) {
                bestIndividual = candidateChromosome;
                this._bestIndividuals.push(candidateChromosome);
            }

            Container.debugLog(`Iteration ${this._iterations}: covered goals:  ${this._archive.size}/${this._fitnessFunctions.size}`);
        }

        return new Map(this.getCurrentSolution().entries());
    }

    async generateCandidates(): Promise<Map<RepairChromosome, number>> {
        Container.debugLog("Generating random chromosomes...")

        const candidates = new Array<RepairChromosome>();

        while (candidates.length < this._properties.numberOfJobs) {
            candidates.push(this._chromosomeGenerator.get());
        }

        const timings = new Map<RepairChromosome, number>();

        Container.debugLog("Evaluating chromosomes...");

        const {results, errors} = await PromisePool
            .for(candidates)
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

                const fitness = await chromosome.getFitness(this._fitnessFunction);
                this.updateStatistics();
                this._iterations++;
                return fitness;
            });

        for (const [chromosome, result] of Arrays.zip(candidates, results)) {
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

        const fitnessMap = await this._sortByFitness(candidates);

        if (this.listenerCount("evaluation") > 0) {
            const now = Date.now() - this._startTime;
            const data = this._prepareDataForLogging(candidates, fitnessMap, timings, now);
            this.emit("evaluation", data);
        }

        return fitnessMap;
    }

    private async _sortByFitness(population: Array<RepairChromosome>): Promise<Map<RepairChromosome, number>> {
        const fitnessValues = await Promise.all(population.map((c) => c.getFitness(this._fitnessFunction)));
        const fitnessMap = new Map(Arrays.zip(population, fitnessValues));

        // Sort from best to worst fitness
        population.sort((c, d) => this._fitnessFunction.compare(fitnessMap.get(d), fitnessMap.get(c)));

        const sortedByFitness = new Map<RepairChromosome, number>();
        for (const c of population) {
            sortedByFitness.set(c, fitnessMap.get(c));
        }
        return sortedByFitness;
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
            fitness: c.viable ? fitnessMap.get(c) : Number.NaN,
            numPass: c.statistics.totalPassed,
            numFail: c.statistics.totalFailed,
            passing: c.statistics.passingTests,
            failing: c.statistics.failingTests,
            time: timings.get(c) ?? Number.NaN,
            now: now,
        }));
    }

    protected override async updateArchive(candidateChromosome: RepairChromosome): Promise<void> {
        // Updating the archive does not work for repair because it also modifies this._bestIndividuals as a side
        // effect, always setting it to an empty array. This breaks this._getCurrentSolution(), so we avoid it.
        return;
    }

    /**
     * Updates the StatisticsCollector on the following points:
     *  - bestTestSuiteSize
     *  - iterationCount
     *  - createdTestsToReachFullCoverage
     *  - timeToReachFullCoverage
     */
    protected override updateStatistics(): void {
        StatisticsCollector.getInstance().bestTestSuiteSize = this._bestIndividuals.length;
        StatisticsCollector.getInstance().incrementIterationCount();
        if (this._archive.size == this._fitnessFunctions.size && !this._fullCoverageReached) {
            this._fullCoverageReached = true;
            StatisticsCollector.getInstance().createdTestsToReachFullCoverage = StatisticsCollector.getInstance().numberFitnessEvaluations;
            StatisticsCollector.getInstance().timeToReachFullCoverage = Date.now() - this._startTime;
        }
    }

    getNumberOfIterations(): number {
        return this._iterations;
    }

    getCurrentSolution(): RepairChromosome[] {
        return this._bestIndividuals;
    }

    getFitnessFunctions(): Iterable<FitnessFunction<RepairChromosome>> {
        if (this._fitnessFunctions) {
            return this._fitnessFunctions.values();
        } else
            return [this._fitnessFunction];
    }

    getStartTime(): number {
        return this._startTime;
    }

    setSelectionOperator(): void {
        throw new Error('Method not implemented.');
    }

    setLocalSearchOperators(): void {
        throw new Error('Method not implemented.');
    }
}
