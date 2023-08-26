import {chooseOperator, probabilities} from "../../../../src/repair/mutation/ESMutation";
import {expect} from "@jest/globals";

describe('probabilities', function () {
    test("of an operation maybe being executed", () => {
        const actual = probabilities({insertion: 1 / 3, deletion: 1 / 3, change: 1 / 3}, false);

        const expected = [
            (2 / 3) * (2 / 3) * (2 / 3), // 000
            (2 / 3) * (2 / 3) * (1 / 3), // 001
            (2 / 3) * (1 / 3) * (2 / 3), // 010
            (2 / 3) * (1 / 3) * (1 / 3), // 011
            (1 / 3) * (2 / 3) * (2 / 3), // 100
            (1 / 3) * (2 / 3) * (1 / 3), // 101
            (1 / 3) * (1 / 3) * (2 / 3), // 110
        ].reduce((sums, p) => {
            sums.push(sums[sums.length - 1] + p);
            return sums;
        }, [0]).map((d) => expect.closeTo(d, 10));
        expected.shift(); // remove the first element (0)

        expect(actual).toStrictEqual(expected);

        const last = actual[actual.length - 1];
        const pAll = (1 / 3) * (1 / 3) * (1 / 3); // 111
        expect(last + pAll).toStrictEqual(1);
    });

    test("of an operation being executed at least once", () => {
        const actual = probabilities({insertion: 1 / 3, deletion: 1 / 3, change: 1 / 3}, true);

        const pNotAll = 1 - (2 / 3) * (2 / 3) * (2 / 3);
        const expected = [
            (2 / 3) * (2 / 3) * (1 / 3), // 001
            (2 / 3) * (1 / 3) * (2 / 3), // 010
            (2 / 3) * (1 / 3) * (1 / 3), // 011
            (1 / 3) * (2 / 3) * (2 / 3), // 100
            (1 / 3) * (2 / 3) * (1 / 3), // 101
            (1 / 3) * (1 / 3) * (2 / 3), // 110
        ]
            .map((d) => d / pNotAll)
            .reduce((sums, p) => {
                sums.push(sums[sums.length - 1] + p);
                return sums;
            }, [0])
            .map((d) => expect.closeTo(d, 10));

        expect(actual).toStrictEqual(expected);

        const last = actual[actual.length - 1];
        const pAll = (1 / 3) * (1 / 3) * (1 / 3) / pNotAll; // 111
        expect(last + pAll).toStrictEqual(1);
    });
});
