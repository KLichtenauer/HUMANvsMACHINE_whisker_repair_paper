import {Project} from "./types/Project";
import {BlockID, isBlock, isStackableBlock, ScratchBlock, TopLevelBlock} from "./types/blocks/Block";
import uid from "scratch-vm/src/util/uid";
import {
    BlockNode, DummyNode, DummyProceduresCall,
    DummyProceduresDefinition, DummyProceduresPrototype,
    InputFilterOpts,
    Node,
    node,
    VarListNode,
    WrappedStage,
    WrappedTarget
} from "./Node";
import {
    Adjacency,
    ConnectedExprSelector,
    DropDownSelector,
    ExprKey,
    exprKeys,
    ExprSelector,
    FieldSelector,
    getUniqueName,
    hasUniqueName,
    InputSelector,
    STAGE_NAME,
    StmtInsertionPoint,
    UniqueTargetName
} from "./selectors";
import {
    InvalidBlockError,
    InvalidInputError,
    InvalidScriptError,
    InvalidTargetError,
    NoSuchBlockError,
    NoSuchListError,
    NoSuchScriptError,
    NoSuchSpriteError,
    NoSuchVariableError,
    ValidationError
} from "./errors";
import {BroadcastID, ListID, VariableID} from "./types/Target";
import {List, Variable} from "./types/blocks/categories/Data";
import {deepCopy, empty} from "./utils/Objects";
import Arrays from "../whisker/utils/Arrays";
import {getBlockIDs, getInputKeys, listName, variableName, varOrListName} from "./utils/Blocks";
import {disambiguateBlockIDs, renameIDs, validate, WrappedProject, wrapProject} from "./helpers";
import {
    BroadCastInput,
    Input,
    InputKey,
    inputKeys,
    isObscuredShadowInput,
    isTopLevelDataBlock,
    ListInput,
    ObscuredShadowInput,
    primitiveInputTypes,
    shadowTypes,
    UnobscuredShadowInput,
    VariableInput
} from "./types/blocks/Inputs";
import {canBeInput, canBeOnSprite, canBeOnTheStage, canConnect} from "./connections";
import {BlockMeta, emptyBlockMeta, emptyInputMeta, InputMeta, Meta, toBlockMeta} from "./meta";
import {Opcode} from "./types/blocks/Opcode";
import {pair, Pair} from "../whisker/utils/Pair";
import {broadcastInputToField, Field, Field2} from "./types/blocks/Fields";
import {ProceduresCall, ProceduresDefinition, ProceduresPrototype} from "./types/blocks/categories/MyBlocks";
import {MultiMap} from "./utils/MultiMap";

type ID = BlockID | VariableID | ListID | BroadcastID;

interface InsertionMeta<T extends Node> {
    root: T,
    last: T,
    renamed: Record<BlockID, BlockID>
}

export interface ChangedStmts {
    renamed: Record<BlockID, BlockID>;
    deleted: Array<BlockID>;
}

/**
 * An API to programmatically modify the `project.json` of Scratch projects.
 *
 * On a technical level, every Scratch project is made of Scratch blocks (represented by the {@link ScratchBlock} type).
 * Every block can have inputs (represented by the {@link Input} interface).
 *
 * Another point of view is the conceptual level. Here, blocks serve two main purposes:
 * 1. Statements: Stackable blocks build the control flow of the program.
 * 2. Expressions: Reporter blocks and primitive inputs (excl. `"BROADCAST_INPUT"`, `"SUBSTACK"` and `"SUBSTACK2"`)
 *    represent values.
 *
 * The API provides methods for both points of view. We do not recommend mixing them to avoid unexpected results. For
 * example, every statement can be safely deleted, but attempting to delete a block could fail.
 *
 * Current limitations:
 * - Custom blocks are not supported.
 * - It is assumed all required assets (costumes and sounds) are already present.
 */
export class Assembler {

    /**
     * The `project.json` being modified, parsed as JavaScript object, and enriched with an AST-like API.
     *
     * @private
     */
    private readonly _project: WrappedProject;

    /**
     * A function to generate a fresh `ID`.
     *
     * @private
     */
    private readonly _generateFreshID: (oldID: ID) => ID;

    private readonly _dummyBlocks: MultiMap<WrappedTarget, DummyNode>;

    /**
     * Constructs a new `Assembler` for the given `project`. All changes will be applied to an internal working copy of
     * the project. The optional callback `generateFreshID` is used to generate fresh IDs for blocks, variables, lists,
     * and broadcasts. It defaults to the `uid` function used by Scratch.
     *
     * @param project the project to modify
     * @param generateFreshID callback that generates a fresh ID when invoked (optional)
     */
    public constructor(project: Readonly<Project>, generateFreshID: (oldID: ID) => ID = uid) {
        this._project = wrapProject(disambiguateBlockIDs(validate(project), generateFreshID));
        this._generateFreshID = generateFreshID.bind(null);
        this._checkForDanglingBlocks();
        this._checkForBrokenConnections();
        this._checkForBlacklistedBlocksOnTheStage();
        this._dummyBlocks = new MultiMap<WrappedTarget, DummyNode>();
    }

    /**
     * Returns a deep copy of the `project.json` as plain JSON object. This object can be serialized with
     * `JSON.stringify`, and loaded directly into the Scratch VM, or stored to the hard drive as `.sb3` file.
     *
     * Before returning, the `project.json` is parsed against the sb3 schema definition, and validated. If the function
     * throws, it is a likely a bug in the `Assembler` class.
     */
    public toJSON(): Project {
        this._checkForDanglingBlocks();
        this._checkForBrokenConnections();
        this._checkForBlacklistedBlocksOnTheStage();
        return validate(deepCopy(this._project));
    }

    public static fromJSON(project: Readonly<Project>, generateFreshID: (oldID: BlockID) => BlockID = uid): Assembler {
        return new Assembler(project, generateFreshID);
    }

    public pruneDummies(): void {
        const dummies = this._dummyBlocks.values();
        for (const dummy of dummies) {
            if (dummy instanceof DummyProceduresCall) {
                this._deleteNode(dummy, "single");
            } else {
                delete dummy.target.blocks[dummy.blockID];
            }
        }
        this._dummyBlocks.clear();
    }

    //------------------------------------------------------------------------------------------------------------------
    //region Private helpers

    private _checkForDanglingBlocks(): void {
        for (const {isStage, name, blocks} of this._project.targets) {
            const validIDs = new Set(Object.keys(blocks));
            const referencedIds = new Set(Object.values(blocks).flatMap((node) => node.getReferencedBlockIDs()));

            for (const id of referencedIds) {
                if (!validIDs.has(id)) {
                    // An unknown block is referenced.
                    const targetName = isStage ? `stage` : `sprite "${name}"`;
                    throw new ValidationError(`The ${targetName} has a dangling block "${id}"`);
                }
            }
        }
    }

    private _checkForBrokenConnections(): void {
        for (const {isStage, name, blocks} of this._project.targets) {
            const targetName = isStage ? `the stage` : `the sprite "${name}"`;

            for (const [blockID, block] of Object.entries(blocks)) {
                if (block instanceof VarListNode) {
                    continue;
                }

                const parent = block.getParent();
                if (parent === null) {
                    if (!block.isTopLevel()) {
                        throw new ValidationError(`The block "${blockID}" on ${targetName} has a broken connection to its parent`);
                    }
                } else if (parent.getNext() !== block && parent.hasInputNode(block) === null) {
                    throw new ValidationError(`The block "${parent.blockID}" on ${targetName} does not reference "${blockID}" as next or input`);
                }

                const next = block.getNext();
                if (next !== null && next.getParent() !== block) {
                    throw new ValidationError(`The block "${next.blockID}" on ${targetName} does not reference "${blockID}" as parent`);
                }
            }
        }
    }

    private _checkForBlacklistedBlocksOnTheStage(): void {
        for (const block of Object.values(this._getStage().blocks).map(({block}) => block)) {
            if (!canBeOnTheStage(block)) {
                const opcode = isBlock(block) ? block.opcode : "toplevel variable/list";
                throw new ValidationError(`The stage must not contain a block of type "${opcode}"`);
            }
        }
    }

    private _getTarget(name: UniqueTargetName): WrappedTarget {
        const targets = this._project.targets;

        if (name === STAGE_NAME) {
            return targets.find(({isStage}) => isStage);
        }

        const target = targets.find((target) => target.name === name);

        if (target) {
            return target;
        }

        throw new NoSuchSpriteError(name);
    }

    private _getStage(): WrappedStage {
        return this._getTarget(STAGE_NAME) as WrappedStage;
    }

    private *_getNodes(skipShadow: boolean = true): Generator<Node, void> {
        for (const target of this._project.targets) {
            for (const block of Object.values(target.blocks)) {
                if (block.isDummyProceduresDefinitionOrPrototype()) {
                    continue;
                }

                if (skipShadow && block.isShadow()) {
                    continue;
                }

                yield block;
            }
        }
    }

    private _getNode<T extends Node = Node>(blockID: BlockID): T {
        for (const target of this._project.targets) {
            if (blockID in target.blocks) {
                return target.blocks[blockID] as T;
            }
        }

        throw new NoSuchBlockError(blockID);
    }

    private _moveTopLevelProperties(source: BlockNode, target: BlockNode): void {
        const {x, y} = source.block as TopLevelBlock;
        target.setTopLevel(x, y);
        source.setNonTopLevel();
    }

    //endregion
    //------------------------------------------------------------------------------------------------------------------
    //region Querying

    /**
     * Returns all but shadow blocks in the project.
     */
    public getBlocks(): Array<BlockID> {
        const blocks = new Array<BlockID>();

        for (const node of this._getNodes()) {
            blocks.push(node.blockID);
        }

        return blocks;
    }

    /**
     * Returns the total number of blocks in the project, excluding shadow blocks and dummy blocks.
     */
    public getBlockCount(): number {
        return this._project.targets
            .flatMap((target) => Object.values(target.blocks))
            .filter((block) => !(block.isDummyProceduresDefinitionOrPrototype() || block.isShadow()))
            .length;
    }

    public getInputBlockIDs(parent: BlockID, includeSubstacks: boolean): Array<BlockID> {
        const node = this._getNode(parent);
        return node.getInputBlockIDsRecursively(includeSubstacks);
    }

    private _getStmts(): Array<BlockNode> {
        const stmts = new Array<BlockNode>();

        for (const node of this._getNodes()) {
            if (node.isStackable()) {
                stmts.push(node as BlockNode);
            }
        }

        return stmts;
    }

    /**
     * Returns all statements in the project. These encompass the blocks from the categories "stack", "hat", "cap", and
     * "C", but excludes shadow blocks and reporter blocks (expressions).
     */
    public getStmts(): Array<BlockID> {
        return this._getStmts().map(({blockID}) => blockID);
    }

    public getStmtsOfTarget(targetName: UniqueTargetName): Array<BlockID> {
        this._getTarget(targetName); // to make sure the target exists
        return this._getStmts()
            .filter(({target}) => hasUniqueName(target, targetName))
            .map(({blockID}) => blockID);
    }

    /**
     * Like `getStmts()`, but also excludes statements that are toplevel. In contrast to `getEventHandlers()`, the
     * result also includes non-hat blocks.
     */
    public getNonTopLevelStmts(): Array<BlockID> {
        return this._getStmts()
            .filter((stmt) => !stmt.isTopLevel())
            .map(({blockID}) => blockID);
    }

    private _getCBlocks(): Array<Node> {
        const cBlocks = new Array<Node>();

        for (const node of this._getNodes()) {
            if (node.isCBlock()) {
                cBlocks.push(node);
            }
        }

        return cBlocks;
    }

    public getCBlocks(): Array<BlockID> {
        return this._getCBlocks().map(({blockID}) => blockID);
    }

    private _getInputs(): Array<Pair<BlockNode, InputKey>> {
        const options: InputFilterOpts = {
            skipSubstacks: false,
            skipBroadcasts: false,
            skipDeletedInputs: true,
            skipUnobscuredShadowBlocks: false,
            skipClearedInputs: true,
            skipUnobscuredPrimitiveInputs: false,
        };

        const inputs = new Array<Pair<BlockNode, InputKey>>();

        for (const node of this._getNodes()) {
            for (const key of node.getInputKeys(options)) {
                inputs.push(pair(node as BlockNode, key));
            }
        }

        return inputs;
    }

    /**
     * Returns all inputs in the project. This excludes "empty" inputs, such as deleted `SUBSTACK`s and boolean inputs,
     * and primitive inputs that are the empty string.
     */
    public getInputs(): Array<InputSelector> {
        return this._getInputs().map(([{blockID}, key]) => ({blockID, key}));
    }

    private _getExprs(skipUnconnected: boolean, referViaInputKey: boolean): Array<Pair<Node, ExprKey | null>> {
        const options: InputFilterOpts = {
            skipSubstacks: true, // SUBSTACKs are statements, not expressions
            skipBroadcasts: true, // Broadcasts are implemented as PrimitiveInput, but behave like drop-down menus
            skipDeletedInputs: true, // Boolean input (or SUBSTACK) is missing
            skipUnobscuredShadowBlocks: true, // It is a drop-down menu, and not an expression
            skipClearedInputs: true, // The primitive input is empty
            skipUnobscuredPrimitiveInputs: false,
        };

        const exprs = Array<Pair<Node, ExprKey | null>>();

        for (const node of this._getNodes()) {
            const unconnectedExpr = node.isTopLevel() && node.isReporterBlock();
            if (unconnectedExpr && !skipUnconnected) {
                exprs.push([node, null]);
            }

            for (const key of node.getInputKeys(options) as Array<ExprKey>) {
                if (referViaInputKey) {
                    exprs.push([node, key]);
                } else {
                    // If the input is a block itself, we try to refer to it via its BlockID. (For example, this could
                    // be useful for coverage measurement.) Otherwise, like in the case of primitive inputs, we fall
                    // back to the BlockID of the parent and the corresponding input key.
                    const inputNode = node.getInputNode(key);
                    exprs.push(inputNode ? [inputNode, null] : [node, key]);
                }
            }
        }

        return exprs;
    }

    /**
     * Returns all expressions in the project. This includes reporter blocks (including unconnected ones) and primitive
     * inputs, but excludes `SUBSTACK`/`SUBSTACK2` (because these are statements) and `BROADCAST_INPUT` (because it
     * behaves like a drop-down menu).
     */
    public getExprs(): Array<ExprSelector> {
        return this._getExprs(false, false).map(([{blockID}, key]) => ({blockID, ...(key && {key})}));
    }

    public getConnectedExprs(): Array<ConnectedExprSelector> {
        return this._getExprs(true, true).map(([{blockID}, key]) => ({blockID, key}));
    }

    private _getScripts(skipReporter: boolean): Array<Node> {
        const scripts = new Array<Node>();

        for (const node of this._getNodes()) {
            if (node.isTopLevel() && !(skipReporter && node.isReporterBlock())) {
                scripts.push(node);
            }
        }

        return scripts;
    }

    /**
     * Returns all scripts in the project, identified by their root block. This includes unconnected scripts (whose
     * root block is not a hat block). If `skipReporter` is `false`, it also includes unconnected reporter blocks,
     * otherwise it excludes them.
     *
     * @param skipReporter whether to skip reporter blocks in the result
     */
    public getScripts(skipReporter: boolean): Array<BlockID> {
        return this._getScripts(skipReporter).map(({blockID}) => blockID);
    }

    public getScriptsOfTarget(targetName: UniqueTargetName, skipReporter: boolean): Array<BlockID> {
        this._getTarget(targetName); // to make sure the target exists
        return this._getScripts(skipReporter)
            .filter(({target}) => hasUniqueName(target, targetName))
            .map(({blockID}) => blockID);
    }

    /**
     * Returns all connected scripts in the project, identified by their hat block.
     */
    public getConnectedScripts(): Array<BlockID> {
        return this._getScripts(true)
            .filter((node) => node.isHatBlock())
            .map(({blockID}) => blockID);
    }

    /**
     * Alias for `getConnectedScripts`.
     */
    public getEventHandlers(): Array<BlockID> {
        return this.getConnectedScripts();
    }

    /**
     * Returns all unconnected scripts in the project, identified by their root block. Unconnected scripts never start
     * with a hat block, and are dead code.
     */
    public getUnconnectedScripts(): Array<BlockID> {
        const scripts = new Array<BlockID>();

        for (const node of this._getNodes()) {
            if (node.isTopLevel() && !node.isHatBlock()) {
                scripts.push(node.blockID);
            }
        }

        return scripts;
    }

    /**
     * Returns all statements that are root in a script, SUBSTACK or SUBSTACK2.
     */
    public getStacks(): Array<BlockID> {
        const stacks = new Array<BlockID>();

        for (const node of this._getNodes()) {
            if (node.isRootOfScriptOrSubstack() && node.isStackable()) {
                stacks.push(node.blockID);
            }
        }

        return stacks;
    }

    /**
     * Returns all statements that are root in a SUBSTACK or SUBSTACK2.
     */
    public getSubstacks(): Array<BlockID> {
        const substacks = new Array<BlockID>();

        for (const node of this._getNodes()) {
            if (node.isStackable() && node.isRootOfSubstack()) {
                substacks.push(node.blockID);
            }
        }

        return substacks;
    }

    /**
     * Starting at the block with the given ID, follows the chain of `next` blocks until the very end, and returns
     * the IDs of all stackable blocks encountered along the way, in traversal order. The ID of the given block is
     * not included if `skipSelf` is `true`, otherwise it is included.
     *
     * @param blockID the ID of the block where to start
     * @param skipSelf whether to omit the `blockID` from the result
     */
    public getNextIDs(blockID: BlockID, skipSelf: boolean): Array<BlockID> {
        return this._getNode(blockID).getNextIDs(skipSelf);
    }

    /**
     * For a given block, returns the root of the script the block belongs to. Returns null for shadow blocks.
     *
     * @param blockID the ID of the block to query
     */
    public getScriptRoot(blockID: BlockID): BlockID | null {
        const root = this._getNode(blockID).getScriptRoot();

        if (root) {
            return root.blockID;
        }

        return null;
    }

    /**
     * In the stack/slice starting with the given `blockID`, returns the ID of the last block in that stack/slice. Note
     * that `blockID` need not be a root block. If `blockID` is a reporter block, it returns `blockID`.
     *
     * @param blockID the stack/slice of interest
     */
    public getLastInSlice(blockID: BlockID): BlockID {
        return this._getNode(blockID).getLastID();
    }

    /**
     * For a given block, returns the unique name of the target it belongs to.
     *
     * @param blockID the ID of the block to query
     */
    public getTargetName(blockID: BlockID): UniqueTargetName {
        return getUniqueName(this._getNode(blockID).target);
    }

    private _getTargets(): Array<WrappedTarget> {
        return this._project.targets;
    }

    /**
     * Returns all targets in the project (including the stage).
     */
    public getTargets(): Array<UniqueTargetName> {
        return this._getTargets().map((target) => getUniqueName(target));
    }

    /**
     * Returns all sprites in the project (i.e., without the stage).
     */
    public getSprites(): Array<UniqueTargetName> {
        return this._getTargets()
            .filter(({isStage}) => !isStage)
            .map(({name}) => name);
    }

    /**
     * Returns all fields in the project. This includes oval-shaped fields (of shadow blocks), and rectangular fields.
     */
    public getFields(): Array<FieldSelector> {
        const fields = new Array<FieldSelector>();

        for (const node of this._getNodes(false)) {
            for (const key of node.getFieldKeys()) {
                fields.push(({blockID: node.blockID, key}));
            }
        }

        return fields;
    }

    /**
     * Returns all possible values that can be selected in the specified field. If the parameter `skipCurrentValue`
     * is `true`, the result does not contain the currently selected value.
     *
     * @param blockID the ID of the block that has the field
     * @param key the key to identify the filed
     * @param skipCurrentValue whether to skip the currently selected field value
     */
    public getPossibleFieldValues({blockID, key}: FieldSelector, skipCurrentValue: boolean): Field[] {
        const node = this._getNode(blockID);
        return node.getPossibleFieldValues(key, skipCurrentValue);
    }

    /**
     * Returns all drop-down menus in the project. This includes oval-shaped fields (of shadow-blocks), rectangular
     * fields, and the input of type `BROADCAST_INPUT` (since it behaves like a drop-down menu). The parameter
     * `skipIfObscured` controls if obscured oval-shaped fields should be excluded.
     *
     * @param skipIfObscured whether to skip dropdown menus that are obscured by reporter blocks dropped on top of them
     */
    public getDropDowns(skipIfObscured: boolean): Array<DropDownSelector> {
        const dropDowns = Array<DropDownSelector>();

        for (const node of this._getNodes(false)) {
            if (node instanceof VarListNode) {
                continue;
            }

            if (skipIfObscured && node.isObscured()) {
                // If the block is obscured, it must also be a shadow block. It is OK to skip here already, and not
                // look at "BROADCAST_INPUT" because only "event_broadcast" and "event_broadcastandwait" can have it as
                // key, and both are not shadow blocks.
                continue;
            }

            const blockID = node.blockID;

            for (const key of node.getFieldKeys()) {
                dropDowns.push({blockID, key});
            }

            // Blocks of type "event_broadcast" and "event_broadcastandwait" have a primitive input of type
            // "BROADCAST_INPUT". But it behaves like a field and is drawn like a field... So we include it here.
            if (node.block.opcode === "event_broadcast" || node.block.opcode === "event_broadcastandwait") {
                if (skipIfObscured && isObscuredShadowInput(node.block['inputs']['BROADCAST_INPUT'])) {
                    continue;
                }

                dropDowns.push({blockID, key: "BROADCAST_INPUT"});
            }
        }

        return dropDowns;
    }

    /**
     * Returns all possible values that can be selected in the specified drop-down menu. If the parameter
     * `skipCurrentValue` is `true`, the reuslt does not contain the currently selected value.
     *
     * @param blockID the ID of the block that has the drop-down menu
     * @param key the key to identify the field
     * @param skipCurrentValue whether to skip the currently selected value
     */
    public getPossibleDropDownValues({blockID, key}: DropDownSelector, skipCurrentValue: boolean): Field[] {
        const node = this._getNode(blockID);
        return key !== "BROADCAST_INPUT"
            ? node.getPossibleFieldValues(key, skipCurrentValue)
            : node.getPossibleBroadcastInputs(skipCurrentValue)
                .map((broadcast) => broadcastInputToField(broadcast));
    }

    /**
     * Returns the variables of the given target. For sprites, this excludes stage variables.
     *
     * @param target the target to query
     */
    public getVariablesOfTarget(target: UniqueTargetName): Array<VariableID> {
        return Object.keys(this._getTarget(target).variables);
    }

    /**
     * Returns the variables of the stage.
     */
    public getStageVariables(): Array<VariableID> {
        return this.getVariablesOfTarget(STAGE_NAME);
    }

    /**
     * Returns the lists of the given target. For sprites, this excludes stage lists.
     *
     * @param target the target to query
     */
    public getListsOfTarget(target: UniqueTargetName): Array<ListID> {
        return Object.keys(this._getTarget(target).lists);
    }

    /**
     * Returns the variables of the stage.
     */
    public getStageLists(): Array<ListID> {
        return this.getListsOfTarget(STAGE_NAME);
    }

    private _getVariable(variableID: VariableID): [variable: Variable, isStage: boolean] {
        for (const target of this._project.targets) {
            for (const key of Object.keys(target.variables)) {
                if (variableID === key) {
                    return [target.variables[variableID], target.isStage];
                }
            }
        }

        throw new NoSuchVariableError(variableID);
    }

    private _getList(listID: ListID): [list: List, isStage: boolean] {
        for (const target of this._project.targets) {
            for (const key of Object.keys(target.lists)) {
                if (listID === key) {
                    return [target.lists[listID], target.isStage];
                }
            }
        }

        throw new NoSuchListError(listID);
    }

    //endregion
    //------------------------------------------------------------------------------------------------------------------
    //region Meta

    /**
     * Returns an object with metadata for the requested statement. The block IDs in the returned object are the same
     * as the ones used by the project. If `skipSubstacks` is `true,` the metadata of substack inputs is skipped. This
     * can be useful, e.g., if only the data for a C-block itself are desired.
     *
     * @param statement the ID of the statement to query
     * @param skipSubstack whether to skip metadata of substack inputs, defaults to `false`
     */
    public getStmtMeta(statement: BlockID, skipSubstack: boolean = false): BlockMeta {
        return this.getBlockMeta(statement, skipSubstack);
    }

    /**
     * Returns an object with metadata for the requested expression.
     *
     * @param exprSel the selector for the expression
     */
    public getExprMeta(exprSel: ExprSelector): Meta {
        const node = this._getNode(exprSel.blockID);
        return exprSel.key ? node.getInputMeta(exprSel.key) : node.getBlockMeta();
    }

    /**
     * Returns an object with metadata for the requested block. The block IDs in the returned object are the same
     * as the ones used by the project. If `skipSubstacks` is `true`, the metadata of substack inputs is skipped. This
     * can be useful, e.g., if only the data for a C-block itself are desired.
     *
     * @param block the ID of the block to query
     * @param skipSubstack whether to skip metadata of substack inputs, defaults to `false`
     */
    public getBlockMeta(block: BlockID, skipSubstack: boolean = false): BlockMeta {
        return this._getNode(block).getBlockMeta({substacks: !skipSubstack});
    }

    /**
     * Returns an object with metadata for the requested input.
     *
     * @param blockID the ID of the block that uses the input
     * @param key the key identifying the input
     */
    public getInputMeta({blockID, key}: InputSelector): InputMeta {
        return this._getNode(blockID).getInputMeta(key);
    }

    /**
     * Returns an object with metadata for the requested script. The script is identified by the ID of its root block.
     * If called with the ID of a non-root block, a "slice" of the script is returned, starting at the given block,
     * and ending at the last block in the script. The block IDs in the returned object are the same as the ones used
     * by the project.
     *
     * @param script the script to query
     */
    public getScriptMeta(script: BlockID): BlockMeta {
        const topLevelBlock = this._getNode(script);

        // if (!topLevelBlock.isTopLevel) {
        //     throw new InvalidScriptError(`Script with root "${script}" does not exist`);
        // }

        return topLevelBlock.sliceToEnd();
    }

    /**
     * Returns an object with metadata for the requested stack of blocks/statements. The slice starts at the given
     * start point and contains the end point. The block IDs in the returned object are the same as the ones used by
     * the project.
     *
     * @param start the ID of the starting block
     * @param end the ID of the end block, or `null` (slice to the end, the default)
     */
    public getStackMeta(start: BlockID, end: BlockID | null = null): BlockMeta {
        return this._getNode(start).sliceTo(end);
    }

    /**
     * Returns the current state of the specified field.
     *
     * @param blockID the ID of the block to which the field belongs
     * @param key the key to identify the field
     */
    public getFieldValue({blockID, key}: FieldSelector): Field {
        const node = this._getNode(blockID);
        return node.getField(key);
    }

    /**
     * Returns the current state of the specified drop-down menu. Supports all fields, and primitive inputs with key
     * `"BROADCAST_INPUT"`.
     *
     * @param blockID the ID of the block the drop-down menu belongs to
     * @param key the key to identify the drop-down menu
     */
    public getDropDownValue({blockID, key}: DropDownSelector): Field {
        const node = this._getNode(blockID);

        if (key !== "BROADCAST_INPUT") {
            return node.getField(key);
        }

        const {input: [shadowType, unobscuredInput, obscuredInput]} = node.getInputMeta(key);
        const broadcastInput = shadowType === shadowTypes.unobscuredShadow ? unobscuredInput : obscuredInput;
        return broadcastInputToField(broadcastInput as BroadCastInput);
    }

    /**
     * Converts the specified variable to a reporter block.
     *
     * @param variableID the ID of the variable
     */
    public getVariableAsBlockMeta(variableID: VariableID): BlockMeta {
        const [variable, isStage] = this._getVariable(variableID);
        const blockID = this._generateFreshID("variable");
        const meta = emptyBlockMeta(blockID, blockID);
        meta.blocks[blockID] = [primitiveInputTypes.variable, variableName(variable), variableID, 0, 0];
        (isStage ? meta.stageVariables : meta.variables)[variableID] = variable;
        return deepCopy(meta);
    }

    /**
     * Converts the specified list to a reporter block.
     *
     * @param listID the ID of the list
     */
    public getListAsBlockMeta(listID: ListID): BlockMeta {
        const [list, isStage] = this._getList(listID);
        const blockID = this._generateFreshID("list");
        const meta = emptyBlockMeta(blockID, blockID);
        meta.blocks[blockID] = [primitiveInputTypes.list, listName(list), listID, 0, 0];
        (isStage ? meta.stageLists : meta.lists)[listID] = list;
        return deepCopy(meta);
    }

    /**
     * Converts the specified variable to an input.
     *
     * @param variableID the ID of the variable
     */
    public getVariableAsInputMeta(variableID: VariableID): InputMeta {
        const [variable, isStage] = this._getVariable(variableID);
        const variableInput: VariableInput = [primitiveInputTypes.variable, variableName(variable), variableID];
        const input: UnobscuredShadowInput = [shadowTypes.unobscuredShadow, variableInput];
        const meta = emptyInputMeta(input, false, false);
        (isStage ? meta.stageVariables : meta.variables)[variableID] = variable;
        return deepCopy(meta);
    }

    /**
     * Converts the specified list to an input.
     *
     * @param listID the ID of the list
     */
    public getListAsInputMeta(listID: ListID): InputMeta {
        const [list, isStage] = this._getList(listID);
        const listInput: ListInput = [primitiveInputTypes.list, listName(list), listID];
        const input: UnobscuredShadowInput = [shadowTypes.unobscuredShadow, listInput];
        const meta = emptyInputMeta(input, false, false);
        (isStage ? meta.stageLists : meta.lists)[listID] = list;
        return deepCopy(meta);
    }

    //endregion
    //------------------------------------------------------------------------------------------------------------------
    //region Deletion

    private _createDummyProceduresDefinitionAndPrototype(target: WrappedTarget): void {
        const defID = this._generateFreshID("dummyProcDefID");
        const protoID = this._generateFreshID("dummyProcProtoID");

        const def: ProceduresDefinition = {
            opcode: "procedures_definition",
            next: null,
            parent: null,
            inputs: {
                custom_block: [
                    shadowTypes.unobscuredShadow,
                    protoID,
                ]
            },
            fields: {},
            shadow: false,
            topLevel: true,
            x: 0, // for now, updated later
            y: 0, // for now, updated later
        };

        const proto: ProceduresPrototype = {
            opcode: "procedures_prototype",
            next: null,
            parent: defID,
            inputs: {},
            fields: {},
            shadow: true,
            topLevel: false,
            mutation: {
                tagName: "mutation",
                children: [],
                proccode: "__dummy__", // we assume this proccode doesn't exist yet in the project
                argumentids: "[]",
                argumentnames: "[]",
                argumentdefaults: "[]",
                warp: "false",
            },
        };

        const defNode = target.blocks[defID] = new DummyProceduresDefinition(defID, def, target, this._project);
        defNode.makeStandaloneScript(); // just to update the x and y coordinates
        const procNode = target.blocks[protoID] = new DummyProceduresPrototype(protoID, proto, target, this._project);

        this._dummyBlocks
            .set(target, defNode)
            .set(target, procNode);
    }

    private _replaceWithDummy(node: Node): Array<BlockID> {
        const {target, blockID} = node;

        if (node instanceof DummyProceduresCall) {
            // The node is already a dummy. So nothing to do.
            return [blockID];
        }

        if (node instanceof DummyProceduresDefinition || node instanceof DummyProceduresPrototype) {
            // This should never happen, right?
            throw new InvalidBlockError(`Cannot replace node of type "${node.constructor.name}" with a dummy`);
        }

        if (!this._dummyBlocks.has(target)) {
            this._createDummyProceduresDefinitionAndPrototype(target);
        }

        const call: ProceduresCall = {
            opcode: "procedures_call",
            next: node instanceof VarListNode ? null : node.block.next,
            parent: node instanceof VarListNode ? null : node.block.parent,
            inputs: {},
            fields: {},
            shadow: false,
            topLevel: false,
            mutation: {
                tagName: "mutation",
                children: [],
                proccode: "__dummy__",
                argumentids: "[]",
                warp: "false",
            },
        };

        // If the node to replace had input nodes, we must also delete them.
        const inputBlocks = node.getInputBlockIDsRecursively(true);
        for (const blockID of inputBlocks) {
            delete target.blocks[blockID];
        }

        // Replace the node with the dummy. We retain the ID of the node.
        const callNode = target.blocks[blockID] = new DummyProceduresCall(blockID, call, target, this._project);
        this._dummyBlocks.set(target, callNode);

        return [...inputBlocks, blockID];
    }

    private _validateDelete(node: Node): ValidationResult {
        return node.isShadow() ? invalid(`Cannot delete shadow block "${node}"`) : valid();
    }

    private _canDelete(node: Node): boolean {
        return this._validateDelete(node).isValid;
    }

    private _assertDelete(node: Node): void {
        const validationResult = this._validateDelete(node);
        if (validationResult.isValid === false) {
            throw new InvalidBlockError(validationResult.reason);
        }
    }

    public canDeleteBlock(block: BlockID): boolean {
        return this._canDelete(this._getNode(block));
    }

    public canDeleteStmt(stmt: BlockID): boolean {
        return this.canDeleteBlock(stmt);
    }

    public canDeleteExpr(expr: ExprSelector): boolean {
        if (expr.key) {
            return this.canDeleteInput(expr as InputSelector);
        } else {
            return this.canDeleteBlock(expr.blockID);
        }
    }

    public canDeleteInput({blockID, key}: InputSelector): boolean {
        return this._getNode(blockID).canDeleteInput(key);
    }

    /**
     * Returns the IDs of all statements that can be deleted.
     */
    public getDeletableStmts(): Array<BlockID> {
        return this._getStmts()
            .filter((node) => this._canDelete(node))
            .map(({blockID}) => blockID);
    }

    /**
     * Returns the IDs of all blocks that can be deleted.
     */
    public getDeletableBlocks(): Array<BlockID> {
        const blocks = new Array<BlockID>();

        for (const node of this._getNodes()) {
            if (this._canDelete(node)) {
                blocks.push(node.blockID);
            }
        }

        return blocks;
    }

    /**
     * Returns all inputs that can be deleted
     */
    public getDeletableInputs(): Array<InputSelector> {
        return this._getInputs()
            .filter(([node, key]) => node.canDeleteInput(key))
            .map(([{blockID}, key]) => ({blockID, key}));
    }

    /**
     * Returns all expressions that can be deleted (including unconnected ones).
     */
    public getDeletableExprs(): Array<ExprSelector> {
        const expressions = Array<ExprSelector>();

        for (const [node, key, {blockID} = node] of this._getExprs(false, false)) {
            if (key === null) {
                if (this._canDelete(node)) {
                    expressions.push({blockID});
                }
            } else {
                if (node.canDeleteInput(key)) {
                    expressions.push({blockID, key});
                }
            }
        }

        return expressions;
    }

    private _deleteInput(node: BlockNode, inputKey: InputKey): Array<BlockID> {
        const result = node.deleteInput(inputKey, true);

        let deleted = new Array<BlockID>();

        if (result.deleted) {
            // If the deleted input referred to a block, we must delete it recursively.
            deleted = this._deleteNode(result.deleted, "cascade");
        }

        if (result.revealed) {
            // An input that was obscured before, but has been revealed by deleting the input above it, must no longer
            // be top-level.
            result.revealed.setNonTopLevel();
            result.revealed.setParent(node);
        }

        return deleted;
    }

    private _validateDeleteInput(node: Node, key: InputKey | null): ValidationResult {
        if (!key) {
            return this._validateDelete(node);
        }

        if (!node.canDeleteInput(key)) {
            return invalid(`Cannot delete input "${key}" of block "${node}`);
        }

        return valid();
    }

    private _assertDeleteInput(node: Node, key: InputKey): void {
        const result = this._validateDeleteInput(node, key);
        if (result.isValid === false) {
            throw new InvalidInputError(result.reason);
        }
    }

    /**
     * Deletes the specified input recursively. This means nested inputs will be deleted, too. In case of substacks,
     * all blocks (and in turn, their inputs) belonging to the substack will be deleted.
     *
     * @param blockID the ID of the block the input belongs to
     * @param key the key to identify the input
     */
    public deleteInput({blockID, key}: InputSelector): Array<BlockID> {
        const node = this._getNode<BlockNode>(blockID);
        this._assertDeleteInput(node, key);
        return this._deleteInput(node, key);
    }

    /**
     * Deletes the specified expression recursively. This means nested inputs will be deleted, too.
     *
     * @param expression the expression to delete
     */
    public deleteExpr(expression: ExprSelector): Array<BlockID> {
        if (expression.key) {
            return this.deleteInput(expression as InputSelector);
        } else {
            return this.deleteBlock(expression.blockID);
        }
    }

    /**
     * If `toDelete` is not a C-block or if mode is "cascadeSubstacks", it simply returns the `next` block of
     * `toDelete`. Otherwise, `toDelete` is a C-block, and it will be replaced with its substacks. To this end, it
     * returns the tos of one of its substacks.
     *
     * @param toDelete the node to delete
     * @param mode the deletion mode
     */
    private _prepareChildrenForDeletion(toDelete: BlockNode, mode: "single" | "cascadeSubstacks" | "cascade"): BlockNode {
        if (mode === "cascade") {
            return null;
        }

        // The tos blocks in substack and substack2.
        const tos1 = toDelete.getSubstack();
        const tos2 = toDelete.getSubstack2();
        const hasNoSubstacks = !(tos1 || tos2);

        // If cascading or if `toDelete` doesn't have any substacks, `child` is an alias for `next`.
        // Otherwise, `child` is the tos of a substack.
        if (mode === "cascadeSubstacks" || hasNoSubstacks) {
            // The block will be deleted, along with its substack(s) if they exist.
            return toDelete.getNext();
        }

        let child, bos: BlockNode;

        const bos1 = tos1 && tos1.getLast();
        const bos2 = tos2 && tos2.getLast();
        if (tos1 && tos2) {
            // Join the two substacks together.
            // The C-block will be replaced with substack ++ substack2.
            bos1.setNext(tos2);
            tos2.setParent(bos1);
            child = tos1;
            bos = bos2;
        } else if (tos1 && !tos2) {
            // The C-block will be replaced with substack.
            child = tos1;
            bos = bos1;
        } else { // !tos1 && tos2
            // The C-block will be replaced with substack2.
            child = tos2;
            bos = bos2;
        }

        // Connect `bos` and `next`.
        const next = toDelete.getNext();
        if (next) {
            next.setParent(bos);
            bos.setNext(next);
        }

        return child;
    }

    private _deleteNode(toDelete: Node, mode: "single" | "cascadeSubstacks" | "cascade"): Array<BlockID> {
        if (toDelete instanceof VarListNode) {
            return toDelete.delete().map(({blockID}) => blockID);
        }

        const next = this._prepareChildrenForDeletion(toDelete, mode);
        const parent = toDelete.getParent();

        if (parent) {
            // (1) Fix successor/substack/input relation of the parent.
            if (toDelete.isTosInSubstackOf(parent)) {
                parent.setSubstack(next);
            } else if (toDelete.isTosInSubstack2Of(parent)) {
                parent.setSubstack2(next);
            } else if (toDelete.isInputOf(parent)) {
                parent.deleteInputBlock(toDelete, mode !== "single");
            } else if (parent.getNextID() === toDelete.blockID) {
                parent.setNext(next);
            }
        }

        if (next) {
            // (2) Fix parent relation of `next`.
            next.setParent(parent);

            // (3) If the deleted block was already toplevel, `next` must now be toplevel also.
            if (toDelete.isTopLevel()) {
                this._moveTopLevelProperties(toDelete, next);
            }
        }

        // (4) Finally, delete the block itself, and if necessary its substacks and/or successor (next) blocks.
        const deleted = (() => {
            switch (mode) {
                case "single":
                    return toDelete.delete();
                case "cascadeSubstacks":
                    return toDelete.deleteCascadeSubstacks();
                case "cascade":
                    return toDelete.deleteCascade();
                default: {
                    // noinspection UnnecessaryLocalVariableJS
                    const exhaustivenessCheck: never = mode;
                    throw new Error(`Unhandled mode "${exhaustivenessCheck}"`);
                }
            }
        })();

        // (5) If the block was a dummy, also remove it from the map of dummy blocks.
        if (toDelete instanceof DummyProceduresCall) {
            this._dummyBlocks.delete(toDelete.target, toDelete);
        }

        // The public API of Assembler pretends shadow blocks are not real blocks. So we filter out their IDs here
        // to avoid confusing the user, who might not expect to see them in the output.
        return deleted
            .filter((block) => !block.isShadow())
            .map(({blockID}) => blockID);
    }

    /**
     * Deletes the specified block including all inputs, and in particular, all blocks in substacks, and returns their
     * block IDs. Like right-clicking on a block in the Scratch IDE, and selecting "Delete n Blocks".
     *
     * @param blockID the ID of the block to delete
     */
    public deleteBlock(blockID: BlockID): Array<BlockID> {
        const node = this._getNode(blockID);
        this._assertDelete(node);
        return this._deleteNode(node, "cascadeSubstacks");
    }

    private _deleteStmt(node: Node): Array<BlockID> {
        return this._deleteNode(node, "cascadeSubstacks");
    }

    /**
     * Deletes the specified `statement`, including all statements that appear in a `SUBSTACK` or `SUBSTACK2` input of
     * the `statement`, and returns their IDs.
     *
     * @param statement the ID of the statement to delete.
     */
    public deleteStmt(statement: BlockID): Array<BlockID> {
        return this.deleteBlock(statement);
    }

    private _deleteStack(start: Node, end: Node | null, createDummy: boolean): Array<BlockID> {
        const nodesToDelete = Array<Node>();

        for (const current of start) {
            nodesToDelete.push(current);

            if (current === end) { // end is inclusive
                break;
            }
        }

        if (createDummy) {
            nodesToDelete.shift();
        }

        const deletedBlocks = new Array<BlockID>();

        for (const node of nodesToDelete) {
            const deleted = this._deleteNode(node, "cascadeSubstacks");
            deletedBlocks.push(...deleted);
        }

        if (createDummy) {
            const deleted = this._replaceWithDummy(start);
            deletedBlocks.push(...deleted);
        }

        return deletedBlocks;
    }

    private _canDeleteStack(start: Node, end: Node | null): boolean {
        return this._validateDeleteStack(start, end).isValid;
    }

    private _validateDeleteStack(start: Node, end: Node | null): ValidationResult {
        for (const current of [...start]) {
            const result = this._validateDelete(current);

            if (result.isValid === false) {
                return result;
            }

            if (current === end) {
                break;
            }
        }

        return valid();
    }

    /**
     * Starting at the specified block, deletes all attached blocks recursively until the end (inclusive), and returns
     * their block IDs. The end defaults to the very end of the script the `start` belongs to. Like splitting the script
     * at the given blocks, and dragging the resulting unconnected script fragment into the toolbox on the left-hand
     * side in the Scratch IDE. The optional parameter `createDummy` tells whether a dummy no-op Scratch block shall be
     * inserted in place of the deleted blocks. This defaults to `false`. The dummy block will inherit its block ID from
     * the deleted `start`.
     *
     * @param start the ID of the block where the deletion should start
     * @param end the ID of the block where the deletion should end. Use `null` for the end of the script.
     * @param createDummy whether to insert a no-op block in place of the deleted blocks
     */
    public deleteStack(start: BlockID, end: BlockID | null, createDummy: boolean = false): Array<BlockID> {
        const startNode = this._getNode(start);
        const endNode = end === null ? null : this._getNode(end);

        this._validateDeleteStack(startNode, endNode);

        return this._deleteStack(startNode, endNode, createDummy);
    }

    /**
     * Deletes the specified script, and returns the IDs of all blocks that were deleted. The script is identified by
     * the ID of its root block. Like grabbing a script at its root and dragging it back into the toolbox in the Scratch
     * IDE. Throws an error if the specified root is not toplevel. Use `deleteStack` instead.
     *
     * @param script the script to delete
     * @see deleteStack
     */
    public deleteScript(script: BlockID): Array<BlockID> {
        let node = null;

        try {
            node = this._getNode(script);
        } catch (e) {
            if (e instanceof NoSuchBlockError) {
                throw new NoSuchScriptError(e);
            }

            throw e;
        }

        if (!node.isTopLevel()) {
            throw new NoSuchScriptError(script);
        }

        return this._deleteStack(node, null, false);
    }

    /**
     * Deletes the specified sprite. This includes all its scripts, blocks, local variables, and local lists. Throws if
     * attempting to delete the stage.
     *
     * @param spriteName the sprite to delete
     */
    public deleteSprite(spriteName: UniqueTargetName): void {
        const target = this._getTarget(spriteName);

        if (spriteName === STAGE_NAME) {
            throw new InvalidTargetError("The stage cannot be deleted");
        }

        const targets = this._project.targets;
        const idx = targets.findIndex((tgt) => tgt === target);

        const layerOrder = targets[idx].layerOrder;

        // Delete sprite.
        Arrays.removeAt(targets, idx);
        this._dummyBlocks.delete(target);

        // Close gaps in the layer order, for example: [1,2,4,5] -> [1,2,3,4]
        targets.forEach((target) => {
            if (target.layerOrder > layerOrder) {
                target.layerOrder--;
            }
        });
    }

    private _validateUnwrapStack(node: Node): ValidationResult {
        if (!node.isCBlock()) {
            return invalid("Block to unwrap is not a C-block");
        }

        const result = this._validateDelete(node);

        if (!result.isValid) {
            return result;
        }

        const tos1 = (node as BlockNode).getSubstack();
        const tos2 = (node as BlockNode).getSubstack2();

        if (tos1 === null && tos2 === null) {
            // No substack present, nothing to unwrap.
            return valid();
        }

        // The stack can only be unwrapped if it doesn't end in a cap-block or the C-block doesn't have a next block.

        const bos1 = tos1 === null ? null : tos1.getLast();
        const bos2 = tos2 === null ? null : tos2.getLast();

        const next = node.getNext();

        if (tos1 !== null && tos2 === null) { // Only SUBSTACK present.
            if (next !== null && !canConnect(bos1, next)) {
                return invalid("Cannot connect SUBSTACK to next block");
            }
        } else if (tos1 === null && tos2 !== null) { // Only SUBSTACK2 present.
            if (next !== null && !canConnect(bos2, next)) {
                return invalid("Cannot connect SUBSTACK2 to next block");
            }
        } else { // Both substacks present.
            if (!canConnect(bos1, tos2)) {
                return invalid("Cannot connect SUBSTACK to SUBSTACK2");
            }

            if (next !== null && !canConnect(bos2, next)) {
                return invalid("Cannot connect SUBSTACK2 to next block");
            }
        }

        return valid();
    }

    private _assertUnwrapStack(node: Node): void {
        const validationResult = this._validateUnwrapStack(node);
        if (validationResult.isValid === false) {
            throw new InvalidBlockError(validationResult.reason);
        }
    }

    public canUnwrapStack(blockID: BlockID): boolean {
        const node = this._getNode(blockID);
        return this._validateUnwrapStack(node).isValid;
    }

    public unwrapStack(cBlock: BlockID): Array<BlockID> {
        const node = this._getNode(cBlock);
        this._assertUnwrapStack(node);
        return this._deleteNode(node, "single");
    }

    //endregion
    //------------------------------------------------------------------------------------------------------------------
    //region Insertion

    /**
     * Returns all locations in the project where the given statements can be inserted. The optional parameter
     * `excludedNeighbor` can be used to exclude a location from the results.
     *
     * @param statements meta information about the statements to insert
     * @param excludedNeighbor an insertion point to exclude (optional)
     */
    public getStmtInsertionPoints(statements: BlockMeta, excludedNeighbor?: BlockID): Array<StmtInsertionPoint> {
        const root = statements.blocks[statements.rootID];

        if (!isStackableBlock(root)) {
            return [];
        }

        const canInsertAt = (statement: BlockNode, adjacency: Adjacency) => {
            if (this._canInsertBlock(statement, statements, adjacency)) {
                if (excludedNeighbor) {
                    const neighbor = statement.getNeighbor(adjacency);
                    if (neighbor && neighbor.blockID === excludedNeighbor) {
                        return false;
                    }
                }
                return true;
            }
            return false;
        };

        const insertionPoints = Array<StmtInsertionPoint>();

        /*
         * For two blocks [A, B] in a `parent`-`next`-relationship, the insertion of another block C between A and B
         * could be achieved by inserting C as `next` of A, or `parent` of B. Both result in [A, C, B]. To avoid
         * ambiguous representation of the same insertion point (the one between A and B), we always prefer insertion
         * as `next` over `parent`. The latter is only needed when inserting above toplevel blocks. Sometimes, we want
         * to insert above the root block of a SUBSTACK(2). We could again use insertion as `parent` for this, as it is
         * conceptually similar to insertion above a toplevel block. However, this fails when the SUBSTACK(2) is
         * empty. Instead, we do the opposite, and also consider insertion as `SUBSTACK` and `SUBSTACK2` whenever we
         * insert as `next`.
         */

        for (const statement of this._getStmts()) {
            const blockID = statement.blockID;

            if (excludedNeighbor && blockID === excludedNeighbor) {
                continue;
            }

            if (statement.isTopLevel() && canInsertAt(statement, "parent")) {
                insertionPoints.push({blockID, key: "parent"});
            }

            for (const key of ["next", "SUBSTACK", "SUBSTACK2"] as Array<Adjacency>) {
                if (canInsertAt(statement, key)) {
                    insertionPoints.push({blockID, key});
                }
            }
        }

        return insertionPoints;
    }

    /**
     * Returns all locations in the project where the given inputs can be inserted.
     *
     * @param inputs meta information about the inputs to insert
     */
    public getInputInsertionPoints(inputs: InputMeta): Array<InputSelector> {
        const insertionPoints = Array<InputSelector>();

        for (const insertionPoint of this._getNodes()) {
            for (const key of inputKeys) {
                if (this._canInsertInput(insertionPoint, key, inputs)) {
                    insertionPoints.push({blockID: insertionPoint.blockID, key});
                }
            }
        }

        return insertionPoints;
    }

    /**
     * Returns all locations in the project where the given expression can be inserted.
     *
     * @param expression meta information about the expression to insert
     */
    public getExprInsertionPoints(expression: Meta): Array<ConnectedExprSelector> {
        const insertionPoints = Array<ConnectedExprSelector>();

        for (const insertionPoint of this._getNodes()) {
            for (const key of exprKeys) {
                if (this._canInsertInput(insertionPoint, key, expression)) {
                    insertionPoints.push({blockID: insertionPoint.blockID, key});
                }
            }
        }

        return insertionPoints;
    }

    /**
     * Returns all locations in the project where the given blocks can be inserted as input.
     *
     * @param blocks meta information about the blocks to insert
     */
    public getInputInsertionPointsForBlock(blocks: BlockMeta): Array<InputSelector> {
        const insertionPoints = Array<InputSelector>();

        for (const node of this._getNodes()) {
            if (node instanceof VarListNode) {
                continue;
            }

            for (const key of getInputKeys(node.block.opcode)) {
                if (this._canInsertBlock(node, blocks, key)) {
                    insertionPoints.push({blockID: node.blockID, key});
                }
            }
        }

        return insertionPoints;
    }

    /**
     * Returns all locations in the project where the given blocks can be inserted.
     *
     * @param blocks meta information about the blocks to insert
     */
    public getBlockInsertionPoints(blocks: BlockMeta): Array<UniqueTargetName | StmtInsertionPoint | InputSelector> {
        return [
            ...this.getInputInsertionPointsForBlock(blocks), // also handles SUBSTACK and SUBSTACK2
            ...this.getScriptInsertionPoints(blocks),
            ...this.getStmtInsertionPoints(blocks)
                .filter(({key}) => !(key === "SUBSTACK" || key === "SUBSTACK2")), // already handled
        ];
    }

    /**
     * Returns the targets where the given blocks can be inserted as new script.
     *
     * @param newScript the blocks to insert
     */
    public getScriptInsertionPoints(newScript: BlockMeta): Array<UniqueTargetName> {
        return this._getTargets()
            .filter((target) => this._canInsertScript(target, newScript))
            .map((target) => getUniqueName(target));
    }

    /**
     * Inserts the given blocks at the specified position, and returns the new IDs of the inserted blocks.
     *
     * @param insertionPoint where to insert
     * @param blocks metadata about the blocks to insert
     */
    public insertBlock(insertionPoint: UniqueTargetName | StmtInsertionPoint | InputSelector, blocks: BlockMeta): ChangedStmts {
        if (typeof insertionPoint === "string") {
            const renamed = this.insertScript(insertionPoint, blocks);
            return {
                renamed,
                deleted: [],
            };
        } else if (insertionPoint.key === "parent" || insertionPoint.key === "next") {
            const renamed = this.insertStmt(insertionPoint, blocks);
            return {
                renamed,
                deleted: [],
            };
        } else {
            return this.insertBlockAsInput(insertionPoint as InputSelector, blocks);
        }
    }

    private _insertStmt(node, stmts, key): Record<BlockID, BlockID> {
        if (key === "parent") {
            return this._insertAsParent(node, stmts);
        } else {
            return this._insertAsChild(node, stmts, key);
        }
    }

    /**
     * Inserts the statements at the specified position, and returns the new IDs of the inserted statements. Existing
     * statements are not replaced. For example, if inserting as `"parent"`, the old parent of `blockID` becomes the new
     * parent of `stmts`, and `stmts` becomes the new parent of `blockID`. If the insertion point is a dummy block
     * (refer to the documentation of `deleteStack()`) the optional parameter `replaceDummy` governs if this dummy
     * shall be removed after insertion (`false`, the default) or retained (`true`). The block ID of the dummy is not
     * retained.
     *
     * @param blockID the ID of the existing statement where to insert
     * @param key how to insert the new statements: as `"parent"`, `"next"`, `"SUBSTACK"`, or `"SUBSTACK2"`
     * @param stmts metadata about the new statements to insert
     * @param replaceDummy if the insertion point is a dummy, whether to delete (`true`) or keep it (`false`, default)
     */
    public insertStmt({
                          blockID,
                          key
                      }: StmtInsertionPoint, stmts: BlockMeta, replaceDummy: boolean = false): Record<BlockID, BlockID> {
        const node = this._getNode(blockID);
        this._assertInsertBlock(node, key, stmts);
        const renamed = this._insertStmt(node, stmts, key);

        if (replaceDummy && node instanceof DummyProceduresCall) {
            this._deleteNode(node, "single");
        }

        return renamed;
    }

    /**
     * Inserts the new expression at the specified position, and returns the new IDs of the inserted expression blocks.
     * Existing expressions might be replaced (if they are blocks) or obscured (if they are primitive inputs or shadow
     * blocks).
     *
     * @param insertionPoint where to insert
     * @param expression the expression to insert
     */
    public insertExpr(insertionPoint: ConnectedExprSelector, expression: Meta): ChangedStmts {
        return this.insertInput(insertionPoint, expression);
    }

    /**
     * Inserts the given blocks as a new script in the target, and returns the new IDs of the inserted blocks.
     *
     * @param targetName the target where to insert
     * @param script metadata about the script to insert
     */
    public insertScript(targetName: UniqueTargetName, script: BlockMeta): Record<BlockID, BlockID> {
        const target = this._getTarget(targetName);
        this._assertInsertScript(target, script);
        const {root, renamed} = this._insertBlock(target, script);
        root.makeStandaloneScript();
        return renamed;
    }

    /**
     * Inserts the given blocks as parent of the insertion point, and returns the new IDs of the inserted blocks. Note
     * an existing parent is not replaced, but becomes the parent of the inserted blocks.
     *
     * @param next where to insert
     * @param parent the blocks to insert as parent
     */
    private _insertAsParent(next: BlockNode, parent: BlockMeta): Record<BlockID, BlockID> {
        this._assertInsertBlock(next, "parent", parent);
        const wasTopLevel = next.isTopLevel();

        // (1) Create a WrappedBlock with a fresh ID. This also makes it known to the target script/stage.
        const {root, last, renamed} = this._insertBlock(next.target, parent);
        if (root instanceof VarListNode || last instanceof VarListNode) {
            return renamed; // root === last by construction, and no connections are possible
        }

        // (2) Adjust parent/child relations, and top-level properties if necessary.
        const oldParent = next.getParent();
        root.setParent(oldParent);
        last.setNext(next);
        next.setParent(last);

        if (wasTopLevel) {
            this._moveTopLevelProperties(next, root);
            return renamed;
        }

        const childKey = next.isTosInSubstackOf(oldParent) ? "SUBSTACK" :
            next.isTosInSubstack2Of(oldParent) ? "SUBSTACK2" : "next";
        oldParent.setChildByKey(childKey, root);
        root.setNonTopLevel();

        return renamed;
    }

    private _insertAsChild(parent: BlockNode, child: BlockMeta, key: "next" | "SUBSTACK" | "SUBSTACK2"): Record<BlockID, BlockID> {
        const {root, last, renamed} = this._insertBlock<BlockNode>(parent.target, child);
        const oldChild = parent.getNeighbor(key);
        parent.setChildByKey(key, root);
        root.setParent(parent);
        last.setNext(oldChild);
        if (oldChild) {
            oldChild.setParent(last);
        }
        root.setNonTopLevel();

        return renamed;
    }

    /**
     * Inserts the given blocks as input of the specified block, and returns the new IDs of the inserted blocks. In case
     * of insertion as `"SUBSTACK"` or `"SUBSTACK2"`, the new stack is concatenated with the existing stack. In all
     * other cases, and an existing input will be replaced with the new input, or preferably, shadowed if possible.
     *
     * @param blockID the ID of the block where to insert
     * @param key how to insert (which input of the block?)
     * @param inputBlocks the blocks to insert as input
     */
    public insertBlockAsInput({blockID, key}: InputSelector, inputBlocks: BlockMeta): ChangedStmts {
        const node = this._getNode<BlockNode>(blockID);
        this._assertInsertBlock(node, key, inputBlocks);
        return this._insertBlockAsInput(node, key, inputBlocks);
    }

    private _insertBlockAsInput(parent: BlockNode, key: InputKey, input: BlockMeta): ChangedStmts {
        // Note: inserting a block as input usually replaces the existing input, except for SUBSTACK(2), where we
        // attempt to connect the new input to the existing input. This behavior is consistent with the Scratch IDE.
        if (key === "SUBSTACK" || key === "SUBSTACK2") {
            const renamed = this._insertAsChild(parent, input, key);
            return {
                renamed,
                deleted: [],
            };
        }

        // (1) Check if we are about to insert a regular block, or a variable/list block.
        const block = input.blocks[input.rootID];
        const isVarList = isTopLevelDataBlock(block);

        // (2) The metadata of a regular block can be inserted as usual. In case of a variable/list block,
        //     input.blocks will have just a single entry – the block itself. We don't want to insert it as toplevel
        //     block, but as input, so we use an empty input.blocks.
        const meta: BlockMeta = {...input, ...(isVarList && {blocks: empty<ScratchBlock>()})};
        const renamed = this._insertMeta(parent.target, meta);

        // (3) Insert the block as input.
        const oldInput = isVarList
            ? parent.setVarListBlockAsInput(key, block)
            : parent.setBlockAsInput(key, renamed[input.rootID]);

        // (4) Delete all blocks the old input might have referred to.
        const deleted = new Array<BlockID>();
        if (oldInput) {
            deleted.push(...this._deleteNode(oldInput, "cascade"));
        }

        // (5) Update the parent of the inserted block.
        if (!isVarList) {
            const insertedBlock = this._getNode<BlockNode>(renamed[input.rootID]);
            insertedBlock.setParent(parent);
            insertedBlock.setNonTopLevel();
        }

        return {
            renamed,
            deleted,
        };
    }

    private _insertInput(node: BlockNode, key: InputKey, inputMeta: InputMeta, replace: boolean): ChangedStmts {
        // (0) Special handling for SUBSTACK(2): Do not delete an existing SUBSTACK(2), but concatenate the new input
        //     with it. This is how the Scratch IDE does it, and it is consistent to insertBlocksAsInput(),
        //     insertAsSubstack(), etc.
        if (key === "SUBSTACK" || key === "SUBSTACK2") {
            return this._insertBlockAsInput(node, key, toBlockMeta(inputMeta));
        }

        // (1) If possible, delete the old input and any blocks it might be referring to.
        let deleted = new Array<BlockID>();
        if (node.canDeleteInput(key)) {
            deleted = this._deleteInput(node, key);
        }

        // (2) Insert all metadata into the target.
        const renamed = this._insertMeta(node.target, inputMeta);

        const input = deepCopy<Input>(inputMeta.input);
        for (const [idx, oldID] of getBlockIDs(input).entries()) {
            // (3) Update the blockID the input refers to.
            const blockID = renamed[oldID];
            input[idx + 1] = blockID;

            // (4) Update the parent property of the input block. An obscured block (idx !== 0) is toplevel, therefore
            //     its parent must be null.
            const inputBlock = this._getNode<BlockNode>(blockID);
            inputBlock.setParent(idx === 0 ? node : null);
        }

        // (5) Finally, set the new input on the block.
        node.setInput(key, input, replace);

        return {
            renamed,
            deleted,
        };
    }

    /**
     * Inserts the given input into the specified block, and returns the new IDs of the inserted input blocks. In case
     * of `"SUBSTACK"` and `"SUBSTACK2"`, the new stack is concatenated with the existing stack. In all other cases, an
     * existing input will be replaced with the new input, or preferably, shadowed if possible.
     *
     * @param parent the block for which to set the input
     * @param meta metadata about the input to use
     */
    public insertInput({blockID, key}: InputSelector, meta: Meta): ChangedStmts {
        const node = this._getNode<BlockNode>(blockID);

        this._assertInsertInput(node, key, meta);

        if (meta.type === "Block") {
            return this._insertBlockAsInput(node, key, meta);
        } else {
            return this._insertInput(node, key, meta, false);
        }
    }

    private _insertBlock<T extends Node = Node>(target: WrappedTarget, block: BlockMeta): InsertionMeta<T> {
        const renamed = this._insertMeta(target, block);

        // Extract the root node and last node of the inserted stack for further processing.
        const rootID = renamed[block.rootID];
        const lastID = renamed[block.lastID];

        return {
            root: target.blocks[rootID] as T,
            last: target.blocks[lastID] as T,
            renamed,
        };
    }

    private _insertMeta(target: WrappedTarget, meta: Meta): Record<BlockID, BlockID> {
        const {blocks, variables, stageVariables, lists, stageLists, broadcasts} = meta;
        const stage = this._getStage();

        // A mapping from old IDs needing to be renamed to new IDs. For blocks, variables, lists, and broadcasts.
        const blocksToRename = empty<BlockID>();
        const varListsToRename = empty<VariableID>();
        const broadcastsToRename = empty<string>();

        // Insert all global variables, and track which variable IDs need to be renamed.
        for (const variable of Object.entries(stageVariables)) {
            this._insertVarList(stage, variable, varListsToRename, "variables");
        }

        // Insert all global lists, and track which list IDs need to be renamed.
        for (const list of Object.entries(stageLists)) {
            this._insertVarList(stage, list, varListsToRename, "lists");
        }

        // Insert all local variables/lists, and track which variable IDs need to be renamed.
        if (!target.isStage) {
            for (const variable of Object.entries(variables)) {
                this._insertVarList(target, variable, varListsToRename, "variables");
            }

            for (const list of Object.entries(lists)) {
                this._insertVarList(target, list, varListsToRename, "lists");
            }
        }

        // Insert all broadcasts, and track which broadcast IDs need to be renamed.
        for (const broadcast of Object.entries(broadcasts)) {
            this._insertBroadcast(broadcast, broadcastsToRename);
        }

        // Preventatively generate new IDs for the blocks we are about to insert, to avoid name clashes.
        for (const blockID of Object.keys(blocks)) {
            blocksToRename[blockID] = this._generateFreshID(blockID);
        }

        // Now that we have collected all IDs that need to be renamed, actually do the renaming.
        const renamedBlocks = renameIDs(blocks, {
            ...blocksToRename,
            ...varListsToRename,
            ...broadcastsToRename,
        });

        // Insert the new blocks.
        for (const [newID, block] of Object.entries(renamedBlocks)) {
            target.blocks[newID] = node(newID, block, target, this._project);
        }

        // Return the new block IDs (omitting variables, lists and broadcasts).
        return blocksToRename;
    }

    private _insertVarList(
        target: WrappedTarget,
        [newID, newVarOrList]: Pair<VariableID, Variable> | Pair<ListID, List>,
        toRename: Record<VariableID, VariableID> | Record<ListID, ListID>,
        key: "variables" | "lists",
    ): void {
        const name = varOrListName(newVarOrList);
        const varsOrLists = target[key];

        if (newID in varsOrLists && varOrListName(varsOrLists[newID]) === name) {
            // There's already a variable with the same id and name -> nothing needs to be done.
            return;
        }

        for (const [id, varOrList] of Object.entries(varsOrLists)) {
            if (name === varOrListName(varOrList)) {
                // There are two variables/lists with the same name but different IDs. Likely, these are meant to be the
                // same variable/list, so we just rename newID to id. This means the inserted blocks will then reuse the
                // already existing variable/list of the target.
                toRename[newID] = id;
                return;
            }

            if (newID === id) {
                // There are two variables/lists with the same ID but different names. Likely, these are meant to be
                // different variables/lists, so we rename newID to something fresh, and insert it as a new variable
                // into the target.
                const fresh = this._generateFreshID(newID);
                toRename[newID] = fresh;
                varsOrLists[fresh] = newVarOrList;
                return;
            }
        }

        // The variable's ID and name are new -> it's a new variable, just insert it.
        varsOrLists[newID] = newVarOrList;
    }

    private _insertBroadcast([newID, newMessage]: Pair<BroadcastID, string>, toRename: Record<BroadcastID, BroadcastID>): void {
        const broadcasts = this._getStage().broadcasts;

        if (newID in broadcasts && broadcasts[newID] === newMessage) {
            // Broadcast with the same ID and message is already there, so nothing to do.
            return;
        }

        for (const [id, message] of Object.entries(broadcasts)) {
            if (message === newMessage) {
                // The broadcasts have different IDs but the same message. Likely, they are meant to be the same
                // broadcast. We rename the newID to the already existing id, thus unifying the two broadcasts, and
                // reusing the already existing broadcast.
                toRename[newID] = id;
                return;
            }

            if (id === newID) {
                // The two broadcasts have the same ID but different messages. Likely, they are meant to be different
                // broadcasts. Rename newID to something fresh, and insert the new broadcast.
                const fresh = this._generateFreshID(newID);
                toRename[newID] = fresh;
                broadcasts[fresh] = newMessage;
                return;
            }
        }

        // The broadcast doesn't exist yet and must be inserted.
        broadcasts[newID] = newMessage;
    }

    private _validateInsertInput(insertionPoint: Node, key: InputKey, newInputs: Meta): ValidationResult {
        if (newInputs.type === "Block") {
            return this._validateInsertBlock(insertionPoint, key, newInputs);
        }

        const {input: [shadowType], input} = newInputs;

        for (const block of Object.values(newInputs.blocks)) {
            if (!canBeOnTheStage(block)) {
                return invalid(`Cannot insert "${opcode(block)}" on the stage`);
            }
        }

        if (shadowType === shadowTypes.noShadow) {
            return this._validateInsertBlock(insertionPoint, key, toBlockMeta(newInputs));
        }

        if (shadowType === shadowTypes.unobscuredShadow || shadowType === shadowTypes.obscuredShadow) {
            const parent = insertionPoint.block;
            if (canBeInput(parent, key, input)) {
                return valid();
            } else {
                const inputStr = JSON.stringify(input);
                return invalid(`The input "${key}" of "${opcode(parent)}" does not support "${inputStr}"`);
            }
        }

        // noinspection UnnecessaryLocalVariableJS
        const exhaustivenessCheck: never = shadowType;
        throw new Error(`Unhandled shadow type "${exhaustivenessCheck}"`);
    }

    private _canInsertInput(insertionPoint: Node, key: InputKey, newInputs: Meta): boolean {
        return this._validateInsertInput(insertionPoint, key, newInputs).isValid;
    }

    private _assertInsertInput(insertionPoint: Node, key: InputKey, newInputs: Meta): void {
        const result = this._validateInsertInput(insertionPoint, key, newInputs);
        if (result.isValid === false) {
            throw new InvalidInputError(result.reason);
        }
    }

    private _validateInsertScript(insertionPoint: WrappedTarget, newBlocks: BlockMeta): ValidationResult {
        const canInsertOnTarget = insertionPoint.isStage ? canBeOnTheStage : canBeOnSprite;
        for (const block of Object.values(newBlocks.blocks)) {
            if (!canInsertOnTarget(block)) {
                const targetName = insertionPoint.isStage ? "the stage" : "a sprite";
                return invalid(`Cannot insert "${opcode(block)}" on ${targetName}`);
            }
        }

        const root = newBlocks.blocks[newBlocks.rootID];

        // Insertion of block as new script is always valid (as long as it is not a shadow block).
        if (isBlock(root) && root.shadow) {
            return invalid(`Shadow block "${root.opcode}" cannot be inserted as new script`);
        }

        return valid();
    }

    private _canInsertScript(insertionPoint: WrappedTarget, newBlocks: BlockMeta): boolean {
        return this._validateInsertScript(insertionPoint, newBlocks).isValid;
    }

    private _assertInsertScript(insertionPoint: WrappedTarget, newBlocks: BlockMeta): void {
        const result = this._validateInsertScript(insertionPoint, newBlocks);
        if (result.isValid === false) {
            throw new InvalidScriptError(result.reason);
        }
    }

    private _validateInsertBlock(
        insertionPoint: Node,
        mode: InputKey | Adjacency,
        newBlocks: BlockMeta
    ): ValidationResult {
        // Certain blocks must not be inserted on the stage/a sprite.
        const canInsertOnTarget = insertionPoint.target.isStage ? canBeOnTheStage : canBeOnSprite;
        for (const block of Object.values(newBlocks.blocks)) {
            if (!canInsertOnTarget(block)) {
                const targetName = insertionPoint.target.isStage ? "the stage" : "a sprite";
                return invalid(`Cannot insert "${opcode(block)}" on ${targetName}`);
            }
        }

        const root = newBlocks.blocks[newBlocks.rootID];

        // All insertion modes other than "new" require a BlockID.
        if (!("blockID" in insertionPoint)) {
            return invalid(`Insertion mode "${mode}" requires a block, not a target`);
        }

        if (root instanceof VarListNode) {
            return invalid(`Cannot insert into variable/list block`);
        }

        const last = newBlocks.blocks[newBlocks.lastID];

        if (mode === "parent") {
            const parent = insertionPoint.getParent();

            if (!canConnect(parent, root)) {
                return invalid(`Cannot connect "${opcode(parent)}" to "${opcode(root)}"`);
            }

            if (!canConnect(last, insertionPoint)) {
                return invalid(`Cannot connect "${opcode(last)}" to "${opcode(insertionPoint)}"`);
            }

            return valid();
        }

        if (mode === "next") {
            const next = insertionPoint.getNext();

            if (!canConnect(insertionPoint, root)) {
                return invalid(`Cannot connect "${opcode(insertionPoint)}" to "${opcode(root)}"`);
            }

            if (!canConnect(last, next)) {
                return invalid(`Cannot connect "${opcode(last)}" to "${opcode(next)}"`);
            }

            return valid();
        }

        if (!canBeInput(insertionPoint, mode, root)) {
            return invalid(`Cannot insert "${opcode(root)}" as "${mode}" of "${opcode(insertionPoint)}"`);
        }

        if (mode === "SUBSTACK" || mode === "SUBSTACK2") {
            const head = insertionPoint.getInputNode(mode);

            if (!canConnect(last, head)) {
                return invalid(`Cannot connect "${opcode(last)}" to "${opcode(head)}"`);
            }

            return valid();
        }

        // Only SUBSTACK(2) supports the insertion of a stack of blocks. All other inputs must be single, non-stacked
        // blocks (albeit there may very well be nested blocks).
        if (newBlocks.lastID !== newBlocks.rootID) {
            return invalid(`A stack of blocks cannot be inserted as "${mode}"`);
        }

        return valid();
    }

    private _assertInsertBlock(insertionPoint: Node, mode: Adjacency | InputKey, newBlocks: BlockMeta): void {
        const result = this._validateInsertBlock(insertionPoint, mode, newBlocks);
        if (result.isValid === false) {
            throw new InvalidBlockError(result.reason);
        }
    }

    private _canInsertBlock(
        relative: Node,
        blocks: BlockMeta,
        mode: Adjacency | InputKey
    ): boolean {
        return this._validateInsertBlock(relative, mode, blocks).isValid;
    }

    //endregion
    //------------------------------------------------------------------------------------------------------------------
    //region Replacement

    private _validateReplaceBlock(oldBlock: Node, newBlocks: BlockMeta): ValidationResult {
        return this._validateReplaceStackOrReporter(oldBlock, oldBlock, newBlocks);
    }

    private _canReplaceBlock(oldBlock: Node, newBlock: BlockMeta): boolean {
        return this._validateReplaceBlock(oldBlock, newBlock).isValid;
    }

    public canReplaceBlock(oldBlock: BlockID, newBlock: BlockMeta): boolean {
        return this._canReplaceBlock(this._getNode(oldBlock), newBlock);
    }

    public canReplaceStmt(oldStmt: BlockID, newStmt: BlockMeta): boolean {
        return this.canReplaceBlock(oldStmt, newStmt);
    }

    private _assertReplaceBlock(oldBlock: Node, newBlock: BlockMeta): void {
        const result = this._validateReplaceBlock(oldBlock, newBlock);
        if (result.isValid === false) {
            throw new InvalidBlockError(result.reason);
        }
    }

    private _replaceBlock(old: Node, newBlocks: BlockMeta): ChangedStmts {
        return this._replaceStack(old, old, newBlocks);
    }

    /**
     * Replaces the specified block with the given new blocks. Returns the new IDs of the inserted blocks (mapping from
     * old ID to new ID) and the IDs of all replaced (deleted) blocks. Like deleting the old block, and inserting the
     * new blocks at its place. Unlike `insertBlock` or `insertStmt`, an existing `"SUBSTACK"` or `"SUBSTACK2"` will be
     * deleted beforehand.
     *
     * @param oldBlock the ID of the block to replace
     * @param newBlocks metadata about the blocks to insert
     */
    public replaceBlock(oldBlock: BlockID, newBlocks: BlockMeta): ChangedStmts {
        const old = this._getNode(oldBlock);
        this._assertReplaceBlock(old, newBlocks);
        return this._replaceBlock(old, newBlocks);
    }

    /**
     * Alias for `replaceBlock`.
     *
     * @see replaceBlock
     */
    public replaceStmt(oldStmt: BlockID, newStmts: BlockMeta): ChangedStmts {
        return this.replaceBlock(oldStmt, newStmts);
    }

    private _validateReplaceStackOrReporter(start: Node, end: Node, newStack: BlockMeta): ValidationResult {
        if (![...start].includes(end)) {
            return invalid(`Expected end block "${end}" to be part of the stack of "${start}"`);
        }

        const parent = start.getParent();
        const next = end.getNext();

        const validationResult = (() => {
            if (parent) {
                const inputKey = start.isInputOf(parent);
                if (inputKey) {
                    return this._validateInsertInput(parent, inputKey, newStack);
                } else {
                    return this._validateInsertBlock(parent, "next", newStack);
                }
            } else if (next) {
                return this._validateInsertBlock(next, "parent", newStack);
            } else {
                return this._validateInsertScript(start.target, newStack);
            }
        })();

        if (validationResult.isValid === false) {
            return validationResult;
        }

        return this._validateDeleteStack(start, end);
    }

    private _canReplaceStack(start: BlockNode, end: BlockNode, newStack: BlockMeta): boolean {
        return this._validateReplaceStackOrReporter(start, end, newStack).isValid;
    }

    public canReplaceStack(start: BlockID, end: BlockID, newStack: BlockMeta): boolean {
        const startNode = this._getNode<BlockNode>(start);
        const endNode = this._getNode<BlockNode>(end);

        if (startNode.isReporterBlock() || endNode.isReporterBlock()) {
            return false;
        }

        return this._canReplaceStack(startNode, endNode, newStack);
    }

    private _assertReplaceStack(start: BlockNode, end: BlockNode, newStack: BlockMeta): void {
        const result = this._validateReplaceStackOrReporter(start, end, newStack);
        if (result.isValid === false) {
            throw new ValidationError(result.reason);
        }
    }

    private _replaceStack(start: Node, end: Node, newBlocks: BlockMeta): ChangedStmts {
        const parent = start.getParent();
        const next = end.getNext();

        const {renamed, deleted: deletedInputs = []} = (() => {
            if (parent) {
                const inputKey = start.isInputOf(parent);
                if (inputKey) {
                    return this._insertBlockAsInput(parent, inputKey, newBlocks);
                } else {
                    return {
                        renamed: this._insertAsChild(parent, newBlocks, "next")
                    };
                }
            } else if (next) {
                return {
                    renamed: this._insertAsParent(next, newBlocks)
                };
            } else {
                return {
                    renamed: this.insertScript(getUniqueName(start.target), newBlocks)
                };
            }
        })();

        const deletedStack = this._deleteStack(start, end, false);
        const deleted = [...deletedInputs, ...deletedStack];

        return {
            renamed, // Maps the ID of every inserted block to the corresponding new, freshly generated ID
            deleted, // The IDs of all old blocks (in the project) that were replaced by the new blocks
        };
    }

    public replaceStack(start: BlockID, end: BlockID, newStack: BlockMeta): ChangedStmts {
        const startNode = this._getNode<BlockNode>(start);
        const endNode = this._getNode<BlockNode>(end);

        if (startNode.isReporterBlock()) {
            throw new InvalidBlockError(`Did not expect start block "${start}" to be a reporter`);
        }

        if (endNode.isReporterBlock()) {
            throw new InvalidBlockError(`Did not expect end block "${end}" to be a reporter`);
        }

        this._assertReplaceStack(startNode, endNode, newStack);

        return this._replaceStack(startNode, endNode, newStack);
    }

    private _validateReplaceInput(node: Node, key: InputKey | null, meta: Meta): ValidationResult {
        if (meta.type === "Input") {
            return this._validateInsertInput(node, key, meta);
        } else {
            return this._validateInsertBlock(node, key, meta);
        }
    }

    private _validateReplaceExpr(node: Node, key: ExprKey | null, meta: Meta): ValidationResult {
        if (key) {
            return this._validateReplaceInput(node, key, meta);
        }

        // Replacing a toplevel reporter block.

        if (meta.type === "Input") {
            return invalid(`A top-level reporter block cannot be replaced with a primitive input`);
        }

        return this._validateReplaceBlock(node, meta);
    }

    private _assertReplaceInput(node: Node, key: InputKey, meta: Meta): void {
        const result = this._validateReplaceInput(node, key, meta);
        if (result.isValid === false) {
            throw new InvalidInputError(result.reason);
        }
    }

    private _assertReplaceExpr(node: Node, key: ExprKey | null, meta: Meta): void {
        const result = this._validateReplaceExpr(node, key, meta);
        if (result.isValid === false) {
            throw new InvalidInputError(result.reason);
        }
    }

    public canReplaceInput({blockID, key}: InputSelector, meta: Meta): boolean {
        const node = this._getNode(blockID);
        return this._validateReplaceInput(node, key, meta).isValid;
    }

    public canReplaceExpr(expr: ExprSelector, meta: Meta): boolean {
        const node = this._getNode(expr.blockID);
        return this._validateReplaceExpr(node, expr.key ?? null, meta).isValid;
    }

    private _replaceInput(node: BlockNode, key: InputKey, meta: Meta): ChangedStmts {
        if (meta.type === "Input") {
            return this._insertInput(node, key, meta, true);
        } else {
            return this._insertBlockAsInput(node, key, meta);
        }
    }

    private _replaceExpr(node: Node, key: ExprKey | null, meta: Meta): ChangedStmts {
        if (key) {
            return this._replaceInput(node as BlockNode, key, meta);
        } else {
            // node is a toplevel reporter block, and meta must be a block, too // FIXME: this is no longer true!
            return this._replaceBlock(node, meta as BlockMeta);
        }
    }

    public replaceInput({blockID, key}: InputSelector, meta: Meta): ChangedStmts {
        const node = this._getNode<BlockNode>(blockID);
        this._assertReplaceInput(node, key, meta);
        return this._replaceInput(node, key, meta);
    }

    public replaceExpr(expr: ExprSelector, meta: Meta): ChangedStmts {
        const node = this._getNode(expr.blockID);
        this._assertReplaceExpr(node, expr.key ?? null, meta);
        return this._replaceExpr(node, expr.key ?? null, meta);
    }

    /**
     * Sets the value of the specified field to the given one.
     *
     * @param blockID the ID of the block that has the field
     * @param key the key to identify the field
     * @param value the new value to set
     */
    public setFieldValue({blockID, key}: FieldSelector, value: Field): void {
        const node = this._getNode(blockID);

        if (node instanceof VarListNode) {
            throw new InvalidBlockError(`Cannot set field on a variable/list block`);
        }

        node.setField(key, value);
    }

    /**
     * Sets the value of the specified drop-down menu to the given one.
     *
     * @param blockID the ID of the block that has the drop-down menu
     * @param key the key to identify the drop-down menu
     * @param value the new value to set
     */
    public setDropDownValue({blockID, key}: DropDownSelector, value: Field): void {
        const node = this._getNode(blockID);

        if (node instanceof VarListNode) {
            throw new InvalidBlockError(`Cannot set field on a variable/list block`);
        }

        if (key === "BROADCAST_INPUT") {
            const [shadowType, inputBlock] = node.block.inputs[key];
            const broadcast: BroadCastInput = [primitiveInputTypes.broadcast, ...value as Field2];

            if (shadowType === shadowTypes.unobscuredShadow) {
                const input: UnobscuredShadowInput = [shadowTypes.unobscuredShadow, broadcast];
                node.setInput(key, input, true);
            } else if (shadowType === shadowTypes.obscuredShadow) {
                const input: ObscuredShadowInput = [shadowTypes.obscuredShadow, inputBlock, broadcast];
                node.setInput(key, input, true);
            }
        } else {
            node.setField(key, value);
        }
    }

    //endregion
    //------------------------------------------------------------------------------------------------------------------
    //region Move

    private _validateMoveStmt(tgt: Node, key: Adjacency, node: Node): ValidationResult {
        return [
            this._validateDelete(node),
            this._validateInsertBlock(tgt, key, node.getBlockMeta()),
        ].reduce((valid1, valid2) => valid1.isValid ? valid2 : valid1);
    }

    private _canMoveStmt(tgt: Node, key: Adjacency, node: Node): boolean {
        return this._validateMoveStmt(tgt, key, node).isValid;
    }

    private _assertMoveStmt(tgt: Node, key: Adjacency, node: Node): void {
        const result = this._validateMoveStmt(tgt, key, node);
        if (result.isValid === false) {
            throw new ValidationError(result.reason);
        }
    }

    /**
     * Moves the statement with the given ID to the specified location, and returns its new ID.
     *
     * @param blockID the ID of the statement to move
     * @param targetID the ID of the target location
     * @param key how the statement should be moved to the target (as `"next"`, `"parent"`, `"SUBSTACK"` or
     * `"SUBSTACK2"` of the target)
     */
    public moveStmt(blockID: BlockID, {blockID: targetID, key}: StmtInsertionPoint): Record<BlockID, BlockID> {
        const stmt = this._getNode(blockID);
        const tgt = this._getNode(targetID);

        this._assertMoveStmt(tgt, key, stmt);

        const renamed = this._insertStmt(tgt, stmt.getBlockMeta(), key);
        this._deleteStmt(stmt);
        return renamed;
    }

    //endregion
    //------------------------------------------------------------------------------------------------------------------
    //region Swap

    private _validateSwapStmts(stmt1: Node, stmt2: Node): ValidationResult {
        if (stmt1 === stmt2) {
            return valid();
        }

        const meta1 = stmt1.getBlockMeta();
        const meta2 = stmt2.getBlockMeta();

        if ((meta2.rootID in meta1.blocks || meta1.rootID in meta2.blocks)) {
            return invalid('Cannot swap a block with its own children');
        }

        return [
            this._validateReplaceBlock(stmt1, meta2),
            this._validateReplaceBlock(stmt2, meta1),
        ].reduce((valid1, valid2) => valid1.isValid ? valid2 : valid1);
    }

    private _canSwapStmts(stmt1: Node, stmt2: Node): boolean {
        return this._validateSwapStmts(stmt1, stmt2).isValid;
    }

    public canSwapStmts(stmt1: BlockID, stmt2: BlockID): boolean {
        return this._canSwapStmts(this._getNode(stmt1), this._getNode(stmt2));
    }

    private _assertSwapStmts(stmt1: Node, stmt2: Node): void {
        const result = this._validateSwapStmts(stmt1, stmt2);
        if (result.isValid === false) {
            throw new ValidationError(result.reason);
        }
    }

    public swapStmts(stmt1: BlockID, stmt2: BlockID): ChangedStmts {
        const node1 = this._getNode(stmt1);
        const node2 = this._getNode(stmt2);

        this._assertSwapStmts(node1, node2);

        if (node1 === node2) { // swapping a statement with itself
            return {
                renamed: {[stmt1]: stmt2}, // Note that stmt1 === stmt2
                deleted: [],
            };
        }

        const meta1 = node1.getBlockMeta();
        const meta2 = node2.getBlockMeta();

        const changed1 = this.replaceStmt(stmt1, meta2);
        const changed2 = this.replaceStmt(stmt2, meta1);

        return {
            renamed: {...changed1.renamed, ...changed2.renamed},
            deleted: [...changed1.deleted, ...changed2.deleted],
        };
    }

    private _isSameExpr(node1: Node, key1: ExprKey, node2: Node, key2: ExprKey): boolean {
        if (node1 === node2 && key1 === key2) {
            return true;
        }

        return (
            (key1 && !key2 && node1.getInputNode(key1) === node2) ||
            (key2 && !key1 && node2.getInputNode(key2) === node1)
        );
    }

    public isSameExpr(expr1: ExprSelector, expr2: ExprSelector): boolean {
        const node1 = this._getNode(expr1.blockID);
        const node2 = this._getNode(expr2.blockID);
        return this._isSameExpr(node1, expr1.key, node2, expr2.key);
    }

    private _validateSwapExprs(
        node1: Node, key1: ExprKey | null, meta1: Meta,
        node2: Node, key2: ExprKey | null, meta2: Meta,
    ): ValidationResult {
        if (this._isSameExpr(node1, key1, node2, key2)) {
            return valid();
        }

        if (node1.blockID in meta2.blocks || node2.blockID in meta1.blocks) {
            return invalid('Cannot swap an expression with its own children');
        }

        return [
            this._validateReplaceExpr(node1, key1, meta2),
            this._validateReplaceExpr(node2, key2, meta1),
        ].reduce((valid1, valid2) => valid1.isValid ? valid2 : valid1);
    }

    public canSwapExprs(expr1: ExprSelector, expr2: ExprSelector): boolean {
        const node1 = this._getNode(expr1.blockID);
        const node2 = this._getNode(expr2.blockID);

        const meta1 = this.getExprMeta(expr1);
        const meta2 = this.getExprMeta(expr2);

        return this._canSwapExprs(
            node1, expr1.key, meta1,
            node2, expr2.key, meta2,
        );
    }

    private _canSwapExprs(
        node1: Node, key1: ExprKey | null, meta1: Meta,
        node2: Node, key2: ExprKey | null, meta2: Meta,
    ): boolean {
        return this._validateSwapExprs(
            node1, key1, meta1,
            node2, key2, meta2,
        ).isValid;
    }

    private _assertSwapExprs(
        node1: Node, key1: ExprKey | null, meta1: Meta,
        node2: Node, key2: ExprKey | null, meta2: Meta,
    ): void {
        const result = this._validateSwapExprs(
            node1, key1, meta1,
            node2, key2, meta2,
        );
        if (result.isValid === false) {
            throw new ValidationError(result.reason);
        }
    }

    public swapExprs(expr1: ExprSelector, expr2: ExprSelector): ChangedStmts {
        const node1 = this._getNode(expr1.blockID);
        const node2 = this._getNode(expr2.blockID);

        const meta1 = this.getExprMeta(expr1);
        const meta2 = this.getExprMeta(expr2);

        this._assertSwapExprs(
            node1, expr1.key, meta1,
            node2, expr2.key, meta2,
        );

        if (this._isSameExpr(node1, expr1.key, node2, expr2.key)) {
            return {
                deleted: [],
                renamed: {},
            };
        }

        const {renamed: renamed1, deleted: deleted1} = this._replaceExpr(node1, expr1.key, meta2);
        const {renamed: renamed2, deleted: deleted2} = this._replaceExpr(node2, expr2.key, meta1);

        return {
            renamed: {...renamed1, ...renamed2},
            deleted: [...deleted1, ...deleted2],
        };
    }

    //endregion
}

//------------------------------------------------------------------------------------------------------------------
//region Helper functions and types

type ValidationResult = PositiveValidationResult | NegativeValidationResult;

interface NegativeValidationResult {
    isValid: false;
    reason: string;
}

interface PositiveValidationResult {
    isValid: true;
}

function invalid(reason: string): NegativeValidationResult {
    return {
        isValid: false,
        reason,
    };
}

function valid(): PositiveValidationResult {
    return {
        isValid: true,
    };
}

function opcode(block: ScratchBlock | Node): Opcode | "toplevel variable block" | "toplevel list block" {
    if (block instanceof VarListNode || block instanceof BlockNode) {
        block = block.block;
    }

    if (isTopLevelDataBlock(block)) {
        const [inputType] = block;
        const name = inputType === primitiveInputTypes.variable ? "variable" : "list";
        return `toplevel ${name} block`;
    }

    return block.opcode;
}

//endregion
