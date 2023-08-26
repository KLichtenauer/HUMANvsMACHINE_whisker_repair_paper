import {FixSpace, MutationCategory, RepairMutationOperator} from "./RepairMutation";
import {Assembler} from "../../assembler/Assembler";
import {MultiMap} from "../../assembler/utils/MultiMap";
import {Block, BlockID, isBlock} from "../../assembler/types/blocks/Block";
import {DebugLogger, pick, pickBySuspiciousness} from "./utils";
import {InputKey} from "../../assembler/types/blocks/Inputs";
import {BlockMeta} from "../../assembler/meta";
import {ChangeLog} from "../utils/RepairMeta";
import {SuspiciousnessMap} from "../SuspiciousnessMetric";

function getSubsequences<T>(arr: Array<T>): Array<Array<T>> {
    const res = new Array<Array<T>>();

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length + 1; j++) {
            res.push(arr.slice(i, j));
        }
    }

    return res;
}

export const wrapStack = new class implements RepairMutationOperator {
    private _getWrappableBlocks(project: Assembler, {cBlocks}: FixSpace): MultiMap<Array<BlockID>, BlockMeta> {
        // The stacks in the project (i.e., scripts and substacks, but no reporter blocks), identified by their rootID.
        const stacks = project.getStacks();

        // The connected scripts in the project, identified by their reporter block. A subset of stacks.
        const scripts = project.getConnectedScripts();

        // For each stack, collect the IDs of all next-blocks that are connected transitively to the rootID.
        // For scripts, we exclude the rootID because it is a hat block, and cannot be wrapped by a C-block.
        // In the end, every stack will be represented by an array of the block IDs that comprise the stack.
        const idsInStacks = stacks.map((rootID) => project.getNextIDs(rootID, scripts.includes(rootID)));

        // For every array of block IDs, construct its subsequences. The subsequences represent all possible
        // contiguous parts of a stack around which a C-block can be wrapped.
        const subsequences = idsInStacks.flatMap((ids) => getSubsequences(ids));

        // For every subsequence, tells which C-block can be wrapped around it.
        const wrappableByBlocks = new MultiMap<Array<BlockID>, BlockMeta>();

        for (const seq of subsequences) {
            for (const cBlock of cBlocks) {
                // In case of a cap-block, the end point of the subsequence must also be the end of the entire stack,
                // since a cap-block must not have a non-null next-block.
                if (project.canReplaceStack(seq[0], seq[seq.length - 1], cBlock)) {
                    wrappableByBlocks.set(seq, cBlock);
                }
            }
        }

        return wrappableByBlocks;
    }

    canApply(assembler: Assembler, fixSpace: FixSpace): boolean {
        return this._canApply(this._getWrappableBlocks(assembler, fixSpace));
    }

    private _canApply(wrappableBlocks: MultiMap<Array<BlockID>, BlockMeta>): boolean {
        return wrappableBlocks.size > 0
    }

    apply(
        assembler: Assembler,
        suspiciousness: SuspiciousnessMap,
        debugLog: DebugLogger,
        fixSpace: FixSpace,
        blacklist: Set<BlockID>
    ): ChangeLog | null {
        const wrappableByBlocks = this._getWrappableBlocks(assembler, fixSpace);

        if (!this._canApply(wrappableByBlocks)) {
            return null;
        }

        // All stacks in the project and their possible subsequences. Every subsequence could be wrapped by a C-block.
        const subsequences = [...wrappableByBlocks.keys()];

        // We want to pick a subsequence that contains a suspicious block.
        const blockIDs = Array.from(new Set(subsequences.flat()));
        const suspiciousBlock = pickBySuspiciousness(blockIDs, suspiciousness);
        const suspiciousSubseq = subsequences.filter((stack) => stack.includes(suspiciousBlock));
        const subsequence = pick(suspiciousSubseq);

        // Pick a random C-Block the chosen subsequence will be wrapped in.
        const cBlockMeta = pick(wrappableByBlocks.get(subsequence));

        const opcode = (cBlockMeta.blocks[cBlockMeta.rootID] as Block).opcode;
        const key: InputKey = opcode === "control_if_else" ? pick(["SUBSTACK", "SUBSTACK2"]) : "SUBSTACK";

        const start = subsequence[0];
        const end = subsequence[subsequence.length - 1];
        debugLog(`Wrapping stack ["${start}" .. "${end}"] as "${key}" of ${stringify(cBlockMeta)}`);

        // The sequence of statements to wrap.
        const seqMeta = assembler.getStackMeta(start, end);

        // Replace the sequence of statements with the C-block.
        const {renamed: renamed1, deleted: deleted1} = assembler.replaceStack(start, end, cBlockMeta);

        // Set the sequence of statements as SUBSTACK or SUBSTACK2 of the C-block.
        const blockID = renamed1[cBlockMeta.rootID];
        const {renamed: renamed2, deleted: deleted2} = assembler.insertInput({blockID, key}, seqMeta);

        const changeLog = {
            parents: [],
            operator: this.toString(),
            operands: [cBlockMeta.rootID],
            renamed: {...renamed1, ...renamed2},
            deleted: [...deleted1, ...deleted2],
            oldStack: {
                start,
                end,
            },
            cBlock: {
                rootID: cBlockMeta.rootID,
                opcode,
                key,
            }
        };

        return changeLog;
    }

    toString(): string {
        return "wrap stack mutation";
    }

    get category(): MutationCategory {
        return "insertion";
    }
};

function stringify(meta: BlockMeta): string {
    const block = meta.blocks[meta.rootID]
    const opcode = isBlock(block) ? block.opcode : "variable/list";
    return `"${opcode}" block`;
}
