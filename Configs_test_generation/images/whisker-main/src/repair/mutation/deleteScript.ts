import {Assembler} from "../../assembler/Assembler";
import {DebugLogger, pickBySuspiciousness} from "./utils";
import {FixSpace, MutationCategory, RepairMutationOperator} from "./RepairMutation";
import {ChangeLog} from "../utils/RepairMeta";
import {SuspiciousnessMap} from "../SuspiciousnessMetric";
import {BlockID} from "../../assembler/types/blocks/Block";

export const deleteScript = new class implements RepairMutationOperator {
    canApply(assembler: Assembler, fixSpace: FixSpace, blacklist: Set<BlockID>): boolean {
        return this._canApply(this._getScripts(assembler, blacklist));
    }

    private _getScripts(assembler: Assembler, blacklist: Set<BlockID>): Array<BlockID> {
        return assembler.getScripts(false).filter((stmt) => !blacklist.has(stmt));
    }

    private _canApply(scripts: Array<BlockID>): boolean {
        return scripts.length > 0;
    }

    // Delete a script with a suspicious event handler.
    apply(
        assembler: Assembler,
        suspiciousness: SuspiciousnessMap,
        debugLog: DebugLogger,
        fixSpace: FixSpace,
        blacklist: Set<BlockID>,
    ): ChangeLog | null {
        const scripts = this._getScripts(assembler, blacklist);

        if (!this._canApply(scripts)) {
            return null;
        }

        const script = pickBySuspiciousness(scripts, suspiciousness);
        debugLog(`Deleting script with root block "${script}"`);
        const deleted = assembler.deleteScript(script);

        const changeLog = {
            parents: [],
            operator: this.toString(),
            operands: deleted,
            renamed: {},
            deleted,
            script,
        };

        return changeLog;
    }

    toString(): string {
        return 'delete script mutation';
    }

    get category(): MutationCategory {
        return "deletion";
    }
};
