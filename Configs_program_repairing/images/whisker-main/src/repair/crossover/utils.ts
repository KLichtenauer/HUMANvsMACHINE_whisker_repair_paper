import {STAGE_NAME, UniqueTargetName} from "../../assembler/selectors";
import {Container} from "../../whisker/utils/Container";
import {MultiMap} from "../../assembler/utils/MultiMap";
import Statistics from "../../whisker/utils/Statistics";
import {pick} from "../mutation/utils";
import Arrays from "../../whisker/utils/Arrays";

/**
 * Tries to assign to every target of project 1 the best matching target of project 2, based on the similarity of their
 * name. Targets with the exact same name always match. For all others, a best-effort fuzzy-match is performed. Every
 * target is matched at most once. If the projects have a different number of targets excess targets are left unmatched.
 * The stage is never matched with a sprite.
 *
 * @param targets1 the targets of the 1st project
 * @param targets2 the targets of the 2nd project
 */
export function matchTargetsFuzzily(
    targets1: Readonly<Array<UniqueTargetName>>,
    targets2: Readonly<Array<UniqueTargetName>>,
): Map<UniqueTargetName, UniqueTargetName> {
    // Not sure if this is necessary. The code assumes no duplicates, and no valid Scratch project should ever have two
    // different targets with the same name.
    targets1 = Array.from(new Set(targets1));
    targets2 = Array.from(new Set(targets2));

    if (targets1.length !== targets2.length) {
        Container.debugLog(`Warning: Projects have different number of targets. Some targets cannot be matched.`);
    }

    interface TargetMeta {
        name: UniqueTargetName,
        matched: boolean, // bookkeeping: whether the target has already been matched
    }

    // All unmatched targets, without the stage.
    const unmatched1: Array<TargetMeta> = targets1
        .filter((name) => name !== STAGE_NAME)
        .map((name) => ({name, matched: false}));
    const unmatched2: Array<TargetMeta> = targets2
        .filter((name) => name !== STAGE_NAME)
        .map((name) => ({name, matched: false}));

    // Maps a Levenshtein distance to pairs of targets that have that distance.
    const distanceAssignments = new Map<number, MultiMap<TargetMeta, TargetMeta>>();
    for (const target1 of unmatched1) {
        for (const target2 of unmatched2) {
            const distance = Statistics.levenshteinDistance(target1.name, target2.name);

            if (!distanceAssignments.has(distance)) {
                distanceAssignments.set(distance, new MultiMap());
            }

            distanceAssignments.get(distance).set(target1, target2);
        }
    }

    // The encountered Levenshtein distances in ascending order, from best (smallest) to worst (biggest).
    const distancesAsc = [...distanceAssignments.keys()].sort((a, b) => a - b);

    // Assigns to each target from project 1 the best matching target from project 2, without assigning a target twice.
    const bestMatchingTargets = new Map<UniqueTargetName, UniqueTargetName>();
    for (const distance of distancesAsc) {
        const pairs = distanceAssignments.get(distance);

        for (const target1 of pairs.keys()) {
            if (target1.matched) { // Target already matched -> skip it.
                continue;
            }

            const candidatesForTarget1 = [...pairs.get(target1)].filter(({matched}) => !matched);

            if (candidatesForTarget1.length === 0) {
                // All candidates already matched -> skip them.
                // There might still be other candidates, albeit with higher distance(s).
                continue;
            }

            const target2 = pick(candidatesForTarget1); // Candidates are equally similar -> choose one randomly.
            bestMatchingTargets.set(target1.name, target2.name);
            target1.matched = true;
            target2.matched = true;
        }
    }

    // Ensures the two stages are only matched with themselves, but not with any other targets. This avoids errors
    // further down the line (e.g., attempting to insert a motion block from a sprite on the stage).
    if (targets1.includes(STAGE_NAME) && targets2.includes(STAGE_NAME)) {
        bestMatchingTargets.set(STAGE_NAME, STAGE_NAME);
    }

    return bestMatchingTargets;
}

export function matchTargetsRandomly(
    targets1: Readonly<Array<UniqueTargetName>>,
    targets2: Readonly<Array<UniqueTargetName>>,
): Map<UniqueTargetName, UniqueTargetName> {
    targets1 = Array.from(new Set(targets1));
    targets2 = Array.from(new Set(targets2));

    if (targets1.length !== targets2.length) {
        Container.debugLog(`Warning: Projects have different number of targets. Some targets cannot be matched.`);
    }

    const unmatched1 = targets1.filter((name) => name !== STAGE_NAME);
    const unmatched2 = targets2.filter((name) => name !== STAGE_NAME);

    Arrays.shuffle(unmatched1);
    Arrays.shuffle(unmatched2);

    const randomlyMatchedTargets = new Map(Arrays.zip(unmatched1, unmatched2));

    if (targets1.includes(STAGE_NAME) && targets2.includes(STAGE_NAME)) {
        randomlyMatchedTargets.set(STAGE_NAME, STAGE_NAME);
    }

    return randomlyMatchedTargets;
}
