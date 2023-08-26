import {
    barinel,
    dstar2,
    ochiai,
    op2,
    newSuspiciousnessMap,
    SuspiciousnessMetric,
    tarantula
} from "../../../src/repair/SuspiciousnessMetric";
import {statistics} from "./TestExecutionStatistics";

const NUM_DIGITS = 12;

// For each metric, tells the suspiciousness value (first component, number) for each line (second component, string).
const suspiciousnessValuesPerMetric = [
    {
        metric: dstar2,
        expected: [
            [1, "2"],
            [1, "3"],
            [4 / 3, "4"],
            [0, "5"],
            [2, "6"],
            [4, "7"],
            [0, "9"],
            [0, "11"],
            [1, "13"],
        ],
    },
    {
        metric: op2,
        expected: [
            [1.2, "2"],
            [1.2, "3"],
            [1.4, "4"],
            [-0.4, "5"],
            [1.6, "6"],
            [1.8, "7"],
            [-0.2, "9"],
            [-0.2, "11"],
            [1.2, "13"],
        ],
    },
    {
        metric: barinel,
        expected: [
            [1 / 3, "2"],
            [1 / 3, "3"],
            [2 / 5, "4"],
            [0, "5"],
            [1 / 2, "6"],
            [2 / 3, "7"],
            [0, "9"],
            [0, "11"],
            [1 / 3, "13"],
        ],
    },
    {
        metric: ochiai,
        expected: [
            [1 / Math.sqrt(3), "2"],
            [1 / Math.sqrt(3), "3"],
            [2 / Math.sqrt(10), "4"],
            [0, "5"],
            [1 / Math.sqrt(2), "6"],
            [2 / Math.sqrt(6), "7"],
            [0, "9"],
            [0, "11"],
            [1 / Math.sqrt(3), "13"],
        ],
    },
    {
        metric: tarantula,
        expected: [
            [0.5, "2"],
            [0.5, "3"],
            [4 / 7, "4"],
            [0.0, "5"],
            [2 / 3, "6"],
            [0.8, "7"],
            [0.0, "9"],
            [0.0, "11"],
            [0.5, "13"],
        ],
    },
]
    /*
     * Weird map is necessary because:
     * (1) test.each requires an array of arrays, and
     * (2) there seems to be no way to let Jest autogenerate the test title if we do not expose the metric name as
     *     first element of the nested arrays.
     */
    .map(({metric, expected}) => ([metric.name, {metric, expected}]));

test.each(suspiciousnessValuesPerMetric)('Computing suspiciousness with %s',
    (_name, {metric, expected}: { metric: SuspiciousnessMetric, expected: Array<[number, string]> }) => {
        // First, make sure we expect a precision of at least NUM_DIGITS digits after the decimal dot.
        expected = expected.map(([susp, line]) => [expect.closeTo(susp, NUM_DIGITS), line]);

        // Then, let's compute the actual suspicousness values.
        const actual = [...newSuspiciousnessMap(statistics, metric)];

        // Finally, we make sure both arrays `expected` and `actual` contain the same elements. We don't care about
        // the order, therefore we convert them into sets.
        expect(new Set(actual)).toStrictEqual(new Set(expected));
    });
