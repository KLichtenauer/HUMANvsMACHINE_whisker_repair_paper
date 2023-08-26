import {TestExecutionStatistics} from "../../../src/repair/TestExecutionStatistics";
import * as Objects from "../../../src/assembler/utils/Objects";

export const statistics = Objects.deepFreeze(new TestExecutionStatistics([
    {
        name: "test0",
        status: "pass",
        coveredBlocks: ["2", "3", "4", "5", "6", "7", "13"],
        error: null,
        passedAssertions: [],
        passedAssumptions: [],
    },
    {
        name: "test1",
        status: "pass",
        coveredBlocks: ["2", "3", "4", "5", "13"],
        error: null,
        passedAssertions: [],
        passedAssumptions: [],
    },
    {
        name: "test2",
        status: "pass",
        coveredBlocks: ["2", "3", "9", "11", "13"],
        error: null,
        passedAssertions: [],
        passedAssumptions: [],
    },
    {
        name: "test3",
        status: "pass",
        coveredBlocks: ["2", "3", "4", "6", "13"],
        error: null,
        passedAssertions: [],
        passedAssumptions: [],
    },
    {
        name: "test4",
        status: "fail",
        coveredBlocks: ["2", "3", "4", "6", "7", "13"],
        error: null,
        passedAssertions: [],
        passedAssumptions: [],
    },
    {
        name: "test5",
        status: "fail",
        coveredBlocks: ["2", "3", "4", "6", "7", "13"],
        error: null,
        passedAssertions: [],
        passedAssumptions: [],
    },
]));
