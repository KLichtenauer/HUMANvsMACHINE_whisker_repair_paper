import {CountPassedAssertions} from "../../../../src/repair/fitness-functions/CountPassedAssertions";
import {AssertionError} from "assert";
import {RepairChromosome} from "../../../../src/repair/chromosomes/RepairChromosome";
import {deepCopy} from "../../../../src/assembler/utils/Objects";

describe("CountPassedAssertions", () => {
    const numTests = 5;
    const ff = new CountPassedAssertions(numTests, jest.fn());

    it("is below 1 when all assertions (tests) fail", async () => {
        const traces = [
            {
                error: new AssertionError({
                    operator: "<",
                    actual: 1,
                    expected: 2,
                }),
                passedAssertions: [],
            },
            {
                error: new AssertionError({
                    operator: "<=",
                    actual: 1.5,
                    expected: 2,
                }),
                passedAssertions: [],
            },
            {
                error: new AssertionError({
                    operator: "===",
                    actual: 1,
                    expected: 2,
                }),
                passedAssertions: [],
            },
            {
                error: new AssertionError({
                    operator: "isTrue",
                    actual: false,
                    expected: true,
                }),
                passedAssertions: [],
            },
            {
                error: new AssertionError({
                    operator: "isEmpty",
                    actual: 5,
                    expected: 0,
                }),
                passedAssertions: [],
            },
        ];

        const c = {
            statistics: {
                totalPassed: 0,
                totalFailed: 5,
                traces,
            },
            executed: true,
            viable: true,
        } as unknown as RepairChromosome;

        const actual = await ff.getFitness(c);
        expect(actual).toBeGreaterThanOrEqual(0);
        expect(actual).toBeLessThan(1);
        expect(await ff.isOptimal(actual)).toBeFalsy();
        expect(await ff.isCovered(c)).toBeFalsy();
    });

    it("is below 1 when some assertions and all tests fail", async () => {
        const traces = [
            {
                error: new AssertionError({
                    operator: "<",
                    actual: 1,
                    expected: 2,
                }),
                passedAssertions: Array(5),
            },
            {
                error: new AssertionError({
                    operator: "<=",
                    actual: 1.5,
                    expected: 2,
                }),
                passedAssertions: [],
            },
            {
                error: new AssertionError({
                    operator: "===",
                    actual: 1,
                    expected: 2,
                }),
                passedAssertions: Array(2),
            },
            {
                error: new AssertionError({
                    operator: "isTrue",
                    actual: false,
                    expected: true,
                }),
                passedAssertions: Array(3),
            },
            {
                error: new AssertionError({
                    operator: "isEmpty",
                    actual: 5,
                    expected: 0,
                }),
                passedAssertions: Array(1),
            },
        ];

        const c = {
            statistics: {
                totalPassed: 0,
                totalFailed: 5,
                traces,
            },
            executed: true,
            viable: true,
        } as unknown as RepairChromosome;

        const actual = await ff.getFitness(c);
        expect(actual).toBeGreaterThanOrEqual(0);
        expect(actual).toBeLessThan(1);
        expect(await ff.isOptimal(actual)).toBeFalsy();
        expect(await ff.isCovered(c)).toBeFalsy();
    });


    it("increases when a failing assertion comes closer to passing", async () => {
        const traces = [
            {
                error: new AssertionError({
                    operator: "<",
                    actual: 1,
                    expected: 2,
                }),
                passedAssertions: [],
            },
            {
                error: new AssertionError({
                    operator: "<=",
                    actual: 1.5,
                    expected: 2,
                }),
                passedAssertions: [],
            },
            {
                error: new AssertionError({
                    operator: "===",
                    actual: 1,
                    expected: 2,
                }),
                passedAssertions: [],
            },
            {
                error: new AssertionError({
                    operator: "isTrue",
                    actual: false,
                    expected: true,
                }),
                passedAssertions: [],
            },
            {
                error: new AssertionError({
                    operator: "isEmpty",
                    actual: 5,
                    expected: 0,
                }),
                passedAssertions: [],
            },
        ];

        const c = {
            statistics: {
                totalPassed: 0,
                totalFailed: 5,
                traces,
            },
            executed: true,
            viable: true,
        } as unknown as RepairChromosome;

        const before = await ff.getFitness(c);

        traces[0].error.actual = 1.5;

        const d = {
            statistics: {
                totalPassed: 0,
                totalFailed: 5,
                traces,
            },
            executed: true,
            viable: true,
        } as unknown as RepairChromosome;

        const after = await ff.getFitness(d);

        expect(after).toBeGreaterThan(before);
        expect(await ff.isOptimal(after)).toBeFalsy();
        expect(await ff.isCovered(d)).toBeFalsy();
    });

    it("increases for a passing assertion", async () => {
        const traces = [
            {
                error: new AssertionError({
                    operator: "<",
                    actual: 1,
                    expected: 2,
                }),
                passedAssertions: [],
            },
            {
                error: new AssertionError({
                    operator: "<=",
                    actual: 1.5,
                    expected: 2,
                }),
                passedAssertions: [],
            },
            {
                error: new AssertionError({
                    operator: "===",
                    actual: 1,
                    expected: 2,
                }),
                passedAssertions: [],
            },
            {
                error: new AssertionError({
                    operator: "isTrue",
                    actual: false,
                    expected: true,
                }),
                passedAssertions: [],
            },
            {
                error: new AssertionError({
                    operator: "isEmpty",
                    actual: 5,
                    expected: 0,
                }),
                passedAssertions: [],
            },
        ];

        const c = {
            statistics: {
                totalPassed: 0,
                totalFailed: 5,
                traces,
            },
            executed: true,
            viable: true,
        } as unknown as RepairChromosome;

        const before = await ff.getFitness(c);

        traces[0].passedAssertions.push("one additional passed assertion");

        const d = {
            statistics: {
                totalPassed: 0,
                totalFailed: 5,
                traces,
            },
            executed: true,
            viable: true,
        } as unknown as RepairChromosome;

        const after = await ff.getFitness(d);

        expect(after).toBeGreaterThan(before);
        expect(await ff.isOptimal(after)).toBeFalsy();
        expect(await ff.isCovered(d)).toBeFalsy();
    });

    it("reaches the next largest integer when an additional test passes", async () => {
        const traces = [
            {
                error: new AssertionError({
                    operator: "<",
                    actual: 1,
                    expected: 2,
                }),
                passedAssertions: [],
            },
            {
                error: new AssertionError({
                    operator: "<=",
                    actual: 1.5,
                    expected: 2,
                }),
                passedAssertions: [],
            },
            {
                error: new AssertionError({
                    operator: "===",
                    actual: 1,
                    expected: 2,
                }),
                passedAssertions: [],
            },
            {
                error: new AssertionError({
                    operator: "isTrue",
                    actual: false,
                    expected: true,
                }),
                passedAssertions: [],
            },
            {
                error: new AssertionError({
                    operator: "isEmpty",
                    actual: 5,
                    expected: 0,
                }),
                passedAssertions: [],
            },
        ];

        const c = {
            statistics: {
                totalPassed: 0,
                totalFailed: 5,
                traces,
            },
            executed: true,
            viable: true,
        } as unknown as RepairChromosome;

        const before = await ff.getFitness(c);

        const d = {
            statistics: {
                totalPassed: 1,
                totalFailed: 4,
                traces: traces.slice(1),
            },
            executed: true,
            viable: true,
        } as unknown as RepairChromosome;

        const after = await ff.getFitness(d);

        expect(after).toBeGreaterThanOrEqual(Math.ceil(before));
        expect(after).toBeLessThan(Math.ceil(before) + 1);
        expect(await ff.isOptimal(after)).toBeFalsy();
        expect(await ff.isCovered(d)).toBeFalsy();
    });

    it("equals the number of tests when all tests pass", async () => {
        const traces = [];
        for (let i = 0; i < 5; i++) {
            traces.push({
                error: null,
                passedAssertions: Array(i),
            });
        }

        const c = {
            statistics: {
                totalPassed: 5,
                totalFailed: 0,
                traces,
            },
            executed: true,
            viable: true,
        } as unknown as RepairChromosome;

        const fitness = await ff.getFitness(c);

        expect(fitness).toStrictEqual(numTests);
        expect(await ff.isOptimal(fitness)).toBeTruthy();
        expect(await ff.isCovered(c)).toBeTruthy();
    });

    it("weighs passing tests more than passing assertions", async () => {
        const traces = [
            {
                error: new AssertionError({
                    operator: "<",
                    actual: 1,
                    expected: 2,
                }),
                passedAssertions: [],
            },
            {
                error: new AssertionError({
                    operator: "<=",
                    actual: 1.5,
                    expected: 2,
                }),
                passedAssertions: [],
            },
            {
                error: new AssertionError({
                    operator: "===",
                    actual: 1,
                    expected: 2,
                }),
                passedAssertions: [],
            },
            {
                error: new AssertionError({
                    operator: "isTrue",
                    actual: false,
                    expected: true,
                }),
                passedAssertions: [],
            },
            {
                error: new AssertionError({
                    operator: "isEmpty",
                    actual: 5,
                    expected: 0,
                }),
                passedAssertions: [],
            },
        ];

        const c = {
            statistics: {
                totalPassed: 0,
                totalFailed: 5,
                traces: deepCopy(traces),
            },
            executed: true,
            viable: true,
        } as unknown as RepairChromosome;

        // Chromosome c fails all tests, but it passes 999 assertions in every test
        for (let i = 0; i < c.statistics.traces.length; i++) {
            c.statistics.traces[i].passedAssertions = Array(999);
        }

        const f = await ff.getFitness(c);

        // Chromosome d passes one test, but does not pass any assertion in all other tests.
        const d = {
            statistics: {
                totalPassed: 1,
                totalFailed: 4,
                traces: traces.slice(1),
            },
            executed: true,
            viable: true,
        } as unknown as RepairChromosome;

        const g = await ff.getFitness(d);

        expect(f).toBeLessThan(g);
    });

    it("weighs passing assertions more than improvements in assertion distances", async () => {
        const traces = [
            {
                error: new AssertionError({
                    operator: "<",
                    actual: 1,
                    expected: 2,
                }),
                passedAssertions: [],
            },
            {
                error: new AssertionError({
                    operator: "<=",
                    actual: 1.5,
                    expected: 2,
                }),
                passedAssertions: [],
            },
            {
                error: new AssertionError({
                    operator: "===",
                    actual: 1,
                    expected: 2,
                }),
                passedAssertions: [],
            },
            {
                error: new AssertionError({
                    operator: "isTrue",
                    actual: false,
                    expected: true,
                }),
                passedAssertions: [],
            },
            {
                error: new AssertionError({
                    operator: "isEmpty",
                    actual: 5,
                    expected: 0,
                }),
                passedAssertions: [],
            },
        ];

        const c = {
            statistics: {
                totalPassed: 0,
                totalFailed: 5,
                traces: deepCopy(traces),
            },
            executed: true,
            viable: true,
        } as unknown as RepairChromosome;

        // All assertion distances improved a lot for chromosome c. Every assertion almost passes.
        c.statistics.traces[0].error.actual = 1.999;
        c.statistics.traces[1].error.actual = 1.999;
        c.statistics.traces[2].error.actual = 1.999;
        c.statistics.traces[4].error.actual = 1;

        const f = await ff.getFitness(c);

        const d = {
            statistics: {
                totalPassed: 0,
                totalFailed: 5,
                traces: deepCopy(traces),
            },
            executed: true,
            viable: true,
        } as unknown as RepairChromosome;

        // Compared to c, chromosome d has the worst possible assertion distances for every test.
        d.statistics.traces[0].error.actual = Number.MIN_VALUE;
        d.statistics.traces[1].error.actual = Number.MIN_VALUE;
        d.statistics.traces[2].error.actual = Number.MIN_VALUE;
        d.statistics.traces[4].error.actual = Number.MAX_VALUE;

        // But d passes one assertion, while c passes none.
        d.statistics.traces[0].passedAssertions = Array(1);

        const g = await ff.getFitness(d);

        expect(f).toBeLessThan(g);
    });

    it("returns -1 for inviable chromosomes", async () => {
        const inviable = {executed: true, viable: false} as unknown as RepairChromosome;
        const fitness = await ff.getFitness(inviable);
        expect(fitness).toBe(-1);
    });
});
