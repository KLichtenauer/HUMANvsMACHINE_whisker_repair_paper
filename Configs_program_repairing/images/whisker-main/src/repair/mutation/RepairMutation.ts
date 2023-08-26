import {RepairChromosome} from "../chromosomes/RepairChromosome";
import {Mutation} from "../../whisker/search/Mutation";
import {Assembler} from "../../assembler/Assembler";
import {Container} from "../../whisker/utils/Container";
import {DebugLogger, pick, pickUniformKeyThenValue} from "./utils";
import {ChangeLog} from "../utils/RepairMeta";
import {newSuspiciousnessMap, SuspiciousnessMap, SuspiciousnessMetric} from "../SuspiciousnessMetric";
import {IllegalArgumentException} from "../../whisker/core/exceptions/IllegalArgumentException";
import {ValidationError} from "../../assembler/errors";
import {EventEmitter} from "events";
import {Randomness} from "../../whisker/utils/Randomness";
import {MultiMap} from "../../assembler/utils/MultiMap";
import {HashCode} from "../utils/hashCode";
import {BlockMeta, Meta} from "../../assembler/meta";
import Arrays from "../../whisker/utils/Arrays";
import {BlockID} from "../../assembler/types/blocks/Block";

// TODO ------------------------------------------------------------------------------------------------------------

// primitiveInputs: mutate the value randomly, and seed constants from the same project and other projects?
// wrapExpression -> logical not, mathop?
// unwrapExpression -> replace nested expression with one of its operands?

export interface RepairMutationProps {
    operators: Array<RepairMutationOperator>,
    suspiciousnessMetric: SuspiciousnessMetric,
    probability: number,
    stratifiedSampling: boolean,
    fixSpace: Array<Assembler>,
}

export interface FixSpace {
    exprs: Array<Meta>;
    stmts: Array<BlockMeta>;
    handlers: Array<BlockMeta>;
    cBlocks: Array<BlockMeta>;
}

export class RepairMutation extends EventEmitter implements Mutation<RepairChromosome> {
    private readonly _operators: Array<RepairMutationOperator>;
    private readonly _suspiciousnessMetric: SuspiciousnessMetric;
    private readonly _probability: number;
    private readonly _stratifiedSampling: boolean;
    private readonly _fixSpace: FixSpace;

    constructor({operators, suspiciousnessMetric, probability, stratifiedSampling, fixSpace}: RepairMutationProps) {
        super();

        if (!(0 <= probability && probability <= 1)) {
            throw new IllegalArgumentException(`Invalid probability: ${probability}`);
        }

        this._operators = [...operators];
        this._suspiciousnessMetric = suspiciousnessMetric;
        this._probability = probability;
        this._stratifiedSampling = stratifiedSampling;

        const exprs = fixSpace.flatMap((p) => p.getExprs().map((expr) => p.getExprMeta(expr)));
        const stmts = fixSpace.flatMap((p) => p.getStmts().map((stmt) => p.getStmtMeta(stmt)));
        const handlers = fixSpace.flatMap((p) => p.getEventHandlers().map((handler) => p.getStmtMeta(handler)));
        const cBlocks = fixSpace.flatMap((p) => p.getCBlocks().map((cBlock) => p.getStmtMeta(cBlock, true)));

        this._fixSpace = {exprs, stmts, handlers, cBlocks};
    }

    private _applyOpportunistically(chromosome: RepairChromosome): RepairChromosome {
        const debugLog = (...args) => Container.debugLog(`[${chromosome.hashCode}]`, ...args);
        const assembler = new Assembler(chromosome.getProjectJSON());
        const changeLogs = chromosome.getChangeLogs();
        const suspiciousness = newSuspiciousnessMap(chromosome.statistics, this._suspiciousnessMetric);

        // Shuffle the order in which the operators are tried.
        const operators = this._stratifiedSampling
            ? stratifyRandomly(this._operators)
            : shuffleRandomly(this._operators);

        let applied = false;

        // Try to apply each operator one by one. Stop once the first operator succeeds.
        for (const operator of operators) {
            debugLog(`Trying to apply "${operator.toString()}"`);
            const changeLog = operator.apply(assembler, suspiciousness, debugLog, this._fixSpace, new Set());
            if (changeLog !== null) { // Application was successful -> stop.
                debugLog(`Successful application: "${operator.toString()}"`);
                changeLog.parents.push(chromosome.hashCode);
                changeLogs.push(changeLog);
                applied = true;
                break;
            }
            debugLog(`Skipped "${operator.toString()}"`);
        }

        if (!applied) {
            debugLog(`No mutation operators are applicable. Skipping mutation.`);
        }

        let mutant: RepairChromosome | null = null;

        try {
            mutant = new RepairChromosome(
                assembler.toJSON(),
                chromosome.getMutationOperator(),
                chromosome.getCrossoverOperator(),
                chromosome.statistics.traces,
            );
        } catch (e) {
            if (e instanceof ValidationError) {
                console.error(`ERROR [${chromosome.hashCode}]`, e.message);
            }

            throw e;
        }

        mutant.appendChangeLogs(changeLogs);

        this.emit("variant built", mutant.hashCode, JSON.stringify(mutant.getProjectJSON(), null, 4));

        //chromosome.logDiffTo(mutant);

        return mutant;
    }

    private _apply(chromosome: RepairChromosome): RepairChromosome {
        const debugLog = (...args) => Container.debugLog(`[${chromosome.hashCode}]`, ...args);

        const assembler = new Assembler(chromosome.getProjectJSON());
        const applicableOperators = this._operators.filter((op) => op.canApply(assembler, this._fixSpace, new Set()));

        const changeLogs = chromosome.getChangeLogs();

        if (applicableOperators.length > 0) {
            let operator: RepairMutationOperator;

            if (this._stratifiedSampling) {
                const stratified = groupByCategory(applicableOperators);
                [, operator] = pickUniformKeyThenValue(stratified);
            } else {
                operator = pick(applicableOperators);
            }

            const suspiciousness = newSuspiciousnessMap(chromosome.statistics, this._suspiciousnessMetric);

            debugLog(`Applying "${operator.toString()}"`);
            const changeLog = operator.apply(assembler, suspiciousness, debugLog, this._fixSpace, new Set());

            changeLog.parents.push(chromosome.hashCode);
            changeLogs.push(changeLog);
        } else {
            debugLog(`No mutation operators are applicable. Skipping mutation.`);
        }

        let mutant: RepairChromosome | null = null;

        try {
            mutant = new RepairChromosome(
                assembler.toJSON(),
                chromosome.getMutationOperator(),
                chromosome.getCrossoverOperator(),
                chromosome.statistics.traces,
            );
        } catch (e) {
            if (e instanceof ValidationError) {
                console.error(`ERROR [${chromosome.hashCode}]`, e.message);
            }

            throw e;
        }

        mutant.appendChangeLogs(changeLogs);

        this.emit("variant built", mutant.hashCode, JSON.stringify(mutant.getProjectJSON(), null, 4));

        //chromosome.logDiffTo(mutant);

        return mutant;
    }

    apply(chromosome: RepairChromosome): RepairChromosome {
        return withProbability(this._probability)
            ? this._applyOpportunistically(chromosome) // this._apply(chromosome)
            : chromosome.clone();
    }

    withProbability(probability: number): RepairMutation {
        const mutation = new RepairMutation({
            operators: this._operators,
            suspiciousnessMetric: this._suspiciousnessMetric,
            stratifiedSampling: this._stratifiedSampling,
            probability,
            fixSpace: [],
        });

        Object.assign(mutation._fixSpace, this._fixSpace);

        return mutation;
    }

    declare emit: (eventName: "variant built", ...[hashCode, jsonString]: [HashCode, string]) => boolean;
}

function groupByCategory(operators: Array<RepairMutationOperator>): MultiMap<MutationCategory, RepairMutationOperator> {
    const grouped = new MultiMap<MutationCategory, RepairMutationOperator>();

    for (const operator of operators) {
        grouped.set(operator.category, operator);
    }

    return grouped;
}

/**
 * Stratified sampling of mutation operators:
 * 1. First, the three mutation categories (deletion/insertion/change) are ordered randomly.
 * 2. Then, for each category, push all mutation operators belonging to that category into the result array, in random
 *    order.
 *
 * @param operators the operators to consider
 */
function stratifyRandomly(operators: Array<RepairMutationOperator>): Array<RepairMutationOperator> {
    const grouped = groupByCategory(operators);

    // (1) First, decide the order of the categories.
    const categories = [...grouped.keys()];
    Arrays.shuffle(categories);

    const randomized = new Array<RepairMutationOperator>();

    for (const category of categories) {
        // (2) Within each category, the order of its operators is randomized, too.
        const operators = [...grouped.get(category)];
        Arrays.shuffle(operators);
        randomized.push(...operators);
    }

    return randomized;
}

function shuffleRandomly(operators: Array<RepairMutationOperator>): Array<RepairMutationOperator> {
    operators = [...operators]; // Create a copy not to modify the input array in-place.
    Arrays.shuffle(operators);
    return operators;
}

export interface RepairMutationOperator {
    canApply(assembler: Assembler, fixSpace: FixSpace, blacklist: Set<BlockID>): boolean;

    apply(
        assembler: Assembler,
        suspiciousness: SuspiciousnessMap,
        debugLog: DebugLogger,
        fixSpace: FixSpace,
        blacklist: Set<BlockID>,
    ): ChangeLog;

    toString(): string;

    get category(): MutationCategory;
}

export type MutationCategory =
    | "deletion" // only deletes blocks -> number of blocks in the project gets smaller
    | "insertion" // only inserts blocks -> number of blocks in the project gets bigger
    | "change" // changes blocks (e.g., by deletion AND insertion) -> number of blocks in the project stays the same
    ;

function withProbability(p: number): boolean {
    return Randomness.getInstance().withProbability(p);
}
