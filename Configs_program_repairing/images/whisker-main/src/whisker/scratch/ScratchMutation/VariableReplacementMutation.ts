import {Mutant, ScratchMutation} from "./ScratchMutation";
import VirtualMachine from 'scratch-vm/src/virtual-machine.js';
import {Randomness} from "../../utils/Randomness";
import {BlockID} from "../../../assembler/types/blocks/Block";
import {primitiveInputTypes} from "../../../assembler/types/blocks/Inputs";
import {TargetName} from "../../../assembler/types/Target";

export class VariableReplacementMutation extends ScratchMutation {

    /**
     * Holds every processed block id so far. Multiply occurrences of the same id indicate that a block uses more
     * than one variable.
     */
    private readonly processedBlocks: BlockID[] = [];

    constructor(vm: VirtualMachine) {
        super(vm);
    }

    /**
     * The VariableReplacementMutation replaces a used variable within variable holding parents with a different
     * randomly chosen one.
     * @param mutationBlockId the id of the parent block holding the variable that will be replaced.
     * @param mutantProgram the mutant program in which the variable will be replaced.
     * @param targetName the name of the target in which the block to mutate resides.
     * @returns true if the mutation was successful.
     */
    applyMutation(mutationBlockId: BlockID, mutantProgram: Mutant, targetName: TargetName): boolean {
        const mutationBlock = this.extractBlockFromProgram(mutantProgram, mutationBlockId, targetName);

        // We may have the chance to replace multiple variables within one parent block. We therefore, count how
        // often a given parent has been mutated and always replace the next up to this point untouched variable.
        let processCount = 0;
        for (const processedBlock of this.processedBlocks) {
            if (mutationBlockId === processedBlock) {
                processCount++;
            }
        }

        // Find the placeholder in which the variable we want to replace next resides.
        let placeHolderToMutate;
        for (const input of Object.values(mutationBlock['inputs'])) {
            if (input[1][0] === primitiveInputTypes.variable && processCount === 0) {
                placeHolderToMutate = input;
                break;
            } else if (input[1][0] === primitiveInputTypes.variable && processCount > 0) {
                processCount--;
            }
        }

        // Maps variable names to their ids.
        const variables = new Map<string, string>();

        // Fetch all global Stage variables
        const stageVariables = mutantProgram.targets.find(target => target.isStage === true).variables;
        for (const [id, variable] of Object.entries(stageVariables)) {
            variables.set(variable[0], id);
        }

        // Fetch sprite specific variables
        const spriteVariables = mutantProgram.targets.find(target => target.isStage === false).variables;
        for (const [id, variable] of Object.entries(spriteVariables)) {
            variables.set(variable[0], id);
        }

        // Pick a random variable to replace the current one
        const originalVarName = placeHolderToMutate[1][1];
        const variablePool = [...variables.keys()].filter(key => key !== originalVarName);
        if (variablePool.length < 1) {
            return false;
        }
        const replaceVariableName = Randomness.getInstance().pick(variablePool);
        const replaceVariableID = variables.get(replaceVariableName);

        // Replace the variable
        placeHolderToMutate[1][1] = replaceVariableName;
        placeHolderToMutate[1][2] = replaceVariableID;

        const blockId = `${mutationBlockId.slice(0, 4)}-${targetName}`;
        mutantProgram.name = `VRM:${originalVarName}-${replaceVariableName}-${blockId}`.replace(/,/g, '');
        this.processedBlocks.push(mutationBlockId);
        return true;
    }

    /**
     * Valid mutation candidates are all blocks that use variables.
     * @returns a Set of variable holding block ids.
     */
    protected getMutationCandidates(): BlockID[] {
        const variableIds: BlockID[] = [];
        for (const block of this._blockMap.values()) {
            if (block['opcode'] === 'data_variable' && block['parent'] !== null) {
                variableIds.push(block['parent']);
            }
        }
        return variableIds;
    }

    /**
     * String representation of a given mutator.
     * @returns string representation of the mutator.
     */
    public toString(): string {
        return 'VRM';
    }
}
