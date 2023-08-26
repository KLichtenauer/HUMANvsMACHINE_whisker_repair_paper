import {RepairCrossover, RepairCrossoverProps} from "./RepairCrossover";
import {ChromosomeGenerator} from "../../whisker/search/ChromosomeGenerator";
import {RepairChromosome} from "../chromosomes/RepairChromosome";
import {Pair} from "../../whisker/utils/Pair";

export class HeadlessChickenRepairCrossover extends RepairCrossover {
    private _generator: ChromosomeGenerator<RepairChromosome> | null = null;

    constructor(props: RepairCrossoverProps) {
        super(props);
    }

    set generator(generator: ChromosomeGenerator<RepairChromosome>) {
        this._generator = generator;
    }

    override apply(parent1: RepairChromosome, parent2: RepairChromosome): Pair<RepairChromosome> {
        parent2 = this._generator.get();
        return super.apply(parent1, parent2);
    }
}
