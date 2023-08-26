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
 * along with Whisker. If not, see http://www.gnu.org/licenses/.
 *
 */

import {Chromosome} from '../Chromosome';
import {RandomSearchProperties} from '../SearchAlgorithmProperties';
import {ChromosomeGenerator} from '../ChromosomeGenerator';
import {FitnessFunction} from "../FitnessFunction";
import {SearchAlgorithmDefault} from "./SearchAlgorithmDefault";
import {StatisticsCollector} from "../../utils/StatisticsCollector";
import {Container} from "../../utils/Container";
import {Selection} from "../Selection";
import {LocalSearch} from "../operators/LocalSearch/LocalSearch";
import {RepairChromosome} from "../../../repair/chromosomes/RepairChromosome";
import {RepairFitnessFunction} from "../../../repair/fitness-functions/RepairFitnessFunction";

export class RandomSearch<C extends Chromosome> extends SearchAlgorithmDefault<C> {

    setChromosomeGenerator(generator: ChromosomeGenerator<C>): void {
        this._chromosomeGenerator = generator;
    }

    setFitnessFunction(fitnessFunction: FitnessFunction<C>): void {
        StatisticsCollector.getInstance().fitnessFunctionCount = 1;
        this._fitnessFunction = fitnessFunction;
    }

    setFitnessFunctions(fitnessFunctions: Map<number, FitnessFunction<C>>): void {
        this._fitnessFunctions = fitnessFunctions;
        StatisticsCollector.getInstance().fitnessFunctionCount = fitnessFunctions.size;
    }

    setProperties(properties: RandomSearchProperties<C>): void {
        this._properties = properties;
        this._stoppingCondition = this._properties.stoppingCondition;
    }

    private async _getFitness(chromosome: C): Promise<number> {
        return chromosome instanceof RepairChromosome ?
            this._getFitnessForRepair(chromosome) :
            chromosome.getFitness(this._fitnessFunction);
    }

    private async _getFitnessForRepair(chromosome: RepairChromosome): Promise<number> {
        const ff = this._fitnessFunction as unknown as RepairFitnessFunction;

        let time = Date.now();

        // Just evaluate and populate the fitness cache as a side effect, retrieve the fitness value later after
        // determining if the chromosome is viable.
        try {
            await chromosome.getFitness(ff);
            chromosome.viable = chromosome.statistics.total > 0;
        } catch (e) {
            console.error('Error during fitness evaluation of chromosome', chromosome.hashCode, ':', e.message);
            chromosome.viable = false;
        }

        const fitness = await chromosome.getFitness(ff);

        let now = Date.now();
        time = now - time;
        now = now - this._startTime;

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
            now: now,
        }]);

        return fitness;
    }

    /**
     * Returns a list of possible admissible solutions for the given problem.
     * @returns Solution for the given problem
     */
    async findSolution(): Promise<Map<number, C>> {
        let bestIndividual: C | null = null;
        this._bestIndividuals = [];
        let bestFitness: number | null = null;
        this._startTime = Date.now();
        StatisticsCollector.getInstance().iterationCount = 0;
        StatisticsCollector.getInstance().coveredFitnessFunctionsCount = 0;
        StatisticsCollector.getInstance().startTime = Date.now();

        while (!(await this._stoppingCondition.isFinished(this))) {
            const candidateChromosome = this._chromosomeGenerator.get();
            await candidateChromosome.evaluate(true);
            await this.updateArchive(candidateChromosome);

            // Update the best performing chromosome if we have a single targeted fitness function.
            if (this._fitnessFunction !== undefined) {
                const candidateFitness = await this._getFitness(candidateChromosome);
                if (bestFitness === null || this._fitnessFunction.compare(candidateFitness, bestFitness) > 0) {
                    bestFitness = candidateFitness;
                    bestIndividual = candidateChromosome;
                    this._bestIndividuals = [bestIndividual];
                }
            }
            this.updateStatistics();
            this._iterations++;
            Container.debugLog(`Iteration ${this._iterations}: covered goals:  ${this._archive.size}/${this._fitnessFunctions.size}`);
        }
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
     * Updates the StatisticsCollector on the following points:
     *  - bestTestSuiteSize
     *  - iterationCount
     *  - createdTestsToReachFullCoverage
     *  - timeToReachFullCoverage
     */
    protected override updateStatistics(): void {
        StatisticsCollector.getInstance().bestTestSuiteSize = this._bestIndividuals.length;
        StatisticsCollector.getInstance().incrementIterationCount();
        if (this._archive.size == this._fitnessFunctions.size && !this._fullCoverageReached) {
            this._fullCoverageReached = true;
            StatisticsCollector.getInstance().createdTestsToReachFullCoverage = StatisticsCollector.getInstance().numberFitnessEvaluations;
            StatisticsCollector.getInstance().timeToReachFullCoverage = Date.now() - this._startTime;
        }
    }

    getNumberOfIterations(): number {
        return this._iterations;
    }

    getCurrentSolution(): C[] {
        return this._bestIndividuals;
    }

    getFitnessFunctions(): Iterable<FitnessFunction<C>> {
        if (this._fitnessFunctions) {
            return this._fitnessFunctions.values();
        } else
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
