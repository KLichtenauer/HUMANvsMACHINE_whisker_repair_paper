import {RepairChromosome} from "./RepairChromosome";
import {ChromosomeGenerator} from "../../whisker/search/ChromosomeGenerator";
import {NotYetImplementedException} from "../../whisker/core/exceptions/NotYetImplementedException";
import {RepairMutation} from "../mutation/RepairMutation";
import {Mutation} from "../../whisker/search/Mutation";
import {ESMutation} from "../mutation/ESMutation";

/**
 * A generator that returns a new mutant of the original chromosome every time it is called.
 */
export class MutatingChromosomeGenerator implements ChromosomeGenerator<RepairChromosome> {
    private readonly _original: RepairChromosome;
    private readonly _mutation: Mutation<RepairChromosome>;

    /**
     * Creates a new generator instance, using the given chromosome as the original variant.
     *
     * @param original the original chromosome
     */
    public constructor(original: RepairChromosome) {
        this._original = original.clone();
        const mutation = original.getMutationOperator();

        // In case of RepairMutation, it is desirable to use a mutation probability of 100% for generating the initial
        // population. Otherwise, exact copies of the original chromosome could appear several times in the population.
        if (mutation instanceof RepairMutation) {
            this._mutation = mutation.withProbability(1);
        } else if (mutation instanceof ESMutation) {
            this._mutation = new ESMutation(mutation, true);
        } else {
            this._mutation = mutation;
        }
    }

    /**
     * Returns a mutation of the original variant the generator was constructed with. To this, the chromosome's mutation
     * operator is used.
     */
    get(): RepairChromosome {
        return this._mutation.apply(this._original);
    }

    setMutationOperator(): never {
        throw new NotYetImplementedException();
    }

    setCrossoverOperator(): never {
        throw new NotYetImplementedException();
    }
}
