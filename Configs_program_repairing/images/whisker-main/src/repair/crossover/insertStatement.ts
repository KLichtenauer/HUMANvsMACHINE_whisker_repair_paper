import {Pair} from "../../whisker/utils/Pair";
import {RepairCrossoverOperator} from "./RepairCrossover";
import {pick} from "../mutation/utils";
import {ChangeLog} from "../utils/RepairMeta";
import {Assembler} from "../../assembler/Assembler";
import {SuspiciousnessMap} from "../SuspiciousnessMetric";

export const insertStatement = new class implements RepairCrossoverOperator {
    canApply(source: Assembler, target: Assembler): boolean {
        const statements = source.getStmts().map((stmt) => source.getStmtMeta(stmt));
        const insertionPoints = statements.flatMap((stmt) => target.getStmtInsertionPoints(stmt));
        return insertionPoints.length > 0;
    }

    apply(source: Assembler, target: Assembler, susp1: SuspiciousnessMap, susp2: SuspiciousnessMap): Pair<ChangeLog> {
        const insertionPointsPerStmt = source.getStmts().map((stmt) => {
            const meta = source.getStmtMeta(stmt);
            const insertionPoints = target.getStmtInsertionPoints(meta);
            return [stmt, meta, insertionPoints] as const;
        }).filter(([, , insertionPoints]) => insertionPoints.length > 0);
        const [stmt, meta, insertionPoints] = pick(insertionPointsPerStmt);
        const insertionPoint = pick(insertionPoints);
        const renamed = target.insertStmt(insertionPoint, meta);

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
            deleted: [],
            stmt,
            insertionPoint,
        };

        return [changeLogSource, changeLogTarget];
    }

    toString(): string {
        return 'insert statement crossover';
    }
};
