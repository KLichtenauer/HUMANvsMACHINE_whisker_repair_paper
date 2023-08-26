import {TestExecutor, ChromosomeStatistics, RepairFitnessFunction} from "./RepairFitnessFunction";
import {RepairChromosome} from "../chromosomes/RepairChromosome";
import {getLineNumber} from "./traces";
import {assertionDistanceNormalized} from "./assertionDistance";
import Arrays from "../../whisker/utils/Arrays";
import {IllegalArgumentException} from "../../whisker/core/exceptions/IllegalArgumentException";
import {TestSuiteProperties} from "../utils/RepairAlgorithmBuilder";
import assert from "assert";

/**
 * A fitness function that rewards maximizing code coverage of the test suite itself (in contrast to the PUT). The idea
 * is that tests can contain multiple assertions, and they could appear anywhere, not just at the end. A failing
 * assertion is caused by a bug in the system under test, and terminates the test prematurely. But if an assertion
 * passes, more test code is executed. Maximizing test code coverage indirectly incentivizes the search to fix bugs in
 * the SUT.
 */
export class MaximizeCoverageWithinTests extends RepairFitnessFunction {
    private readonly _numTests: number;
    private readonly _testSuiteProperties: TestSuiteProperties;

    constructor(numTests: number, evaluator: TestExecutor, testSuiteProperties: TestSuiteProperties) {
        super(evaluator);

        if (numTests < 1) {
            throw new IllegalArgumentException(`Number of tests must be at least 1, but got ${numTests}`);
        }

        if (numTests !== testSuiteProperties.size) {
            throw new IllegalArgumentException(`Number of tests does not match: ${numTests} vs. ${testSuiteProperties.size}`);
        }

        this._numTests = numTests;
        this._testSuiteProperties = testSuiteProperties;
    }

    /*
     * Four tiers:
     * (S) Number of passing tests
     * (A) Assertion coverage (passed only)
     * (B) Number of times the failed assertion passed in the same test
     * (C) Assertion distance of failed assertion
     */
    protected override async _getFitness({statistics: {traces, totalPassed, totalFailed}}: ChromosomeStatistics): Promise<number> {
        if (totalFailed === 0) {
            return totalPassed;
        }

        const [totalCoverage, totalCount, totalDistance] = traces
            .filter(({error}) => error !== null)
            .map(({passedAssertions, error, name}) => {
                // The line numbers of all passed assertions, in descending order.
                const passedLines = passedAssertions
                    .map((stack) => getLineNumber(stack))
                    .sort((a, b) => b - a);

                // The line number of the failed assertion.
                const failedLine = getLineNumber(error.stack);

                // The same assertion could have passed and then failed, e.g., when in a loop.
                const count = Arrays.count(passedLines, (line) => line === failedLine);

                console.log(passedLines);

                // Delete the failed assertion from the array of passed assertions.
                if (count !== 0) {
                    passedLines.splice(0, count);
                }

                const ad = 1 - assertionDistanceNormalized(error);

                // Every additional passed assertion increases the coverage by at least 1 LOC. (We assume there is at
                // most one assertion per line in the test code.) A failing assertion does not increase line coverage,
                // but we use the number of times it was executed successfully and the assertion distance to measure how
                // close we are to reaching the next line.
                const {start: startLine, end: endLine} = this._testSuiteProperties.get(name);

                // Find the maximum line number of the assertions that passed. We use this as surrogate for coverage.
                // We assume that all calls to helper functions that might contain assertions have been inlined before.
                let passedLine = passedLines.length > 0 ? passedLines[0] : startLine;

                const coverage = (passedLine - startLine) / (endLine - startLine);

                console.log({
                    startLine, endLine, passedLine, coverage
                });

                return [coverage, count, ad];
            })
            .reduce((total, current) => {
                const [totalCoverage, totalCount, totalDistance] = total;
                const [currCoverage, currCount, currDistance] = current;
                return [totalCoverage + currCoverage, totalCount + currCount, totalDistance + currDistance];
            }, [0, 0, 0]);

        const dN = totalDistance / totalFailed;
        const c = totalCount + dN;
        const cN = c / (c + 1);
        const cov = totalCoverage + cN / 100;
        const covN = cov / totalFailed;

        console.log({
            dN, c, cN, cov, covN,
        });

        return totalPassed + covN;
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
