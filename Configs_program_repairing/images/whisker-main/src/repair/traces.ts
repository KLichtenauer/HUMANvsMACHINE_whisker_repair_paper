import {deepCopy} from "../assembler/utils/Objects";
import {Assembler} from "../assembler/Assembler";
import {BlockID} from "../assembler/types/blocks/Block";
import {Project} from "../assembler/types/Project";
import {ListID, VariableID} from "../assembler/types/Target";
import {WhiskerAssertionError} from "./fitness-functions/assertionDistance";
import {StackTrace} from "./fitness-functions/traces";

export type TestExecutionStatus =
    | "pass"
    | "skip"
    | "fail"
    | "error"
    ;

export type TestName = string;

export interface TestExecutionTrace {

    /**
     * The name of the JavaScript test function.
     *
     * Given an array of tests exported by a Whisker test suite such as
     * ```
     * module.exports = [
     *     {
     *         test: testVariableInitialization,
     *         name: 'Variable Initialization Test',
     *         description: 'Tests the initialization of variable values for time and score.',
     *         categories: ['initialization', 'time', 'score']
     *     }
     * ]
     * ```
     * this `name` attribute equals `"testVariableInitialization"` and not `"Variable Initialization Test"`.
     */
    name: string,

    /**
     * The execution status of the test.
     */
    status: TestExecutionStatus;

    /**
     * The blocks that were executed by the test, in the order they were executed. Currently, our instrumentation does
     * not record the IDs of reporter blocks ("expressions"). This means the array only contains the IDs of "statement"
     * blocks, unless the trace is post-processed using the `postProcessTraces` function. However, the trace does
     * contain the IDs of executed **custom** variables and lists. Note these are not reporter blocks (instead, Scratch
     * represents them as inputs), thus they do not have block IDs. This means that, unlike reporter blocks, we cannot
     * tell apart different uses of custom variables and lists.
     */
    coveredBlocks: Array<BlockID | VariableID | ListID>;

    /**
     * The assertion error if the test did not pass, `null` otherwise.
     */
    error: WhiskerAssertionError | null;

    /**
     * The stack traces of assertions that passed. (A test might have multiple assertions.)
     */
    passedAssertions: Array<StackTrace>;

    /**
     * The stack traces of assumptions that held.
     */
    passedAssumptions: Array<StackTrace>;
}

export function postProcessTraces(
    traces: Readonly<Array<TestExecutionTrace>>,
    projectJson: Project
): Array<TestExecutionTrace> {
    traces = deepCopy(traces);

    const project = new Assembler(projectJson);
    const stmts = new Set(project.getStmts());

    for (const trace of traces) {
        // (1) Due to technical reasons, a trace might also contain variable and list IDs, not just block IDs.
        //     We also remove IDs of shadow blocks.
        const coveredStmts = trace.coveredBlocks.filter((block) => stmts.has(block));

        // (2) Our instrumentation currently doesn't record the execution of reporter blocks ("expressions"). We
        //     over-approximate their coverage by propagating the coverage information from their parent statements:
        //     An expression is covered if its parent statement is covered.
        const coveredExprs = coveredStmts.flatMap((stmt) => project.getInputBlockIDs(stmt, false));

        // (3) Remove duplicates, just in case a trace already contained coverage information for expressions.
        trace.coveredBlocks = Array.from(new Set([...trace.coveredBlocks, ...coveredExprs]));
    }

    return traces as Array<TestExecutionTrace>;
}
