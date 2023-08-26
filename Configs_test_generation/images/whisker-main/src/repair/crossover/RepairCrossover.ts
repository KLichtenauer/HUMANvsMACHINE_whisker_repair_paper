import {Assembler} from "../../assembler/Assembler";
import {Randomness} from "../../whisker/utils/Randomness";
import {Crossover} from "../../whisker/search/Crossover";
import {RepairChromosome} from "../chromosomes/RepairChromosome";
import {Pair} from "../../whisker/utils/Pair";
import {Container} from "../../whisker/utils/Container";
import {ChangeLog} from "../utils/RepairMeta";
import {newSuspiciousnessMap, SuspiciousnessMap, SuspiciousnessMetric} from "../SuspiciousnessMetric";
import {IllegalArgumentException} from "../../whisker/core/exceptions/IllegalArgumentException";
import {DebugLogger} from "../mutation/utils";
import {ValidationError} from "../../assembler/errors";
import {HashCode} from "../utils/hashCode";

const pick: <T>(array: Array<T>) => T = Randomness.getInstance().pick.bind(Randomness.getInstance());

export interface RepairCrossoverProps {
    operators: Array<RepairCrossoverOperator>,
    suspiciousnessMetric: SuspiciousnessMetric,
    probability: number,
}

export class RepairCrossover extends Crossover<RepairChromosome> {
    private readonly _operators: Array<RepairCrossoverOperator>;
    private readonly _suspiciousnessMetric: SuspiciousnessMetric;
    private readonly _probability: number;

    constructor({operators, suspiciousnessMetric, probability}: RepairCrossoverProps) {
        super();

        if (!(0 <= probability && probability <= 1)) {
            throw new IllegalArgumentException(`Invalid probability: ${probability}`);
        }

        this._operators = [...operators];
        this._suspiciousnessMetric = suspiciousnessMetric;
        this._probability = probability;
    }

    private _apply(parent1: RepairChromosome, parent2: RepairChromosome): Pair<RepairChromosome> {
        const debugLog = (...args) => Container.debugLog(`1[${parent1.hashCode}] 2[${parent2.hashCode}]`, ...args);

        const project1 = new Assembler(parent1.getProjectJSON());
        const project2 = new Assembler(parent2.getProjectJSON());
        const applicableOperators = this._operators.filter((op) => op.canApply(project1, project2));

        const changeLogs1 = parent1.getChangeLogs();
        const changeLogs2 = parent2.getChangeLogs();

        if (applicableOperators.length > 0) {
            const stats1 = parent1.statistics;
            const stats2 = parent2.statistics;

            const susp1 = newSuspiciousnessMap(stats1, this._suspiciousnessMetric);
            const susp2 = newSuspiciousnessMap(stats2, this._suspiciousnessMetric);

            const operator = pick(applicableOperators);
            debugLog(`Applying "${operator.toString()}"`);
            const [changeLog1, changeLog2] = operator.apply(project1, project2, susp1, susp2, debugLog);

            changeLog1.parents.push(parent1.hashCode, parent2.hashCode);
            changeLog2.parents.push(parent1.hashCode, parent2.hashCode);

            changeLogs1.push(changeLog1);
            changeLogs2.push(changeLog2);
        } else {
            debugLog(`No crossover operators are applicable`);
        }

        let offspring1 = null;

        try {
            offspring1 = new RepairChromosome(
                project1.toJSON(),
                parent1.getMutationOperator(),
                parent1.getCrossoverOperator(),
                parent1.statistics.traces
            );
        } catch (e) {
            if (e instanceof ValidationError) {
                console.error(`ERROR [${parent1.hashCode}]`, e.message);
            }

            throw e;
        }

        offspring1.appendChangeLogs(changeLogs1);

        let offspring2 = null;

        try {
            offspring2 = new RepairChromosome(
                project2.toJSON(),
                parent2.getMutationOperator(),
                parent2.getCrossoverOperator(),
                parent2.statistics.traces,
            );
        } catch (e) {
            if (e instanceof ValidationError) {
                console.error(`ERROR [${parent2.hashCode}]`, e.message);
            }

            throw e;
        }

        offspring2.appendChangeLogs(changeLogs2);

        this.emit("variant built", offspring1.hashCode, JSON.stringify(offspring1.getProjectJSON(), null, 4));
        this.emit("variant built", offspring2.hashCode, JSON.stringify(offspring2.getProjectJSON(), null, 4));

        return [offspring1, offspring2];
    }

    apply(parent1: RepairChromosome, parent2: RepairChromosome): Pair<RepairChromosome> {
        return withProbability(this._probability) ? this._apply(parent1, parent2) : [parent1.clone(), parent2.clone()];
    }

    declare emit: (eventName: "variant built", ...[hashCode, jsonString]: [HashCode, string]) => boolean;
}

export interface RepairCrossoverOperator {
    canApply(parent1: Assembler, parent2: Assembler): boolean;

    apply(parent1: Assembler, parent2: Assembler, susp1: SuspiciousnessMap, susp2: SuspiciousnessMap, debugLog: DebugLogger): Pair<ChangeLog>;

    toString(): string;
}

function withProbability(p: number): boolean {
    return Randomness.getInstance().withProbability(p);
}
