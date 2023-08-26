import {Assembler} from "../../assembler/Assembler";
import {DebugLogger, pick, pickBySuspiciousness} from "./utils";
import {FixSpace, MutationCategory, RepairMutationOperator} from "./RepairMutation";
import {ChangeLog} from "../utils/RepairMeta";
import {SuspiciousnessMap} from "../SuspiciousnessMetric";
import {ExprSelector} from "../../assembler/selectors";
import {BlockID} from "../../assembler/types/blocks/Block";

export const deleteExpression = new class implements RepairMutationOperator {
    canApply(assembler: Assembler, fixSpace: FixSpace, blacklist: Set<BlockID>): boolean {
        return this._canApply(this._getDeletableExprs(assembler, blacklist));
    }

    private _canApply(exprs: Array<ExprSelector>): boolean {
        return exprs.length > 0;
    }

    private _getDeletableExprs(assembler: Assembler, blacklist: Set<BlockID>): Array<ExprSelector> {
        return assembler.getDeletableExprs().filter((expr) => !blacklist.has(expr.blockID));
    }

    // Delete a suspicious expression.
    apply(
        assembler: Assembler,
        suspiciousness: SuspiciousnessMap,
        debugLog: DebugLogger,
        fixSpace: FixSpace,
        blacklist: Set<BlockID>
    ): ChangeLog | null {
        const expressions = this._getDeletableExprs(assembler, blacklist);

        if (!this._canApply(expressions)) {
            return null;
        }

        // Multiple expressions can have the same blockID (e.g., primitive inputs have the ID of their parent block.)
        // We remove such duplicate IDs before we pick.
        const uniqueIDs = Array.from(new Set(expressions.map(({blockID}) => blockID)));

        const blockID = pickBySuspiciousness(uniqueIDs, suspiciousness);

        // Since a blockID can appear multiple times, we have to do a random pick on the subset matching the blockID.
        const expression = pick(expressions.filter((expr) => expr.blockID === blockID));

        debugLog(`Deleting expression "${JSON.stringify(expression)}"`);

        const deleted = assembler.deleteExpr(expression);

        const changeLog = {
            parents: [],
            operator: this.toString(),
            operands: deleted,
            renamed: {},
            deleted,
            expression,
        };

        return changeLog;
    }

    toString(): string {
        return 'delete expression mutation';
    }

    get category(): MutationCategory {
        return "deletion";
    }
};
