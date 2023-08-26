/*
 * Copyright (C) 2020 Whisker contributors
 *
 * This file is part of the Whisker test generator for Scratch.
 *
 * Whisker is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Whisker is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Whisker. ßIf not, see http://www.gnu.org/licenses/.
 *
 */

import {Chromosome} from '../Chromosome';
import {OnePlusOneProperties} from '../SearchAlgorithmProperties';
import {ChromosomeGenerator} from '../ChromosomeGenerator';
import {FitnessFunction} from "../FitnessFunction";
import {SearchAlgorithmDefault} from "./SearchAlgorithmDefault";
import {StatisticsCollector} from "../../utils/StatisticsCollector";
import {Container} from "../../utils/Container";
import {Selection} from "../Selection";
import {LocalSearch} from "../operators/LocalSearch/LocalSearch";
import {RepairChromosome} from "../../../repair/chromosomes/RepairChromosome";

export class OnePlusOneEA<C extends Chromosome> extends SearchAlgorithmDefault<C> {

    /**
     * Holds the currently best performing Chromosome on which we will keep mutating on.
     */
    private _bestIndividual: C;

    setChromosomeGenerator(generator: ChromosomeGenerator<C>): void {
        this._chromosomeGenerator = generator;
    }

    setFitnessFunction(fitnessFunction: FitnessFunction<C>): void {
        this._fitnessFunction = fitnessFunction;
    }

    setFitnessFunctions(fitnessFunctions: Map<number, FitnessFunction<C>>): void {
        this._fitnessFunctions = fitnessFunctions;
        StatisticsCollector.getInstance().fitnessFunctionCount = fitnessFunctions.size;
    }

    setProperties(properties: OnePlusOneProperties<C>): void {
        this._properties = properties;
        this._stoppingCondition = this._properties.stoppingCondition;
    }

    private async _getFitness(chromosome: C): Promise<number> {
        let time = Date.now();
        const fitness = await chromosome.getFitness(this._fitnessFunction);
        time = Date.now() - time;

        if (chromosome instanceof RepairChromosome) {
            this.emit("evaluation", [{
                iteration: this._iterations,
                hashCode: chromosome.hashCode,
                viable: chromosome.viable,
                fitness: fitness,
                numPass: chromosome.statistics.totalPassed,
                numFail: chromosome.statistics.totalFailed,
                passing: chromosome.statistics.passingTests,
                failing: chromosome.statistics.failingTests,
                time: time,
            }]);
        }

        return fitness;
    }

    /**
     * Returns a list of possible admissible solutions for the given problem.
     * @returns Solution for the given problem
     */
    async findSolution(): Promise<Map<number, C>> {
        // Prevent statistics to be reset in case of IterativeSearch.
        this._startTime = Date.now();
        if (!this.isIterativeSearch()) {
            this.initializeStatistics();
        }
        Container.debugLog("1+1 EA started at " + this._startTime);

        let bestIndividual = this._chromosomeGenerator.get();
        await bestIndividual.evaluate(true);
        await this.updateArchive(bestIndividual);
        this._bestIndividual = bestIndividual;
        let bestFitness = await this._getFitness(bestIndividual);
        if (await this._stoppingCondition.isFinished(this)) {
            this.updateStatisticsAtEnd();
        }

        while (!(await this._stoppingCondition.isFinished(this))) {
            const candidateChromosome = bestIndividual.mutate();
            await candidateChromosome.evaluate(true);
            await this.updateArchive(candidateChromosome);
            const candidateFitness = await this._getFitness(candidateChromosome);
            Container.debugLog(`Iteration ${this._iterations}: BestChromosome with fitness ${bestFitness} and length ${bestIndividual.getLength()} executed
${bestIndividual.toString()}`);
            if (this._fitnessFunction.compare(candidateFitness, bestFitness) >= 0) {
                if (await this._fitnessFunction.isOptimal(candidateFitness)) {
                    this.updateStatisticsAtEnd();
                }
                bestFitness = candidateFitness;
                bestIndividual = candidateChromosome;
                this._bestIndividual = bestIndividual;
            }
            this._iterations++;
            StatisticsCollector.getInstance().incrementIterationCount();
        }
        Container.debugLog("1+1 EA completed at " + Date.now());
        return this._archive;
    }

    protected override async updateArchive(candidateChromosome: C): Promise<void> {
        if (candidateChromosome instanceof RepairChromosome) {
            // Updating the archive does not work for repair because it also modifies this._bestIndividuals as a side
            // effect, always setting it to an empty array. This breaks this._getCurrentSolution(), so we avoid it.
            return;
        }

        await super.updateArchive(candidateChromosome);
    }

    /**
     * Determines whether the used TestGenerator is the IterativeSearchBasedTestGenerator.
     * If so we do no want to update statistics in the OnePlusOne-Algorithm.
     * @returns boolean defining whether OnePlusOneEA has been called by the IterativeSearchBasedTestGenerator
     */
    private isIterativeSearch(): boolean {
        return this._properties.testGenerator === 'iterative';
    }

    /**
     * Initializes Statistic related values.
     */
    private initializeStatistics(): void {
        StatisticsCollector.getInstance().iterationCount = 0;
        StatisticsCollector.getInstance().coveredFitnessFunctionsCount = 0;
        StatisticsCollector.getInstance().bestTestSuiteSize = 1;
        StatisticsCollector.getInstance().startTime = this._startTime;
    }

    /**
     * Updates statistic values using the StatisticsCollector when the search is about to stop.
     */
    private updateStatisticsAtEnd(): void {
        StatisticsCollector.getInstance().createdTestsToReachFullCoverage = this._iterations + 1;
        StatisticsCollector.getInstance().timeToReachFullCoverage = Date.now() - this._startTime;
    }

    getNumberOfIterations(): number {
        return this._iterations;
    }

    getCurrentSolution(): [C] {
        return [this._bestIndividual];
    }

    getFitnessFunctions(): Iterable<FitnessFunction<C>> {
        return [this._fitnessFunction];
    }

    getStartTime(): number {
        return this._startTime;
    }

    setSelectionOperator(selectionOperator: Selection<C>): void {
        throw new Error('Method not implemented.');
    }

    setLocalSearchOperators(localSearchOperators: LocalSearch<C>[]): void {
        throw new Error('Method not implemented.');
    }
}
