import {AssertionError} from "assert";
import {RepairChromosome} from "../../../../src/repair/chromosomes/RepairChromosome";
import {CountPassedAssertionsOnce} from "../../../../src/repair/fitness-functions/CountPassedAssertionsOnce";
import * as traces from "../../../../src/repair/fitness-functions/traces";


describe("CountPassedAssertionsOnce", () => {
    const numTests = 5;
    const ff = new CountPassedAssertionsOnce(numTests, jest.fn());

    let getLineNumber: jest.SpiedFunction<typeof traces.getLineNumber> | null = null;

    beforeAll(() => {
        getLineNumber = jest.spyOn(traces, "getLineNumber");
    });

    it("is below 1 when all assertions (tests) fail", async () => {
        getLineNumber.mockReturnValue(1);

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
        getLineNumber.mockReturnValue(5);

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
        getLineNumber.mockReturnValue(5);

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

    it("increases the more often an assertion passed before failing", async () => {
        getLineNumber.mockReturnValue(5);

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

        traces[0].passedAssertions = Array(1);

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
        getLineNumber.mockReturnValue(5);

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
        getLineNumber.mockReturnValue(5);

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

    it("returns -1 for inviable chromosomes", async () => {
        const inviable = {executed: true, viable: false} as unknown as RepairChromosome;
        const fitness = await ff.getFitness(inviable);
        expect(fitness).toBe(-1);
    })
});
