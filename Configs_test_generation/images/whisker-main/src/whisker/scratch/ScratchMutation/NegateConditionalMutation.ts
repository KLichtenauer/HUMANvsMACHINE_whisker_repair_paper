import {Mutant, ScratchMutation} from "./ScratchMutation";
import VirtualMachine from 'scratch-vm/src/virtual-machine.js';
import {OperatorFilter} from "scratch-analysis/src/block-filter";
import uid from "scratch-vm/src/util/uid";
import {Randomness} from "../../utils/Randomness";
import {BlockID} from "../../../assembler/types/blocks/Block";
import {OperatorNot} from "../../../assembler/types/blocks/categories/Operators";
import {TargetName} from "../../../assembler/types/Target";

export class NegateConditionalMutation extends ScratchMutation {

    constructor(vm: VirtualMachine) {
        super(vm);
    }

    /**
     * The NegateConditionalMutation negates a selected diamond shaped conditional block by inserting a not block.
     * @param mutationBlockId the id of the block that will be negated.
     * @param mutantProgram the mutant program in which the conditional block will be negated
     * @param targetName the name of the target in which the block to mutate resides.
     * @returns true if the mutation was successful.
     */
    applyMutation(mutationBlockId: BlockID, mutantProgram: Mutant, targetName: TargetName): boolean {
        const blockId = `${mutationBlockId.slice(0, 4)}-${targetName}`;
        mutantProgram.name = `NCM:${blockId}`.replace(/,/g, '');

        const mutationBlock = this.extractBlockFromProgram(mutantProgram, mutationBlockId, targetName);
        const not_block = NegateConditionalMutation.notBlockGenerator(mutationBlockId.split(`-${targetName}`)[0], mutationBlock['parent']);

        // The parent of the mutated block.
        const parent = this.extractBlockFromProgram(mutantProgram, mutationBlock['parent'], targetName);

        const id = uid();

        // Only if the parent exists, modify the parent block to point to the wrapping not block instead of the negated
        // conditional diamond block
        if (parent) {
            mutationBlock['parent'] = id;

            if (parent['inputs']['CONDITION'] !== undefined) {
                parent['inputs']['CONDITION'][1] = id;
            } else if (parent['inputs']['OPERAND']) {
                parent['inputs']['OPERAND'][1] = id;
            } else if (parent['inputs']['TOUCHINGOBJECTMENU']) {
                parent['inputs']['TOUCHINGOBJECTMENU'][1] = id;
            } else if (parent['inputs']['OPERAND1'] && parent['inputs']['OPERAND1']) {
                if (Randomness.getInstance().randomBoolean()) {
                    parent['inputs']['OPERAND1'][1] = id;
                } else {
                    parent['inputs']['OPERAND2'][1] = id;
                }
            } else {
                console.log(`Unknown parent block ${parent['id']} for ${mutantProgram.name}`);
                return false;
            }
        }

        // Add the not block to the mutant program
        const sourceTarget = mutantProgram.targets.find(sourceTarget => sourceTarget.name === targetName);
        if (sourceTarget !== undefined) {
            sourceTarget.blocks[id] = not_block;
        } else {
            console.log(`Unknown source target ${targetName} for program ${mutantProgram.name}`);
            return false;
        }
        return true;
    }

    /**
     * Valid mutation candidates are negatable conditional blocks.
     * @returns an array of mutation candidate block ids.
     */
    protected getMutationCandidates(): BlockID[] {
        const conditionalBlocks: BlockID[] = [];
        for (const [id, block] of this._blockMap.entries()) {
            // Negating a not block is pointless since we negate its argument anyway.
            if (OperatorFilter.negatable(block) && block['opcode'] !== 'operator_not') {
                conditionalBlocks.push(id);
            }
        }
        return conditionalBlocks;
    }

    /**
     * Generates a not block given the block that should be negated.
     * @param blockToNegateId the id of the block that should be negated.
     * @param parentId the id of the parent holding the block to negate
     * @returns not block with the block to negate as operand
     */
    private static notBlockGenerator(blockToNegateId: BlockID, parentId: BlockID): OperatorNot {
        return {
            fields: {},
            inputs: {
                OPERAND: [
                    2,
                    blockToNegateId
                ]
            },
            opcode: "operator_not",
            next: null,
            parent: parentId,
            shadow: false,
            topLevel: false
        };
    }

    /**
     * String representation of a given mutator.
     * @returns string representation of the mutator.
     */
    public toString(): string {
        return 'NCM';
    }
}
