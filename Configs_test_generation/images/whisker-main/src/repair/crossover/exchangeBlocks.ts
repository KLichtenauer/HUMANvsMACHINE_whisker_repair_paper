import {RepairCrossoverOperator} from "./RepairCrossover";
import {Assembler} from "../../assembler/Assembler";
import {pick} from "../mutation/utils";
import {Randomness} from "../../whisker/utils/Randomness";
import Arrays from "../../whisker/utils/Arrays";
import {matchTargetsFuzzily, matchTargetsRandomly} from "./utils";
import {UniqueTargetName} from "../../assembler/selectors";
import {ChangeLog} from "../utils/RepairMeta";
import {Pair} from "../../whisker/utils/Pair";
import {SuspiciousnessMap} from "../SuspiciousnessMetric";

/**
 * Single-point crossover on the list of blocks, on a per-script basis. Picks a script from each project, splits the
 * chosen scripts into two pieces, and exchanges the tails between the scripts.
 */
abstract class ExchangeBlocksBetweenTargets implements RepairCrossoverOperator {
    canApply(project1: Assembler, project2: Assembler): boolean {
        return (
            project1.getStmts().length > 0 &&
            project2.getStmts().length > 0
        );
    }

    apply(project1: Assembler, project2: Assembler, susp1: SuspiciousnessMap, susp2: SuspiciousnessMap, debugLog): Pair<ChangeLog> {
        // Only consider the targets that contain statements.
        const targets1 = project1.getTargets().filter((target1) => project1.getStmtsOfTarget(target1).length > 0);
        const targets2 = project2.getTargets().filter((target2) => project2.getStmtsOfTarget(target2).length > 0);

        // Out of the matched targets, select a random subset of targets among which the blocks will be exchanged.
        // (At least one pair, at most all pairs.)
        const matchingTargets = [...this._matchTargets(targets1, targets2)];
        Arrays.shuffle(matchingTargets);
        const n = Randomness.getInstance().nextInt(1, matchingTargets.length + 1);
        matchingTargets.splice(n);

        const changeLog1 = {
            parents: [],
            operator: this.toString(),
            operands: [],
            renamed: Object.create(null),
            deleted: [],
            swap: [],
        };

        const changeLog2 = {
            parents: [],
            operator: this.toString(),
            operands: [],
            renamed: Object.create(null),
            deleted: [],
            swap: [],
        };

        for (const [target1, target2] of matchingTargets) {
            // The statements in the targets.
            const stmts1 = project1.getStmtsOfTarget(target1);
            const stmts2 = project2.getStmtsOfTarget(target2);

            // Pick a random statement from each target, and create a slice of the script, starting at the random
            // statement until the end of the script.
            const [sliceStart1] = pick(stmts1); // cut-point for script 1
            const [sliceStart2] = pick(stmts2); // cut-point for script 2
            const sliceEnd1 = project1.getLastInSlice(sliceStart1);
            const sliceEnd2 = project2.getLastInSlice(sliceStart2);
            const slice1Meta = project1.getStackMeta(sliceStart1, sliceEnd1);
            const slice2Meta = project2.getStackMeta(sliceStart2, sliceEnd2);

            debugLog(`Exchanging blocks "${sliceStart1}" and "${sliceStart2}"`);

            // Single-point crossover: Exchange the two slices between the scripts.
            const {renamed: renamed1, deleted: deleted1} = project1.replaceStack(sliceStart1, sliceEnd1, slice2Meta);
            const {renamed: renamed2, deleted: deleted2} = project2.replaceStack(sliceStart2, sliceEnd2, slice1Meta);

            changeLog1.swap.push({
                targetSelf: target1,
                targetOther: target2,
                subscriptSelf: sliceStart1,
                subscriptOther: sliceStart2,
            });

            Object.assign(changeLog1.renamed, renamed1);
            changeLog1.deleted.push(...deleted1);

            changeLog2.swap.push({
                targetSelf: target2,
                targetOther: target1,
                subscriptSelf: sliceStart2,
                subscriptOther: sliceStart1,
            });

            Object.assign(changeLog2.renamed, renamed2);
            changeLog2.deleted.push(...deleted2);
        }

        return [changeLog1, changeLog2];
    }

    protected abstract _matchTargets(targets1: Array<UniqueTargetName>, targets2: Array<UniqueTargetName>):
        Map<UniqueTargetName, UniqueTargetName>;
}

/**
 * Exchanges blocks between scripts of similar targets of two projects. Targets are matched based on the similarity of
 * their name.
 */
export const exchangeBlocksBetweenSimilarTargets = new class extends ExchangeBlocksBetweenTargets {
    protected _matchTargets(targets1: Array<UniqueTargetName>, targets2: Array<UniqueTargetName>):
        Map<UniqueTargetName, UniqueTargetName> {
        return matchTargetsFuzzily(targets1, targets2);
    }

    override toString(): string {
        return "exchange blocks between similar targets crossover";
    }
};

/**
 * Exchanges blocks between scripts of random targets of two projects. Sprites are matched randomly, while the stage
 * of one project can only exchange blocks with the stage of the other project.
 */
export const exchangeBlocksBetweenRandomTargets = new class extends ExchangeBlocksBetweenTargets {
    protected _matchTargets(targets1: Array<UniqueTargetName>, targets2: Array<UniqueTargetName>):
        Map<UniqueTargetName, UniqueTargetName> {
        return matchTargetsRandomly(targets1, targets2);
    }

    override toString(): string {
        return "exchange blocks between random targets crossover";
    }
};
