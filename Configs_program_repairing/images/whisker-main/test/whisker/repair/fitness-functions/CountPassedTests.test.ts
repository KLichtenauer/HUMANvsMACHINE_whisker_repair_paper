import {CountPassedTests} from "../../../../src/repair/fitness-functions/CountPassedTests";
import {RepairChromosome} from "../../../../src/repair/chromosomes/RepairChromosome";

describe("CountPassedTests", () => {
    const numTests = 5;
    const ff = new CountPassedTests(numTests, jest.fn());

    it("is 0 when no tests pass", async () => {
        const c = {
            statistics: {
                totalPassed: 0,
            },
            executed: true,
            viable: true,
        } as RepairChromosome;

        const actual = await ff.getFitness(c);
        expect(actual).toStrictEqual(0);
        expect(await ff.isOptimal(actual)).toBeFalsy();
        expect(await ff.isCovered(c)).toBeFalsy();
    });

    it("reaches its maximum when all tests pass", async () => {
        const c = {
            statistics: {
                totalPassed: numTests,
            },
            executed: true,
            viable: true,
        } as RepairChromosome;

        const actual = await ff.getFitness(c);
        expect(actual).toStrictEqual(numTests);
        expect(await ff.isOptimal(actual)).toBeTruthy();
        expect(await ff.isCovered(c)).toBeTruthy();
    });

    it("equals the number of passing tests", async () => {
        const c = {
            statistics: {
                totalPassed: 3,
            },
            executed: true,
            viable: true,
        } as RepairChromosome;

        const actual = await ff.getFitness(c);
        expect(actual).toStrictEqual(c.statistics.totalPassed);
        expect(await ff.isOptimal(actual)).toBeFalsy();
        expect(await ff.isCovered(c)).toBeFalsy();
    });

    it("returns -1 for inviable chromosomes", async () => {
        const inviable = {executed: true, viable: false} as unknown as RepairChromosome;
        const fitness = await ff.getFitness(inviable);
        expect(fitness).toBe(-1);
    })
});
