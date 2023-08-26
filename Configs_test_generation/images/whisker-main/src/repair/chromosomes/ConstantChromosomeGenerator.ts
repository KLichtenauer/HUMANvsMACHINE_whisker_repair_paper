import {ChromosomeGenerator} from "../../whisker/search/ChromosomeGenerator";
import {Chromosome} from "../../whisker/search/Chromosome";
import {NotYetImplementedException} from "../../whisker/core/exceptions/NotYetImplementedException";

/**
 * Always generates the same chromosome.
 */
export class ConstantChromosomeGenerator<C extends Chromosome> implements ChromosomeGenerator<C> {
    private readonly _chromosome: C;

    /**
     * Creates a new generator instance that will always generate the given chromosome.
     *
     * @param chromosome the chromosome
     */
    constructor(chromosome: C) {
        this._chromosome = chromosome.clone() as C;
    }

    /**
     * Returns a copy of the chromosome the generator was constructed with.
     */
    get(): C {
        return this._chromosome.clone() as C;
    }

    setCrossoverOperator(): never {
        throw new NotYetImplementedException();
    }

    setMutationOperator(): never {
        throw new NotYetImplementedException();
    }
}
