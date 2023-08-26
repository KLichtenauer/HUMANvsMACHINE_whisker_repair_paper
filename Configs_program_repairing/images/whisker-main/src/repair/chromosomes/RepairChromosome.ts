import {Project} from "../../assembler/types/Project";
import {Chromosome} from "../../whisker/search/Chromosome";
import {Crossover} from "../../whisker/search/Crossover";
import {Mutation} from "../../whisker/search/Mutation";
import {TestExecutionStatistics} from "../TestExecutionStatistics";
import * as Objects from "../../assembler/utils/Objects";
import {deepCopy} from "../../assembler/utils/Objects";
import {RepairFitnessFunction, TestExecutor} from "../fitness-functions/RepairFitnessFunction";
import {diff} from "jest-diff";
import {HashCode, hashCode} from "../utils/hashCode";
import {Container} from "../../whisker/utils/Container";
import {ChangeLog} from "../utils/RepairMeta";
import {postProcessTraces, TestExecutionTrace} from "../traces";

export class RepairChromosome extends Chromosome {
    protected readonly _projectJSON: Project;
    private readonly _hashCode: HashCode;
    protected _testStats: TestExecutionStatistics | null;

    protected readonly _mutationOperator: Mutation<RepairChromosome>;
    protected readonly _crossoverOperator: Crossover<RepairChromosome> | null;

    private _executed: boolean;
    private _viable: boolean;

    constructor(
        projectJSON: Project,
        mutation: Mutation<RepairChromosome>,
        crossover: Crossover<RepairChromosome> | null,
        traces: Readonly<Array<TestExecutionTrace>> | null
    ) {
        super();
        this._projectJSON = deepCopy(projectJSON);
        this._hashCode = hashCode(JSON.stringify(this._projectJSON.targets));
        this._projectJSON.meta.repair = {
            hashCode: this._hashCode,
            changeLogs: [],
        };
        this._mutationOperator = mutation;
        this._crossoverOperator = crossover;
        this._viable = true;

        this._testStats = traces === null ? null
            : new TestExecutionStatistics(postProcessTraces(traces, this._projectJSON));

        this._executed = false;
    }

    get hashCode(): HashCode {
        return this._hashCode;
    }

    get viable(): boolean {
        return this._viable;
    }

    set viable(viable: boolean) {
        this._viable = viable;
    }

    getChangeLogs(): Array<ChangeLog> {
        return deepCopy(this._projectJSON.meta.repair.changeLogs);
    }

    public appendChangeLogs(changeLogs: Array<ChangeLog>): void {
        this._projectJSON.meta.repair.changeLogs.push(...changeLogs);
    }

    public get executed(): boolean {
        return this._executed;
    }

    async executeTests(testExecutor: TestExecutor): Promise<void> {
        const traces = await testExecutor(this._projectJSON);
        this._testStats = new TestExecutionStatistics(postProcessTraces(traces, this._projectJSON));
        this._executed = true;
    }

    public get statistics(): TestExecutionStatistics | null {
        return this._testStats;
    }

    override async getFitness(fitnessFunction: RepairFitnessFunction): Promise<number> {
        if (this.viable) {
            return super.getFitness(fitnessFunction);
        }

        // If this chromosome is inviable, bypass its fitness cache because it will contain a wrong value (e.g., NaN).
        // Instead, let the fitness function return the proper fitness value for inviable chromosomes (e.g., -1, but
        // this value might be different for minimizing vs. maximizing functions).
        return fitnessFunction.getFitness(this);
    }

    public getProjectJSON(): Project {
        return Objects.deepCopy(this._projectJSON);
    }

    public clone(): RepairChromosome {
        const clone = new RepairChromosome(
            this.getProjectJSON(),
            this._mutationOperator,
            this._crossoverOperator,
            this._testStats.traces
        );
        clone._fitnessCache = new Map(this._fitnessCache);
        clone._executed = this._executed;
        return clone;
    }

    public logDiffTo(other: RepairChromosome): void {
        Container.debugLog(diff(this._projectJSON.targets, other._projectJSON.targets, {
            aAnnotation: "Self",
            bAnnotation: "Other",
            contextLines: 1,
            expand: false,
            includeChangeCounts: true,
        }));
    }

    public getMutationOperator(): Mutation<this> {
        return this._mutationOperator as Mutation<this>;
    }

    public cloneWith(): RepairChromosome {
        throw new Error("Currently not implemented");
    }

    public getCrossoverOperator(): Crossover<this> | null {
        return this._crossoverOperator as Crossover<this>;
    }

    public getLength(): number {
        // const numberBlocksPerTarget = this._projectJSON.targets.map(({blocks}) => Object.keys(blocks).length);
        // return Arrays.sum(numberBlocksPerTarget);

        // getLength() doesn't really have a use-case for repair (yet). So just return 1 for now, until we
        // figure out what a reasonable interpretation might be.
        return 1;
    }

    public equals(other: RepairChromosome): boolean {
        // TODO: have to check all properties of RepairChromosome (e.g., the ones that are cloned in clone())?
        return (
            this._hashCode === other._hashCode &&
            this._mutationOperator === other._mutationOperator &&
            this._crossoverOperator === other._crossoverOperator
        );
    }

    override toString(): string {
        return this._hashCode.toString();
    }
}
