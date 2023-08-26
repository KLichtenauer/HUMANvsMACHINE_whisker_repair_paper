import {TestExecutor, ChromosomeStatistics, RepairFitnessFunction} from "./RepairFitnessFunction";
import {IllegalArgumentException} from "../../whisker/core/exceptions/IllegalArgumentException";
import {RepairChromosome} from "../chromosomes/RepairChromosome";
import {getLineNumber} from "./traces";
import {assertionDistanceNormalized} from "./assertionDistance";
import {TestSuiteProperties} from "../utils/RepairAlgorithmBuilder";
import {TestExecutionTrace} from "../traces";
import assert from "assert";

export class DefaultRepairFitnessFunction extends RepairFitnessFunction {
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

    private _getFitnessForTrace({passedAssertions, status, error, name}: TestExecutionTrace): number {
        // The fitness of a passing test is 1.
        if (error === null) {
            assert(status === "pass", `Expected the test "${name}" to pass but got "${status}"`);
            return 1;
        }

        assert(status !== "pass",
            `The test "${name}" must not have passed, the error is ${JSON.stringify(error)}`);

        // For every failing test, we count the number of passed assertions, and add the assertion distance for the
        // failed assertion.
        const passedLines = new Set(passedAssertions.map((stack) => getLineNumber(stack)));
        const failedLine = getLineNumber(error.stack);
        if (passedLines.has(failedLine)) {
            // If an assertion was executed more than once (e.g., in a loop) it could have passed but ultimately failed.
            passedLines.delete(failedLine);
        }
        const numberPassedAssertions = passedLines.size;
        const assertionDistance = 1 - assertionDistanceNormalized(error);

        // Finally, we return the normalized sum.
        const totalNumberAssertions = this._testSuiteProperties.get(name).assertions;
        assert(totalNumberAssertions > 0, `Expected at least one assertion in test "${name}"`);
        assert(numberPassedAssertions < totalNumberAssertions,
            `Expected a failing assertion in line ${failedLine} in test "${name}", ` +
            `but got ${numberPassedAssertions}/${totalNumberAssertions} passing assertions ` +
            `in lines ${[...passedLines].join(", ")}`);
        return (numberPassedAssertions + assertionDistance) / totalNumberAssertions;
    }

    protected override async _getFitness({statistics}: ChromosomeStatistics): Promise<number> {
        return statistics.traces
            .map((trace) => this._getFitnessForTrace(trace))
            .reduce((a, b) => a + b, 0);
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
