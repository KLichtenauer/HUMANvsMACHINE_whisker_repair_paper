import {HashCode} from "./hashCode";

export type CSVSchema = Array<CSVLine>;

// Attention: if you change the interface, remember to also adjust getFitnessInitialVariant() in repair.js!
interface CSVLine {
    /**
     * The iteration or generation (depending on the algorithm) the chromosome belongs to.
     */
    iteration: number;

    /**
     * The hashCode of the chromosome.
     */
    hashCode: HashCode;

    /**
     * Whether the chromosome is viable.
     */
    viable: boolean;

    /**
     * The chromosome's fitness if it is viable. Otherwise, usually NaN or some other dummy value.
     */
    fitness: number;

    /**
     * The number of passing tests.
     */
    numPass: number;

    /**
     * The number of failing tests.
     */
    numFail: number;

    /**
     * The passing tests, identified by their name.
     */
    passing: Set<string>;

    /**
     * The failing tests, identified by their name.
     */
    failing: Set<string>;

    /**
     * The time it took to evaluate fitness, in milliseconds.
     */
    time: number;

    /**
     * The time expired since the search was started.
     */
    now: number;
}
