import {RepairCrossoverOperator} from "./RepairCrossover";
import {Assembler} from "../../assembler/Assembler";
import {Randomness} from "../../whisker/utils/Randomness";
import Arrays from "../../whisker/utils/Arrays";
import {matchTargetsFuzzily, matchTargetsRandomly} from "./utils";
import {UniqueTargetName} from "../../assembler/selectors";
import {ChangeLog} from "../utils/RepairMeta";
import {Pair} from "../../whisker/utils/Pair";
import {SuspiciousnessMap} from "../SuspiciousnessMetric";
import {debug} from "util";

/**
 * Uniform (?) crossover on the list of scripts, on a per-target basis. Exchanges whole scripts between targets.
 */
abstract class SwapScriptsBetweenTargets implements RepairCrossoverOperator {
    canApply(project1: Assembler, project2: Assembler): boolean {
        return (
            project1.getScripts(false).length > 0 &&
            project2.getScripts(false).length > 0
        );
    }

    apply(project1: Assembler, project2: Assembler, susp1: SuspiciousnessMap, susp2: SuspiciousnessMap, debugLog): Pair<ChangeLog> {
        const matchingTargets = [...this._matchTargets(project1.getTargets(), project2.getTargets())];

        // Choose a random subset of matching targets among which the scripts will be exchanged.
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
            // The scripts in the two targets.
            const scripts1 = project1.getScriptsOfTarget(target1, false);
            const scripts2 = project2.getScriptsOfTarget(target2, false);

            /*
             * The implementation is like a single-point crossover, but the effects are more like a uniform (?)
             * crossover:
             * (1) We choose a cut point, keep all scripts before the point, and exchange the scripts after the point.
             * (2) But we avoid positional bias by shuffling the array before the exchange happens. I think this is
             *     desirable because the position of the scripts in the array has no meaning in our encoding.
             */
            Arrays.shuffle(scripts1);
            Arrays.shuffle(scripts2);
            const upper = Math.min(scripts1.length, scripts2.length);
            const cutPoint = upper === 0 ? 0 : Randomness.getInstance().nextInt(0, upper);

            // The scripts to exchange, and their metadata.
            const scriptsToExchange1 = scripts1.slice(cutPoint);
            const scriptsToExchange2 = scripts2.slice(cutPoint);
            const scriptsToExchangeMeta1 = scriptsToExchange1.map((script1) => project1.getScriptMeta(script1));
            const scriptsToExchangeMeta2 = scriptsToExchange2.map((script2) => project2.getScriptMeta(script2));

            debugLog(`Exchanging scripts of target1:`, scriptsToExchange1);
            debugLog(`Exchanging scripts of target2:`, scriptsToExchange2);

            // Exchange the scripts.
            const deleted1 = scriptsToExchange1.flatMap((script1) => project1.deleteScript(script1));
            const deleted2 = scriptsToExchange2.flatMap((script2) => project2.deleteScript(script2));
            const renamed1 = scriptsToExchangeMeta2.map((script2) => project1.insertScript(target1, script2));
            const renamed2 = scriptsToExchangeMeta1.map((script1) => project2.insertScript(target2, script1));

            changeLog1.swap.push({
                targetSelf: target1,
                targetOther: target2,
                scriptsToExchangeSelf: scriptsToExchange1,
                scriptsToExchangeOther: scriptsToExchange2,
            });

            for (const renamed of renamed1) {
                Object.assign(changeLog1.renamed, renamed);
            }
            changeLog1.deleted.push(...deleted1);

            changeLog2.swap.push({
                targetSelf: target2,
                targetOther: target1,
                scriptsToExchangeSelf: scriptsToExchange2,
                scriptsToExchangeOther: scriptsToExchange1,
            });
            changeLog2.deleted.push(deleted2);

            for (const renamed of renamed2) {
                Object.assign(changeLog2.renamed, renamed);
            }
        }

        return [changeLog1, changeLog2];
    }

    protected abstract _matchTargets(targets1: Array<UniqueTargetName>, targets2: Array<UniqueTargetName>):
        Map<UniqueTargetName, UniqueTargetName>;
}

/**
 * Exchanges whole scripts between matching targets of two projects. Targets are matched based on the similarity of
 * their names.
 */
export const exchangeScriptsBetweenSimilarTargets = new class extends SwapScriptsBetweenTargets {
    protected override _matchTargets(targets1: Array<UniqueTargetName>, targets2: Array<UniqueTargetName>):
        Map<UniqueTargetName, UniqueTargetName> {
        return matchTargetsFuzzily(targets1, targets2);
    }

    override toString(): string {
        return 'exchange scripts between similar targets crossover';
    }
};

/**
 * Exchanges whole scripts between arbitrary targets of two projects. Sprites are matched randomly (any sprite can
 * exchange its scripts with any other sprite), while the stage of a project can only exchange its scripts with the
 * stage of the other project.
 */
export const exchangeScriptsBetweenRandomTargets = new class extends SwapScriptsBetweenTargets {
    protected override _matchTargets(targets1: Array<UniqueTargetName>, targets2: Array<UniqueTargetName>):
        Map<UniqueTargetName, UniqueTargetName> {
        return matchTargetsRandomly(targets1, targets2);
    }

    override toString(): string {
        return 'exchange scripts between random targets crossover';
    }
};
