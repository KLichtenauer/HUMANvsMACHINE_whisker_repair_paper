import {RepairChromosome} from "./RepairChromosome";
import {Project} from "../../assembler/types/Project";
import {Mutation} from "../../whisker/search/Mutation";
import {Crossover} from "../../whisker/search/Crossover";
import {computeWeightedPath, WeightedPath} from "../SuspiciousnessMetric";
import {TestExecutionStatistics} from "../TestExecutionStatistics";
import {TestExecutor} from "../fitness-functions/RepairFitnessFunction";
import {Assembler} from "../../assembler/Assembler";

export class GenProgChromosome extends RepairChromosome {
    private _weightedPath: WeightedPath | null;
    protected override readonly _mutationOperator: Mutation<GenProgChromosome>;
    protected override readonly _crossoverOperator: Crossover<GenProgChromosome>;

    public constructor(
        projectJSON: Project,
        mutation: Mutation<GenProgChromosome>,
        crossover: Crossover<GenProgChromosome> | null,
        weightedPath: WeightedPath | null,
    ) {
        super(projectJSON, mutation, crossover, null);

        // Setting the weighted path in the constructor can sometimes be useful, for example, for cloning, or when
        // performing crossover and mutation to pass along suspiciousness information. However, sometimes no such
        // information is available, in which case `null` is appropriate.
        this._weightedPath = weightedPath ? new WeightedPath(weightedPath) : null;
    }

    public getWeightedPath(): WeightedPath | null {
        return this._weightedPath ? new WeightedPath(this._weightedPath) : null;
    }

    override async executeTests(testExecutor: TestExecutor): Promise<void> {
        await super.executeTests(testExecutor);

        // The traces produced by the test executor might also contain the IDs of variables, lists, shadow blocks, and
        // reporter blocks. We are only interested in the IDs of "statement" blocks.
        const whitelist = new Set(new Assembler(this._projectJSON).getStmts());

        // No matter if a weighted path was already set in the constructor, we recompute it and set it here again. In
        // the worst case, we gain nothing by doing this, but most likely it will give us more accurate information.
        this._weightedPath = computeWeightedPath(this._testStats.traces, whitelist);
    }

    override clone(): GenProgChromosome {
        const clone = new GenProgChromosome(
            this.getProjectJSON(),
            this._mutationOperator,
            this._crossoverOperator,
            this.getWeightedPath(),
        );
        clone._testStats = this._testStats === null ? null : new TestExecutionStatistics(this._testStats);
        clone._fitnessCache = new Map(this._fitnessCache);
        return clone;
    }
}
