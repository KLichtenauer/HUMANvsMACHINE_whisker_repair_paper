import {Assembler} from "../../assembler/Assembler";
import {MultiMap} from "../../assembler/utils/MultiMap";
import {BlockMeta} from "../../assembler/meta";
import {StmtInsertionPoint} from "../../assembler/selectors";
import {FixSpace, MutationCategory, RepairMutationOperator} from "./RepairMutation";
import {DebugLogger, pick, pickBySuspiciousness, pickUniformKeyThenValue} from "./utils";
import {ChangeLog} from "../utils/RepairMeta";
import {SuspiciousnessMap} from "../SuspiciousnessMetric";
import {BlockID} from "../../assembler/types/blocks/Block";

// GenProg's "insert"
export const duplicateStatement = new class implements RepairMutationOperator {
    private _getInsertionPointsPerStmt(assembler: Assembler, {stmts}: FixSpace): MultiMap<BlockMeta, StmtInsertionPoint> {
        const insertionPointsPerStmt = new MultiMap<BlockMeta, StmtInsertionPoint>();
        for (const stmt of stmts) {
            insertionPointsPerStmt.setAll(stmt, assembler.getStmtInsertionPoints(stmt));
        }
        return insertionPointsPerStmt;
    }

    canApply(assembler: Assembler, fixSpace: FixSpace, blacklist: Set<BlockID>): boolean {
        return this._canApply(this._getInsertionPointsPerStmt(assembler, fixSpace));
    }

    private _canApply(insertionPointsPerStmt: MultiMap<BlockMeta, StmtInsertionPoint>): boolean {
        return insertionPointsPerStmt.size > 0;
    }

    // Duplicate a random statement.
    apply(
        assembler: Assembler,
        suspiciousness: SuspiciousnessMap,
        debugLog: DebugLogger,
        fixSpace: FixSpace,
    ): ChangeLog | null {
        const insertionPointsPerStmt = this._getInsertionPointsPerStmt(assembler, fixSpace);

        if (!this._canApply(insertionPointsPerStmt)) {
            return null;
        }

        // The statement to duplicate.
        const stmt = pick(insertionPointsPerStmt.keys());

        // Potential insertion points and their block IDs.
        const insertionPoints = [...insertionPointsPerStmt.get(stmt)];
        const blockIDs = insertionPoints.map(({blockID}) => blockID);

        // The block where we insert. We prefer insertion at suspicious locations.
        const blockID = pickBySuspiciousness(blockIDs, suspiciousness);

        // How we insert (as parent, next, SUBSTACK, SUBSTACK2).
        const insertionPoint = pick(insertionPoints.filter((i) => i.blockID === blockID));

        debugLog(`Inserting "${stmt.rootID}" as "${insertionPoint.key}" of "${insertionPoint.blockID}"`);
        const renamed = assembler.insertStmt(insertionPoint, stmt);

        const changeLog = {
            parents: [],
            operator: this.toString(),
            operands: [stmt.rootID],
            renamed,
            deleted: [],
            stmt,
            insertionPoint,
        };

        return changeLog;
    }

    toString(): string {
        return 'duplicate statement mutation';
    }

    get category(): MutationCategory {
        return "insertion";
    }
};
