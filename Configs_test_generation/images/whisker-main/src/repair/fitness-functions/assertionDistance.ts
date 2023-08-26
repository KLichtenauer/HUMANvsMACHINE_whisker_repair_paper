import assert, {AssertionError} from "assert";
import {IllegalArgumentException} from "../../whisker/core/exceptions/IllegalArgumentException";
import Statistics from "../../whisker/utils/Statistics";

// Operators defined in whisker-main/src/test-runner/assert.js
type Operator =
    | '=='
    | '!='
    | '==='
    | '!=='
    | '>'
    | '>='
    | '<'
    | '<='
    | 'ok'
    | 'isTrue'
    | 'not'
    | 'isFalse'
    | 'withinRange'
    | 'match'
    | 'isEmpty'
    | 'isNotEmpty'
    | 'fail'
    ;

// The assertion errors that can be thrown by a Whisker test.
// Note: the "stack" property is non-standard, but it is present on Chrome, Firefox, Edge, and Safari.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/stack
export type WhiskerAssertionError = Pick<{
    [Prop in keyof AssertionError]: Prop extends 'operator' ? Operator : AssertionError[Prop];
}, 'actual' | 'expected' | 'operator' | 'stack'>

/**
 * Checks if the argument is a number or a string that can be converted to a number, and is not `NaN`.
 * @param x the argument to check
 */
function isNumeric(x: unknown): boolean {
    if (typeof x !== "number" && typeof x !== "string") {
        return false;
    } else {
        return !Number.isNaN(Number(x));
    }
}

function distNumbers(actual: number, expected: number): number {
    return Math.abs(actual - expected);
}

function distStrings(actual: string, expected: string): number {
    return Statistics.levenshteinDistance(actual, expected);
}

function distEqual(actual: unknown, expected: unknown, loose: boolean): number {
    if (typeof actual === 'string' && typeof expected === 'string') {
        return distStrings(actual, expected);
    }

    if (typeof actual === 'number' && typeof expected === 'number') {
        return distNumbers(actual, expected);
    }

    // FIXME: Only approximates the semantics of loosely equal for the common case of comparing strings and numbers.
    // https://tc39.es/ecma262/#sec-islooselyequal
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#loose_equality_using
    if (loose) {
        if (typeof actual === 'number' && typeof expected === 'string') {
            const expectedAsNumber = Number(expected);
            if (!Number.isNaN(expectedAsNumber)) {
                return distNumbers(actual, expectedAsNumber);
            }
        } else if (typeof actual === 'string' && typeof expected === 'number') {
            const actualAsNumber = Number(actual);
            if (!Number.isNaN(actualAsNumber)) {
                return distNumbers(actualAsNumber, expected);
            }
        }
    }

    return Number.MAX_VALUE;
}

function distUnequal(actual: unknown, expected: unknown, loose: boolean): number {
    const tA = typeof actual;
    const tE = typeof expected;

    if (tA === 'string' && tE === 'string' ||
        tA === 'number' && tE === 'number' ||

        // FIXME: only approximates the semantics of loosely unequal for the common case of comparing strings and numbers.
        // https://tc39.es/ecma262/#sec-islooselyequal
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#loose_equality_using
        tA === 'number' && tE === 'string' && loose && isNumeric(expected) ||
        tA === 'string' && tE === 'number' && loose && isNumeric(actual)
    ) {
        return 1;
    }

    return Number.MAX_VALUE;
}

function distTrue(actual: unknown, loose: boolean): number {
    // https://developer.mozilla.org/en-US/docs/Glossary/Falsy
    if (loose) {
        if (actual === "" || actual === 0) {
            return 1;
        }
    }

    return Number.MAX_VALUE;
}

function distFalse(actual: unknown, loose: boolean): number {
    // https://developer.mozilla.org/en-US/docs/Glossary/Truthy
    if (loose) {
        if (typeof actual === 'number') {
            return distNumbers(actual, 0);
        } else if (typeof actual === 'string') {
            return distStrings(actual, "");
        }
    }

    return Number.MAX_VALUE;
}

function distCompareEqual(actual: unknown, expected: unknown): number {
    // Note: In JavaScript, arbitrary strings can also be compared using < and >. But in our case, we only allow this
    // if both strings can be converted to a number first.
    return isNumeric(actual) && isNumeric(expected)
        ? distNumbers(Number(actual), Number(expected))
        : Number.MAX_VALUE;
}

function distCompare(actual: unknown, expected: unknown): number {
    return 1 + distCompareEqual(actual, expected);
}

export function assertionDistance(e: WhiskerAssertionError): number {
    const {operator, actual, expected} = e;

    switch (operator) {
        case 'isTrue':
            return distTrue(actual, false);

        case 'ok':
            return distTrue(actual, true);

        case 'isFalse':
            return distFalse(actual, false);

        case 'not':
            return distFalse(actual, true);

        case '===':
            return distEqual(actual, expected, false);

        case '==':          // FIXME: Could be assert.equal or assert.equalDictionaries, but how to distinguish this?
        case 'withinRange': // FIXME: don't know the delta for assert.withinRange -> just compare exact values
        case 'match':       // FIXME: `expected` could also be a RegExp, but I'm assuming string for now
            return distEqual(actual, expected, true);

        case '!==':
            return distUnequal(actual, expected, false);

        case '!=':
            return distUnequal(actual, expected, true);

        case '>':
        case '<':
            return distCompare(actual, expected);

        case '>=':
        case '<=':
            return distCompareEqual(expected, actual);

        case 'isEmpty':
            // `actual` is the length of the string/array
            return typeof actual === 'number' ? actual : Number.MAX_VALUE;

        case 'isNotEmpty':
            return 1;

        case 'fail':
            return Number.MAX_VALUE;

        default: {
            // noinspection JSUnusedLocalSymbols
            const exhaustivenessCheck: never = operator;
            throw new IllegalArgumentException(`Unknown operator "${operator}". Original error: ${JSON.stringify(e)}`);
        }
    }
}

export function assertionDistanceNormalized(assertionError: WhiskerAssertionError): number {
    const d = assertionDistance(assertionError);
    return d / (d + 1);
}
