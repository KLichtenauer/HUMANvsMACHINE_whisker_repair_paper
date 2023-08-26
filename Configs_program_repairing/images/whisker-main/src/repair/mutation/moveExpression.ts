import {Assembler} from "../../assembler/Assembler";
import {MultiMap} from "../../assembler/utils/MultiMap";
import {ExprSelector} from "../../assembler/selectors";
import {FixSpace, MutationCategory, RepairMutationOperator} from "./RepairMutation";
import {DebugLogger, pick, pickBySuspiciousness} from "./utils";
import {ChangeLog} from "../utils/RepairMeta";
import {SuspiciousnessMap} from "../SuspiciousnessMetric";
import {BlockID} from "../../assembler/types/blocks/Block";

// Like replace expression, but the expression is deleted at the source location.
// Makes sense, e.g., for reporter blocks that are dropped on top of other inputs.
export const moveExpression = new class implements RepairMutationOperator {
    private _getMovableExpressions(assembler: Assembler, blacklist: Set<BlockID>): MultiMap<ExprSelector, ExprSelector> {
        const movableExprs = new MultiMap<ExprSelector, ExprSelector>();
        const sourceExprs = assembler.getDeletableExprs();

        for (const sourceExpr of sourceExprs.filter((expr) => !blacklist.has(expr.blockID))) {
            const sourceMeta = assembler.getExprMeta(sourceExpr);

            for (const targetExpr of assembler.getExprInsertionPoints(sourceMeta)) {
                if (targetExpr.blockID)

                if (assembler.isSameExpr(sourceExpr, targetExpr)) { // avoid replacing an expression with itself
                    continue;
                }

                movableExprs.set(sourceExpr, targetExpr);
            }
        }

        return movableExprs;
    }

    canApply(assembler: Assembler, fixSpace: FixSpace, blacklist: Set<BlockID>): boolean {
        return this._canApply(this._getMovableExpressions(assembler, blacklist));
    }

    private _canApply(expressions: MultiMap<ExprSelector, ExprSelector>): boolean {
        return expressions.size > 0;
    }

    // Move a suspicious expression to another randomly chosen location.
    apply(
        assembler: Assembler,
        suspiciousness: SuspiciousnessMap,
        debugLog: DebugLogger,
        fixSpace: FixSpace,
        blacklist: Set<BlockID>
    ): ChangeLog | null {
        const sourceAndTargetExpressions = this._getMovableExpressions(assembler, blacklist);

        if (!this._canApply(sourceAndTargetExpressions)) {
            return null;
        }

        const sourceExprs = [...sourceAndTargetExpressions.keys()];

        const sourceIDs = Array.from(new Set(sourceExprs.map(({blockID}) => blockID)));
        const sourceID = pickBySuspiciousness(sourceIDs, suspiciousness);
        const sourceExpr = pick(sourceExprs.filter((expr) => expr.blockID === sourceID));

        const targetExpr = pick(sourceAndTargetExpressions.get(sourceExpr));

        debugLog(`Moving expression "${JSON.stringify(sourceExpr)}" to "${JSON.stringify(targetExpr)}"`);
        const {renamed, deleted} = assembler.replaceExpr(targetExpr, assembler.getExprMeta(sourceExpr));

        // Delete the source expression if still necessary. (Usually, it is.) The deletion must be skipped if the target
        // wrapped the source because in this case the replacement operation already deleted the source.
        if (!deleted.includes(sourceExpr.blockID)) {
            deleted.push(...assembler.deleteExpr(sourceExpr));
        }

        const changeLog = {
            parents: [],
            operator: this.toString(),
            operands: [sourceExpr.blockID, targetExpr.blockID],
            renamed,
            deleted,
            sourceExpr,
            targetExpr,
        };

        return changeLog;
    }

    toString(): string {
        return 'move expression mutation';
    }

    get category(): MutationCategory {
        return "change";
    }
};
