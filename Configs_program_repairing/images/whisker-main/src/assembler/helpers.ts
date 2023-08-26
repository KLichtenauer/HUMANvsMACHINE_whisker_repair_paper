import {Project} from "./types/Project";
import {ValidationError} from "./errors";
import {deepCopy, mapObject} from "./utils/Objects";
import {Blocks, Comments, Target, TargetName} from "./types/Target";
import {BlockNode, node, VarListNode, WrappedTarget} from "./Node";
import projectValidator from "scratch-parser/lib/validate";
import {BlockID} from "./types/blocks/Block";
import {getUniqueName} from "./selectors";
import {MultiMap} from "./utils/MultiMap";

/**
 * Takes a parsed `project.json` as input, and checks it against the
 * [SB3 schema definition](https://github.com/LLK/scratch-parser/tree/master/lib).
 * If successful, returns a validated `Project`. Otherwise, throws a `ValidationError`.
 *
 * @param project the project to validate
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function validate(project: {}): Project {
    return projectValidator(false, project, (error, validated) => {
        if (error) {
            if (error.sb3Errors) {
                const pretty = JSON.stringify(error.sb3Errors, null, 4);
                const message = `Could not parse as a valid SB3 project. Errors: ${pretty}`;
                throw new ValidationError(message);
            } else {
                // It's an SB2 project that contains errors...
                throw new ValidationError("Only version 3 projects are supported");
            }
        }

        if (validated.projectVersion !== 3) {
            throw new ValidationError("Only version 3 projects are supported");
        }

        return validated;
    });
}

/**
 * The `project.json` being modified, parsed as JavaScript object, and enriched with an AST-like API. The raw
 * `project.json` of a Scratch project contains the serialization of the project's AST (abstract syntax tree), among
 * other things. As a side effect of the serialization process, the object references between child and parent nodes in
 * the AST have been lost, and replaced by `BlockID`s. The `WrappedProject` recovers these object references using the
 * `BlockID`s.
 */
export type WrappedProject = Project<BlockNode, VarListNode, VarListNode>;

export function wrapProject(project: Readonly<Project>): WrappedProject {
    const wrappedProject = deepCopy<WrappedProject>(project);
    wrappedProject.targets = project.targets.map((target) => wrapTarget(target, wrappedProject));
    return wrappedProject;
}

function wrapTarget(target: Readonly<Target>, wrappedProject: Readonly<WrappedProject>): WrappedTarget {
    const wrappedTarget = deepCopy<WrappedTarget>(target);
    const wrapBlock = (block, blockID) => node(blockID, block, wrappedTarget, wrappedProject);
    wrappedTarget.blocks = mapObject(target.blocks, wrapBlock);
    return wrappedTarget;
}

export function disambiguateBlockIDs(project: Readonly<Project>, generateFreshID: (oldID: BlockID) => BlockID): Project {
    project = deepCopy(project);

    const duplicatesAcrossTargets = findDuplicateBlockIDs(project);

    for (const target of project.targets) {
        const targetName = getUniqueName(target);
        if (duplicatesAcrossTargets.has(targetName)) {
            const toRename = [...duplicatesAcrossTargets.get(targetName)];
            const oldToNew = Object.fromEntries(toRename.map((oldID) => [oldID, generateFreshID(oldID)]));
            target.blocks = renameIDs(target.blocks, oldToNew);
            target.comments = renameIDs(target.comments, oldToNew);
        }
    }

    return project;
}

function findDuplicateBlockIDs(project: Readonly<Project>): MultiMap<TargetName, BlockID> {
    const knownIDs = new Set<BlockID>();
    const duplicatesPerTarget = new MultiMap<TargetName, BlockID>();

    for (const target of project.targets) {
        for (const blockID of Object.keys(target.blocks)) {
            if (knownIDs.has(blockID)) {
                duplicatesPerTarget.set(getUniqueName(target), blockID);
            } else {
                knownIDs.add(blockID);
            }
        }
    }

    return duplicatesPerTarget;
}

export function renameIDs<T extends Blocks | Comments>(blocksOrComments: T, oldToNew: Record<string, string>): T {
    const oldIDs = Object.keys(oldToNew);

    if (oldIDs.length === 0) {
        return deepCopy(blocksOrComments); // nothing to rename...
    }

    /*
     * Note: this implementation is rather crude. It converts the `blocks` object into a JSON string, and replaces
     * everything that looks like an ID, using a Regex. Because we are not considering context information, this
     * strategy fails when an ID just so happens to appear in an unexpected position, e.g., as input of a say-block.
     * Furthermore, we also use it to rename variable/list/broadcast IDs. These could have, by mere chance, the same
     * IDs as a block, leading to unintentional renames. While this will probably never happen, you can obviously
     * construct examples where it fails. But then again, Scratch's own uid function is already used as if it
     * generates globally unique IDs, even though there's a slim chance it sometimes doesn't...
     */
    const findOldIDs = new RegExp(oldIDs.map((oldID) => escape(oldID)).join("|"), "g");
    const renamed = JSON.stringify(blocksOrComments).replace(findOldIDs, (oldID) => oldToNew[oldID]);
    return JSON.parse(renamed);
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping
function escape(str: string): string {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
