import {Assembler} from "../../assembler/Assembler";
import {ExprSelector} from "../../assembler/selectors";
import {pair} from "../../whisker/utils/Pair";
import {FixSpace, MutationCategory, RepairMutationOperator} from "./RepairMutation";
import {DebugLogger, pick, pickBySuspiciousness} from "./utils";
import {ChangeLog} from "../utils/RepairMeta";
import {SuspiciousnessMap} from "../SuspiciousnessMetric";
import {MultiMap} from "../../assembler/utils/MultiMap";
import {BlockID} from "../../assembler/types/blocks/Block";

export const swapExpressions = new class implements RepairMutationOperator {
    private _getSwappableExprs(assembler: Assembler, blacklist: Set<BlockID>): MultiMap<ExprSelector, ExprSelector> {
        // When swapping two expressions, make sure...
        // (1) at least one of them is connected.
        // (2) we never swap an expression with itself.

        const exprs = assembler.getExprs()
            .filter((expr) => !blacklist.has(expr.blockID));
        const connectedExprs = assembler.getConnectedExprs() // (1)
            .filter((expr) => !blacklist.has(expr.blockID));

        return new MultiMap<ExprSelector, ExprSelector>(
            exprs.flatMap((expr1) => connectedExprs.map((expr2) => pair(expr1, expr2)))
                .filter(([expr1, expr2]) =>
                    assembler.canSwapExprs(expr1, expr2) &&
                    !assembler.isSameExpr(expr1, expr2)) // (2)
        );
    }

    canApply(assembler: Assembler, fixSpace: FixSpace, blacklist: Set<BlockID>): boolean {
        return this._canApply(this._getSwappableExprs(assembler, blacklist));
    }

    private _canApply(expressions: MultiMap<ExprSelector, ExprSelector>): boolean {
        return expressions.size > 0
    }

    // Swap a suspicious expression with another randomly chosen expression.
    apply(
        assembler: Assembler,
        suspiciousness: SuspiciousnessMap,
        debugLog: DebugLogger,
        fixSpace: FixSpace,
        blacklist: Set<BlockID>
    ): ChangeLog | null {
        const swappableExprs = this._getSwappableExprs(assembler, blacklist);

        if (!this._canApply(swappableExprs)) {
            return null;
        }

        const exprs1 = [...swappableExprs.keys()];

        const exprIDs = Array.from(new Set(exprs1.map(({blockID}) => blockID)));
        const exprID = pickBySuspiciousness(exprIDs, suspiciousness);
        const expr1 = pick(exprs1.filter((expr) => expr.blockID === exprID));

        const expr2 = pick(swappableExprs.get(expr1));

        debugLog(`Swapping expressions "${JSON.stringify(expr1)}" and "${JSON.stringify(expr2)}"`);
        const {renamed, deleted} = assembler.swapExprs(expr1, expr2);

        const changeLog = {
            parents: [],
            operator: this.toString(),
            operands: [expr1.blockID, expr2.blockID],
            renamed,
            deleted,
            expr1,
            expr2,
        };

        return changeLog;
    }

    toString(): string {
        return 'swap expressions mutation';
    }

    get category(): MutationCategory {
        return "change";
    }
};
