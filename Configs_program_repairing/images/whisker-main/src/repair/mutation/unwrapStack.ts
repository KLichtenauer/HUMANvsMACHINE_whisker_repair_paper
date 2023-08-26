import {FixSpace, MutationCategory, RepairMutationOperator} from "./RepairMutation";
import {Assembler} from "../../assembler/Assembler";
import {DebugLogger, pick} from "./utils";
import {ChangeLog} from "../utils/RepairMeta";
import {SuspiciousnessMap} from "../SuspiciousnessMetric";
import {BlockID} from "../../assembler/types/blocks/Block";

export const unwrapStack = new class implements RepairMutationOperator {
    private _getCBlocks(assembler: Assembler, blacklist: Set<BlockID>): Array<BlockID> {
        return assembler.getCBlocks()
            .filter((cBlock) => !blacklist.has(cBlock))
            .filter((cBlock) => assembler.canUnwrapStack(cBlock));
    }

    canApply(assembler: Assembler, fixSpace: FixSpace, blacklist: Set<BlockID>): boolean {
        return this._canApply(this._getCBlocks(assembler, blacklist));
    }

    private _canApply(cBlocks: Array<BlockID>): boolean {
        return cBlocks.length > 0;
    }

    apply(
        assembler: Assembler,
        suspiciousness: SuspiciousnessMap,
        debugLog: DebugLogger,
        fixSpace: FixSpace,
        blacklist: Set<BlockID>
    ): ChangeLog | null {
        const cBlocks = this._getCBlocks(assembler, blacklist);

        if (!this._canApply(cBlocks)) {
            return null;
        }

        const cBlock = pick(cBlocks);

        debugLog(`Deleting C-block "${cBlock}" and unwrapping its stack`);
        const deleted = assembler.unwrapStack(cBlock);

        const changeLog = {
            parents: [],
            operator: this.toString(),
            operands: [cBlock],
            renamed: {},
            deleted,
            cBlock,
        };

        return changeLog;
    }

    toString(): string {
        return "unwrap stack mutation";
    }

    get category(): MutationCategory {
        return "deletion";
    }
};
