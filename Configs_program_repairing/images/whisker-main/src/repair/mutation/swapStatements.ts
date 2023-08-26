import {Assembler} from "../../assembler/Assembler";
import {BlockID} from "../../assembler/types/blocks/Block";
import {pair} from "../../whisker/utils/Pair";
import {FixSpace, MutationCategory, RepairMutationOperator} from "./RepairMutation";
import {DebugLogger, pick, pickBySuspiciousness} from "./utils";
import {ChangeLog} from "../utils/RepairMeta";
import {SuspiciousnessMap} from "../SuspiciousnessMetric";
import {MultiMap} from "../../assembler/utils/MultiMap";

export const swapStatements = new class implements RepairMutationOperator {
    private _getSwappableStmts(assembler: Assembler, blacklist: Set<BlockID>): MultiMap<BlockID, BlockID> {
        const stmts = assembler.getStmts().filter((stmt) => !blacklist.has(stmt));
        return new MultiMap<BlockID, BlockID>(
            stmts.flatMap((stmt1) => stmts.map((stmt2) => pair(stmt1, stmt2)))
                .filter(([stmt1, stmt2]) => stmt1 !== stmt2 && assembler.canSwapStmts(stmt1, stmt2))
        );
    }

    canApply(assembler: Assembler, fixSpace: FixSpace, blacklist: Set<BlockID>): boolean {
        return this._canApply(this._getSwappableStmts(assembler, blacklist));
    }

    private _canApply(stmts: MultiMap<BlockID, BlockID>): boolean {
        return stmts.size > 0;
    }

    // Swap a suspicious statement with another randomly chosen statement.
    apply(
        assembler: Assembler,
        suspiciousness: SuspiciousnessMap,
        debugLog: DebugLogger,
        fixSpace: FixSpace,
        blacklist: Set<BlockID>
    ): ChangeLog | null {
        const swappableStmts = this._getSwappableStmts(assembler, blacklist);

        if (!this._canApply(swappableStmts)) {
            return null;
        }

        const stmt1 = pickBySuspiciousness([...swappableStmts.keys()], suspiciousness);
        const stmt2 = pick(swappableStmts.get(stmt1));
        debugLog(`Swapping statements "${stmt1}" and "${stmt2}"`);
        const {renamed, deleted} = assembler.swapStmts(stmt1, stmt2);

        const changeLog = {
            parents: [],
            operator: this.toString(),
            operands: [stmt1, stmt2],
            renamed,
            deleted,
            stmt1,
            stmt2,
        };

        return changeLog;
    }

    toString(): string {
        return 'swap statements mutation';
    }

    get category(): MutationCategory {
        return "change";
    }
};
