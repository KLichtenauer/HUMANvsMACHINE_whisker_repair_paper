import {CancellableTestExecutor, ChromosomeStatistics, RepairFitnessFunction} from "./RepairFitnessFunction";
import {assertionDistanceNormalized} from "./assertionDistance";
import {IllegalArgumentException} from "../../whisker/core/exceptions/IllegalArgumentException";
import {RepairChromosome} from "../chromosomes/RepairChromosome";
import assert from "assert";

export class CountPassedAssertions extends RepairFitnessFunction {
    private readonly _numTests: number;

    constructor(numTests: number, evaluator: CancellableTestExecutor, timeout?: number) {
        super(evaluator, timeout);

        if (numTests < 1) {
            throw new IllegalArgumentException(`Number of tests must be at least 1, but got ${numTests}`);
        }

        this._numTests = numTests;
    }

    /*
     * Three tiers:
     * (S) Number of passed tests
     * (A) Number of passed assertions per failing test (incl. duplicates)
     * (B) Assertion distance of failed assertion
     */
    protected override async _getFitness({statistics: {traces, totalFailed, totalPassed}}: ChromosomeStatistics): Promise<number> {
        if (totalFailed === 0) {
            return totalPassed;
        }

        const [totalPassedAssertions, totalDistance] = traces
            .filter(({error}) => error !== null)
            .map(({passedAssertions, error}) => ([
                passedAssertions.length,
                1 - assertionDistanceNormalized(error),
            ]))
            .reduce((total, current) => {
                const [totalPassedAssertions, totalDistance] = total;
                const [passedAssertions, distance] = current;
                return [totalPassedAssertions + passedAssertions, totalDistance + distance];
            }, [0, 0]);

        const dN = totalDistance / totalFailed;
        const a = totalPassedAssertions + dN;
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
