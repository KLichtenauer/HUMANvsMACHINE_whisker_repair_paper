import * as Objects from "../../../../src/assembler/utils/Objects";
import {deepCopy} from "../../../../src/assembler/utils/Objects";

describe("Deep copy", () => {
    test("empty object", () => {
        const object = {};
        const copy = Objects.deepCopy(object);
        expect(copy).toStrictEqual(object);
        expect(copy).not.toBe(object);
    });

    test("non-empty object", () => {
        const object = {
            test: 1,
            blub: "2",
            nested: {
                something: "else",
                if: true,
            },
            array: [1, 2, 3],
        };
        const copy = Objects.deepCopy(object);
        expect(copy).toStrictEqual(object);
        expect(copy).not.toBe(object);
    });
});

describe("Mapping", () => {
    test("the empty object returns a new empty object", () => {
        const object: Record<string, number> = {};
        const actual = Objects.mapObject(object, (x) => x * 2);
        expect(actual).toEqual(object);
        expect(actual).not.toBe(object);
    });

    test("the non-empty object returns a new object with its values mapped", () => {
        const numbers = {one: 1, two: 2, three: 3};
        const actual = Objects.mapObject(numbers, (x) => x * 2);
        const expected = {one: 2, two: 4, three: 6};
        expect(actual).toEqual(expected);
        expect(actual).not.toBe(numbers);
    });

    test("doesn't change the input object", () => {
        const numbers = {one: 1, two: 2, three: 3};
        const copy = deepCopy(numbers);

        Objects.mapObject(numbers, (x) => x * 2);
        expect(numbers).toStrictEqual(copy);
    });
});
