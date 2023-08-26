import {BlockID} from "../assembler/types/blocks/Block";
import {TestExecutionStatistics} from "./TestExecutionStatistics";
import {MultiMap} from "../assembler/utils/MultiMap";
import {TestExecutionTrace} from "./traces";
import {IllegalArgumentException} from "../whisker/core/exceptions/IllegalArgumentException";
import {Container} from "../whisker/utils/Container";
import {stat} from "fs";

export type SuspiciousnessMetric = (block: BlockID, statistics: TestExecutionStatistics) => number;

export const tarantula: SuspiciousnessMetric = function tarantula(block, statistics) {
    const {totalPassed, totalFailed, passed, failed} = statistics;
    return failed(block) / totalFailed / (passed(block) / totalPassed + failed(block) / totalFailed);
};

export const ochiai: SuspiciousnessMetric = function ochiai(block, statistics) {
    const {failed, passed, totalFailed} = statistics;
    return failed(block) / Math.sqrt(totalFailed * (failed(block) + passed(block)));
};

export const occhia: SuspiciousnessMetric = ochiai;

export const jaccard: SuspiciousnessMetric = function jaccard(block, statistics) {
    const {failed, passed, totalFailed} = statistics;
    return failed(block) / (totalFailed + passed(block));
};

export const zoltar: SuspiciousnessMetric = function zoltar(block, statistics) {
    const {passed, failed, totalFailed} = statistics;
    return failed(block) / (totalFailed + passed(block) + 10_000 * (((totalFailed - failed(block)) * passed(block)) / failed(block)));
};

export const o: SuspiciousnessMetric = function o(block, statistics) {
    const {passed, failed, totalPassed, totalFailed} = statistics;
    return totalFailed - failed(block) > 0 ? -1 : totalPassed - passed(block);
};

export const op: SuspiciousnessMetric = function op(block, statistics) {
    const {failed, passed, totalPassed} = statistics;
    return failed(block) - (passed(block) / (totalPassed + 1));
};

export const op2: SuspiciousnessMetric = op;

export const kulczynski2: SuspiciousnessMetric = function kulczynski2(block, statistics) {
    const {failed, passed, totalFailed} = statistics;
    return (failed(block) / totalFailed + failed(block) / (failed(block) + passed(block))) / 2;
};

export const mcCon: SuspiciousnessMetric = function mcCon(block, statistics) {
    const {passed, failed, totalFailed} = statistics;
    return (failed(block) * failed(block) - (totalFailed - failed(block)) * passed(block)) / (totalFailed * (failed(block) + passed(block)));
};

export const barinel: SuspiciousnessMetric = function barinel(block, {passed, failed}) {
    return 1 - (passed(block) / (passed(block) + failed(block)));
};

function pow(base: number, exp: number, res = 1): number {
    if (exp < 1) return res;
    return pow(base, exp - 1, res * base);
}

export function dstar(star: number): SuspiciousnessMetric {
    return function dstar(block, statistics) {
        const {failed, passed, totalFailed} = statistics;
        return pow(failed(block), star) / (passed(block) + (totalFailed - failed(block)));
    };
}

export const dstar2: SuspiciousnessMetric = function dstar2(block, statistics) {
    return dstar(2)(block, statistics);
};

export const dstar3: SuspiciousnessMetric = function dstar3(block, statistics) {
    return dstar(3)(block, statistics);
};

export const minusKBC: SuspiciousnessMetric = function minusKBC(block, statistics) {
    const {failed, passed, totalFailed, totalPassed} = statistics;
    return tarantula(block, statistics) - (1 - failed(block) / totalFailed / (1 - passed(block) / totalPassed + 1 - failed(block) / totalFailed));
};

export const exam: SuspiciousnessMetric = function exam(blockID, statistics) {
    const {ncf, ncs, nuf, nus, nc, nu, ns, nf, n} = statistics.crossTable(blockID);

    const ecf = (nc * nf) / n;
    const ecs = (nc * ns) / n;
    const euf = (nu * nf) / n;
    const eus = (nu * ns) / n;

    const cf = (ncf - ecf) * (ncf - ecf) / ecf;
    const cs = (ncs - ecs) * (ncs - ecs) / ecs;
    const uf = (nuf - euf) * (nuf - euf) / euf;
    const us = (nus - eus) * (nus - eus) / eus;

    const chi2 = cf + cs + uf + us;
    const m = chi2 / n;
    const phi = (ncf / nf) / (ncs / ns);
    return phi < 1 ? -m : m;
};

export const metrics = Object.freeze({
    tarantula,
    ochiai,
    jaccard,
    zoltar,
    o,
    op,
    kulczynski2,
    mcCon,
    barinel,
    dstar2,
    dstar3,
    minusKBC,
    exam,
});

/**
 * Block IDs grouped by their suspiciousness.
 */
export type SuspiciousnessMap = MultiMap<number, BlockID>

export function newSuspiciousnessMap(
    statistics: Array<TestExecutionTrace> | TestExecutionStatistics,
    suspiciousness: SuspiciousnessMetric,
): SuspiciousnessMap {
    if (!(statistics instanceof TestExecutionStatistics)) {
        statistics = new TestExecutionStatistics(statistics);
    }

    const map = new MultiMap<number, BlockID>();

    for (const block of statistics.blocks) {
        map.set(suspiciousness(block, statistics), block);
    }

    return map;
}

export interface Weight {
    weight: number;   // The weight of the statement
    invalid: boolean; // Whether the statement is invalid (e.g., due to deletion of a block it depends on)
}

export type WeightedPath = Map<BlockID, Weight>;
export const WeightedPath = Map;

/**
 * Constructs the weighted path (as known from GenProg) from the given test execution traces. It contains the Scratch
 * equivalents of all CIL statements visited during test execution, in the order in which they were first encountered.
 * This includes all non-reporter Scratch blocks, such as stack blocks, cap blocks, hat blocks, and C-blocks
 * (called "conditionals" in CIL). Note: There is no Scratch-counterpart to CIL "blocks", other than substack inputs
 * of C-blocks.
 *
 * The weighted path assigns a specific weight (between 0 and 1) to each block, indicating the likelihood the block is
 * responsible for a bug. This serves to localize the fault. Blocks only executed by failing test cases have a weight
 * of 1. Blocks only executed by passing test cases do not appear on the weighted path (but technically, they have
 * weight of 0.) Tests executed by both a failing and a passing test case have a weight of `wPath`. The parameter is
 * optional and defaults to 0.01. Setting it to 0 causes such blocks to be removed from the weighted path also.
 *
 * The whitelist governs which blocks may appear on the weighted path. This is necessary as due to technical reasons
 * the given traces might also contain the IDs of variables, lists and shadow blocks. These are not useful for our use
 * case, and thus we may choose to remove them.
 *
 * @param traces the test execution traces
 * @param whitelist which block IDs are allowed on the path (to filter out undesired entries)
 * @param wPath the weight for blocks executed by both passing and failing tests; optional; a number between 0 and 1
 */
export function computeWeightedPath(
    traces: Readonly<Array<TestExecutionTrace>>,
    whitelist: Set<BlockID>,
    wPath: number = 0.01
): WeightedPath {
    if (!(0 <= wPath && wPath <= 1)) {
        throw new IllegalArgumentException(`Expected 0 <= wPath <= 1 but got wPath = ${wPath}`);
    }

    // The blocks covered by passing and negative test cases, respectively.
    const pathPos = new Set<BlockID>();
    const pathNeg = new Set<BlockID>();

    // Populate the sets.
    for (const {status, coveredBlocks} of traces) {
        if (status === "pass") {
            for (const blockID of coveredBlocks) {
                pathPos.add(blockID);
            }
        } else if (Container.subsumeNegativeTestResults || status === "fail") {
            for (const blockID of coveredBlocks) {
                pathNeg.add(blockID);
            }
        }
    }

    const weightedPath = new WeightedPath();

    // Construct the weighted path. A block can only appear on the path if it has been executed by a negative test case.
    // A Block executed only by negative tests has a weight of 1. If it was also executed by a positive test case, it
    // gets a weight of wPath, unless wPath is 0, in which case the block does not appear on the path.
    for (const blockID of pathNeg) {
        // Only include whitelisted IDs on the path (we do not want variable IDs, list IDs, or IDs of shadow blocks.)
        if (!whitelist.has(blockID)) {
            continue;
        }

        const weight = pathPos.has(blockID) ? wPath : 1;

        if (weight !== 0) {
            weightedPath.set(blockID, {weight, invalid: false});
        }
    }

    return weightedPath;
}

export function invalidate(weightedPath: WeightedPath, statements: Array<BlockID>): void {
    for (const blockID of statements) {
        if (weightedPath.has(blockID)) {
            weightedPath.get(blockID).invalid = true;
        }
    }
}
