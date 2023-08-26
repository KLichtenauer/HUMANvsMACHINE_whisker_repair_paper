import {DEFAULT_WEIGHTS, WeightedSumOfTests} from "../../../../src/repair/fitness-functions/WeightedSumOfTests";
import {RepairChromosome} from "../../../../src/repair/chromosomes/RepairChromosome";

describe("WeightedSumOfTests", () => {
    const stats = {
        passingTests: new Set(["pass1", "pass2", "pass3"]),
        failingTests: new Set(["fail1", "fail2"]),
        totalPassed: 3,
        totalFailed: 2,
    };
    const weights = DEFAULT_WEIGHTS;
    const ff = new WeightedSumOfTests(stats, weights, jest.fn());

    it("is 0 when no tests pass", async () => {
        const c = {
            statistics: {
                passingTests: new Set(),
            },
            executed: true,
            viable: true,
        } as RepairChromosome;

        const actual = await ff.getFitness(c);
        expect(actual).toStrictEqual(0);
        expect(await ff.isOptimal(actual)).toBeFalsy();
        expect(await ff.isCovered(c)).toBeFalsy();
    });

    it(`weighs tests that still pass with ${weights.pass}`, async () => {
        const c = {
            statistics: {
                passingTests: new Set(["pass1", "pass2"]),
            },
            executed: true,
            viable: true,
        } as RepairChromosome;

        const actual = await ff.getFitness(c);
        expect(actual).toStrictEqual(c.statistics.passingTests.size * weights.pass);
    });

    it(`weighs tests that newly pass with ${weights.fail}`, async () => {
        const c = {
            statistics: {
                passingTests: new Set(["fail1", "fail2"]),
            },
            executed: true,
            viable: true,
        } as RepairChromosome;

        const actual = await ff.getFitness(c);
        expect(actual).toStrictEqual(c.statistics.passingTests.size * weights.fail);
        expect(await ff.isOptimal(actual)).toBeFalsy();
        expect(await ff.isCovered(c)).toBeFalsy();
    });

    it("adds the weights for passing and failing tests", async () => {
        const c = {
            statistics: {
                passingTests: new Set(["pass1", "pass2", "fail1"]),
            },
            executed: true,
            viable: true,
        } as RepairChromosome;

        const actual = await ff.getFitness(c);
        const expected = weights.pass * 2 + weights.fail;
        expect(actual).toStrictEqual(expected);
        expect(await ff.isOptimal(actual)).toBeFalsy();
        expect(await ff.isCovered(c)).toBeFalsy();
    });

    it("reaches its maximum when all tests pass", async () => {
        const c = {
            statistics: {
                passingTests: new Set(["pass1", "pass2", "pass3", "fail1", "fail2"]),
            },
            executed: true,
            viable: true,
        } as RepairChromosome;

        const actual = await ff.getFitness(c);
        const expected = weights.pass * stats.passingTests.size + weights.fail * stats.failingTests.size;
        expect(actual).toStrictEqual(expected);
        expect(await ff.isOptimal(actual)).toBeTruthy();
        expect(await ff.isCovered(c)).toBeTruthy();
    });

    it("returns -1 for inviable chromosomes", async () => {
        const inviable = {executed: true, viable: false} as unknown as RepairChromosome;
        const fitness = await ff.getFitness(inviable);
        expect(fitness).toBe(-1);
    })
});
