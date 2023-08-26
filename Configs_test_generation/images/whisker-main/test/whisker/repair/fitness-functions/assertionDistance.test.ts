import {
    assertionDistance,
    assertionDistanceNormalized,
    WhiskerAssertionError
} from "../../../../src/repair/fitness-functions/assertionDistance";

describe.each([
    [false, 'isTrue', true, Number.MAX_VALUE],
    ["", 'isTrue', true, Number.MAX_VALUE],
    [0, 'isTrue', true, Number.MAX_VALUE],

    [false, 'ok', true, Number.MAX_VALUE],
    ["", 'ok', true, 1],
    [0, 'ok', true, 1],

    [true, 'isFalse', true, Number.MAX_VALUE],
    ["abc", 'isFalse', true, Number.MAX_VALUE],
    [42, 'isFalse', true, Number.MAX_VALUE],

    [false, 'not', true, Number.MAX_VALUE],
    ["abc", 'not', true, 3],
    [42, 'not', true, 42],

    [42, "===", 23, 19],
    [-42, "===", 23, 65],
    [42, "===", -23, 65],
    [-42, "===", -23, 19],
    [42, "===", "23", Number.MAX_VALUE],
    [-42, "===", "23", Number.MAX_VALUE],
    [42, "===", "-23", Number.MAX_VALUE],
    [-42, "===", "-23", Number.MAX_VALUE],
    ["42", "===", 23, Number.MAX_VALUE],
    ["-42", "===", 23, Number.MAX_VALUE],
    ["42", "===", -23, Number.MAX_VALUE],
    ["-42", "===", -23, Number.MAX_VALUE],
    ["42", "===", "23", 2],
    ["-42", "===", "23", 3],
    ["42", "===", "-23", 2],
    ["-42", "===", "-23", 2],
    ["abc", "===", "ab", 1],
    ["ab3", "===", "cde", 3],

    [42, "==", 23, 19],
    [-42, "==", 23, 65],
    [42, "==", -23, 65],
    [-42, "==", -23, 19],
    [42, "==", "23", 19],
    [-42, "==", "23", 65],
    [42, "==", "-23", 65],
    [-42, "==", "-23", 19],
    ["42", "==", 23, 19],
    ["-42", "==", 23, 65],
    ["42", "==", -23, 65],
    ["-42", "==", -23, 19],
    ["42", "==", "23", 2],
    ["-42", "==", "23", 3],
    ["42", "==", "-23", 2],
    ["-42", "==", "-23", 2],
    ["abc", "==", "ab", 1],
    ["ab3", "==", "cde", 3],

    [42, "withinRange", 23, 19],
    [42, "withinRange", "23", 19],
    ["42", "withinRange", 23, 19],
    ["42", "withinRange", "23", 2],

    [42, "match", 23, 19],
    [42, "match", "23", 19],
    ["42", "match", 23, 19],
    ["42", "match", "23", 2],

    [42, "!==", 42, 1],
    ["42", "!==", 42, Number.MAX_VALUE],
    [42, "!==", "42", Number.MAX_VALUE],
    ["42", "!==", "42", 1],

    [42, "!=", 42, 1],
    ["42", "!=", 42, 1],
    [42, "!=", "42", 1],
    ["42", "!=", "42", 1],

    [42, ">", 23, 20],
    ["42", ">", 23, 20],
    [42, ">", "23", 20],
    ["42", ">", "23", 20],
    ["a", ">", "b", Number.MAX_VALUE],

    [42, ">=", 23, 19],
    ["42", ">=", 23, 19],
    [42, ">=", "23", 19],
    ["42", ">=", "23", 19],
    ["a", ">=", "b", Number.MAX_VALUE],

    [23, "<", 42, 20],
    ["23", "<", 42, 20],
    [23, "<", "42", 20],
    ["23", "<", "42", 20],
    ["b", "<", "a", Number.MAX_VALUE],

    [23, "<=", 42, 19],
    ["23", "<=", 42, 19],
    [23, "<=", "42", 19],
    ["23", "<=", "42", 19],
    ["b", "<=", "a", Number.MAX_VALUE],

    [3, "isEmpty", 0, 3],
    [1, "isEmpty", 0, 1],

    [false, "isNotEmpty", true, 1],

    [null, "fail", null, Number.MAX_VALUE],

])('The assertion distance', (a, operator, e, expected) => {
    const _a = typeof a === "string" ? `"${a}"` : a;
    const _e = typeof e === "string" ? `"${e}"` : e;
    const assertion =
        operator === "fail" ? "fail()" :
        operator === "isEmpty" ? `${operator}(<${_a} elements>)` :
        operator === "isNotEmpty" ? `${operator}([])`:
        operator === "isTrue" || operator === "isFalse" || operator === "ok" || operator === "not"
            ? `${operator}(${_a})`
            : `${_a} ${operator} ${_e}`;

    const assertionError = {
        operator: operator as WhiskerAssertionError['operator'],
        actual: a,
        expected: e
    };

    describe(`for ${assertion}`, () => {
        it(`is ${expected}`, () => {
            const actual = assertionDistance(assertionError);
            expect(actual).toStrictEqual(expected);
        });

        it(`is between 0 and 1 when normalized`, () => {
            const actual = assertionDistanceNormalized(assertionError);
            expect(actual).toBeGreaterThanOrEqual(0);
            expect(actual).toBeLessThanOrEqual(1);
        });
    })
});
