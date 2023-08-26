import Arrays from "../../whisker/utils/Arrays";
import {CancellableTestExecutor, RepairFitnessFunction} from "./RepairFitnessFunction";
import {RepairChromosome} from "../chromosomes/RepairChromosome";
import {TestName} from "../traces";
import {TestExecutionStatistics} from "../TestExecutionStatistics";
import assert from "assert";

export interface Weights {
    /**
     * The reward for keeping a test case positive.
     */
    pass: number,

    /**
     * The reward for making a test case pass that failed before
     */
    fail: number,
}

export const DEFAULT_WEIGHTS: Weights = Object.freeze({
    pass: 1,
    fail: 10,
});

type TestStats = Pick<TestExecutionStatistics, "passingTests" | "failingTests" | "totalPassed" | "totalFailed">;

/**
 * Computes fitness by considering the number of tests that passed or failed initially: every test case that passed
 * initially and still passes for the program variant is rewarded with points, and every test case that failed
 * initially and now passes for the program variant is rewarded with (a possibly different amount of) points.
 */
export class WeightedSumOfTests extends RepairFitnessFunction {
    private readonly _passedBefore: Set<TestName>;
    private readonly _failedBefore: Set<TestName>;
    private readonly _numberPassedBefore: number;
    private readonly _numberFailedBefore: number;
    private readonly _weightPass: number;
    private readonly _weightFail: number;

    /**
     * Creates a new fitness function for a Scratch project, given the names of Whisker tests which pass, or
     * respectively, fail for this project.
     */
    constructor(testStats: TestStats, weights: Partial<Weights>, evaluator: CancellableTestExecutor, timeout?: number) {
        super(evaluator, timeout);

        this._passedBefore = new Set(testStats.passingTests);
        this._failedBefore = new Set(testStats.failingTests);
        this._numberPassedBefore = testStats.totalPassed;
        this._numberFailedBefore = testStats.totalFailed;

        const {pass, fail} = {...DEFAULT_WEIGHTS, ...weights};
        this._weightPass = pass;
        this._weightFail = fail;
    }

    compare(value1: number, value2: number): number {
        return value1 - value2;
    }

    private _isPassedBefore(test: TestName): boolean {
        return this._passedBefore.has(test);
    }

    private _isFailedBefore(test: TestName): boolean {
        return this._failedBefore.has(test);
    }

    protected override async _getFitness(chromosome: RepairChromosome): Promise<number> {
        const passingTests = [...chromosome.statistics.passingTests];
        const passedBefore = Arrays.count(passingTests, (test) => this._isPassedBefore(test));
        const failedBefore = Arrays.count(passingTests, (test) => this._isFailedBefore(test));
        return passedBefore * this._weightPass + failedBefore * this._weightFail;
    }

    protected async _getFitnessOfInviableChromosome(chromosome: RepairChromosome): Promise<number> {
        assert(!chromosome.viable, `Expected chromosome ${chromosome.hashCode} to be inviable`);
        return -1;
    }

    override async isOptimal(fitnessValue: number): Promise<boolean> {
        // All test cases that passed before still pass, and all test cases that failed before now also pass.
        const maxValue =
            this._numberPassedBefore * this._weightPass +
            this._numberFailedBefore * this._weightFail;
        return fitnessValue === maxValue;
    }

    override async isCovered(chromosome: RepairChromosome): Promise<boolean> {
        return this.isOptimal(await this.getFitness(chromosome));
    }
}
