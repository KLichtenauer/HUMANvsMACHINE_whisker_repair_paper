import {Randomness} from "../../whisker/utils/Randomness";
import {MultiMap} from "../../assembler/utils/MultiMap";
import {Pair} from "../../whisker/utils/Pair";
import {BlockID} from "../../assembler/types/blocks/Block";
import {SuspiciousnessMap} from "../SuspiciousnessMetric";
import {Container} from "../../whisker/utils/Container";
import {ExprSelector} from "../../assembler/selectors";

export function pick<T>(coll: Iterable<T>): T {
    return Randomness.getInstance().pick([...coll]);
}

// Every key-value pair is picked with the same probability.
export function pickUniformKeyAndValue<K, V>(map: Map<K, V> | MultiMap<K, V>): Pair<K, V> {
    return pick(map);
}

// Every key is picked with the same probability. Then, a value is picked with the same probability among all values
// belonging to the key.
export function pickUniformKeyThenValue<K, V>(multiMap: MultiMap<K, V>): Pair<K, V> {
    const key = pick(multiMap.keys());
    const value = pick(multiMap.get(key));
    return [key, value];
}

export interface SortingOptions {
    onlyExecuted: boolean;
    reverse: boolean;
}

const defaultSortingOptions: SortingOptions = Object.freeze({
    onlyExecuted: false,
    reverse: false,
} as const);

/**
 * Makes a random pick out of the given `blocks`, but biased according to the suspiciousness map. By default, a higher
 * suspiciousness is preferred, unless `options.reverse` is `true`. In case of missing suspiciousness information, a
 * block is considered the least suspicious, unless `options.onlyExecuted` is `true`, in which case such blocks are
 * completely discarded.
 *
 * @param blocks the pool of blocks to pick from
 * @param suspMap the suspiciousness map
 * @param options
 */
export function pickBySuspiciousness(blocks: Array<BlockID>, suspMap: SuspiciousnessMap, options?: Partial<SortingOptions>): BlockID {
    suspMap = new MultiMap(suspMap);
    options = {...defaultSortingOptions, ...options};

    // Remove IDs from the map that are not also present in the blocks array.
    for (const [susp, block] of suspMap) {
        if (!blocks.includes(block)) {
            suspMap.delete(susp, block);
        }
    }

    if (!options.onlyExecuted) {
        const executedBlocks = new Set(suspMap.values());
        const unexecutedBlocks = blocks.filter((block) => !executedBlocks.has(block));
        suspMap.setAll(Number.NEGATIVE_INFINITY, unexecutedBlocks);
    }

    // Sort the suspiciousness values in ascending order; the higher the value, the more suspicious. We will assign a
    // rank from 1 to n (inclusive) to every suspiciousness value. The higher the value, the higher its rank.
    const suspValuesSorted = [...suspMap.keys()].sort(options.reverse ? (a, b) => b - a : (a, b) => a - b);
    const n = suspValuesSorted.length;

    // The sum of ranks: s = 1 + 2 + 3 + ... + n. We use this to construct a roulette wheel with n pockets, one for each
    // rank. The total area of the wheel is s. The area of each pocket equals its rank number.
    const s = n * (n + 1) / 2;

    // Spin the roulette wheel. The number d describes the position on the wheel where the ball landed.
    const d = Randomness.getInstance().nextInt(0, s);

    // Find the rank r of the pocket that contains d.
    let r = 1, a = 1;
    while (a <= d) {
        r++;
        a += r;
    }

    // Get the pocket's suspiciousness value and use it retrieve the corresponding blocks from the map. Among those
    // blocks, pick one randomly.
    const suspValue = suspValuesSorted[r - 1];
    const candidateBlocks = suspMap.get(suspValue);
    return pick(candidateBlocks);
}

export type DebugLogger = typeof Container.debugLog;
