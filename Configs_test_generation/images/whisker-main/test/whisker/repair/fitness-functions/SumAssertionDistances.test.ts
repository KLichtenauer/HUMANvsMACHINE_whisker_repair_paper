import {SumAssertionDistances} from "../../../../src/repair/fitness-functions/SumAssertionDistances";
import {RepairChromosome} from "../../../../src/repair/chromosomes/RepairChromosome";
import {AssertionError} from "assert";
import {deepCopy} from "../../../../src/assembler/utils/Objects";

describe("SumAssertionDistances", () => {
    const numTests = 5;
    const ff = new SumAssertionDistances(numTests, jest.fn());

    let traces = null;

    beforeEach(() => {
        traces = [
            {
                error: new AssertionError({
                    operator: "<",
                    actual: 1,
                    expected: 2,
                })
            },
            {
                error: new AssertionError({
                    operator: "<=",
                    actual: 1.5,
                    expected: 2,
                })
            },
            {
                error: new AssertionError({
                    operator: "===",
                    actual: 1,
                    expected: 2,
                })
            },
            {
                error: new AssertionError({
                    operator: "isTrue",
                    actual: false,
                    expected: true,
                })
            },
            {
                error: new AssertionError({
                    operator: "isEmpty",
                    actual: 5,
                    expected: 0,
                })
            },
        ];
    });

    it("is between 0 and 1 (excl.) when all tests fail", async () => {
        const c = {
            statistics: {
                totalPassed: 0,
                totalFailed: 5,
                traces,
            },
            executed: true,
            viable: true,
        } as RepairChromosome;

        const actual = await ff.getFitness(c);
        expect(actual).toBeLessThan(1);
        expect(actual).toBeGreaterThanOrEqual(0);
        expect(await ff.isOptimal(actual)).toBeFalsy();
        expect(await ff.isCovered(c)).toBeFalsy();
    });

    it("equals the number of tests when all tests pass", async () => {
        const c = {
            statistics: {
                totalPassed: numTests,
                totalFailed: 5,
                traces: [],
            },
            executed: true,
            viable: true,
        } as RepairChromosome;

        const actual = await ff.getFitness(c);
        expect(actual).toStrictEqual(numTests);
        expect(await ff.isOptimal(actual)).toBeTruthy();
        expect(await ff.isCovered(c)).toBeTruthy();
    });

    it("reaches the next largest integer when an additional test passes", async () => {
        const c = {
            statistics: {
                totalPassed: 0,
                totalFailed: 5,
                traces,
            },
            executed: true,
            viable: true,
        } as RepairChromosome;

        const before = await ff.getFitness(c);

        const d = {
            statistics: {
                totalPassed: 1,
                totalFailed: 4,
                traces: traces.slice(1),
            },
            executed: true,
            viable: true,
        } as RepairChromosome;

        const after = await ff.getFitness(d);

        expect(after).toBeGreaterThanOrEqual(Math.ceil(before));
        expect(after).toBeLessThan(Math.ceil(before) + 1);
        expect(await ff.isOptimal(after)).toBeFalsy();
        expect(await ff.isCovered(d)).toBeFalsy();
    });

    it("increases when a failing assertion comes closer to passing", async () => {
        const c = {
            statistics: {
                totalPassed: 0,
                totalFailed: 5,
                traces,
            },
            executed: true,
            viable: true,
        } as RepairChromosome;

        const before = await ff.getFitness(c);

        traces[0].actual = 1.5;
        const d = {
            statistics: {
                totalPassed: 0,
                totalFailed: 5,
                traces,
            },
            executed: true,
            viable: true,
        } as RepairChromosome;

        const after = await ff.getFitness(d);

        expect(after).toBeGreaterThanOrEqual(before);
        expect(after).toBeLessThan(Math.ceil(after));
        expect(await ff.isOptimal(after)).toBeFalsy();
        expect(await ff.isCovered(d)).toBeFalsy();
    });

    it("weighs passing tests more than improvements in assertion distance", async () => {
        const c = {
            statistics: {
                totalPassed: 0,
                totalFailed: 5,
                traces: deepCopy(traces),
            },
            executed: true,
            viable: true,
        } as RepairChromosome;

        // c still fails every assertion, even though it comes very close to passing all of them.
        c.statistics.traces[0].error.actual = 1.99;
        c.statistics.traces[1].error.actual = 1.99;
        c.statistics.traces[2].error.actual = 1.99;
        c.statistics.traces[4].error.actual = 1;

        const f = await ff.getFitness(c);

        const d = {
            statistics: {
                totalPassed: 1,
                totalFailed: 4,
                traces: deepCopy(traces),
            },
            executed: true,
            viable: true,
        } as RepairChromosome;

        // Compared to c, chromosome d has the worst possible assertion distances for every failing test.
        // But it passes one test, while d does not.
        d.statistics.traces[0].error = null;
        d.statistics.traces[1].error.actual = Number.MIN_VALUE;
        d.statistics.traces[2].error.actual = Number.MIN_VALUE;
        d.statistics.traces[4].error.actual = Number.MAX_VALUE;

        const g = await ff.getFitness(d);

        expect(f).toBeLessThan(g);
    });

    it("returns -1 for inviable chromosomes", async () => {
        const inviable = {executed: true, viable: false} as unknown as RepairChromosome;
        const fitness = await ff.getFitness(inviable);
        expect(fitness).toBe(-1);
    })
});
