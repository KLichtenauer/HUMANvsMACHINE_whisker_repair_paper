import {RepairCrossoverOperator} from "./RepairCrossover";
import {Assembler} from "../../assembler/Assembler";
import {SuspiciousnessMap} from "../SuspiciousnessMetric";
import {Pair} from "../../whisker/utils/Pair";
import {ChangeLog} from "../utils/RepairMeta";
import Arrays from "../../whisker/utils/Arrays";
import {Randomness} from "../../whisker/utils/Randomness";
import {UniqueTargetName} from "../../assembler/selectors";
import {matchTargetsFuzzily, matchTargetsRandomly} from "./utils";

abstract class ExchangeTargets implements RepairCrossoverOperator {
    canApply(): boolean {
        return true; // always applicable
    }

    apply(project1: Assembler, project2: Assembler, susp1: SuspiciousnessMap, susp2: SuspiciousnessMap, debugLog): Pair<ChangeLog> {
        const matchingTargets = [...this._matchTargets(project1.getTargets(), project2.getTargets())];

        // Choose a random subset of matching targets that will be exchanged.
        Arrays.shuffle(matchingTargets);
        const n = Randomness.getInstance().nextInt(1, matchingTargets.length + 1);
        matchingTargets.splice(n); // remove the last n pairs from the array, but retain at least 1 pair

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
            debugLog(`Exchanging "${target1}" and "${target2}"`);

            // The scripts in the two targets.
            const scripts1 = project1.getScriptsOfTarget(target1, false);
            const scripts2 = project2.getScriptsOfTarget(target2, false);

            const meta1 = scripts1.map((script1) => project1.getScriptMeta(script1));
            const meta2 = scripts2.map((script2) => project2.getScriptMeta(script2));

            // Exchange the targets.
            const deleted1 = scripts1.flatMap((script1) => project1.deleteScript(script1));
            const deleted2 = scripts2.flatMap((script2) => project2.deleteScript(script2));
            const renamed1 = meta2.map((script2) => project1.insertScript(target1, script2));
            const renamed2 = meta1.map((script1) => project2.insertScript(target2, script1));

            changeLog1.swap.push({
                targetSelf: target1,
                targetOther: target2,
            });

            for (const renamed of renamed1) {
                Object.assign(changeLog1.renamed, renamed);
            }
            changeLog1.deleted.push(...deleted1);

            changeLog2.swap.push({
                targetSelf: target2,
                targetOther: target1,
            });

            for (const renamed of renamed2) {
                Object.assign(changeLog2.renamed, renamed);
            }
            changeLog2.deleted.push(...deleted2);
        }

        return [changeLog1, changeLog2];
    }

    protected abstract _matchTargets(targets1: Array<UniqueTargetName>, targets2: Array<UniqueTargetName>):
        Map<UniqueTargetName, UniqueTargetName>;
}

/**
 * Exchanges similar targets between two projects. Targets are matched based on the similarity of their name.
 */
export const exchangeSimilarTargets = new class extends ExchangeTargets {
    protected _matchTargets(targets1: Array<UniqueTargetName>, targets2: Array<UniqueTargetName>):
        Map<UniqueTargetName, UniqueTargetName> {
        return matchTargetsFuzzily(targets1, targets2);
    }

    override toString(): string {
        return "exchange similar targets crossover";
    }
};

/**
 * Exchanges random targets between two projects. Sprites are matched randomly, but the two stages always match.
 */
export const exchangeRandomTargets = new class extends ExchangeTargets {
    protected _matchTargets(targets1: Array<UniqueTargetName>, targets2: Array<UniqueTargetName>):
        Map<UniqueTargetName, UniqueTargetName> {
        return matchTargetsRandomly(targets1, targets2);
    }

    override toString(): string {
        return "exchange random targets crossover";
    }
};
