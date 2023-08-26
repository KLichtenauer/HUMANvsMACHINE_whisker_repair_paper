import {RepairChromosome} from "../chromosomes/RepairChromosome";
import {CancellableTestExecutor, RepairFitnessFunction} from "./RepairFitnessFunction";
import {IllegalArgumentException} from "../../whisker/core/exceptions/IllegalArgumentException";
import assert from "assert";

/**
 * Determines fitness by counting the number of passing tests. The optimal fitness value equals the number of tests, and
 * a project is deemed fully repaired ("covered") if it passes all tests.
 */
export class CountPassedTests extends RepairFitnessFunction {
    private readonly _numTests: number;

    constructor(numTests: number, evaluator: CancellableTestExecutor, timeout?: number) {
        super(evaluator, timeout);

        if (numTests < 1) {
            throw new IllegalArgumentException(`Number of tests must be at least 1, but got ${numTests}`);
        }

        this._numTests = numTests;
    }

    compare(value1: number, value2: number): number {
        return value1 - value2;
    }

    /*
     * One tier:
     * (S) Number of passed tests
     */
    protected override async _getFitness(chromosome: RepairChromosome): Promise<number> {
        return chromosome.statistics.totalPassed;
    }

    protected async _getFitnessOfInviableChromosome(chromosome: RepairChromosome): Promise<number> {
        assert(!chromosome.viable, `Expected chromosome ${chromosome.hashCode} to be inviable`);
        return -1;
    }

    override async isOptimal(fitnessValue: number): Promise<boolean> {
        return fitnessValue === this._numTests;
    }

    override async isCovered(chromosome: RepairChromosome): Promise<boolean> {
        return this.isOptimal(await this.getFitness(chromosome));
    }
}
