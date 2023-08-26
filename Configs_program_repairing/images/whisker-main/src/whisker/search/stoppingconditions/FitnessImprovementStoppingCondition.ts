import {Chromosome} from "../Chromosome";
import {StoppingCondition} from "../StoppingCondition";
import {SearchAlgorithm} from "../SearchAlgorithm";
import {NotYetImplementedException} from "../../core/exceptions/NotYetImplementedException";
import {FitnessFunction} from "../FitnessFunction";

export class FitnessImprovementStoppingCondition<T extends Chromosome> implements StoppingCondition<T> {

    private _curFitness: number | null;
    private _iterationsWithoutChange: number;

    private readonly _iterationsWithoutImprovement: number;

    constructor(iterationsWithoutImprovement: number) {
        this._curFitness = null;
        this._iterationsWithoutChange = 0.0;
        this._iterationsWithoutImprovement = iterationsWithoutImprovement;
    }

    async getProgress(algorithm: SearchAlgorithm<T>): Promise<number> {
        throw new NotYetImplementedException();
    }

    async isFinished(algorithm: SearchAlgorithm<T>): Promise<boolean> {
        this._iterationsWithoutChange++;
        const solutions = algorithm.getCurrentSolution();
        const fitnessFunction = algorithm.getFitnessFunctions()[Symbol.iterator]().next().value;
        if (solutions.length === 0) {
            return false;
        }

        const fitnessValues = await Promise.all(solutions.map((s) => s.getFitness(fitnessFunction)));
        const bestFitness = fitnessValues.reduce((prev, curr) => fitnessFunction.compare(prev, curr) < 0 ? curr : prev);

        if (this._curFitness === null || fitnessFunction.compare(this._curFitness, bestFitness) < 0) {
            this._curFitness = bestFitness;
            this._iterationsWithoutChange = 0;
        } else if (this._iterationsWithoutChange >= this._iterationsWithoutImprovement) {
            return true;
        }
        return false;
    }
}
