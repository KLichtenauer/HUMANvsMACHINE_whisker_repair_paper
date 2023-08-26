import {Assembler} from "../../assembler/Assembler";
import {MultiMap} from "../../assembler/utils/MultiMap";
import {BlockID, isBlock} from "../../assembler/types/blocks/Block";
import {FixSpace, MutationCategory, RepairMutationOperator} from "./RepairMutation";
import {DebugLogger, pick, pickBySuspiciousness} from "./utils";
import {ChangeLog} from "../utils/RepairMeta";
import {SuspiciousnessMap} from "../SuspiciousnessMetric";
import {BlockMeta} from "../../assembler/meta";

// GenProg's "swap".
// Copy a statement and replace another statement with it.
export const replaceStatement = new class implements RepairMutationOperator {
    private _getReplaceableStatements(assembler: Assembler, {stmts: sourceStmts}: FixSpace, blacklist: Set<BlockID>): MultiMap<BlockID, BlockMeta> {
        const replaceableStmts = new MultiMap<BlockID, BlockMeta>();
        const targetStmts = assembler.getStmts().filter((stmt) => !blacklist.has(stmt));
        for (const sourceStmt of sourceStmts) {
            for (const targetStmt of targetStmts) {
                if (assembler.canReplaceStmt(targetStmt, sourceStmt)) {
                    replaceableStmts.set(targetStmt, sourceStmt);
                }
            }
        }

        return replaceableStmts;
    }

    canApply(assembler: Assembler, fixSpace: FixSpace, blacklist: Set<BlockID>): boolean {
        return this._canApply(this._getReplaceableStatements(assembler, fixSpace, blacklist));
    }

    private _canApply(statements: MultiMap<BlockID, BlockMeta>): boolean {
        return statements.size > 0;
    }

    // Replace a suspicious statement with another randomly chosen statement.
    apply(
        assembler: Assembler,
        suspiciousness: SuspiciousnessMap,
        debugLog: DebugLogger,
        fixSpace: FixSpace,
        blacklist: Set<BlockID>
    ): ChangeLog | null {
        const replaceableStmts = this._getReplaceableStatements(assembler, fixSpace, blacklist);

        if (!this._canApply(replaceableStmts)) {
            return null;
        }

        const stmtsToReplace = [...replaceableStmts.keys()];
        const stmtToReplace = pickBySuspiciousness(stmtsToReplace, suspiciousness);
        const replacements = replaceableStmts.get(stmtToReplace);
        const replacement = pick(replacements);
        debugLog(`Replacing statement "${stmtToReplace}" with ${stringify(replacement)}`);
        const {renamed, deleted} = assembler.replaceStmt(stmtToReplace, replacement);

        const changeLog = {
            parents: [],
            operator: this.toString(),
            operands: [replacement.rootID],
            renamed,
            deleted,
            stmtToReplace,
            replacement,
        };

        return changeLog;
    }

    toString(): string {
        return 'replace statement mutation';
    }

    get category(): MutationCategory {
        return "change";
    }
};

function stringify(meta: BlockMeta): string {
    const block = meta.blocks[meta.rootID]
    const opcode = isBlock(block) ? block.opcode : "variable/list";
    return `"${opcode}" block`;
}
