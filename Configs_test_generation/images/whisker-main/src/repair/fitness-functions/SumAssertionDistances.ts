import {CancellableTestExecutor, ChromosomeStatistics, RepairFitnessFunction} from "./RepairFitnessFunction";
import {RepairChromosome} from "../chromosomes/RepairChromosome";
import {assertionDistanceNormalized} from "./assertionDistance";
import {IllegalArgumentException} from "../../whisker/core/exceptions/IllegalArgumentException";
import assert from "assert";

export class SumAssertionDistances extends RepairFitnessFunction {
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
     * Two tiers:
     * (S) Number of passed tests
     * (A) Assertion distance of failed assertions
     */
    protected override async _getFitness({statistics: {totalPassed, totalFailed, traces}}: ChromosomeStatistics): Promise<number> {
        if (totalFailed === 0) {
            return totalPassed;
        }

        const failed = traces
            // Remove all null values: The error will be null if the test passed.
            .filter(({error}) => error !== null)
            // Compute the inverse normalized assertion distance for each failing assertion. It tells how far the
            // assertion was away from passing: the closer the distance is to 1, the closer the test is to pass.
            .map(({error}) => 1 - assertionDistanceNormalized(error))
            // Sum it all up. Sometimes, the test timed out altogether and there are no traces to begin with.
            .reduce((d, e) => d + e, 0);

        // We count the number of passed tests, and add the assertion distances for all failed tests which are further
        // normalized such that one passing test outweighs all failed tests.
        return totalPassed + failed / totalFailed;
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
