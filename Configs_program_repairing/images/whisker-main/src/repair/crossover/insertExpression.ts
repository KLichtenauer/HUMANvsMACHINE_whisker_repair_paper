import {Pair} from "../../whisker/utils/Pair";
import {RepairCrossoverOperator} from "./RepairCrossover";
import {pick} from "../mutation/utils";
import {ChangeLog} from "../utils/RepairMeta";
import {Assembler} from "../../assembler/Assembler";
import {SuspiciousnessMap} from "../SuspiciousnessMetric";

export const insertExpression = new class implements RepairCrossoverOperator {
    canApply(source: Assembler, target: Assembler): boolean {
        const expressions = source.getExprs().map((expr) => source.getExprMeta(expr));
        const insertionPoints = expressions.flatMap((expr) => target.getExprInsertionPoints(expr));
        return insertionPoints.length > 0;
    }

    apply(source: Assembler, target: Assembler, susp1: SuspiciousnessMap, susp2: SuspiciousnessMap): Pair<ChangeLog> {
        const insertionPointsPerExpr = source.getExprs().map((expr) => {
            const meta = source.getExprMeta(expr);
            const insertionPoints = target.getExprInsertionPoints(meta);
            return [expr, meta, insertionPoints] as const;
        }).filter(([, , insertionPoints]) => insertionPoints.length > 0);
        const [expr, meta, insertionPoints] = pick(insertionPointsPerExpr);
        const insertionPoint = pick(insertionPoints);
        const {renamed, deleted} = target.insertExpr(insertionPoint, meta);

        const changeLogSource = {
            parents: [],
            operator: this.toString(),
            operands: [],
            renamed: {},
            deleted: [],
        };

        const changeLogTarget = {
            parents: [],
            operator: this.toString(),
            operands: [],
            renamed,
            deleted,
            expr,
            insertionPoint,
        };

        return [changeLogSource, changeLogTarget];
    }

    toString(): string {
        return 'insert expression crossover';
    }
};
