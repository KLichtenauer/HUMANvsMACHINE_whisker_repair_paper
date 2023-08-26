import {RepairChromosome} from "../chromosomes/RepairChromosome";
import {Mutation} from "../../whisker/search/Mutation";
import {Randomness} from "../../whisker/utils/Randomness";
import {Assembler} from "../../assembler/Assembler";
import {BlockID} from "../../assembler/types/blocks/Block";
import {newSuspiciousnessMap, SuspiciousnessMap, SuspiciousnessMetric} from "../SuspiciousnessMetric";
import {IllegalArgumentException} from "../../whisker/core/exceptions/IllegalArgumentException";
import {FixSpace, MutationCategory, RepairMutationOperator} from "./RepairMutation";
import {EventEmitter} from "events";
import {DebugLogger} from "./utils";
import {MultiMap} from "../../assembler/utils/MultiMap";
import {Container} from "../../whisker/utils/Container";
import Arrays from "../../whisker/utils/Arrays";
import {ValidationError} from "../../assembler/errors";
import {ChangeLog} from "../utils/RepairMeta";

export interface ESMutationProps {
    operators: Array<RepairMutationOperator>,
    suspiciousnessMetric: SuspiciousnessMetric,
    probability: {
        insertion: number,
        deletion: number,
        change: number,
    }
    fixSpace: Array<Assembler>,
}

const DELETE = 1 << 0;
const CHANGE = 1 << 1;
const INSERT = 1 << 2;

export function probabilities({insertion: pi, deletion: pd, change: pc}: ESMutationProps['probability'], generator: boolean): Array<number> {
    /**
     * Returns the probability for the given combination `op` of operators to be executed. `op` is a number between 0
     * (nothing is executed) and DELETE | CHANGE | INSERT (inclusive, everything is executed).
     *
     * @param op the operator combination
     */
    function probability(op: number): number {
        const d = Number((op & DELETE) > 0);
        const c = Number((op & CHANGE) > 0);
        const i = Number((op & INSERT) > 0);
        const p = (d * pd + (1 - d) * (1 - pd)) * (c * pc + (1 - c) * (1 - pc)) * (i * pi + (1 - i) * (1 - pi));
        const n = 1 - (1 - pd) * (1 - pc) * (1 - pi);
        return generator ? p / n : p;
    }

    const ops = [...Array(DELETE | CHANGE | INSERT).keys()];
    if (generator) {
        ops.shift();
    }
    const ps = ops.map((op) => probability(op));
    const cumSum = ps.reduce((arr, p) => {
        arr.push(arr[arr.length - 1] + p);
        return arr;
    }, [0]); // cumulative sum of probabilities, array of ascending numbers
    return generator ? cumSum : cumSum.slice(1);
}

export function chooseOperator(probabilities: Array<number>): number {
    const p = Randomness.getInstance().nextDouble();

    for (const [operator, prob] of probabilities.entries()) {
        if (p < prob) {
            return operator;
        }
    }

    return DELETE | CHANGE | INSERT;
}

export class ESMutation extends EventEmitter implements Mutation<RepairChromosome> {
    private readonly _operators: Array<RepairMutationOperator>;
    private readonly _suspiciousnessMetric: SuspiciousnessMetric;
    private readonly _probabilities: Array<number>;
    private readonly _probability: ESMutationProps['probability'];
    private readonly _fixSpace: FixSpace;

    constructor(arg: ESMutationProps | ESMutation, generator?: boolean) {
        super();

        if (arg instanceof ESMutation) {
            this._fixSpace = arg._fixSpace;
            this._suspiciousnessMetric = arg._suspiciousnessMetric;
            this._operators = arg._operators;
            this._probability = arg._probability;
            this._probabilities = probabilities(arg._probability, true);
            this._copyEvents(arg);
        } else {
            const {operators, suspiciousnessMetric, probability, fixSpace} = arg;

            for (const [category, p] of Object.entries(probability)) {
                if (!(0 <= p && p <= 1)) {
                    throw new IllegalArgumentException(`Invalid probability for "${category}": ${p}`);
                }
            }

            this._operators = [...operators];
            this._suspiciousnessMetric = suspiciousnessMetric;
            this._probability = probability;
            this._probabilities = probabilities(probability, generator);

            const exprs = fixSpace.flatMap((p) => p.getExprs().map((expr) => p.getExprMeta(expr)));
            const stmts = fixSpace.flatMap((p) => p.getStmts().map((stmt) => p.getStmtMeta(stmt)));
            const handlers = fixSpace.flatMap((p) => p.getEventHandlers().map((handler) => p.getStmtMeta(handler)));
            const cBlocks = fixSpace.flatMap((p) => p.getCBlocks().map((cBlock) => p.getStmtMeta(cBlock, true)));

            this._fixSpace = {exprs, stmts, handlers, cBlocks};
        }
    }

    private _copyEvents(other: ESMutation): void {
        for (const eventName of other.eventNames()) {
            for (const listener of other.listeners(eventName)) {
                // @ts-ignore
                this.on(eventName, listener);
            }
        }
    }

    private _chooseOperator(): number {
        const p = Randomness.getInstance().nextDouble();

        for (const [operator, prob] of this._probabilities.entries()) {
            if (p < prob) {
                return operator;
            }
        }

        return DELETE | CHANGE | INSERT;
    }

    apply(chromosome: RepairChromosome): RepairChromosome {
        const debugLog = (...args) => Container.debugLog(`[${chromosome.hashCode}]`, ...args);
        const changeLogs = chromosome.getChangeLogs();
        const assembler = new Assembler(chromosome.getProjectJSON());

        let applied = false;
        const operator = this._chooseOperator();

        // Deletion
        if (operator & DELETE) {
            debugLog('Deletion');
            const suspiciousness = newSuspiciousnessMap(chromosome.statistics, this._suspiciousnessMetric);
            const newChangeLogs = this._deleteOrChange("deletion", assembler, suspiciousness, debugLog);
            applied = changeLogs.length > 0;
            newChangeLogs.forEach((cl) => cl.parents.push(chromosome.hashCode));
            changeLogs.push(...newChangeLogs);
        }

        // Change
        if (operator & CHANGE) {
            debugLog('Change');
            const suspiciousness = newSuspiciousnessMap(chromosome.statistics, this._suspiciousnessMetric);
            const newChangeLogs = this._deleteOrChange("change", assembler, suspiciousness, debugLog);
            applied = changeLogs.length > 0;
            newChangeLogs.forEach((cl) => cl.parents.push(chromosome.hashCode));
            changeLogs.push(...newChangeLogs);
        }

        // Insertion
        if (operator & INSERT) {
            debugLog('Insertion');
            const suspiciousness = newSuspiciousnessMap(chromosome.statistics, this._suspiciousnessMetric);
            const newChangeLogs = this._insert(assembler, suspiciousness, debugLog);
            applied = changeLogs.length > 0;
            newChangeLogs.forEach((cl) => cl.parents.push(chromosome.hashCode));
            changeLogs.push(...newChangeLogs);
        }

        if (!applied) {
            debugLog(`Mutation was skipped or could not be performed.`);
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

        return mutant;
    }

    private _deleteOrChange(
        category: "deletion" | "change",
        assembler: Assembler,
        suspiciousness: MultiMap<number, BlockID>,
        debugLog: DebugLogger
    ): Array<ChangeLog> {
        const operators = this._operators.filter((op) => op.category === category);
        const changeLogs = new Array<ChangeLog>();

        if (operators.length === 0) {
            debugLog(`Skipped: No ${category} operators specified!`);
            return changeLogs;
        }

        const l = assembler.getBlockCount();
        const blackList = new Set<BlockID>();

        // We consider each block in the project.
        for (let i = 0; i < l; i++) {
            // On average, one block per project is deleted/changed.
            if (!withProbability(1 / l)) {
                continue;
            }

            this._applyOperator(operators, category, assembler, suspiciousness, blackList, changeLogs, debugLog);
        }

        if (changeLogs.length === 0) {
            debugLog(`No block was selected for ${category}`);
        }

        return changeLogs;
    }

    private _insert(
        assembler: Assembler,
        suspiciousness: MultiMap<number, BlockID>,
        debugLog: DebugLogger
    ): Array<ChangeLog> {
        const operators = this._operators.filter((op) => op.category === "insertion");
        const changeLogs = new Array<ChangeLog>();

        if (operators.length === 0) {
            debugLog("Skipped: No insertion operators specified!");
            return changeLogs;
        }

        const blackList = new Set<BlockID>();
        const ALPHA = 0.5;

        for (let i = 0; withProbability(Math.pow(ALPHA, i)); i++) {
            this._applyOperator(operators, "insertion", assembler, suspiciousness, blackList, changeLogs, debugLog);
        }

        if (changeLogs.length === 0) {
            debugLog("No block was selected for insertion");
        }

        return changeLogs;
    }

    private _applyOperator(
        operators: Array<RepairMutationOperator>,
        category: MutationCategory,
        assembler: Assembler,
        suspiciousness: SuspiciousnessMap,
        blacklist: Set<BlockID>,
        changeLogs: Array<ChangeLog>,
        debugLog: DebugLogger
    ): void {
        // For every block, we have several (different) operators to choose from. We shuffle the array of operators
        // and try to apply each one opportunistically until the first one succeeds.
        shuffle(operators);

        for (const operator of operators) {
            debugLog(`Trying to apply "${operator.toString()}"`);

            // More suspicious blocks are more likely to be deleted/changed.
            const changeLog = operator.apply(assembler, suspiciousness, debugLog, this._fixSpace, blacklist);

            if (changeLog !== null) { // Successful application, move on to the next block.
                changeLogs.push(changeLog);
                debugLog(`Successful ${category}: "${operator.toString()}"`);

                for (const block of changeLog.operands) {
                    blacklist.add(block);
                }

                return;
            }
        }

        debugLog(`Skipped: No ${category} operator was applicable`);
    }
}

function withProbability(p: number): boolean {
    return Randomness.getInstance().withProbability(p);
}

function shuffle<T>(array: Array<T>): void {
    Arrays.shuffle(array);
}
