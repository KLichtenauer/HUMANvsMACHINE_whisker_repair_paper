import {Assembler} from "../../assembler/Assembler";
import {MultiMap} from "../../assembler/utils/MultiMap";
import {BlockID} from "../../assembler/types/blocks/Block";
import {StmtInsertionPoint} from "../../assembler/selectors";
import {FixSpace, MutationCategory, RepairMutationOperator} from "./RepairMutation";
import {DebugLogger, pick, pickBySuspiciousness} from "./utils";
import {ChangeLog} from "../utils/RepairMeta";
import {SuspiciousnessMap} from "../SuspiciousnessMetric";

export const moveStatement = new class implements RepairMutationOperator {
    /*
     * Moving a statement: (1) First, copy statement to new location. (2) Then, delete statement at old location.
     * In step (1), the statement could be inserted as neighbor (parent/next) or input (SUBSTACK) of itself.
     * In step (2), subsequent deletion of the old statement could result in the original project (parent/next), or
     * removal of both statements altogether (SUBSTACK). Thus, do not allow the old statement location as insertion
     * point for the new statement.
     */

    private _getInsertionPointsPerStmt(assembler: Assembler, blacklist: Set<BlockID>): MultiMap<BlockID, StmtInsertionPoint> {
        const insertionPointsPerStmt = new MultiMap<BlockID, StmtInsertionPoint>();
        for (const stmt of assembler.getDeletableStmts().filter((stmt) => !blacklist.has(stmt))) {
            const meta = assembler.getStmtMeta(stmt);

            if (blacklist.has(meta.rootID)) {
                continue;
            }

            insertionPointsPerStmt.setAll(stmt, assembler.getStmtInsertionPoints(meta, stmt));
        }
        return insertionPointsPerStmt;
    }

    canApply(assembler: Assembler, fixSpace: FixSpace, blacklist: Set<BlockID>): boolean {
        return this._canApply(this._getInsertionPointsPerStmt(assembler, blacklist));
    }

    private _canApply(insertionPoints: MultiMap<BlockID, StmtInsertionPoint>): boolean {
        return insertionPoints.size > 0
    }

    // Move a suspicious statement to another randomly chosen location.
    apply(
        assembler: Assembler,
        suspiciousness: SuspiciousnessMap,
        debugLog: DebugLogger,
        fixSpace: FixSpace,
        blacklist: Set<BlockID>
    ): ChangeLog | null {
        const insertionPointsPerStmt = this._getInsertionPointsPerStmt(assembler, blacklist);

        if (!this._canApply(insertionPointsPerStmt)) {
            return null;
        }

        const stmts = [...insertionPointsPerStmt.keys()];
        const toMove = pickBySuspiciousness(stmts, suspiciousness);
        const insertionPoint = pick(insertionPointsPerStmt.get(toMove));

        debugLog(`Move: "${toMove}" as "${insertionPoint.key}" of "${insertionPoint.blockID}"`);
        const renamed = assembler.moveStmt(toMove, insertionPoint);

        const changeLog = {
            parents: [],
            operator: this.toString(),
            operands: [toMove],
            renamed,
            deleted: [],
            toMove,
            insertionPoint,
        };

        return changeLog;
    }

    toString(): string {
        return 'move statement mutation';
    }

    get category(): MutationCategory {
        return "change";
    }
};
