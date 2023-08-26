import {Container} from "../../../../src/whisker/utils/Container";
import {Randomness} from "../../../../src/whisker/utils/Randomness";
import {expect} from "@jest/globals";
import {matchTargetsFuzzily, matchTargetsRandomly} from "../../../../src/repair/crossover/utils";
import {STAGE_NAME} from "../../../../src/assembler/selectors";
import Arrays from "../../../../src/whisker/utils/Arrays";
import {MultiMap} from "../../../../src/assembler/utils/MultiMap";
import {SuspiciousnessMap} from "../../../../src/repair/SuspiciousnessMetric";
import {BlockID} from "../../../../src/assembler/types/blocks/Block";
import {pick, pickBySuspiciousness} from "../../../../src/repair/mutation/utils";

describe("Matching targets fuzzily", () => {
    let oldLog: typeof Container.debugLog = null;
    let pick: jest.SpiedFunction<typeof Randomness.prototype.pick> = null;

    beforeAll(() => {
        oldLog = Container.debugLog;
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        Container.debugLog = () => {
            // Nothing, suppress any debug output.
        };
    });

    it("always matches targets with the same name", () => {
        const targets1 = ["hat", "cat", "bat", "rat"];
        const targets2 = ["rat", "cat", "bat"];

        const actual = matchTargetsFuzzily(targets1, targets2);
        const expected = new Map([["cat", "cat"], ["bat", "bat"], ["rat", "rat"]]);

        expect(actual).toStrictEqual(expected);
    });

    it("never matches a target twice", () => {
        const targets1 = ["hat", "cat", "bat", "rat"];
        const targets2 = ["rat", "cat", "bat", "cat"]; // duplicate "cat" that could be assigned to "hat"

        const actual = matchTargetsFuzzily(targets1, targets2);
        const expected = new Map([["cat", "cat"], ["bat", "bat"], ["rat", "rat"]]);

        expect(actual).toStrictEqual(expected);
    });

    it("preferably matches targets with similar names, and skips excess targets", () => {
        const targets1 = ["blub", "cat"];
        const targets2 = ["rat"];
        expect(matchTargetsFuzzily(targets1, targets2)).not.toContain("blub");
    });

    it("makes a random choice among equally similar names when no names match exactly", () => {
        const targets1 = ["cat"];
        const targets2 = ["rat", "bat", "hat"];
        pick = jest.spyOn(Randomness.getInstance(), "pick").mockImplementation(([head]) => head);
        const actual = matchTargetsFuzzily(targets1, targets2);
        const expected = new Map([["cat", "rat"]]);
        expect(actual).toStrictEqual(expected);
    });

    it("never matches the stage and a sprite", () => {
        const targets1 = ["stage"];
        const targets2 = [STAGE_NAME];
        const actual = matchTargetsFuzzily(targets1, targets2);
        expect(actual).not.toContainEqual(["stage", STAGE_NAME]);
        expect(actual).not.toContainEqual([STAGE_NAME, "stage"]);
    });

    afterEach(() => {
        pick?.mockRestore();
    });

    afterAll(() => {
        if (oldLog) {
            Container.debugLog = oldLog;
        }
    });
});

describe("Matching targets randomly", function () {
    const targets1 = ["hat", "cat", STAGE_NAME, "bat", "rat"];
    const targets2 = ["rat", "cat", "bat", STAGE_NAME];

    let oldLog: typeof Container.debugLog = null;
    let shuffle: jest.SpiedFunction<typeof Arrays.shuffle> = null;

    beforeAll(() => {
        oldLog = Container.debugLog;
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        Container.debugLog = () => {
            // Nothing, suppress any debug output.
        };
    });

    it("always matches the stage with the stage", () => {
        expect(matchTargetsRandomly(targets1, targets2)).toContainEqual([STAGE_NAME, STAGE_NAME]);
    });

    it("never matches the stage with a sprite", () => {
        const onlySprites = [...targets2];
        Arrays.remove(onlySprites, STAGE_NAME);
        const actual = matchTargetsRandomly(targets1, onlySprites);
        expect(actual.keys()).not.toContainEqual(STAGE_NAME);
        expect(actual.values()).not.toContainEqual(STAGE_NAME);
    });

    it("matches sprites randomly", () => {
        shuffle = jest.spyOn(Arrays, "shuffle")
            .mockImplementationOnce(() => {
                /* do not change the array */
            })
            .mockImplementationOnce((arr) => {
                arr.reverse();
            });

        const actual = matchTargetsRandomly(targets1, targets2);

        const expected = new Map([
            ["hat", "bat"],
            ["cat", "cat"],
            ["bat", "rat"],
            [STAGE_NAME, STAGE_NAME],
        ]);

        expect(actual).toStrictEqual(expected);
    });

    afterEach(() => {
        shuffle?.mockRestore();
    });

    afterAll(() => {
        if (oldLog) {
            Container.debugLog = oldLog;
        }
    });
});

describe("Picking blocks by suspiciousness", () => {
    let suspMap: SuspiciousnessMap = null;
    let blocks: Array<BlockID> = null;
    let nextIntMock: jest.SpiedFunction<typeof Randomness.prototype.nextInt> = null;

    beforeAll(() => {
        suspMap = new MultiMap();
        ([
            // pocket 1
            [0, "5"],
            [0, "9"],
            [0, "11"],

            // pocket 2
            [1, "2"],
            [1, "3"],
            [1, "13"],

            // pocket 3
            [4 / 3, "4"],

            // pocket 4
            [2, "6"],

            // pocket 5
            [4, "7"],
        ] as const).forEach(([susp, block]) => suspMap.set(susp, block));
        blocks = [...suspMap.values()];
        nextIntMock = jest.spyOn(Randomness.prototype, 'nextInt');
    });

    beforeEach(() => {
        nextIntMock.mockClear();
    });

    it.each([[14, 4], [0, 0], [4, 4 / 3]])("returns from the correct pocket", (wheelPosition, susp) => {
        nextIntMock.mockReturnValueOnce(wheelPosition);
        const expectedBlocks = suspMap.get(susp);
        const actual = pickBySuspiciousness(blocks, suspMap);
        expect(expectedBlocks).toContainEqual(actual);
    });

    it("follows the correct probability distribution", () => {
        const numPockets = [...suspMap.keys()].length;
        const numWheelPositions = numPockets * (numPockets + 1) / 2;
        const everyWheelPosition = [...Array(numWheelPositions).keys()];
        Arrays.shuffle(everyWheelPosition);

        const returnValues = [];
        for (let i = 0; i < everyWheelPosition.length; i++) {
            nextIntMock.mockReturnValueOnce(everyWheelPosition[i]);
            returnValues.push(pickBySuspiciousness(blocks, suspMap));
        }

        const count = (value: string): number => returnValues.filter((elem) => elem === value).length;

        // On average, when spinning the wheel n*(n+1)/2 times, a value from pocket n must have been returned n times.
        expect(count("5") + count("9") + count("11")).toStrictEqual(1);
        expect(count("2") + count("3") + count("13")).toStrictEqual(2);
        expect(count("4")).toStrictEqual(3);
        expect(count("6")).toStrictEqual(4);
        expect(count("7")).toStrictEqual(5);
    });

    it("returns blocks with no suspiciousness information least often", () => {
        nextIntMock.mockReturnValueOnce(0);
        const blockWithoutInfo = "42";
        const actual = pickBySuspiciousness([...blocks, blockWithoutInfo], suspMap);
        expect(actual).toStrictEqual(blockWithoutInfo);
    });

    it("only returns blocks from the given array, even if the suspiciousness map contains excess blocks", () => {
        const block = pick([...suspMap.values()]);
        // It must not return any values present in the map other than the block itself.
        expect(pickBySuspiciousness([block], suspMap)).toStrictEqual(block);
    });
});
