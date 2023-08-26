import {OnePlusOneEA} from "../../whisker/search/algorithms/OnePlusOneEA";
import {GenProg} from "../algorithms/GenProg";
import {CountPassedTests} from "../fitness-functions/CountPassedTests";
import {WeightedSumOfTests} from "../fitness-functions/WeightedSumOfTests";
import {ConstantChromosomeGenerator} from "../chromosomes/ConstantChromosomeGenerator";
import {MutatingChromosomeGenerator} from "../chromosomes/MutatingChromosomeGenerator";
import {
    OptimalSolutionStoppingCondition
} from "../../whisker/search/stoppingconditions/OptimalSolutionStoppingCondition";
import {
    FitnessImprovementStoppingCondition
} from "../../whisker/search/stoppingconditions/FitnessImprovementStoppingCondition";
import {
    FixedIterationsStoppingCondition
} from "../../whisker/search/stoppingconditions/FixedIterationsStoppingCondition";
import {FixedTimeStoppingCondition} from "../../whisker/search/stoppingconditions/FixedTimeStoppingCondition";
import {OneOfStoppingCondition} from "../../whisker/search/stoppingconditions/OneOfStoppingCondition";
import {StoppingCondition} from "../../whisker/search/StoppingCondition";
import {RepairChromosome} from "../chromosomes/RepairChromosome";
import {TestExecutionStatistics} from "../TestExecutionStatistics";
import {CancellableTestExecutor, RepairFitnessFunction} from "../fitness-functions/RepairFitnessFunction";
import {Project} from "../../assembler/types/Project";
import {GenProgChromosome} from "../chromosomes/GenProgChromosome";
import {RankSelection} from "../../whisker/search/operators/RankSelection";
import {TournamentSelection} from "../../whisker/search/operators/TournamentSelection";
import {Selection} from "../../whisker/search/Selection";
import {SearchAlgorithm} from "../../whisker/search/SearchAlgorithm";
import {ChromosomeGenerator} from "../../whisker/search/ChromosomeGenerator";
import {Mutation} from "../../whisker/search/Mutation";
import {Crossover} from "../../whisker/search/Crossover";
import {GenProgMutation} from "../mutation/GenProgMutation";
import {RepairMutation, RepairMutationOperator} from "../mutation/RepairMutation";
import {deleteStatement} from "../mutation/deleteStatement";
import {deleteScript} from "../mutation/deleteScript";
import {duplicateStatement} from "../mutation/duplicateStatement";
import {moveExpression} from "../mutation/moveExpression";
import {moveStatement} from "../mutation/moveStatement";
import {copyEventHandlerAsNewScript} from "../mutation/copyEventHandlerAsNewScript";
import {swapStatements} from "../mutation/swapStatements";
import {wrapStack} from "../mutation/wrapStack";
import {unwrapStack} from "../mutation/unwrapStack";
import {replaceExpression} from "../mutation/replaceExpression";
import {replaceStatement} from "../mutation/replaceStatement";
import {swapExpressions} from "../mutation/swapExpressions";
import {switchDropDownValue} from "../mutation/switchDropDownValue";
import {deleteExpression} from "../mutation/deleteExpression";
import {deleteSubStack} from "../mutation/deleteSubstack";
import {metrics, SuspiciousnessMetric} from "../SuspiciousnessMetric";
import {genProgCrossover} from "../crossover/genProgCrossover";
import {RepairCrossover, RepairCrossoverOperator} from "../crossover/RepairCrossover";
import {exchangeBlocksBetweenRandomTargets, exchangeBlocksBetweenSimilarTargets} from "../crossover/exchangeBlocks";
import {exchangeScriptsBetweenRandomTargets, exchangeScriptsBetweenSimilarTargets} from "../crossover/exchangeScripts";
import {exchangeRandomTargets, exchangeSimilarTargets} from "../crossover/exchangeTargets";
import {
    OnePlusOneProperties,
    RandomSearchProperties,
    RepairProperties
} from "../../whisker/search/SearchAlgorithmProperties";
import {Container} from "../../whisker/utils/Container";
import {TestExecutionTrace} from "../traces";
import {EventEmitter} from "events";
import {HeadlessChickenRepairCrossover} from "../crossover/HeadlessChickenRepairCrossover";
import {Assembler} from "../../assembler/Assembler";
import {Pair} from "../../whisker/utils/Pair";
import {SumAssertionDistances} from "../fitness-functions/SumAssertionDistances";
import {Randomness} from "../../whisker/utils/Randomness";
import {CountPassedAssertions} from "../fitness-functions/CountPassedAssertions";
import {CountPassedAssertionsOnce} from "../fitness-functions/CountPassedAssertionsOnce";
import {MaximizeCoverageWithinTests} from "../fitness-functions/MaximizeCoverageWithinTests";
import {DefaultRepairFitnessFunction} from "../fitness-functions/DefaultRepairFitnessFunction";
import {ESMutation} from "../mutation/ESMutation";
import {RepairRandomSearch} from "../algorithms/RepairRandomSearch";

interface TestCaseProperties {
    start: number,
    end: number,
    assertions: number,
}

type TestCaseName = string;

export type TestSuiteProperties = Map<TestCaseName, TestCaseProperties>;

export class RepairAlgorithmBuilder extends EventEmitter {
    private readonly _statistics: TestExecutionStatistics;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(
        private readonly _config: Record<string, any>,
        traces: Array<TestExecutionTrace>,
        private readonly _originalProject: Project,
        private readonly _fixSpace: Array<Project>,
        private readonly _evaluator: CancellableTestExecutor,
        private readonly _numberOfJobs: number,
        private readonly _seed: string,
        private readonly _testSuiteProperties: TestSuiteProperties,
        private readonly _acceleration: number,
    ) {
        super();

        if (!_config.repair) {
            throw new Error('"repair" flag must be set');
        }

        if (_numberOfJobs < 1) {
            throw new Error(`Invalid number of jobs: "${_numberOfJobs}"`);
        }

        if (traces.length === 0) {
            throw new Error("Traces must not be empty");
        }

        this._statistics = new TestExecutionStatistics(traces);

        if (_fixSpace.length === 0) {
            throw new Error("Fix space must not be empty");
        }

        if (_acceleration < 1) {
            throw new Error(`Invalid acceleration: ${_acceleration}`);
        }

        Randomness.setInitialSeeds(this._seed);
        Container.acceleration = _acceleration;
    }

    public buildSearchAlgorithm(): SearchAlgorithm<RepairChromosome> {
        this._handleLogging();
        this._handleSubsumeNegativeTestResults();

        const [chromosomeGenerator, initialVariant] = this._buildChromosomeGenerator();
        const fitnessFunction = this._buildFitnessFunction();
        const stoppingCondition = this._buildStoppingCondition();

        const algorithm = this._config.algorithm;
        switch (algorithm.kind) {
            case "onePlusOne": {
                const onePlusOneEA = new OnePlusOneEA<RepairChromosome>();
                onePlusOneEA.setChromosomeGenerator(chromosomeGenerator);
                onePlusOneEA.setFitnessFunctions(new Map([[0, fitnessFunction]]));
                onePlusOneEA.setFitnessFunction(fitnessFunction);
                onePlusOneEA.setProperties({stoppingCondition} as OnePlusOneProperties<RepairChromosome>);
                return onePlusOneEA;
            }
            case "genProg": {
                const genProg = new GenProg();
                genProg.setChromosomeGenerator(chromosomeGenerator);
                genProg.setFitnessFunction(fitnessFunction);
                genProg.setSelectionOperator(this._buildSelection());
                genProg.setProperties({
                    stoppingCondition,
                    populationSize: algorithm.populationSize,
                    elitismSize: algorithm.elitismSize,
                    numberOfJobs: this._numberOfJobs,
                    operatorOrder: this._config.algorithm.operatorOrder,
                    initialVariant,
                } as RepairProperties<RepairChromosome>);
                return genProg;
            }
            case "random": {
                const random = new RepairRandomSearch();
                random.setChromosomeGenerator(chromosomeGenerator);
                random.setFitnessFunction(fitnessFunction);
                random.setFitnessFunctions(new Map([[0, fitnessFunction]]));
                random.setProperties({
                    stoppingCondition,
                    numberOfJobs: this._numberOfJobs,
                } as RandomSearchProperties<RepairChromosome>);
                return random;
            }
            default:
                throw new Error(`Unhandled search algorithm of kind "${algorithm.kind}"`);
        }
    }

    private _handleLogging(): void {
        Container.debugLog = this._config.logs.debug ? console.info : () => undefined;
        Container.reduceSpam = !!this._config.logs.reduceSpam;
    }

    private _handleSubsumeNegativeTestResults(): void {
        Container.subsumeNegativeTestResults = this._config.subsumeNegativeTestResults;
    }

    private _buildFitnessFunction(): RepairFitnessFunction {
        const fitnessFunction = this._config.fitnessFunction;
        switch (fitnessFunction.kind) {
            // Assigns different weights to passing and failing tests, and sums them up.
            case "weightedSumOfTests":
                return new WeightedSumOfTests(
                    this._statistics,
                    fitnessFunction.weights,
                    this._evaluator,
                    fitnessFunction.timeout,
                );

            // Simply counts the number of passing tests.
            case "countPassedTests":
                return new CountPassedTests(
                    this._statistics.total,
                    this._evaluator,
                    fitnessFunction.timeout,
                );

            // Counts the number of passing tests but also adds the inverted assertion distance of failed tests.
            case "sumAssertionDistances":
                return new SumAssertionDistances(
                    this._statistics.total,
                    this._evaluator,
                    fitnessFunction.timeout,
                );

            // Counts the number of passing assertions and adds the assertion distance of failed tests.
            case "countPassedAssertions":
                return new CountPassedAssertions(
                    this._statistics.total,
                    this._evaluator,
                    fitnessFunction.timeout,
                );

            // Counts the number of passing assertions, but counts every assertion at most once, and adds the assertion
            // distance of failed tests.
            case "countPassedAssertionsOnce":
                return new CountPassedAssertionsOnce(
                    this._statistics.total,
                    this._evaluator,
                    fitnessFunction.timeout,
                );

            // Tries to maximize test code coverage, implying that every assertion in the test suite must pass.
            case "maximizeCoverageWithinTests":
                return new MaximizeCoverageWithinTests(
                    this._statistics.total,
                    this._evaluator,
                    this._testSuiteProperties,
                    fitnessFunction.timeout,
                );

            case "defaultFitness":
                return new DefaultRepairFitnessFunction(
                    this._statistics.total,
                    this._evaluator,
                    this._testSuiteProperties,
                    fitnessFunction.timeout,
                );

            default:
                throw new Error(`Unhandled fitness function of kind "${fitnessFunction.kind}"`);
        }
    }

    private _buildStoppingCondition(): StoppingCondition<RepairChromosome> {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        function buildStoppingCondition(stoppingCondition: any): StoppingCondition<RepairChromosome> {
            switch (stoppingCondition.kind) {
                case "combined": {
                    const conditions = stoppingCondition.conditions;
                    return new OneOfStoppingCondition(...conditions.map((sc) => buildStoppingCondition(sc)));
                }
                case "optimal":
                    return new OptimalSolutionStoppingCondition();
                case "fitnessImprovement":
                    return new FitnessImprovementStoppingCondition(stoppingCondition.iterationsWithoutImprovement);
                case "fixedIterations":
                    return new FixedIterationsStoppingCondition(stoppingCondition.iterations);
                case "fixedTime":
                    return new FixedTimeStoppingCondition(stoppingCondition.duration);
                default:
                    throw new Error(`Unhandled stopping condition of kind "${stoppingCondition.kind}"`);
            }
        }

        return buildStoppingCondition(this._config.stoppingCondition);
    }

    private _buildSelection(): Selection<RepairChromosome> {
        const selection = this._config.selection;
        switch (selection.kind) {
            case "rank":
                return new RankSelection();
            case "tournament":
                return new TournamentSelection(selection.size);
            default:
                throw new Error(`Unhandled selection of kind "${selection.kind}"`);
        }
    }

    private _buildChromosomeGenerator(): Pair<ChromosomeGenerator<RepairChromosome>, RepairChromosome> {
        const mutation = this._buildMutation();
        const crossover = this._buildCrossover();

        const initialVariant = (() => {
            const chromosome = this._config.initialVariants.chromosome;
            switch (chromosome.kind) {
                case "repair":
                    return new RepairChromosome(
                        this._originalProject,
                        mutation,
                        crossover,
                        this._statistics.traces,
                    );
                case "genProg":
                    return new GenProgChromosome(
                        this._originalProject,
                        mutation as Mutation<GenProgChromosome>,
                        crossover as Crossover<GenProgChromosome>,
                        null
                    );
                default:
                    throw new Error(`Unhandled chromosome of kind "${chromosome.kind}"`);
            }
        })();

        const kind = this._config.initialVariants.generator.kind;
        const generator = (() => {
            switch (kind) {
                case "constant":
                    return new ConstantChromosomeGenerator(initialVariant);
                case "mutating":
                    return new MutatingChromosomeGenerator(initialVariant);
                default:
                    throw new Error(`Unhandled chromosome generator of kind "${kind}"`);
            }
        })();

        if (crossover instanceof HeadlessChickenRepairCrossover) {
            crossover.generator = generator;
        }

        return [generator, initialVariant];
    }

    private _buildMutation(): Mutation<RepairChromosome> {
        function getRepairMutationOperator(name: string): RepairMutationOperator {
            switch (name) {
                case "deleteStatement":
                    return deleteStatement;
                case "deleteSubStack":
                    return deleteSubStack;
                case "deleteExpression":
                    return deleteExpression;
                case "deleteScript":
                    return deleteScript;
                case "switchDropDownValue":
                    return switchDropDownValue;
                case "duplicateStatement":
                    return duplicateStatement;
                case "moveExpression":
                    return moveExpression;
                case "moveStatement":
                    return moveStatement;
                case "copyEventHandlerAsNewScript":
                    return copyEventHandlerAsNewScript;
                case "swapStatements":
                    return swapStatements;
                case "swapExpressions":
                    return swapExpressions;
                case "replaceStatement":
                    return replaceStatement;
                case "replaceExpression":
                    return replaceExpression;
                case "unwrapStack":
                    return unwrapStack;
                case  "wrapStack":
                    return wrapStack;
                default:
                    throw new Error(`Unhandled repair mutation operator "${name}"`);
            }
        }

        const mutation = this._config.mutation;
        switch (mutation.kind) {
            case "genProg":
                return new GenProgMutation(mutation.wMut);
            case "repair": {
                const repairMutation = new RepairMutation({
                    operators: mutation.operators.map((operator) => getRepairMutationOperator(operator)),
                    suspiciousnessMetric: getSuspiciousnessMetric(mutation.suspiciousness),
                    probability: mutation.probability,
                    stratifiedSampling: mutation.stratifiedSampling,
                    fixSpace: this._fixSpace.map((project) => new Assembler(project)),
                });
                repairMutation.on("variant built", (hashCode, json) => this.emit("variant built", hashCode, json));
                return repairMutation;
            }
            case "esMutation": {
                const esMutation = new ESMutation({
                    operators: mutation.operators.map((operator) => getRepairMutationOperator(operator)),
                    suspiciousnessMetric: getSuspiciousnessMetric(mutation.suspiciousness),
                    probability: mutation.probability,
                    fixSpace: this._fixSpace.map((project) => new Assembler(project)),
                });
                esMutation.on("variant built", (hashCode, json) => this.emit("variant built", hashCode, json));
                return esMutation;
            }
            default:
                throw new Error(`Unhandled mutation of kind "${mutation.kind}"`);
        }
    }

    private _buildCrossover(): Crossover<RepairChromosome> {
        function getRepairCrossoverOperator(name: string): RepairCrossoverOperator {
            switch (name) {
                case "exchangeBlocksBetweenSimilarTargets":
                    return exchangeBlocksBetweenSimilarTargets;
                case "exchangeBlocksBetweenRandomTargets":
                    return exchangeBlocksBetweenRandomTargets;
                case "exchangeScriptsBetweenSimilarTargets":
                    return exchangeScriptsBetweenSimilarTargets;
                case "exchangeScriptsBetweenRandomTargets":
                    return exchangeScriptsBetweenRandomTargets;
                case "exchangeSimilarTargets":
                    return exchangeSimilarTargets;
                case "exchangeRandomTargets":
                    return exchangeRandomTargets;
                default:
                    throw new Error(`Unhandled repair crossover operator "${name}"`);
            }
        }

        const crossover = this._config.crossover;

        if (!crossover) {
            return Crossover.identity();
        }

        switch (crossover.kind) {
            case "genProg":
                return genProgCrossover;
            case "repair": {
                const props = {
                    operators: crossover.operators.map((operator) => getRepairCrossoverOperator(operator)),
                    suspiciousnessMetric: getSuspiciousnessMetric(crossover.suspiciousness),
                    probability: crossover.probability,
                };

                const repairCrossover = new (crossover.headlessChicken
                    ? HeadlessChickenRepairCrossover
                    : RepairCrossover)(props);

                repairCrossover.on("variant built",
                    (hashCode, json) => this.emit("variant built", hashCode, json));

                return repairCrossover;
            }
            default:
                throw new Error(`Unhandled crossover of kind "${crossover.kind}"`);
        }
    }
}

function getSuspiciousnessMetric(name: string): SuspiciousnessMetric {
    if (Object.keys(metrics).includes(name)) {
        return metrics[name];
    }

    throw new Error(`Unhandled suspiciousness metric "${name}"`);
}
