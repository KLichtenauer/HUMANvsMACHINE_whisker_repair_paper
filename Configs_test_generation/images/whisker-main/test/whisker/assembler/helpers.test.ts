import {disambiguateBlockIDs, renameIDs, validate} from "../../../src/assembler/helpers";
import {Project} from "../../../src/assembler/types/Project";
import {Blocks} from "../../../src/assembler/types/Target";
import {deepCopy} from "../../../src/assembler/utils/Objects";
import {ValidationError} from "../../../src/assembler/errors";
import {expect} from "@jest/globals";
import uid from "scratch-vm/src/util/uid.js";

import good from "./fixtures/validation/good.json";
import version2 from "./fixtures/validation/version2.json";
import original from "./fixtures/renaming/original.json";
import renamed from "./fixtures/renaming/renamed.json";
import projectWithoutDuplicates from "./fixtures/disambiguation/projectWithoutDuplicates.json";
import projectWithDuplicates from "./fixtures/disambiguation/projectWithDuplicates.json";

describe('Validation', function () {
    test('succeeds for good projects', function () {
        const validated = validate(good);
        const expected = deepCopy<Project>(good);
        expected.projectVersion = 3;
        expect(validated).toEqual(expected);
    });

    test('fails for bad projects', function () {
        const bad = deepCopy<Project>(good);
        delete bad.targets[0].name;
        // @ts-expect-error Intentionally putting some nonsense here...
        bad.targets[1].isStage = {
            foo: "bar",
        };
        expect(() => validate(bad)).toThrowError(ValidationError);
    });

    test('fails for version 2 projects', function () {
        expect(() => validate(version2)).toThrowError(ValidationError);
    });
});

describe('Renaming block IDs', function () {
    test('does not change the AST structure', function () {
        const oldToNew = {
            "u*;kMNBI!JQ!TOk8u1{~": "WhenFlagClicked",
            "qYB9K`GE4eY=^:CLK.UZ": "DataSetVariableTo",
            "Rl@sjsK4H~OSk^FnVO*@": "ControlRepeatUntil",
        };
        const blocks = deepCopy<Blocks>(original.targets[0].blocks);
        const actual = renameIDs(blocks, oldToNew);
        expect(actual).toStrictEqual(renamed);
    });

    test("to themselves creates an identical copy of the AST", function () {
        const oldToOld = {
            "u*;kMNBI!JQ!TOk8u1{~": "u*;kMNBI!JQ!TOk8u1{~",
            "qYB9K`GE4eY=^:CLK.UZ": "qYB9K`GE4eY=^:CLK.UZ",
            "Rl@sjsK4H~OSk^FnVO*@": "Rl@sjsK4H~OSk^FnVO*@",
        };
        const blocks = deepCopy<Blocks>(original.targets[0].blocks);
        const actual = renameIDs(blocks, oldToOld);
        expect(actual).toStrictEqual(blocks);
    });

    test('with special regexp chars is supported', function () {
        const oldID = "Rl@sjsK4H~OSk^FnVO*@";
        const newID = "^].*[a-$";
        const oldToNew = {
            [oldID]: newID,
        };
        const blocks = deepCopy<Blocks>(original.targets[0].blocks);
        const actual = renameIDs(blocks, oldToNew);

        blocks[newID] = blocks[oldID];
        delete blocks[oldID];
        blocks["80J0br2rW:]]-Kbi#xMn"]["parent"] = newID;
        blocks["PVHW2LYWgXrg78^|Iyuh"]["parent"] = newID;
        blocks["tp4]fMOcW`%%3ZY9P4Tj"]["next"] = newID;

        expect(actual).toStrictEqual(blocks);
    });

    test('works even when there are no blocks to be renamed', () => {
        const blocks = deepCopy<Blocks>(original.targets[0].blocks);
        const renamed = renameIDs(blocks, {});
        expect(renamed).toStrictEqual(blocks);
        expect(renamed).not.toBe(blocks);
    });
});

describe("Disambiguating block IDs", () => {
    it("renames duplicates across all targets", () => {
        let i = 0;
        const getFreshID = (id) => `${id}${i++}`;
        const disambiguated = disambiguateBlockIDs(projectWithDuplicates as unknown as Project, getFreshID);
        expect(disambiguated).toStrictEqual(projectWithoutDuplicates);
    });

    it("leaves the project unchanged when there are no duplicates", () => {
        const noDuplicates = good as unknown as Project;
        const disambiguated = disambiguateBlockIDs(noDuplicates, uid);
        expect(disambiguated).toStrictEqual(noDuplicates);
    });

    it("returns a new instance of the project", () => {
        const getFreshID = (id) => "fresh_" + id;
        const disambiguated = disambiguateBlockIDs(projectWithDuplicates as unknown as Project, getFreshID);
        expect(disambiguated).not.toBe(projectWithDuplicates);
    });

    it("does not modify the original project", () => {
        const getFreshID = (id) => "fresh_" + id;
        const before = deepCopy(projectWithDuplicates);
        disambiguateBlockIDs(projectWithDuplicates as unknown as Project, getFreshID);
        expect(projectWithDuplicates).toStrictEqual(before);
    });
});
