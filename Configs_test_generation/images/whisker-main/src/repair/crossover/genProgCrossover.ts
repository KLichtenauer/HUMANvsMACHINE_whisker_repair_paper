import {Crossover} from "../../whisker/search/Crossover";
import {Pair} from "../../whisker/utils/Pair";
import {Randomness} from "../../whisker/utils/Randomness";
import {Assembler} from "../../assembler/Assembler";
import Arrays from "../../whisker/utils/Arrays";
import {GenProgChromosome} from "../chromosomes/GenProgChromosome";
import {invalidate} from "../SuspiciousnessMetric";
import {Container} from "../../whisker/utils/Container";

export const genProgCrossover = new class extends Crossover<GenProgChromosome> {
    apply(parent1: GenProgChromosome, parent2: GenProgChromosome): Pair<GenProgChromosome> {
        Container.debugLog(`Crossing over ${parent1.hashCode} and ${parent2.hashCode}`);

        const path1 = parent1.getWeightedPath();
        const path2 = parent2.getWeightedPath();

        const entries1 = [...path1];
        const entries2 = [...path2];

        const l = Math.min(entries1.length, entries2.length);

        if (l === 0) {
            // Cannot do cross over, just return clones.
            console.error(`Cannot cross over ${parent1.hashCode} and ${parent2.hashCode}: weighted paths are empty`);
            return [parent1.clone(), parent2.clone()];
        }

        const cutoff = Randomness.getInstance().nextInt(0, l);

        const assembler1 = new Assembler(parent1.getProjectJSON());
        const assembler2 = new Assembler(parent2.getProjectJSON());

        for (const [[stmt1, weight1], [stmt2, weight2]] of Arrays.zip(entries1.slice(cutoff), entries2.slice(cutoff))) {
            // Skip invalid statements. Statements can become invalid in two cases:
            // (1) The deletion of a C-block that appeared earlier on the path caused the deletion (and therefore
            //     invalidation) of its substacks that appear later on the path.
            // (2) The GA executes mutation before crossover.
            if (weight1.invalid || weight2.invalid) {
                continue;
            }

            /*
             * At the moment, we exchange on the "statement" level. This might lead to problems, e.g., a hat block might
             * not fit where a cap block fits. In GenProg, producing (intermediate) variants that do not compile is a
             * deliberate choice. Our philosophy is different: we always want to produce valid code. Thus, we simply
             * skip replacement operations that would lead to broken code.
             */

            const meta1 = assembler1.getStmtMeta(stmt1);
            const meta2 = assembler2.getStmtMeta(stmt2);

            Container.debugLog(`Exchanging "${stmt1}" of ${parent1.hashCode} and "${meta2.rootID}" of ${parent2.hashCode}`);

            // Replacement of stmt1 with stmt2
            if (assembler1.canReplaceStmt(stmt1, meta2)) {
                const deletedStatements = assembler1.replaceStmt(stmt1, meta2).deleted;
                invalidate(path1, deletedStatements);
            } else {
                Container.debugLog(`Cannot replace "${stmt1}" of ${parent1.hashCode} with "${meta2.rootID}" of ${parent2.hashCode}`);
            }

            // Replacement of stmt2 with stmt2
            if (assembler2.canReplaceStmt(stmt2, meta1)) {
                const deletedStatements = assembler2.replaceStmt(stmt2, meta1).deleted;
                invalidate(path2, deletedStatements);
            } else {
                Container.debugLog(`Cannot replace "${stmt2}" of ${parent2.hashCode} with "${meta1.rootID}" of ${parent1.hashCode}`);
            }
        }

        /*
         * Note: We also pass along the updated weighted paths to make them available for subsequent mutation or
         * crossover operations. Some entries on the path may be invalidated and thus unusable. This is a tradeoff:
         * To regain full accuracy on the paths, one has to re-execute all unit tests, which is very expensive. We
         * avoid it here.
         */

        const offspring1 = new GenProgChromosome(
            assembler1.toJSON(),
            parent1.getMutationOperator(),
            parent2.getCrossoverOperator(),
            path1,
        );

        const offspring2 = new GenProgChromosome(
            assembler2.toJSON(),
            parent2.getMutationOperator(),
            parent2.getCrossoverOperator(),
            path2,
        );

        return [offspring1, offspring2];
    }
};
