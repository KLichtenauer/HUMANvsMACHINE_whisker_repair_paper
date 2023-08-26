import {TestExecutor, ChromosomeStatistics, RepairFitnessFunction} from "./RepairFitnessFunction";
import {RepairChromosome} from "../chromosomes/RepairChromosome";
import {assertionDistanceNormalized} from "./assertionDistance";
import {getLineNumber} from "./traces";
import Arrays from "../../whisker/utils/Arrays";
import {IllegalArgumentException} from "../../whisker/core/exceptions/IllegalArgumentException";
import assert from "assert";

// Like MaximizePassingAssertions, but it only counts every assertion once.
export class CountPassedAssertionsOnce extends RepairFitnessFunction {
    private readonly _numTests: number;

    constructor(numTests: number, evaluator: TestExecutor) {
        super(evaluator);

        if (numTests < 1) {
            throw new IllegalArgumentException(`Number of tests must be at least 1, but got ${numTests}`);
        }

        this._numTests = numTests;
    }

    /*
     * Four tiers:
     * (S) Number of passing tests
     * (A) Number of passed assertions per failing test (excl. duplicates)
     * (B) Number of times the failed assertion passed in the same test
     * (C) Assertion distance of failed assertion
     */
    protected override async _getFitness({statistics: {traces, totalPassed, totalFailed}}: ChromosomeStatistics): Promise<number> {
        if (totalFailed === 0) {
            return totalPassed;
        }

        const [totalPassedAssertions, totalCount, totalDistance] = traces
            .filter(({error}) => error !== null)
            .map(({passedAssertions, error}) => {
                // We count the number of DISTINCT passed assertions per test. More passed assertions improve fitness,
                // but passing the same assertion twice (e.g., because it is in a loop) does not further improve it.
                const passedLines = passedAssertions.map((stack) => getLineNumber(stack));
                let numberPassedAssertions = new Set(passedLines).size;

                // The assertion that failed.
                const failedLine = getLineNumber(error.stack);

                // The same assertion could have passed and then failed, e.g., when in a loop. The count tells how often
                // the failed assertion passed before.
                const count = Arrays.count(passedLines, (line) => line === failedLine);

                // Even if the failed assertion passed multiple times before, it is still treated as failed assertion.
                if (count !== 0) {
                    numberPassedAssertions--;
                }

                // We take the assertion distance and add the number of times the failed assertion passed before to
                // avoid deceiving fitness landscapes.
                const ad = 1 - assertionDistanceNormalized(error);
                return [numberPassedAssertions, count, ad];
            })
            .reduce((total, current) => {
                const [totalPassedAssertions, totalCount, totalDistance] = total;
                const [passedAssertions, count, distance] = current;
                return [totalPassedAssertions + passedAssertions, totalCount + count, totalDistance + distance];
            }, [0, 0, 0]);

        const dN = totalDistance / totalFailed;
        const c = totalCount + dN
        const cN = c / (c + 1);
        const a = totalPassedAssertions + cN;
        const aN = a / (a + 1);
        return totalPassed + aN;
    }

    protected async _getFitnessOfInviableChromosome(chromosome: RepairChromosome): Promise<number> {
        assert(!chromosome.viable, `Expected chromosome ${chromosome.hashCode} to be inviable`);
        return -1;
    }

    compare(value1: number, value2: number): number {
        return value1 - value2;
    }

    override async isOptimal(fitnessValue: number): Promise<boolean> {
        return fitnessValue === this._numTests;
    }

    override async isCovered(chromosome: RepairChromosome): Promise<boolean> {
        return this.isOptimal(await this.getFitness(chromosome));
    }
}
