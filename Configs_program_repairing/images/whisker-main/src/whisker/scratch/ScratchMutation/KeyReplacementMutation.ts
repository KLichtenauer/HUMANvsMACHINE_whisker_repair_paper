import VirtualMachine from 'scratch-vm/src/virtual-machine.js';
import {Mutant, ScratchMutation} from "./ScratchMutation";
import {Randomness} from "../../utils/Randomness";
import {BlockID} from "../../../assembler/types/blocks/Block";
import {TargetName} from "../../../assembler/types/Target";

export class KeyReplacementMutation extends ScratchMutation {

    /**
     * Key options are extracted from the options of the dropdown menu in key blocks.
     */
    private static readonly KEY_OPTIONS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
        'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'space', 'up arrow', 'down arrow', 'right arrow', 'left arrow', 'any'];


    constructor(vm: VirtualMachine) {
        super(vm);
    }

    /**
     * Applies the KeyReplacementMutation, which replaces a key that triggers an event with a randomly chosen new key.
     * @param mutationBlockId the id of the block whose key option will be replaced.
     * @param mutantProgram the mutant program in which the key will be replaced.
     * @param targetName the name of the target in which the block to mutate resides.
     * @returns true if the mutation was successful.
     */
    applyMutation(mutationBlockId: BlockID, mutantProgram: Mutant, targetName: TargetName): boolean {
        const mutationBlock = this.extractBlockFromProgram(mutantProgram, mutationBlockId, targetName);
        const originalKeyPress = mutationBlock['fields']['KEY_OPTION'][0];
        let mutantKeyPress = Randomness.getInstance().pick(KeyReplacementMutation.KEY_OPTIONS);
        while (originalKeyPress === mutantKeyPress) {
            mutantKeyPress = Randomness.getInstance().pick(KeyReplacementMutation.KEY_OPTIONS);
        }
        mutationBlock['fields']['KEY_OPTION'][0] = mutantKeyPress;
        mutantProgram.name = `KRM:${originalKeyPress}-To-${mutantKeyPress}`;
        return true;
    }

    /**
     * Valid mutation candidates are all blocks that contain a KEY_OPTION field.
     * @returns an array of mutation candidate block ids.
     */
    protected getMutationCandidates(): BlockID[] {
        const keyBlocks: BlockID[] = [];
        for (const [id, block] of this._blockMap.entries()) {
            if (block['fields']['KEY_OPTION']) {
                keyBlocks.push(id);
            }
        }
        return keyBlocks;
    }

    /**
     * String representation of a given mutator.
     * @returns string representation of the mutator.
     */
    public toString(): string {
        return 'KRM';
    }

}
