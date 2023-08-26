import {Assembler} from "../../assembler/Assembler";
import {FixSpace, MutationCategory, RepairMutationOperator} from "./RepairMutation";
import {DebugLogger, pickBySuspiciousness} from "./utils";
import {ChangeLog} from "../utils/RepairMeta";
import {SuspiciousnessMap} from "../SuspiciousnessMetric";
import {BlockID} from "../../assembler/types/blocks/Block";

// GenProg's "delete"
export const deleteStatement = new class implements RepairMutationOperator {
    canApply(assembler: Assembler): boolean {
        return this._canApply(assembler.getDeletableStmts());
    }

    private _canApply(stmts: Array<BlockID>): boolean {
        return stmts.length > 0
    }

    // Delete a suspicious statement.
    apply(
        assembler: Assembler,
        suspiciousness: SuspiciousnessMap,
        debugLog: DebugLogger,
        fixSpace: FixSpace,
        blacklist: Set<BlockID>
    ): ChangeLog | null {
        const statements = assembler.getDeletableStmts();

        if (!this._canApply(statements)) {
            return null;
        }

        const statement = pickBySuspiciousness(statements, suspiciousness);
        debugLog(`Deleting statement "${statement}"`);
        const deleted = assembler.deleteStmt(statement);

        const changeLog = {
            parents: [],
            operator: this.toString(),
            operands: deleted,
            renamed: {},
            statement,
            deleted,
        };

        return changeLog;
    }

    toString(): string {
        return 'delete statement mutation';
    }

    get category(): MutationCategory {
        return "deletion";
    }
};
