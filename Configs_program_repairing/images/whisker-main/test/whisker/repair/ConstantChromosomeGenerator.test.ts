import {Chromosome} from "../../../src/whisker/search/Chromosome";
import {Crossover} from "../../../src/whisker/search/Crossover";
import {Mutation} from "../../../src/whisker/search/Mutation";
import {ConstantChromosomeGenerator} from "../../../src/repair/chromosomes/ConstantChromosomeGenerator";
import {expect} from "@jest/globals";
import {Pair} from "../../../src/whisker/utils/Pair";
import isEqual from "lodash.isequal";

class Dummy extends Chromosome {
    // noinspection JSUnusedLocalSymbols
    private _field = 42;

    // noinspection JSUnusedLocalSymbols
    private readonly _array = [1, 2, 3, 4];

    get field(): number {
        return this._field;
    }

    get array(): number[] {
        return this._array;
    }

    set field(value: number) {
        this._field = value;
    }

    clone(): Chromosome {
        return new Dummy();
    }

    cloneWith(): Chromosome {
        throw new Error("unsupported");
    }

    getCrossoverOperator(): Crossover<this> {
        throw new Error("unsupported");
    }

    getLength(): number {
        throw new Error("unsupported");
    }

    getMutationOperator(): Mutation<this> {
        throw new Error("unsupported");
    }
}

describe("ConstantChromosomeGenerator", () => {
    const generator = new ConstantChromosomeGenerator(new Dummy());

    function generateChromosomes(): Pair<Dummy> {
        return [generator.get(), generator.get()];
    }

    test("get returns a new instance every time", () => {
        const [first, second] = generateChromosomes();
        expect(first !== second).toBeTruthy();
    });

    test("get returns chromosomes that are structurally equivalent", () => {
        const [first, second] = generateChromosomes();
        expect(isEqual(first, second)).toBeTruthy();
    });

    test("get is robust against state changes of its input chromosome", () => {
        const fresh = new Dummy();
        const generator = new ConstantChromosomeGenerator(fresh);
        const new1 = generator.get();
        fresh.field = 7;
        const new2 = generator.get();
        expect(isEqual(new1, new2)).toBeTruthy();
    });

    test("get is robust against state changes of its returned chromosome", () => {
        const fresh = new Dummy();
        const generator = new ConstantChromosomeGenerator(fresh);
        const new1 = generator.get();
        new1.field = 7;
        const new2 = generator.get();
        expect(isEqual(fresh, new2)).toBeTruthy();
    });
});
