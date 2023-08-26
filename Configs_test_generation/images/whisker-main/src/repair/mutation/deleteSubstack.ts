import {Assembler} from "../../assembler/Assembler";
import {DebugLogger, pickBySuspiciousness} from "./utils";
import {FixSpace, MutationCategory, RepairMutationOperator} from "./RepairMutation";
import {ChangeLog} from "../utils/RepairMeta";
import {SuspiciousnessMap} from "../SuspiciousnessMetric";
import {BlockID} from "../../assembler/types/blocks/Block";

export const deleteSubStack = new class implements RepairMutationOperator {
    canApply(assembler: Assembler, fixSpace: FixSpace, blacklist: Set<BlockID>): boolean {
        return this._canApply(this._getNonTopLevelStmts(assembler, blacklist));
    }

    private _canApply(statements: Array<BlockID>): boolean {
        return statements.length > 0;
    }

    private _getNonTopLevelStmts(assembler: Assembler, blacklist: Set<BlockID>): Array<BlockID> {
        return assembler.getNonTopLevelStmts().filter((stmt) => !blacklist.has(stmt));
    }

    // Delete a suspicious statement and the rest of the script.
    apply(
        assembler: Assembler,
        suspiciousness: SuspiciousnessMap,
        debugLog: DebugLogger,
        fixSpace: FixSpace,
        blacklist: Set<BlockID>
    ): ChangeLog | null {
        const statements = this._getNonTopLevelStmts(assembler, blacklist);

        if (!this._canApply(statements)) {
            return null;
        }

        const statement = pickBySuspiciousness(statements, suspiciousness);
        debugLog(`Deleting statements starting at "${statement}"`);
        const deleted = assembler.deleteStack(statement, null, false);

        const changeLog = {
            parents: [],
            operator: this.toString(),
            operands: deleted,
            renamed: {},
            deleted,
            statement,
        };

        return changeLog;
    }

    toString(): string {
        return 'delete substack mutation';
    }

    get category(): MutationCategory {
        return "deletion";
    }
};
