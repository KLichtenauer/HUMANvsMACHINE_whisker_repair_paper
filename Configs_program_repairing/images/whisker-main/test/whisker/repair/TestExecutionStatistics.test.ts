import {TestExecutionStatistics} from "../../../src/repair/TestExecutionStatistics";
import {expect} from "@jest/globals";
import {statistics} from "./TestExecutionStatistics";

test("Passing tests", () => {
    const passingTests = ["test0", "test1", "test2", "test3"];
    expect(statistics.passingTests).toStrictEqual(new Set(passingTests));
});

test("Failing tests defensive copy", () => {
    const failingTests = new Set(statistics.failingTests);
    statistics.failingTests.clear();
    expect(statistics.failingTests).toStrictEqual(failingTests);
});

test("Passing tests defensive copy", () => {
    const passingTests = new Set(statistics.passingTests);
    statistics.passingTests.clear();
    expect(statistics.passingTests).toStrictEqual(passingTests);
});

test("Failing tests", () => {
    const failingTests = ["test4", "test5"];
    expect(statistics.failingTests).toStrictEqual(new Set(failingTests));
});

test("Total number of passed tests", () => {
    expect(statistics.totalPassed).toStrictEqual(4);
});

test("Total number of failing tests", () => {
    expect(statistics.totalFailed).toStrictEqual(2);
});

describe("Passing tests per block that was...", () => {
    test("covered", () => {
        const coveredBlock = "5";
        expect(statistics.passed(coveredBlock)).toStrictEqual(2);
    });

    test("not covered", () => {
        const uncoveredBlock = "1";
        expect(statistics.passed(uncoveredBlock)).toStrictEqual(0);
    });
});

describe("Failing tests per block that was...", () => {
    test("covered", () => {
        const coveredBlock = "6";
        expect(statistics.failed(coveredBlock)).toStrictEqual(2);
    });

    test("not covered", () => {
        const uncoveredBlock = "5";
        expect(statistics.failed(uncoveredBlock)).toStrictEqual(0);
    });
});

test("Covered blocks", () => {
    const coveredBlocks = ["2", "3", "4", "5", "6", "7", "9", "11", "13"];
    expect(statistics.blocks).toStrictEqual(new Set(coveredBlocks));
});

test("Covered blocks defensive copy", () => {
    const copy = new TestExecutionStatistics(statistics);
    copy.blocks.clear();
    expect(copy.blocks).toStrictEqual(statistics.blocks);
});

test("Copy constructor", () => {
    const copy = new TestExecutionStatistics(statistics);
    expect(copy).toStrictEqual(statistics);
    expect(copy).not.toBe(statistics);
});

