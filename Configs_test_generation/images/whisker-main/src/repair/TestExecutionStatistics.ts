import {BlockID} from "../assembler/types/blocks/Block";
import {MultiMap} from "../assembler/utils/MultiMap";
import {TestExecutionTrace, TestName} from "./traces";
import {deepCopy} from "../assembler/utils/Objects";
import {Container} from "../whisker/utils/Container";

export class TestExecutionStatistics {
    private readonly _traces: Array<TestExecutionTrace>;

    private readonly _passingTests: Set<TestName>;
    private readonly _failingTests: Set<TestName>;
    private readonly _errorTests: Set<TestName>;
    private readonly _skippedTests: Set<TestName>;

    private readonly _passingTestsPerBlock: MultiMap<BlockID, TestName>;
    private readonly _failingTestsPerBlock: MultiMap<BlockID, TestName>;

    private readonly _coveredBlocks: Set<BlockID>;

    constructor(traces: readonly TestExecutionTrace[]);
    constructor(copy: TestExecutionStatistics);
    constructor(arg: readonly TestExecutionTrace[] | TestExecutionStatistics) {
        if (arg instanceof TestExecutionStatistics) {
            this._passingTests = new Set(arg._passingTests);
            this._failingTests = new Set(arg._failingTests);
            this._errorTests = new Set(arg._errorTests);
            this._skippedTests = new Set(arg._skippedTests);

            this._passingTestsPerBlock = new MultiMap(arg._passingTestsPerBlock);
            this._failingTestsPerBlock = new MultiMap(arg._failingTestsPerBlock);

            this._coveredBlocks = new Set(arg._coveredBlocks);

            this._traces = deepCopy(arg._traces);
        } else {
            this._passingTests = new Set();
            this._failingTests = new Set();
            this._errorTests = new Set();
            this._skippedTests = new Set();

            this._passingTestsPerBlock = new MultiMap();
            this._failingTestsPerBlock = new MultiMap();

            this._coveredBlocks = new Set();

            this._traces = deepCopy(arg);
            this._processTraces(Container.subsumeNegativeTestResults);
        }
    }

    private _processTraces(subsumeNegativeTestResults: boolean): void {
        for (const {name, status, coveredBlocks} of this._traces) {
            if (status === "pass") {
                this._passingTests.add(name);
                for (const block of coveredBlocks) {
                    this._passingTestsPerBlock.set(block, name);
                    this._coveredBlocks.add(block);
                }
            } else if (subsumeNegativeTestResults || status === "fail") {
                this._failingTests.add(name);
                for (const block of coveredBlocks) {
                    this._failingTestsPerBlock.set(block, name);
                    this._coveredBlocks.add(block);
                }
            } else if (status === "skip") {
                this._skippedTests.add(name);
            } else if (status === "error") {
                this._errorTests.add(name);
            } else {
                // noinspection UnnecessaryLocalVariableJS
                const exhaustivenessCheck: never = status;
                throw new Error(`Unhandled test status "${exhaustivenessCheck}"`);
            }
        }
    }

    get passingTests(): Set<TestName> {
        return new Set(this._passingTests);
    }

    get failingTests(): Set<TestName> {
        return new Set(this._failingTests);
    }

    get errorTests(): Set<TestName> {
        return new Set(this._errorTests);
    }

    get skippedTests(): Set<TestName> {
        return new Set(this._skippedTests);
    }

    get totalPassed(): number {
        return this._passingTests.size;
    }

    get totalFailed(): number {
        return this._failingTests.size;
    }

    get totalError(): number {
        return this._errorTests.size;
    }

    get totalSkipped(): number {
        return this._skippedTests.size;
    }

    get total(): number {
        return this.totalPassed + this.totalFailed + this.totalError + this.totalSkipped;
    }

    get blocks(): Set<BlockID> {
        return new Set(this._coveredBlocks);
    }

    get failed(): (blockID: BlockID) => number {
        return (blockID) => this._failingTestsPerBlock.get(blockID).size;
    }

    get passed(): (blockID: BlockID) => number {
        return (blockID) => this._passingTestsPerBlock.get(blockID).size;
    }

    get traces(): Array<TestExecutionTrace> {
        return deepCopy(this._traces);
    }

    crossTable(block: BlockID): CrossTable {
        const ncs = this.passed(block);
        const ncf = this.failed(block);
        const nc = ncs + ncf;

        const ns = this.totalPassed;
        const nf = this.totalFailed;
        const n = ns + nf;

        const nus = ns - ncs;
        const nuf = nf - ncf;
        const nu = n - nc;

        return {ncs, nus, ns, ncf, nuf, nf, nc, nu, n};
    }
}

/**
 * A cross-classification table of test case executions for a given Scratch block.
 */
export interface CrossTable {

    /**
     * Number of successful test cases covering the block.
     */
    ncs: number,

    /**
     * Number of successful test cases not covering the block.
     */
    nus: number,

    /**
     * Total number of successful test cases.
     */
    ns: number,

    /**
     * Number of failing test cases covering the block.
     */
    ncf: number,

    /**
     * Number of failing test cases not covering the block.
     */
    nuf: number,

    /**
     * Total number of failing test cases.
     */
    nf: number,

    /**
     * Number of test cases covering the block.
     */
    nc: number,

    /**
     * Number of test cases not covering the block.
     */
    nu: number,

    /**
     * Total number of test cases.
     */
    n: number,
}
