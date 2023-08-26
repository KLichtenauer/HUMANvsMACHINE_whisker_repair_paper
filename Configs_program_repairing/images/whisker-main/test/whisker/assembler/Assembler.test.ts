import {Assembler} from "../../../src/assembler/Assembler";
import {Project} from "../../../src/assembler/types/Project";
import original from "./fixtures/delete-cascade/original-simple.json";
import {expect} from "@jest/globals";
import expected from "./fixtures/delete-cascade/expected-single.json";
import expectedToplevel from "./fixtures/delete-cascade/expected-toplevel.json";
import Arrays from "../../../src/whisker/utils/Arrays";
import expectedEmpty from "./fixtures/delete-cascade/expected-empty.json";
import originalRepeatUntil from "./fixtures/delete-cascade/original-repeat-until.json";
import expectedRepeatUntilDeleteInner from "./fixtures/delete-cascade/expected-repeat-until-delete-inner.json";
import expectedRepeatUntilDeleteOuter from "./fixtures/delete-cascade/expected-repeat-until-delete-outer.json";
import originalDeleteIfElse from "./fixtures/delete-cascade/original-delete-if-else.json";
import expectedDeleteIfElse from "./fixtures/delete-cascade/expected-delete-if-else.json";
import originalDeleteSingletonSubstack from "./fixtures/delete-cascade/original-singleton-substack.json";
import expectedDeleteSingletonSubstack from "./fixtures/delete-cascade/expected-singleton-substack.json";
import originalDeleteInput from "./fixtures/delete/original-delete-input.json";
import expectedDeleteInput from "./fixtures/delete/expected-delete-input.json";
import expectedDeleteScript from "./fixtures/delete/expected-delete-script.json";
import expectedDeleteScriptVariable from "./fixtures/delete/expected-delete-script-variable.json";
import dropDownMenus from "./fixtures/delete/drop-down-menus.json";
import originalInsertSimple from "./fixtures/insert/original-insert-simple.json";
import expectedInsertSimple from "./fixtures/insert/expected-insert-simple.json";
import expectedInsertAtTop from "./fixtures/insert/expected-insert-at-top.json";
import expectedInsertDuplicate from "./fixtures/insert/expected-insert-duplicate.json";
import expectedInsertNext from "./fixtures/insert/expected-insert-next.json";
import expectedInsertAtBottom from "./fixtures/insert/expected-insert-at-bottom.json";
import originalInsertSubstacks from "./fixtures/insert/original-insert-substacks.json";
import expectedInsertEmptySubstack from "./fixtures/insert/expected-insert-empty-substack.json";
import expectedInsertEmptySubstack2 from "./fixtures/insert/expected-insert-empty-substack2.json";
import expectedInsertNonEmptySubstack from "./fixtures/insert/expected-insert-non-empty-substack.json";
import expectedInsertNonEmptySubstack2 from "./fixtures/insert/expected-insert-non-empty-substack2.json";
import expectedInsertTopLevel from "./fixtures/insert/expected-insert-toplevel-block.json";
import expectedInsertNewScript from "./fixtures/insert/expected-insert-new-script.json";
import expectedInsertGreenFlagOnTop from "./fixtures/insert/expected-insert-greenflag-on-top.json";
import expectedInsertCapBlockAtBottom from "./fixtures/insert/expected-insert-cap-block-at-bottom.json";
import originalDeleteIfElseNotCascading from "./fixtures/delete/original-delete-if-else.json";
import expectedDeleteIfElseBothSubstacks from "./fixtures/delete/expected-delete-if-else-both-substacks.json";
import expectedDeleteIfElseSubstack from "./fixtures/delete/expected-delete-if-else-substack.json";
import expectedDeleteIfElseSubstack2 from "./fixtures/delete/expected-delete-if-else-substack2.json";
import expectedDeleteIfElseNoSubstack from "./fixtures/delete/expected-delete-if-else-no-substack.json";
import expectedDeleteSprite1 from "./fixtures/delete/expected-delete-sprite1.json";
import expectedInsertIntoEmpty from "./fixtures/inputs/expected-insert-into-empty.json";
import expectedForABlock from "./fixtures/inputs/expected-for-a-block.json";
import expectedBooleanInput from "./fixtures/inputs/expected-boolean-input.json";
import expectedDropDownMenuInput from "./fixtures/inputs/expected-drop-down-menu.json";
import expectedObscuredInput from "./fixtures/inputs/expected-obscured-input.json";
import expectedDeletedInput from "./fixtures/inputs/expected-deleted-input.json";
import expectedNestedInputs from "./fixtures/inputs/expected-nested-inputs.json";
import originalDeleteBoolean from "./fixtures/delete/original-delete-boolean-input.json";
import expectedDeleteBoolean from "./fixtures/delete/expected-delete-boolean-input.json";
import expectedDeleteCascadeBoolean from "./fixtures/delete-cascade/expected-delete-cascade-boolean-input.json";
import originalDeleteObscuringInput from "./fixtures/inputs/original-delete-obscuring-input.json";
import expectedDeleteObscuringInput from "./fixtures/inputs/expected-delete-obscuring-input.json";
import beforeInputInsertion from "./fixtures/inputs/before-input-insertion.json";
import expectedAfterInputInsertion from "./fixtures/inputs/expected-after-input-insertion.json";
import emptyProject from "./fixtures/inputs/empty-project.json";
import inputPool from "./fixtures/inputs/input-pool.json";
import inputTypesJSON from "./fixtures/inputs/input-types.json";
import emptyProject2 from "./fixtures/insert/empty-project-2.json";
import topLevelVariableBlock from "./fixtures/top-level-variable-block.json";
import beforeObscuringInput from "./fixtures/inputs/before-obscuring-input.json";
import afterObscuringInput from "./fixtures/inputs/after-obscuring-input.json";
import beforeDeleteCondition from "./fixtures/inputs/before-delete-condition.json";
import expectedDeleteCondition from "./fixtures/inputs/after-delete-condition.json";
import blockpool from "./fixtures/blockpool.json";
import targetsScriptsBlocks from "./fixtures/targets-scripts-blocks.json";
import onlyCblockWithDependencies from "./fixtures/insert/only-cblock-with-dependencies.json";
import projectJSON from "./fixtures/getter/project.json";
import expectedBlocks from "./fixtures/getter/blocks.json";
import expectedInputs from "./fixtures/getter/inputs.json";
import projectWithFields from "./fixtures/fields/fields.json";
import expectedGetFields from "./fixtures/fields/expected-get-fields.json";
import expectedGetFieldsSkipCurrent from "./fixtures/fields/expected-get-fields-skip-current.json";
import projectWithObscuredFields from "./fixtures/fields/obscured-fields.json";
import expectedGetUnobscuredFields from "./fixtures/fields/expected-get-unobscured-fields.json";
import expectedGetUnobscuredFieldsSkipCurrent from "./fixtures/fields/expected-get-unobscured-fields-skip-current.json";
import sensingOfObjectMenuBefore from "./fixtures/fields/sensing-of-object-menu-before.json";
import sensingOfObjectMenuExpected from "./fixtures/fields/sensing-of-object-menu-expected.json";
import stmtReplacementBefore from "./fixtures/replace/stmt-before.json";
import stmtReplacementExpected from "./fixtures/replace/stmt-expected.json";
import exprReplacementBefore from "./fixtures/replace/expr-before.json";
import exprReplacementExpected from "./fixtures/replace/expr-expected.json";
import primitiveExprReplacementBefore from "./fixtures/replace/primitive-expr-before.json";
import primitiveExprReplacementExpected from "./fixtures/replace/primitive-expr-expected.json";
import swapStatementBefore from "./fixtures/swap/swapStatementBefore.json";
import swapStatementAfter from "./fixtures/swap/swapStatementAfter.json";
import swapExpressionBefore from "./fixtures/swap/swapExpressionBefore.json";
import swapExpressionAfter from "./fixtures/swap/swapExpressionAfter.json";

import uid from "scratch-vm/src/util/uid.js";
import {
    InvalidBlockError,
    InvalidScriptError,
    InvalidTargetError,
    NoSuchBlockError,
    NoSuchKeyError,
    NoSuchScriptError,
    NoSuchSpriteError,
    ValidationError
} from "../../../src/assembler/errors";
import {BlockID} from "../../../src/assembler/types/blocks/Block";
import {deepCopy} from "../../../src/assembler/utils/Objects";
import {InputKey, primitiveInputTypes} from "../../../src/assembler/types/blocks/Inputs";
import {emptyBlockMeta, InputMeta} from "../../../src/assembler/meta";
import {pair} from "../../../src/whisker/utils/Pair";
import {ExprSelector, InputSelector, STAGE_NAME} from "../../../src/assembler/selectors";
import replaceWithDummyBefore from "./fixtures/replace/replace-with-dummy-before.json";
import replaceWithDummyExpected from "./fixtures/replace/replace-with-dummy-expected.json";
import insertAfterDummyExpected from "./fixtures/replace/insert-after-dummy-expected.json";
import expectedPruneDummy from "./fixtures/replace/expected-prune-dummy.json";

describe("Throw a ValidationError when loading a project", () => {
    let copy: Project = null;

    beforeEach(() => {
        copy = deepCopy<Project>(original);
    });

    test("without the stage", () => {
        copy.targets.shift(); // delete the stage
        expect(() => assemble(copy)).toThrowError(ValidationError);
    });

    test("that contains a malformed target", () => {
        delete copy.targets[0].isStage;
        expect(() => assemble(copy)).toThrowError(ValidationError);
    });

    test("that contains dangling blocks", () => {
        copy.targets[1].blocks.greenFlag['next'] = "this is not a valid reference";
        expect(() => assemble(copy)).toThrowError(ValidationError);
    });
});

test.todo("Disambiguate block IDs when loading a project");

describe("Deleting", () => {
    test("a stack block adjusts parent/successor relations of surrounding blocks", () => {
        const project = assemble(original);
        const stmt = "move10Steps";
        const deleted = project.deleteStmt(stmt);
        expect(project.toJSON()).toEqual(expected);
        expect(new Set(deleted)).toStrictEqual(new Set([stmt]));
    });

    test("a toplevel block makes the successor toplevel", () => {
        const project = assemble(original);
        const stmt = "greenFlag";
        const deleted = project.deleteStmt(stmt);
        expect(project.toJSON()).toEqual(expectedToplevel);
        expect(new Set(deleted)).toStrictEqual(new Set([stmt]));
    });

    test("all blocks results in an empty project", () => {
        const project = assemble(original);
        const blocks = ["greenFlag", "move10Steps", "waitFor1Sec", "sayHelloFor2Secs"];
        Arrays.shuffle(blocks); // The order should not matter.
        blocks.forEach((blockID) => project.deleteStmt(blockID));
        expect(project.toJSON()).toEqual(expectedEmpty);
    });

    test("a non-existent block throws an error", () => {
        const project = assemble(original);
        expect(() => {
            project.deleteStmt("this ID does not exist");
        }).toThrowError(NoSuchBlockError);
    });

    test("the head block in a substack adjusts parent/input relations", () => {
        const project = assemble(originalRepeatUntil);
        const stmt = "innerMove10Steps";
        const deleted = project.deleteStmt(stmt);
        expect(project.toJSON()).toEqual(expectedRepeatUntilDeleteInner);
        expect(new Set(deleted)).toStrictEqual(new Set([stmt]));
    });

    // TODO: this test still fails ATM...
    test.skip('a boolean "not" block replaces it with its operand', () => {
        const project = assemble(originalDeleteBoolean);
        project.deleteBlock("BooleanNot");
        const actual = project.toJSON();
        expect(actual).toStrictEqual(expectedDeleteBoolean);
    });

    test('cascade a boolean "not" block also deletes its operands', () => {
        const project = assemble(originalDeleteBoolean);
        const deleted = project.deleteBlock("BooleanNot");
        const actual = project.toJSON();
        expect(actual).toStrictEqual(expectedDeleteCascadeBoolean);
        expect(new Set(deleted)).toStrictEqual(new Set(["BooleanNot", "BooleanOr"]));
    });

    // TODO: like calling deleteCascade on the input block...
    test.todo('the boolean input of a block');

    test("the successor of a C-block does not modify parent/input relations of its substacks", () => {
        const project = assemble(originalRepeatUntil);
        const stmt = "outerMove10Steps";
        const deleted = project.deleteStmt(stmt);
        expect(project.toJSON()).toEqual(expectedRepeatUntilDeleteOuter);
        expect(new Set(deleted)).toStrictEqual(new Set([stmt]));
    });

    test("the last block of a substack removes the substack entirely", () => {
        const project = assemble(originalDeleteSingletonSubstack);
        const stmt = "move10Steps";
        const deleted = project.deleteStmt(stmt);
        expect(project.toJSON()).toEqual(expectedDeleteSingletonSubstack);
        expect(new Set(deleted)).toStrictEqual(new Set([stmt]));
    });

    test("a C-block also cascades to its substack(s)", () => {
        const project = assemble(originalDeleteIfElse);
        const deleted = project.deleteStmt("controlIfElse");
        expect(project.toJSON()).toEqual(expectedDeleteIfElse);
        expect(new Set(deleted)).toStrictEqual(new Set([
            "controlIfElse", "move1Step", "sensingKeyPressed", "turnRight", "turnRight2",
        ]));
    });

    // TODO: the new behavior of deleteBlock is to also delete all inputs recursively.
    //  The expected behavior here is out of date. The test should be updated or removed.
    test.skip("a C-block keeps its substack", () => {
        const project = assemble(originalDeleteIfElseNotCascading);
        const deleted = project.deleteBlock("only-substack");
        expect(project.toJSON()).toEqual(expectedDeleteIfElseSubstack);
        expect(new Set(deleted)).toStrictEqual(new Set([]));
    });

    // TODO: the new behavior of deleteBlock is to also delete all inputs recursively.
    //  The expected behavior here is out of date. The test should be updated or removed.
    test.skip("a C-block keeps its substack2", () => {
        const project = assemble(originalDeleteIfElseNotCascading);
        const deleted = project.deleteBlock("only-substack2");
        expect(project.toJSON()).toEqual(expectedDeleteIfElseSubstack2);
        expect(new Set(deleted)).toStrictEqual(new Set([]));
    });

    // TODO: the new behavior of deleteBlock is to also delete all inputs recursively.
    //  The expected behavior here is out of date. The test should be updated or removed.
    test.skip("a C-block joins both its substacks", () => {
        const project = assemble(originalDeleteIfElseNotCascading);
        const deleted = project.deleteBlock("both-substacks");
        expect(project.toJSON()).toEqual(expectedDeleteIfElseBothSubstacks);
        expect(new Set(deleted)).toStrictEqual(new Set([]));
    });

    test("a C-block removes it", () => {
        const project = assemble(originalDeleteIfElseNotCascading);
        const stmt = "no-substack";
        const deleted = project.deleteBlock(stmt);
        expect(project.toJSON()).toEqual(expectedDeleteIfElseNoSubstack);
        expect(new Set(deleted)).toStrictEqual(new Set([stmt, "rub!%Cs~#/_N;4!bUUE@"]));
    });

    const dropDownMenuBlocks = [
        "motionGotoMenu",
        "motionGlideToMenu",
        "motionPointTowardsMenu",
        "looksCostume",
        "looksBackdrops",
        "soundSoundsMenu",
        "controlCreateCloneOfMenu",
        "sensingTouchingObjectMenu",
        "sensingTouchingDistanceToMenu",
        "sensingKeyOptions",
        "sensingOfObjectMenu",
    ];

    test.each(dropDownMenuBlocks)("a drop-down menu block %s throws an error", (blockID) => {
        const project = assemble(dropDownMenus);
        expect(() => {
            project.deleteBlock(blockID);
        }).toThrowError(InvalidBlockError);
    });

    test("an input block also removes the reference in its parent", () => {
        const project = assemble(originalDeleteInput);
        const deleted = project.deleteBlock("OperatorGreater");
        expect(project.toJSON()).toEqual(expectedDeleteInput);
        expect(new Set(deleted)).toStrictEqual(new Set(["OperatorGreater", "SensingMouseX"]));
    });

    test("a sprite", () => {
        const project = assemble(targetsScriptsBlocks);
        project.deleteSprite("Sprite1");
        expect(project.toJSON()).toEqual(expectedDeleteSprite1);
    });

    test("a sprite that does not exist throws an error", () => {
        const project = assemble(targetsScriptsBlocks);
        expect(() => project.deleteSprite("no sprite with this name"))
            .toThrowError(NoSuchSpriteError);
    });

    test("the stage throws an InvalidTargetError", () => {
        const project = assemble(targetsScriptsBlocks);
        expect(() => project.deleteSprite(STAGE_NAME)).toThrowError(InvalidTargetError);
    });

    test("a script", () => {
        const project = assemble(originalDeleteIfElse);
        const deleted = project.deleteScript("greenFlag");
        expect(project.toJSON()).toEqual(expectedDeleteScript);
        expect(new Set(deleted)).toStrictEqual(new Set([
            "controlForever", "controlIfElse", "greenFlag", "move1Step", "sensingKeyPressed", "turnRight", "turnRight2",
        ]));
    });

    test("a script that is an unconnected toplevel variable block", () => {
        const project = assemble(targetsScriptsBlocks);
        const deleted = project.deleteScript("MyVariable");
        expect(project.toJSON()).toEqual(expectedDeleteScriptVariable);
        expect(new Set(deleted)).toStrictEqual(new Set(["MyVariable"]));
    });

    test("a script that does not exist throws a NoSuchScriptError", () => {
        const project = assemble(targetsScriptsBlocks);
        expect(() => project.deleteScript("does not exist"))
            .toThrowError(NoSuchScriptError);
    });

    test("a script of a target that does not exist throws a NoSuchScriptError", () => {
        const project = assemble(targetsScriptsBlocks);
        expect(() => project.deleteScript("does not exist"))
            .toThrowError(NoSuchScriptError);
    });

    // TODO: Nowadays, deleteScript() is actually also used to delete a (sub)stack of blocks. The root of that stack
    //  need not be toplevel. So this test is probably obsolete, and should be deleted eventually.
    test.skip("a script when the given block is not toplevel throws an InvalidScriptError", () => {
        const project = assemble(targetsScriptsBlocks);
        expect(() => project.deleteScript("SayForSecs"))
            .toThrowError(InvalidScriptError);
    });
});

describe("Insertion as parent", () => {
    test("adjusts parent/successor relations of surrounding blocks", () => {
        const project = assembleWithGen(originalInsertSimple, () => "insertedWaitFor1Sec");
        const deps = project.getStmtMeta("waitFor1Sec");
        const insertionPoint = {target: "Sprite1", blockID: "sayHello", key: "parent"} as const;
        project.insertStmt(insertionPoint, deps);
        expect(project.toJSON()).toEqual(expectedInsertSimple);
    });

    test("at the top of an unconnected script makes it top-level", () => {
        const project = assembleWithGen(originalInsertSimple, () => "insertedGreenFlagStage");
        const newBlock = project.getStmtMeta("greenFlagStage");
        project.insertStmt({blockID: "unconnected", key: "parent"}, newBlock);
        expect(project.toJSON()).toEqual(expectedInsertAtTop);
    });

    test("above a hat block throws an error", () => {
        const project = assemble(originalInsertSimple);
        const newBlock = project.getStmtMeta("waitFor1Sec");
        expect(() => {
            project.insertStmt({
                blockID: "greenFlagSprite",
                key: "parent"
            }, newBlock);
        }).toThrowError(InvalidBlockError);
    });

    test("throws an error when it is a cap-block", () => {
        const project = assemble(originalInsertSimple);
        const pool = assemble(blockpool);
        const stopBlock = pool.getStmtMeta("control-stop");
        expect(() => {
            project.insertStmt({
                blockID: "sayHello",
                key: "parent"
            }, stopBlock);
        }).toThrowError(InvalidBlockError);
    });

    test("on the sage throws an error when it is a motion block", () => {
        const project = assemble(originalInsertSimple);
        const newBlock = project.getStmtMeta("move10Steps");
        expect(() => {
            project.insertStmt({blockID: "waitFor1Sec", key: "parent"}, newBlock);
        }).toThrowError(InvalidBlockError);
    });

    test("in the same script duplicates the block with a fresh ID", () => {
        const project = assembleWithGen(originalInsertSimple, () => "insertedMove10Steps");
        const blockID = "move10Steps";
        const newBlock = project.getStmtMeta(blockID);
        project.insertStmt({blockID, key: "parent"}, newBlock);
        expect(project.toJSON()).toEqual(expectedInsertDuplicate);
    });

    test("works for hat-blocks when it's at the top of an unconnected script", () => {
        const project = assembleWithGen(originalInsertSimple, () => "greenFlagStage2");
        const greenFlag = project.getStmtMeta("greenFlagStage");
        project.insertStmt({blockID: "unconnected", key: "parent"}, greenFlag);
        expect(project.toJSON()).toEqual(expectedInsertGreenFlagOnTop);
    });

    test("throws an error for hat-blocks when it's not at the top of the script", () => {
        const project = assemble(originalInsertSimple);
        const greenFlag = project.getStmtMeta("greenFlagStage");
        expect(() => {
            project.insertStmt({blockID: "waitFor1Sec", key: "next"}, greenFlag);
        }).toThrowError(InvalidBlockError);
    });

    test("throws an Error when using top-level variable block blocks as insertion point", () => {
        const project = assemble(topLevelVariableBlock);
        const block = {blockID: ";R|Svg$%:%4weW?JIELK", target: STAGE_NAME, key: "parent"} as const;
        const parent = assemble(blockpool).getStmtMeta("condition");
        expect(() => project.insertStmt(block, parent))
            .toThrowError(new InvalidBlockError('Cannot connect "operator_and" to "toplevel variable block"'));
    });
});

describe("Insertion as child", () => {
    test("on stage throws an error when it is a motion block", () => {
        const project = assemble(originalInsertSimple);
        const moveBlock = project.getStmtMeta("move10Steps");
        expect(() => {
            project.insertStmt({blockID: "greenFlagStage", key: "next"}, moveBlock);
        }).toThrowError(InvalidBlockError);
    });

    test("throws an error when it is a hat-block", () => {
        const project = assemble(originalInsertSimple);
        const blockID = "greenFlagStage";
        const greenFlag = project.getStmtMeta(blockID);
        expect(() => {
            project.insertStmt({blockID, key: "next"}, greenFlag);
        }).toThrowError(InvalidBlockError);
    });

    test("works for cap-blocks when it's the end of the script or substack", () => {
        const project = assembleWithGen(originalInsertSimple, () => "insertedCapBlock");
        const pool = assemble(blockpool);
        const capBlock = pool.getStmtMeta("control-stop");
        project.insertStmt({blockID: "unconnected", key: "next"}, capBlock);
        expect(project.toJSON()).toEqual(expectedInsertCapBlockAtBottom);
    });

    test("throws an error for cap-blocks when it's not the end of the script or substack", () => {
        const project = assemble(originalInsertSimple);
        const pool = assemble(blockpool);
        const capBlock = pool.getStmtMeta("control-delete-this-clone");
        expect(() => {
            project.insertStmt({blockID: "greenFlagStage", key: "next"}, capBlock);
        }).toThrowError(InvalidBlockError);
    });

    test("below a cap-block throws an error", () => {
        const project = assembleWithGen(originalInsertSimple, () => "insertedCapBlock");
        const pool = assemble(blockpool);
        const capBlock = pool.getStmtMeta("control-stop");
        const sayHello = {target: "Sprite1", blockID: "sayHello", key: "next"} as const;

        // First we insert this cap block after the last block of an existing script:
        project.insertStmt(sayHello, capBlock);

        // Then, we try to insert another block below it, and we should get an error.
        expect(() => {
            project.insertStmt(sayHello, capBlock);
        }).toThrowError(InvalidBlockError);
    });

    test("adjusts parent/successor relations of surrounding blocks", () => {
        const project = assembleWithGen(originalInsertSimple, () => "insertedSayHello");
        const blockID = "sayHello";
        const sayHello = project.getStmtMeta(blockID);
        project.insertStmt({blockID, key: "next"}, sayHello);
        expect(project.toJSON()).toEqual(expectedInsertNext);
    });

    test("at the bottom of a script", () => {
        const project = assembleWithGen(originalInsertSimple, () => "insertedMove10Steps");
        const move10Steps = project.getStmtMeta("move10Steps");
        project.insertStmt({blockID: "sayHello", key: "next"}, move10Steps);
        expect(project.toJSON()).toEqual(expectedInsertAtBottom);
    });

    test("removes top-level properties from an unconnected block", () => {
        const project = assembleWithGen(originalInsertSimple, () => "insertedUnconnected");
        const unconnected = project.getStmtMeta("unconnected");
        project.insertStmt({blockID: "greenFlagStage", key: "next"}, unconnected);
        expect(project.toJSON()).toEqual(expectedInsertTopLevel);
    });

    test("throws an Error when using top-level variable block blocks as insertion point", () => {
        const project = assemble(topLevelVariableBlock);
        const block = {blockID: ";R|Svg$%:%4weW?JIELK", target: STAGE_NAME} as const;
        const substack = assemble(blockpool).getStmtMeta("condition");
        expect(() => project.insertStmt({...block, key: "SUBSTACK"}, substack))
            .toThrowError(new InvalidBlockError('Cannot insert "operator_and" as "SUBSTACK" of "toplevel variable block"'));
        expect(() => project.insertStmt({...block, key: "SUBSTACK2"}, substack))
            .toThrowError(new InvalidBlockError('Cannot insert "operator_and" as "SUBSTACK2" of "toplevel variable block"'));
    });
});

describe("Insertion on top of", () => {
    test("empty substack", () => {
        const project = assembleWithGen(originalInsertSubstacks, () => "insertedStopAllSounds");
        const substack = project.getStmtMeta("stopAllSounds");
        project.insertStmt({
            blockID: "ifElseEmptyIf",
            key: "SUBSTACK"
        }, substack);
        expect(project.toJSON()).toEqual(expectedInsertEmptySubstack);
    });

    test("empty substack2", () => {
        const project = assembleWithGen(originalInsertSubstacks, () => "insertedStopAllSounds");
        const substack2 = project.getStmtMeta("stopAllSounds");
        project.insertStmt({
            blockID: "ifElseEmptyElse",
            key: "SUBSTACK2"
        }, substack2);
        expect(project.toJSON()).toEqual(expectedInsertEmptySubstack2);
    });

    test("non-empty substack", () => {
        const project = assembleWithGen(originalInsertSubstacks, () => "insertedStopAllSounds");
        const substack = project.getStmtMeta("stopAllSounds");
        project.insertStmt({
            blockID: "ifElseEmptyElse",
            key: "SUBSTACK"
        }, substack);
        expect(project.toJSON()).toEqual(expectedInsertNonEmptySubstack);
    });

    test("non-empty substack2", () => {
        const project = assembleWithGen(originalInsertSubstacks, () => "insertedStopAllSounds");
        const substack2 = project.getStmtMeta("stopAllSounds");
        project.insertStmt({
            blockID: "ifElseEmptyIf",
            key: "SUBSTACK2"
        }, substack2);
        expect(project.toJSON()).toEqual(expectedInsertNonEmptySubstack2);
    });

    test("of a substack is the same as insertion as parent of the tos", () => {
        const project1 = assembleWithGen(originalInsertSubstacks, () => "insertedStopAllSounds");
        project1.insertStmt({
            blockID: "ifElseEmptyElse",
            key: "SUBSTACK"
        }, project1.getStmtMeta("stopAllSounds"));

        const project2 = assembleWithGen(originalInsertSubstacks, () => "insertedStopAllSounds");
        project2.insertStmt({
            blockID: "move10Steps",
            key: "parent"
        }, project2.getStmtMeta("stopAllSounds"));

        expect(project2.toJSON()).toEqual(project1.toJSON());
    });

    test("throws an Error when using top-level variable block blocks as insertion point", () => {
        const project = assemble(topLevelVariableBlock);
        const block = {blockID: ";R|Svg$%:%4weW?JIELK", target: STAGE_NAME, key: "SUBSTACK"} as const;
        const child = assemble(blockpool).getStmtMeta("condition");
        expect(() => project.insertStmt(block, child))
            .toThrowError(new InvalidBlockError('Cannot insert "operator_and" as "SUBSTACK" of "toplevel variable block"'));
    });
});

test("Insertion of C-block also inserts all its dependencies", () => {
    const project = assemble(onlyCblockWithDependencies);
    const empty = assembleWithGen(emptyProject2, (oldID) => oldID);
    const deps = project.getStmtMeta("spa`dzW%C:Xyx}^!`%@p");
    empty.insertScript("Sprite1", deps);
    const actual = empty.toJSON();
    const expected = project.toJSON();
    expect(actual).toEqual(expected);
});

describe("Insertion as new script", () => {
    // TODO: Add another test that inserts into empty target
    test("of a single block into same target", () => {
        const assembler = assembleWithGen(originalInsertSimple, () => "insertedMove10Steps");
        const deps = assembler.getStmtMeta("move10Steps");
        assembler.insertScript("Sprite1", deps);
        expect(assembler.toJSON()).toEqual(expectedInsertNewScript);
    });

    test.todo("of a block into an empty target");

    test.todo("of a variable or list block into the same target");

    test.todo("of a variable or list block into an empty target");

    test("into empty project also inserts all necessary inputs", () => {
        const empty = assembleWithGen(emptyProject, (oldID) => oldID);
        const expected = assemble(blockpool);
        const ite = expected.getStmtMeta("if-then-else");
        empty.insertScript("Sprite1", ite);
        expect(empty.toJSON()).toEqual(expectedInsertIntoEmpty);
    });

    test("maintains all parent-next relations", () => {
        const project = assembleWithGen(expectedInsertNewScript, (id) => id);

        // We delete a script and insert it again -> the project must not have changed.
        const meta = project.getScriptMeta("greenFlagStage");
        project.deleteScript("greenFlagStage");
        project.insertScript("_stage_", meta);
        const actual = project.toJSON();

        // We don't care if the script is inserted with different x and y coordinates, as long as its inserted into the
        // correct target.
        actual.targets[0].blocks["greenFlagStage"]["x"] = 200;
        actual.targets[0].blocks["greenFlagStage"]["y"] = 147;

        expect(actual).toStrictEqual(expectedInsertNewScript);
    });

    test.todo("into same project renames blocks, but keeps variables, lists and broadcasts");

    test.todo("into a different non-empty project");

    test.todo("into the same project");
});

describe("Getter", () => {
    test("for projects returns a deep copy", () => {
        const wrappedProject = assemble(originalInsertSimple);
        const project1 = wrappedProject.toJSON();
        const project2 = wrappedProject.toJSON();

        // The two projects must be structurally equivalent, but not be the same reference.
        expect(project1).toEqual(project2);
        expect(project1).not.toBe(project2);

        // Modifying the returned project does not modify the original project.
        project1.targets[0].name = "A new name for the target"; // make sure we modify an object here -> deep copy
        expect(project1).not.toEqual(wrappedProject.toJSON());
    });

    test.skip("for blocks returns a deep copy", () => {
        const wrappedProject = assemble(originalInsertSimple);

        function getGreenFlag() {
            return wrappedProject.getStmtMeta("greenFlagStage");
        }

        const block1 = getGreenFlag();
        const block2 = getGreenFlag();

        // The two objects must be structurally equivalent, but not be the same reference.
        expect(block1).toEqual(block2);
        expect(block1).not.toBe(block2);

        // Modifying the returned block does not modify the original block.
        block1.blocks[block1.rootID]['fields'].someValue = ["42"]; // make sure we modify an object here -> deep copy
        expect(block1).not.toEqual(getGreenFlag());
    });

    test("for blocks returns a BlockSelector object for each block", () => {
        const wrappedProject = assemble(original);
        const actual = wrappedProject.getStmts();
        const expected = ["greenFlag", "move10Steps", "sayHelloFor2Secs", "waitFor1Sec"];
        expect(new Set(actual)).toStrictEqual(new Set(expected));
    });

    test("for blocks returns updated results when the project is modified", () => {
        const wrappedProject = assemble(original);
        wrappedProject.deleteBlock("greenFlag");
        const actual = wrappedProject.getBlocks();
        const expected = ["move10Steps", "sayHelloFor2Secs", "waitFor1Sec"];
        expect(new Set(actual)).toStrictEqual(new Set(expected));
    });

    test("for blocks return empty array for empty projects", () => {
        const wrappedProject = assemble(emptyProject);
        const actual = wrappedProject.getBlocks();
        expect(actual).toHaveLength(0);
    });

    test("for blocks also includes top-level variable blocks", () => {
        const wrappedProject = assemble(topLevelVariableBlock);
        const actual = wrappedProject.getBlocks();
        expect(actual).toStrictEqual([";R|Svg$%:%4weW?JIELK"]);
    });

    test.each(["getBlocks", "getDeletableBlocks"])("%s() excludes drop-down menus", (getter) => {
        const project = assemble(dropDownMenus);
        const expected = new Set([
            "jM-90q-Uubp$`nG^*|!Y", "P*8/!N8O+d)(Geqo+KTE", "SZ+mM^z?ZG!Y;[2hsz!X", "#Xw?17!F#;/GNSw+mN3L",
            "~0C%!!o=bU!AT;2@EXk!", "]u9=g~HiS2ovX{C:h_Zk", "u.NAFT5Ri_^wvzE{a(?N", "X6g6ET9{gTEnz1^w/9PX",
            "*ceOu,Lp,hi1!=N=[bbR", "1;gi7EvPv9!7-r%t=P`[", "[egC@=bnQQgr.#U$;%md",
        ]);
        const actual = new Set(project[getter]());
        expect(actual).toStrictEqual(expected);
    });

    test("for targets", () => {
        const project = assemble(targetsScriptsBlocks);
        const actual = new Set(project.getTargets());
        const expected = new Set([
            STAGE_NAME,
            "Sprite1",
            "Sprite2",
            "Sprite3",
        ]);
        expect(actual).toStrictEqual(expected);
    });

    test("for targets returns a copy every time", () => {
        const project = assemble(targetsScriptsBlocks);
        const t1 = project.getTargets();
        const t2 = project.getTargets();
        expect(t1).not.toBe(t2);
        expect(t1).toEqual(t2);
    });

    test("for sprites does not include the stage", () => {
        const project = assemble(targetsScriptsBlocks);
        const actual = new Set(project.getSprites());
        const expected = new Set([
            "Sprite1",
            "Sprite2",
            "Sprite3",
        ]);
        expect(actual).toStrictEqual(expected);
    });

    test("for sprites returns a copy every time", () => {
        const project = assemble(targetsScriptsBlocks);
        const s1 = project.getSprites();
        const s2 = project.getSprites();
        expect(s1).not.toBe(s2);
        expect(s1).toEqual(s2);
    });

    test("for scripts, including toplevel reporter blocks", () => {
        const project = assemble(targetsScriptsBlocks);
        const actual = new Set(project.getScripts(false));
        const expected = new Set([
            "SwitchBackdropTo",
            "MyVariable",
            "WhenFlagClicked",
            "StopAllSounds",
            "WhenKeyPressed",
        ]);
        expect(actual).toStrictEqual(expected);
    });

    test("for scripts, excluding toplevel reporter blocks", () => {
        const project = assemble(targetsScriptsBlocks);
        const actual = new Set(project.getScripts(true));
        const expected = new Set([
            "SwitchBackdropTo",
            "WhenFlagClicked",
            "StopAllSounds",
            "WhenKeyPressed",
        ]);
        expect(actual).toStrictEqual(expected);
    });

    test("for connected scripts", () => {
        const project = assemble(targetsScriptsBlocks);
        const actual = new Set(project.getConnectedScripts());
        const expected = new Set(["WhenFlagClicked", "WhenKeyPressed"]);
        expect(actual).toStrictEqual(expected);
    });

    test("for unconnected/loose scripts", () => {
        const project = assemble(targetsScriptsBlocks);
        const actual = new Set(project.getUnconnectedScripts());
        const expected = new Set(["SwitchBackdropTo", "MyVariable", "StopAllSounds"]);
        expect(actual).toStrictEqual(expected);
    });

    test("for stage variables", () => {
        const project = assemble(blockpool);
        const actual = project.getVariablesOfTarget(STAGE_NAME);
        const expected = ["`jEk@4|i[#Fk?(8x)AV.-my variable"];
        expect(actual).toStrictEqual(expected);
    });

    test("for sprite variables", () => {
        const project = assemble(blockpool);
        const actual = project.getVariablesOfTarget("Sprite1");
        const expected = [];
        expect(actual).toStrictEqual(expected);
    });

    test("for variables returns a copy every time", () => {
        const project = assemble(blockpool);
        const actual1 = project.getVariablesOfTarget("Sprite1");
        const actual2 = project.getVariablesOfTarget("Sprite1");
        expect(actual1).toStrictEqual(actual2);
        expect(actual1).not.toBe(actual2);
    });

    test("for stackable blocks", () => {
        const project = assemble(projectJSON);
        const blocks = project.getStmts().map((stmt) => project.getBlockMeta(stmt));
        expect(blocks).toStrictEqual(expectedBlocks);
    });

    test("for expressions", () => {
        const project = assemble(projectJSON);
        const inputs = project.getExprs().map((expr) => project.getExprMeta(expr));
        expect(inputs).toStrictEqual(expectedInputs);
    });

    test("for fields", () => {
        const project = assemble(projectWithFields);
        const menus = project.getDropDowns(false)
            .flatMap((menu) => project.getPossibleDropDownValues(menu, false)
                .map((value) => pair(menu, value)));
        expect(new Set(menus)).toStrictEqual(new Set(expectedGetFields));
    });

    test("for unobscured fields", () => {
        const project = assemble(projectWithObscuredFields);
        const menus = project.getDropDowns(true)
            .flatMap((menu) => project.getPossibleDropDownValues(menu, false)
                .map((value) => pair(menu, value)));
        expect(new Set(menus)).toStrictEqual(new Set(expectedGetUnobscuredFields));
    });

    test("for fields, skipping the currently selected field option", () => {
        const project = assemble(projectWithFields);
        const fields = project.getDropDowns(false)
            .flatMap((menu) => project.getPossibleDropDownValues(menu, true)
                .map((value) => pair(menu, value)));
        expect(new Set(fields)).toStrictEqual(new Set(expectedGetFieldsSkipCurrent));
    });

    test("for unobscured fields, skipping the currently selected field option", () => {
        const project = assemble(projectWithObscuredFields);
        const fields = project.getDropDowns(true)
            .flatMap((menu) => project.getPossibleDropDownValues(menu, true)
                .map((value) => pair(menu, value)));
        expect(new Set(fields)).toStrictEqual(new Set(expectedGetUnobscuredFieldsSkipCurrent));
    });
});

test('Getting block metadata', () => {
    const project = assemble(blockpool);
    const blockID = "if-then-else";
    const actual = project.getStmtMeta(blockID);
    const expected = Object.create(null);
    expected.type = "Block";
    expected.rootID = blockID;
    expected.lastID = blockID;
    expected.blocks = Object.create(null);
    expected.blocks[blockID] = blockpool.targets[1].blocks[blockID];
    expected.blocks["condition"] = blockpool.targets[1].blocks["condition"];
    expected.blocks["if-branch"] = blockpool.targets[1].blocks["if-branch"];
    expected.blocks["else-branch"] = blockpool.targets[1].blocks["else-branch"];
    expected.blocks["is-greater-than"] = blockpool.targets[1].blocks["is-greater-than"];
    expected.blocks["string-contains"] = blockpool.targets[1].blocks["string-contains"];
    expected.blocks["goto-menu"] = blockpool.targets[1].blocks["goto-menu"];
    expected.blocks["glide-to-menu"] = blockpool.targets[1].blocks["glide-to-menu"];
    expected.variables = Object.create(null);
    expected.stageVariables = Object.create(null);
    expected.stageVariables["`jEk@4|i[#Fk?(8x)AV.-my variable"] = blockpool.targets[0].variables["`jEk@4|i[#Fk?(8x)AV.-my variable"];
    expected.lists = Object.create(null);
    expected.stageLists = Object.create(null);
    expected.broadcasts = Object.create(null);
    expect(actual).toEqual(expected);
});

test("Getting variable as block metadata", () => {
    const project = assemble(blockpool);
    const variableID = "`jEk@4|i[#Fk?(8x)AV.-my variable";
    const actual = project.getVariableAsBlockMeta(variableID);

    const blockID = actual.rootID;
    const expected = emptyBlockMeta(blockID, blockID);
    expected.stageVariables[variableID] = ["my variable", 0];
    expected.blocks[blockID] = [primitiveInputTypes.variable, "my variable", variableID, 0, 0];

    expect(actual).toEqual(expected);
});

describe('Getting an input', () => {
    let project: Assembler = null;

    beforeEach(() => {
        project = assemble(inputPool);
    });

    const getInput = (blockID: BlockID, key: InputKey): InputMeta =>
        project.getInputMeta({blockID, key});

    test('for a block', () => {
        const actual = getInput("Equals", "OPERAND2");
        expect(actual).toEqual(expectedForABlock);
    });

    test('that is a boolean block', () => {
        const actual = getInput("ControlIF", "CONDITION");
        expect(actual).toEqual(expectedBooleanInput);
    });

    test('that is a drop-down menu', () => {
        const actual = getInput("Glide1SecsToMousePtr", "TO");
        expect(actual).toEqual(expectedDropDownMenuInput);
    });

    test('that has been deleted or does not exist yet returns a dummy value', () => {
        const actual = getInput("LogicalOr", "OPERAND1");
        expect(actual).toEqual(expectedDeletedInput);
    });

    test('that has been obscured by a dropping a reporter block on it', () => {
        const actual = getInput("Glide1SecsToXPos", "TO");
        expect(actual).toEqual(expectedObscuredInput);
    });

    test('that contains nested inputs', () => {
        const actual = getInput("ControlIF", "SUBSTACK");
        expect(actual).toEqual(expectedNestedInputs);
    });

    test('the block does not support throws an Exception', () => {
        expect(() => getInput("WhenLoudnessGreaterThan", "SUBSTACK2"))
            .toThrowError(NoSuchKeyError);
    });
});

describe("Querying", () => {
    let project: Assembler = null;

    beforeAll(() => {
        project = assemble(inputTypesJSON);
    });

    test("current inputs", () => {
        const actual = project.getInputs();
        const expected: Array<InputSelector> = [
            {
                "blockID": "ifElse",
                "key": "SUBSTACK"
            },
            {
                "blockID": "ifElse",
                "key": "SUBSTACK2"
            },
            {
                "blockID": "ifElse",
                "key": "CONDITION"
            },
            {
                "blockID": "ifBranch",
                "key": "STEPS"
            },
            {
                "blockID": "glideTo",
                "key": "SECS"
            },
            {
                "blockID": "glideTo",
                "key": "TO"
            },
            {
                "blockID": "condition",
                "key": "COLOR"
            },
            {
                "blockID": "broadcast",
                "key": "BROADCAST_INPUT"
            }
        ];
        expect(actual).toStrictEqual(expected);
    });

    test("current deletable inputs", () => {
        const actual = project.getDeletableInputs();
        const expected: Array<InputSelector> = [
            {
                "blockID": "ifElse",
                "key": "SUBSTACK"
            },
            {
                "blockID": "ifElse",
                "key": "SUBSTACK2"
            },
            {
                "blockID": "ifElse",
                "key": "CONDITION"
            },
            {
                "blockID": "ifBranch",
                "key": "STEPS"
            },
            {
                "blockID": "glideTo",
                "key": "SECS",
            },

        ];
        expect(new Set(actual)).toStrictEqual(new Set(expected));
    });

    describe('the script root', () => {
        test("given a root block returns the ID of the block itself", () => {
            const project = assemble(blockpool);
            const actual = project.getScriptRoot("if-then-else");
            expect(actual).toStrictEqual("if-then-else");
        });

        test("given a non-root block returns the ID of the root", () => {
            const project = assemble(blockpool);
            const actual = project.getScriptRoot("is-greater-than");
            expect(actual).toStrictEqual("if-then-else");
        });

        test("given a non-toplevel shadow block returns the ID of the root", () => {
            const project = assemble(blockpool);
            const actual = project.getScriptRoot("goto-menu");
            expect(actual).toStrictEqual("if-then-else");
        });

        test("given a toplevel shadow block returns null", () => {
            const project = assemble(projectWithObscuredFields);
            const actual = project.getScriptRoot("!/Sp9jv5-fK8jt;gq54q");
            expect(actual).toBeNull();
        });

        test("given a loose variable block returns the ID of the block itself", () => {
            const project = assemble(topLevelVariableBlock);
            const blockID = ";R|Svg$%:%4weW?JIELK";
            const actual = project.getScriptRoot(blockID);
            expect(actual).toStrictEqual(blockID);
        });
    });
});

describe("Inserting", () => {
    test("an input", () => {
        const pool = assemble(inputPool);
        const deps = pool.getExprMeta({
            blockID: "ControlIF",
            key: "CONDITION"
        });
        let insertBlocks = 0;
        const project = assembleWithGen(beforeInputInsertion, () => `Block-${insertBlocks++}`);
        project.insertInput({blockID: "J{?@t}H^f`af9#/~Ef;K", key: "CONDITION"}, deps);
        const actual = project.toJSON();
        expect(actual).toEqual(expectedAfterInputInsertion);
    });

    test("inputs that obscure or reveal a drop-down menu", () => {
        const project = assemble(beforeObscuringInput);
        const revealingInput = project.getInputMeta({
            blockID: "vM={U0otaV+JM{Lglepn", key: "BROADCAST_INPUT"
        });
        project.insertInput({
            blockID: "m)|2zE,/=%D4$t?!$bI/", key: "BROADCAST_INPUT"
        }, revealingInput);
        const obscuringInput = project.getInputMeta({
            blockID: "vE}N06a(%iFRpGWwTHbt", key: "BROADCAST_INPUT"
        });
        project.insertInput({
            blockID: "vM={U0otaV+JM{Lglepn", key: "BROADCAST_INPUT"
        }, obscuringInput);
        const actual = project.toJSON();
        expect(actual).toStrictEqual(afterObscuringInput);
    });

    test("an input as block that obscures a drop-down menu", () => {
        const project = assemble(beforeObscuringInput);
        const revealingInput = project.getInputMeta({
            blockID: "vM={U0otaV+JM{Lglepn", key: "BROADCAST_INPUT"
        });
        project.insertInput({
            blockID: "m)|2zE,/=%D4$t?!$bI/", key: "BROADCAST_INPUT"
        }, revealingInput);
        const obscuringBlock = project.getVariableAsBlockMeta("`jEk@4|i[#Fk?(8x)AV.-my variable");
        project.insertBlockAsInput({

            blockID: "vM={U0otaV+JM{Lglepn",
            key: "BROADCAST_INPUT"
        }, obscuringBlock);
        const actual = project.toJSON();
        expect(actual).toStrictEqual(afterObscuringInput);
    });

    test("an oval-shaped block as substack throws an Exception", () => {
        const project = assemble(blockpool);
        const oval = project.getVariableAsBlockMeta("`jEk@4|i[#Fk?(8x)AV.-my variable");
        expect(() => {
            project.insertBlockAsInput({

                blockID: "if-then-else",
                key: "SUBSTACK"
            }, oval);
        }).toThrowError(new InvalidBlockError('Cannot insert "toplevel variable block" as "SUBSTACK" of "control_if_else"'));
        expect(() => {
            project.insertBlockAsInput({

                blockID: "if-then-else",
                key: "SUBSTACK2"
            }, oval);
        }).toThrowError(new InvalidBlockError('Cannot insert "toplevel variable block" as "SUBSTACK2" of "control_if_else"'));
    });

    test("a boolean block as substack throws an Exception", () => {
        const project = assemble(blockpool);
        const booleanBlock = project.getStmtMeta("condition");
        const insertionPoint = {target: "Sprite1", blockID: "if-then-else"};
        expect(() => {
            project.insertBlockAsInput({...insertionPoint, key: "SUBSTACK"}, booleanBlock);
        }).toThrowError(new InvalidBlockError('Cannot insert "operator_and" as "SUBSTACK" of "control_if_else"'));
        expect(() => {
            project.insertBlockAsInput({...insertionPoint, key: "SUBSTACK2"}, booleanBlock);
        }).toThrowError(new InvalidBlockError('Cannot insert "operator_and" as "SUBSTACK2" of "control_if_else"'));
    });

    test("a stack block as boolean input throws an Exception", () => {
        const project = assemble(blockpool);
        const stackBlock = project.getStmtMeta("if-then-else");
        const insertionPoint = {target: "Sprite1", blockID: "condition"};
        expect(() => {
            project.insertBlockAsInput({...insertionPoint, key: "OPERAND1"}, stackBlock);
        }).toThrowError(new InvalidBlockError('Cannot insert "control_if_else" as "OPERAND1" of "operator_and"'));
        expect(() => {
            project.insertBlockAsInput({...insertionPoint, key: "OPERAND2"}, stackBlock);
        }).toThrowError(new InvalidBlockError('Cannot insert "control_if_else" as "OPERAND2" of "operator_and"'));
    });

    test("a number/string block as boolean input throws an Exception", () => {
        const project = assemble(blockpool);
        const oval = project.getVariableAsBlockMeta("`jEk@4|i[#Fk?(8x)AV.-my variable");
        const insertionPoint = {target: "Sprite1", blockID: "condition"};
        expect(() => {
            project.insertBlockAsInput({...insertionPoint, key: "OPERAND1"}, oval);
        }).toThrowError(new InvalidBlockError('Input "OPERAND1" cannot take variable/list block'));
        expect(() => {
            project.insertBlockAsInput({...insertionPoint, key: "OPERAND2"}, oval);
        }).toThrowError(new InvalidBlockError('Input "OPERAND2" cannot take variable/list block'));
    });

    test("a boolean block as number/string input throws an Exception", () => {
        const project = assemble(blockpool);
        const booleanBlock = project.getStmtMeta("condition");
        const insertionPoint = {target: "Sprite1", blockID: "string-contains", key: "STRING1"} as const;
        expect(() => {
            project.insertBlockAsInput(insertionPoint, booleanBlock);
        }).toThrowError(new InvalidBlockError('Cannot insert "operator_and" as "STRING1" of "operator_contains"'));
    });

    test("a stack block as number/string input throws an Exception", () => {
        const project = assemble(blockpool);
        const stackBlock = project.getStmtMeta("if-then-else");
        const insertionPoint = {target: "Sprite1", blockID: "string-contains", key: "STRING1"} as const;
        expect(() => {
            project.insertBlockAsInput(insertionPoint, stackBlock);
        }).toThrowError(new InvalidBlockError('Cannot insert "control_if_else" as "STRING1" of "operator_contains"'));
    });

    test("an oval-shaped block as parent of a stack-block throws an Exception", () => {
        const project = assemble(blockpool);
        const oval = project.getVariableAsBlockMeta("`jEk@4|i[#Fk?(8x)AV.-my variable");
        expect(() => {
            project.insertStmt({
                blockID: "if-then-else",
                key: "parent"
            }, oval);
        }).toThrowError(new InvalidBlockError('Cannot connect "toplevel variable block" to "control_if_else"'));
    });

    test("a boolean block as parent of a stack-block throws an Exception", () => {
        const project = assemble(blockpool);
        const booleanBlock = project.getStmtMeta("condition");
        expect(() => {
            project.insertStmt({
                blockID: "if-then-else",
                key: "parent"
            }, booleanBlock);
        }).toThrowError(new InvalidBlockError('Cannot connect "operator_and" to "control_if_else"'));
    });

    test("an oval-shaped block as next block of a stack-block throws an Exception", () => {
        const project = assemble(blockpool);
        const oval = project.getVariableAsBlockMeta("`jEk@4|i[#Fk?(8x)AV.-my variable");
        expect(() => {
            project.insertStmt({
                blockID: "if-then-else",
                key: "next"
            }, oval);
        }).toThrowError(new InvalidBlockError('Cannot connect "control_if_else" to "toplevel variable block"'));
    });

    test("a boolean block as next block of a stack-block throws an Exception", () => {
        const project = assemble(blockpool);
        const booleanBlock = project.getStmtMeta("condition");
        expect(() => {
            project.insertStmt({
                blockID: "if-then-else",
                key: "next"
            }, booleanBlock);
        }).toThrowError(new InvalidBlockError('Cannot connect "control_if_else" to "operator_and"'));
    });
});

describe('Deleting an input', () => {
    test('that obscures a drop-down menu', () => {
        const project = assemble(originalDeleteObscuringInput);
        project.deleteExpr({blockID: "Wrkbn,b9tj,gi.C3=wAo", key: "TO"});
        const actual = project.toJSON();
        expect(actual).toEqual(expectedDeleteObscuringInput);
    });

    test('of a conditional block that has a next block', () => {
        const project = assemble(beforeDeleteCondition);
        project.deleteExpr({
            blockID: "3a,BUsgL#:r89~Mxo;bO",
            key: "CONDITION"
        });
        const actual = project.toJSON();
        expect(actual).toStrictEqual(expectedDeleteCondition);
    });
});

test('Switching to a different target in "sensing_of_object_menu" also switches the sensed object', () => {
    const project = assemble(sensingOfObjectMenuBefore);
    project.setDropDownValue({blockID: "G}F(ZAw=|#y7t2(EFW8J", key: "OBJECT"}, ["Sprite1", null]);
    project.setDropDownValue({blockID: "Pr+hTnRd1;UB9XD6b|h3", key: "OBJECT"}, [STAGE_NAME, null]);
    const actual = project.toJSON();
    expect(actual).toStrictEqual(sensingOfObjectMenuExpected);
});

test("Replacement of a statement", () => {
    const fresh = "=r1H?n9-R8XL9$`:6-G+";
    const project = assembleWithGen(stmtReplacementBefore, () => fresh);
    const oldStmt = "81%1w{;%p$H{zJ%dy?t9";
    const newStmt = "=r1H?n9-R8XL9$`:6-G+";
    const ids = project.replaceStmt(oldStmt, project.getStmtMeta(newStmt));
    const actual = project.toJSON();
    expect(actual).toStrictEqual(stmtReplacementExpected);
    expect(ids).toEqual({deleted: [oldStmt], renamed: {[newStmt]: fresh}});
});

test("Replacement of an expression", () => {
    const project = assembleWithGen(exprReplacementBefore, () => "Os9t1~qrNrk?i^0y|RLX");
    project.replaceExpr({blockID: "8o-MO295M2C$+o-]STV?"}, project.getExprMeta({blockID: "Os9t1~qrNrk?i^0y|RLX"}));
    const actual = project.toJSON();
    expect(actual).toStrictEqual(exprReplacementExpected);
});

test("Replacement of a primitive expression with a block shadows it", () => {
    const project = assembleWithGen(primitiveExprReplacementBefore, () => "/[q:TlZCZLF{yF{SEpgZ");
    project.replaceExpr({
        blockID: "NEFV3(+Rm+*gd#uR2oYR",
        key: "CLONE_OPTION"
    }, project.getExprMeta({blockID: "/[q:TlZCZLF{yF{SEpgZ"}));
    const actual = project.toJSON();
    expect(actual).toStrictEqual(primitiveExprReplacementExpected);
});

describe("Swapping a statement", () => {
    let project: Assembler = null;

    beforeEach(() => {
        project = assembleWithGen(swapStatementBefore, (id) => `new-${id}`);
    });

    test("with another statement", () => {
        project.swapStmts("controlRepeat", "controlWait");
        const actual = project.toJSON();
        expect(actual).toStrictEqual(swapStatementAfter);
    });

    test("with itself", () => {
        project.swapStmts("controlIf", "controlIf");
        const actual = project.toJSON();
        expect(actual).toStrictEqual(swapStatementBefore);
    });

    test("with one if its children throws an Error", () => {
        expect(() => project.swapStmts("controlIf", "controlRepeat"))
            .toThrowError(new ValidationError('Cannot swap a block with its own children'));
    });
});

describe("Swapping an expression", () => {
    let project: Assembler = null;

    beforeEach(() => {
        project = assembleWithGen(swapExpressionBefore, (id) => `new-${id}`);
    });

    test("with another expression", () => {
        const expr1: ExprSelector = {blockID: "operatorRandom", key: "FROM"};
        const expr2: ExprSelector = {blockID: "operatorRandom", key: "TO"};
        project.swapExprs(expr1, expr2);
        const actual = project.toJSON();
        const expected = assemble(swapExpressionAfter).toJSON();
        expect(actual).toStrictEqual(expected);
    });

    test("with itself (via block ID)", () => {
        const expression: ExprSelector = {blockID: "operatorRandom", key: null};
        project.swapExprs(expression, expression);
        const actual = project.toJSON();
        expect(actual).toStrictEqual(swapExpressionBefore);
    });

    test("with itself (via block ID and key)", () => {
        const expr1: ExprSelector = {blockID: "operatorRandom", key: "TO"};
        const expr2: ExprSelector = {blockID: "operatorLetterOf", key: null}; // the same block as expr1!
        project.swapExprs(expr1, expr2);
        const actual = project.toJSON();
        expect(actual).toStrictEqual(swapExpressionBefore);
    });

    test("with one if its children (via key) throws an Error", () => {
        const parent: ExprSelector = {blockID: "operatorRandom", key: null};
        const child: ExprSelector = {blockID: "operatorLetterOf", key: "LETTER"};
        expect(() => project.swapExprs(parent, child))
            .toThrowError(new ValidationError('Cannot swap an expression with its own children'));
    });

    test("with one if its children (via block ID) throws an Error", () => {
        const parent: ExprSelector = {blockID: "operatorRandom", key: null};
        const child: ExprSelector = {blockID: "operatorLetterOf", key: null};
        expect(() => project.swapExprs(parent, child))
            .toThrowError(new ValidationError('Cannot swap an expression with its own children'));
    });

    test("with an expression of different primitive input type throws an error", () => {
        const letter: ExprSelector = {blockID: "operatorLetterOf", key: "LETTER"};
        const string: ExprSelector = {blockID: "operatorLetterOf", key: "STRING"};
        const msg = 'The input "LETTER" of "operator_letter_of" does not support "[1,[10,"12345"]]"';
        expect(() => project.swapExprs(letter, string))
            .toThrowError(new ValidationError(msg));
    });
});

describe("A dummy block", () => {
    const generateFreshID = (oldID) => {
        if (oldID === "dummyProcDefID") {
            return "Ng$c=iUJiu,.dgE-PA%`";
        }

        if (oldID === "dummyProcProtoID") {
            return ":Fs4~C~liL)J^0u{.:QC";
        }

        return "inserted";
    };

    let project: Assembler = null;

    beforeEach(() => {
        project = assembleWithGen(replaceWithDummyBefore, generateFreshID);
        project.deleteStack("Ud`VsvnzXG7)+Ds-dITn", "Ud`VsvnzXG7)+Ds-dITn", true);
    });

    it("is created with the necessary custom block definitions", () => {
        const actual = project.toJSON();
        expect(actual).toStrictEqual(replaceWithDummyExpected);
    });

    it("is removed again when inserting a real block after it", () => {
        const toInsert = project.getStmtMeta("ruO++a!nH-x(R6O[Kw)~");
        project.insertStmt({blockID: "Ud`VsvnzXG7)+Ds-dITn", key: "next"}, toInsert, true);
        const actual = project.toJSON();
        expect(actual).toStrictEqual(insertAfterDummyExpected);
    });

    it("is removed along with all custom block definitions when pruning", () => {
        project.pruneDummies();
        const actual = project.toJSON();
        expect(actual).toStrictEqual(expectedPruneDummy);
    });
});

function assemble(project: unknown): Assembler {
    return assembleWithGen(project, uid);
}

function assembleWithGen(project: unknown, generateFreshID: (oldID: BlockID) => BlockID): Assembler {
    // Ugly cast needed because TypeScript over-approximates when loading the JSON and infers a wider type than we
    // actually encounter.
    return new Assembler(project as unknown as Project, generateFreshID);
}
