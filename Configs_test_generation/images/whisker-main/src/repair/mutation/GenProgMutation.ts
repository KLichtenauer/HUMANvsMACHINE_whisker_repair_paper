import {Mutation} from "../../whisker/search/Mutation";
import {Assembler} from "../../assembler/Assembler";
import {Randomness} from "../../whisker/utils/Randomness";
import {pick} from "./utils";
import {GenProgChromosome} from "../chromosomes/GenProgChromosome";
import {invalidate, WeightedPath} from "../SuspiciousnessMetric";
import {BlockID} from "../../assembler/types/blocks/Block";
import {IllegalArgumentException} from "../../whisker/core/exceptions/IllegalArgumentException";
import {Container} from "../../whisker/utils/Container";

export class GenProgMutation implements Mutation<GenProgChromosome> {

    /**
     * The global mutation rate. Governs the maximum number of mutations per chromosome.
     * @private
     */
    private readonly _wMut: number;

    public constructor(wMut: number) {
        if (!(0 <= wMut && wMut <= 1)) {
            throw new IllegalArgumentException(`Expected a probability (between 0 and 1), but got ${wMut}`);
        }

        this._wMut = wMut;
    }

    public get wMut(): number {
        return this._wMut;
    }

    public apply(chromosome: GenProgChromosome): GenProgChromosome {
        Container.debugLog(`Mutating chromosome ${chromosome.hashCode}`);

        const assembler = new Assembler(chromosome.getProjectJSON());
        const weightedPath = chromosome.getWeightedPath();

        for (const [blockID, {weight, invalid}] of weightedPath) {
            if (withProbability(weight) && withProbability(this._wMut)) {
                // Skip invalidated entries. Entries on the weighted path can have implicit dependencies between them
                // (e.g., C-blocks and their substacks). Modifying an entry earlier on the path may thus invalidate
                // other dependent entries that appear later on the path.
                if (invalid) {
                    continue;
                }

                const op = pick(operators);
                op(assembler, blockID, weightedPath);
            }
        }

        /*
         * Note: We also pass along the updated weighted path to make it available for subsequent mutation or
         * crossover operations. Some entries on the path may be invalidated and thus unusable. This is a tradeoff:
         * To regain full accuracy on the paths, one has to re-execute all unit tests, which is very expensive. We
         * avoid it here.
         */

        return new GenProgChromosome(
            assembler.toJSON(),
            chromosome.getMutationOperator(),
            chromosome.getCrossoverOperator(),
            weightedPath,
        );
    }
}

const operators = [
    deleteStatement,
    insertStatement,
    swapStatement,
    replaceStatement,
];

// Deletes a statement stmt on the weighted path.
function deleteStatement(assembler: Assembler, stmt: BlockID, weightedPath: WeightedPath): void {
    Container.debugLog(`Deleting statement "${stmt}"`);

    /*
     * Heuristic: In GenProg, mutation can also delete CIL blocks. Scratch does not have an equivalent concept to CIL
     * blocks, but SUBSTACKs are a close approximation. Hence, we also allow the deletion of entire SUBSTACKs.
     * Instead of representing them via a dedicated entry on the weighted path, we reuse the entry for the root block
     * of the SUBSTACK. With probability 50%, either the root block or the entire SUBSTACK will be deleted. Otherwise,
     * only stmt will be deleted. Note we do not consider the deletion of entire scripts: Deleting their hat block
     * (1) disables the script—it will not be executed in either case, and (2) only deleting the hat block still allows
     * subsequent mutations to modify the script, e.g., by adding another hat block. Furthermore, when an entire script
     * is deleted, its blocks can no longer be used for insertion of or replacement of other blocks in subsequent
     * mutations.
     */
    const deletedStatements = assembler.getSubstacks().includes(stmt) && nextBoolean()
        ? assembler.deleteStack(stmt, null)
        : assembler.deleteStmt(stmt);

    invalidate(weightedPath, deletedStatements);
}

// Append after a statement stmt1 on the weighted path another statement stmt2 taken from anywhere in the program.
function insertStatement(assembler: Assembler, stmt1: BlockID): void {
    const substacks = assembler.getSubstacks();

    // Consider all "atomic" Scratch statements for appending as well as all substacks in the program.
    const metas = [
        ...assembler.getStmts().map((stmt) => assembler.getStmtMeta(stmt)),
        ...substacks.map((stack) => assembler.getStackMeta(stack)),
    ];

    // If stmt1 is the root of a SUBSTACK, decide if to append at stmt1 or the end of the SUBSTACK. Otherwise, always
    // append at stmt1.
    const appendAfterBlock = substacks.includes(stmt1) && nextBoolean() ? assembler.getLastInSlice(stmt1) : stmt1;

    // Find an insertion point after stmt1: If stmt1 is a C-block, it could be next, SUBSTACK or SUBSTACK2. In all other
    // cases, we always insert as next. Insertion as parent is only done if stmt1 is the toplevel block of an entire
    // script, and not a hat block.
    const stmts2 = metas.flatMap((meta) =>
        assembler.getStmtInsertionPoints(meta)
            .filter((insPt) => insPt.blockID === appendAfterBlock)
            .map((insPt) => [insPt, meta] as const));

    if (stmts2.length === 0) {
        return;
    }

    const [insertionPoint, stmt2] = pick(stmts2);

    Container.debugLog(`Inserting stack "${stmt2.rootID}".."${stmt2.lastID}" as "${insertionPoint.key}" of "${appendAfterBlock}"`);

    assembler.insertStmt(insertionPoint, stmt2);
}

// Replaces a statement stmt1 on the weighted path with a statement stmt2 taken from anywhere in the program.
function replaceStatement(assembler: Assembler, stmt1: BlockID, weightedPath: WeightedPath): void {
    const substacks = assembler.getSubstacks();

    const metas = [
        ...assembler.getStmts().map((stmt) => assembler.getStmtMeta(stmt)),
        ...substacks.map((stack) => assembler.getStackMeta(stack)),
    ];

    const last = substacks.includes(stmt1) && nextBoolean() ? assembler.getLastInSlice(stmt1) : stmt1;

    // All possible replacements for stmt1 (excluding stmt1 itself).
    const stmts2 = metas.filter((meta) =>
        (!(meta.rootID === stmt1 && meta.lastID === last)) &&
        assembler.canReplaceStack(stmt1, last, meta)
    );

    if (stmts2.length === 0) {
        return;
    }

    const stmt2 = pick(stmts2);

    const deletedStatements = assembler.replaceStack(stmt1, last, stmt2).deleted;

    Container.debugLog(`Replacing stack "${stmt1}".."${last}" with "${stmt2.rootID}".."${stmt2.lastID}"`);

    invalidate(weightedPath, deletedStatements);
}

// Swaps a statement stmt1 on the weighted path with a statement stmt2 taken from anywhere in the program.
function swapStatement(assembler: Assembler, stmt1: BlockID, weightedPath: WeightedPath): void {
    const substacks = assembler.getSubstacks();

    const metas2 = [
        ...assembler.getStmts().map((stmt) => assembler.getStmtMeta(stmt)),
        ...substacks.map((stack) => assembler.getStackMeta(stack)),
    ];

    const last1 = substacks.includes(stmt1) && nextBoolean() ? assembler.getLastInSlice(stmt1) : stmt1;
    const meta1 = assembler.getStackMeta(stmt1, last1);
    const ids1 = new Set(Object.keys(meta1.blocks));

    // Important: Two statements (or substacks) can only be exchanged if they do not overlap. We test this by performing
    // a disjointness test on the sets of occurring block IDs.
    const stmts2 = metas2.filter((meta2) =>
        disjoint(ids1, Object.keys(meta2.blocks)) &&
        assembler.canReplaceStack(meta1.rootID, meta1.lastID, meta2) &&
        assembler.canReplaceStack(meta2.rootID, meta2.lastID, meta1)
    );

    if (stmts2.length === 0) {
        return;
    }

    const meta2 = pick(stmts2);

    const deletedStatements1 = assembler.replaceStack(meta1.rootID, meta1.lastID, meta2).deleted;
    const deletedStatements2 = assembler.replaceStack(meta2.rootID, meta2.lastID, meta1).deleted;

    Container.debugLog(`Swapping stacks "${meta1.rootID}".."${meta1.lastID}" and "${meta2.rootID}".."${meta2.lastID}"`);

    invalidate(weightedPath, [...deletedStatements1, ...deletedStatements2]);
}

function withProbability(p: number): boolean {
    return Randomness.getInstance().withProbability(p);
}

function nextBoolean(): boolean {
    return Randomness.getInstance().randomBoolean();
}

function disjoint<T>(set1: Set<T>, set2: Iterable<T>): boolean {
    for (const elem of set2) {
        if (set1.has(elem)) {
            return false;
        }
    }

    return true;
}

