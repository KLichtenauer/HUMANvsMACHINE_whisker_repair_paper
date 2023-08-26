import VirtualMachine from 'scratch-vm/src/virtual-machine.js';
import {getBlockMap} from 'scratch-analysis/src/control-flow-graph';
import {BlockID, ScratchBlock} from "../../../assembler/types/blocks/Block";
import {Project} from "../../../assembler/types/Project";
import {TargetName} from "../../../assembler/types/Target";

export interface Mutant extends Project {

    /**
     * The mutant's name.
     */
    name: string;
}

export abstract class ScratchMutation {

    /**
     * Maps blockIds to the corresponding blocks of a Scratch program.
     */
    protected readonly _blockMap: Map<BlockID, ScratchBlock>;

    /**
     * JSON-string representation of the original project.
     */
    protected readonly _originalProjectJSON: string;

    protected constructor(protected readonly originalVM: VirtualMachine) {
        this._blockMap = getBlockMap(this.originalVM.runtime.targets);
        this._originalProjectJSON = this.originalVM.toJSON();
    }

    /**
     * Returns an array of block id's indicating mutation candidates of a given mutator.
     */
    protected abstract getMutationCandidates(): BlockID[];

    /**
     * Applies the instantiated mutation operator.
     * @param mutationBlockId the id  of the block that will be mutated.
     * @param mutantProgram the mutant program in which the mutationBlock resides.
     * @param target the name of the target in which the block to mutate resides.
     */
    public abstract applyMutation(mutationBlockId: BlockID, mutantProgram: Project, target: BlockID): boolean

    /**
     * String representation of a given mutator.
     * @returns string representation of the mutator.
     */
    public abstract toString(): string

    /**
     * Generates mutants based on the specified mutation operator.
     */
    public generateMutants(): Mutant[] {
        const mutants: Mutant[] = [];
        const mutationCandidates = this.getMutationCandidates();
        for (const mutationBlockId of mutationCandidates) {
            const mutantProgram: Mutant = JSON.parse(this._originalProjectJSON);
            const originalBlock = this._blockMap.get(mutationBlockId);
            if (this.applyMutation(mutationBlockId, mutantProgram, originalBlock['target'])) {
                mutants.push(mutantProgram);
            }
        }
        return mutants;
    }


    /**
     * Extracts the block that will be mutation from a cloned mutant VM.
     * @param program the Scratch program from which a block should be extracted.
     * @param blockId the id of the block that should be extracted.
     * @param targetName the target in which the requested block resides. This information is necessary since the
     * block ids in the default Scratch program are not extended with the target names.
     */
    protected extractBlockFromProgram(program: Project, blockId: BlockID, targetName: TargetName): ScratchBlock | undefined {
        // blockId can be null, e.g., when we are trying to extract a parent block but the block does not exist.
        if (blockId === null) {
            return undefined;
        }

        const targetBlocks = program.targets.find(target => target.name === targetName).blocks;
        for (const [id, block] of Object.entries(targetBlocks)) {
            if (blockId.startsWith(id)) {
                return block;
            }
        }
        return undefined;
    }

}
