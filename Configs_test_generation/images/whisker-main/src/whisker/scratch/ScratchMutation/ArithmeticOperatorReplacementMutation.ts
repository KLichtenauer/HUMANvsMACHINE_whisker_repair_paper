import {Mutant, ScratchMutation} from "./ScratchMutation";
import VirtualMachine from 'scratch-vm/src/virtual-machine.js';
import {OperatorFilter} from "scratch-analysis/src/block-filter";
import {Randomness} from "../../utils/Randomness";
import {BlockID} from "../../../assembler/types/blocks/Block";
import {TargetName} from "../../../assembler/types/Target";

export class ArithmeticOperatorReplacementMutation extends ScratchMutation {

    private static readonly ARITHMETIC_OPCODES = ['operator_add', 'operator_subtract', 'operator_multiply',
        'operator_divide'];

    constructor(vm: VirtualMachine) {
        super(vm);
    }

    /**
     * The ArithmeticOperatorReplacementMutation replaces an arithmetic operation ( + , - , * , / ), with a different
     * randomly chosen one.
     * @param mutationBlockId the id of the block whose arithmetic operation should be replaced
     * @param mutantProgram the mutant program in which the arithmetic operation will be replaced
     * @param targetName the name of the target in which the block to mutate resides.
     * @returns true if the mutation was successful.
     */
    applyMutation(mutationBlockId: BlockID, mutantProgram: Mutant, targetName: TargetName): boolean {
        const mutationBlock = this.extractBlockFromProgram(mutantProgram, mutationBlockId, targetName);
        const originalOpcode = mutationBlock['opcode'];
        let mutantOpcode = Randomness.getInstance().pick(ArithmeticOperatorReplacementMutation.ARITHMETIC_OPCODES);
        while (originalOpcode === mutantOpcode) {
            mutantOpcode = Randomness.getInstance().pick(ArithmeticOperatorReplacementMutation.ARITHMETIC_OPCODES);
        }
        mutationBlock['opcode'] = mutantOpcode;
        const blockId = `${mutationBlockId.slice(0, 4)}-${targetName}`;
        mutantProgram.name = `AOR:${originalOpcode}-${mutantOpcode}-${blockId}`.replace(/,/g, '');
        return true;
    }

    /**
     * Valid mutation candidates are arithmetic operation blocks.
     * @returns an array of mutation candidate block ids.
     */
    protected getMutationCandidates(): BlockID[] {
        const arithmeticOperatorBlocks: BlockID[] = [];
        for (const [id, block] of this._blockMap.entries()) {
            if (OperatorFilter.arithmetic(block)) {
                arithmeticOperatorBlocks.push(id);
            }
        }
        return arithmeticOperatorBlocks;
    }

    /**
     * String representation of a given mutator.
     * @returns string representation of the mutator.
     */
    public toString(): string {
        return 'AOR';
    }
}
