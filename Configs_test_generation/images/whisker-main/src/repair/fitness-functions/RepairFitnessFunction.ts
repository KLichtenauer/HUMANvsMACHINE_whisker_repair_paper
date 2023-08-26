import {FitnessFunction} from "../../whisker/search/FitnessFunction";
import {RepairChromosome} from "../chromosomes/RepairChromosome";
import {Project} from "../../assembler/types/Project";
import {NotSupportedFunctionException} from "../../whisker/core/exceptions/NotSupportedFunctionException";
import {CancelToken, newCancelToken, resolveAfterTimeout} from "../utils/timeouts";
import {TestExecutionTrace} from "../traces";

export type CancellableTestExecutor = (project: Project, cancelToken: CancelToken) => Promise<TestExecutionTrace[]>;
export type TestExecutor = (project: Project) => Promise<TestExecutionTrace[]>;
export type ChromosomeStatistics = Pick<RepairChromosome, 'statistics'>;

export abstract class RepairFitnessFunction implements FitnessFunction<RepairChromosome> {
    private readonly _testExecutor: TestExecutor;

    protected constructor(testExecutor: CancellableTestExecutor, ms?: number) {
        this._testExecutor = (project) => {
            // On my machine, it can sometimes take up to 2000ms to open a new tab in Puppeteer. But usually, it is
            // much faster (~50ms).
            const token = newCancelToken(2000);
            const promise = testExecutor(project, token);
            return ms ? resolveAfterTimeout(ms, new Array<TestExecutionTrace>(), promise, token) : promise;
        };
    }

    abstract compare(value1: number, value2: number): number;

    async getFitness(chromosome: RepairChromosome): Promise<number> {
        if (!chromosome.executed) {
            await chromosome.executeTests(this._testExecutor);
        }

        return chromosome.viable ? this._getFitness(chromosome) : this._getFitnessOfInviableChromosome(chromosome);
    }

    protected abstract _getFitness(chromosome: RepairChromosome): Promise<number>;

    protected abstract _getFitnessOfInviableChromosome(chromosome: RepairChromosome): Promise<number>;

    abstract isCovered(chromosome: RepairChromosome): Promise<boolean>;

    abstract isOptimal(fitnessValue: number): Promise<boolean>;

    getApproachLevel(): number {
        // Does not apply to repair.
        throw new NotSupportedFunctionException();
    }

    getBranchDistance(): number {
        // Does not apply to repair.
        throw new NotSupportedFunctionException();
    }

    getCDGDepth(): number {
        // Does not apply to repair.
        throw new NotSupportedFunctionException();
    }

    getCFGDistance(): number {
        // Does not apply to repair.
        throw new NotSupportedFunctionException();
    }
}
