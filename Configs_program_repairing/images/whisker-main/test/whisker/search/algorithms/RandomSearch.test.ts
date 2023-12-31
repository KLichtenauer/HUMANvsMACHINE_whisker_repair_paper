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

import {RandomSearch} from "../../../../src/whisker/search/algorithms/RandomSearch";
import {BitstringChromosomeGenerator} from "../../../../src/whisker/bitstring/BitstringChromosomeGenerator";
import {FixedIterationsStoppingCondition} from "../../../../src/whisker/search/stoppingconditions/FixedIterationsStoppingCondition";
import {OneMaxFitnessFunction} from "../../../../src/whisker/bitstring/OneMaxFitnessFunction";
import {OneOfStoppingCondition} from "../../../../src/whisker/search/stoppingconditions/OneOfStoppingCondition";
import {OptimalSolutionStoppingCondition} from "../../../../src/whisker/search/stoppingconditions/OptimalSolutionStoppingCondition";
import {BitflipMutation} from "../../../../src/whisker/bitstring/BitflipMutation";
import {SinglePointCrossover} from "../../../../src/whisker/search/operators/SinglePointCrossover";
import {SearchAlgorithmBuilder} from "../../../../src/whisker/search/SearchAlgorithmBuilder";
import {FitnessFunctionType} from "../../../../src/whisker/search/FitnessFunctionType";
import {VMWrapperMock} from "../../utils/VMWrapperMock";
import {Container} from "../../../../src/whisker/utils/Container";

describe('RandomSearch', () => {

    beforeEach(() => {
        const mock = new VMWrapperMock();
        mock.init();
        // @ts-ignore
        Container.vmWrapper = mock;

        Container.debugLog = () => { /* suppress output */
        };
    });

    test('Trivial bitstring with OneMax', async () => {

        const properties = {
            populationSize: 1,
            chromosomeLength: 2,
            stoppingCondition: new OneOfStoppingCondition(
                new FixedIterationsStoppingCondition(1000),
                new OptimalSolutionStoppingCondition()),
            mutationProbability: undefined,
            crossoverProbability: undefined,
            testGenerator: undefined,
            integerRange: undefined,
            reservedCodons: undefined
        };

        const fitnessFunction = new OneMaxFitnessFunction(properties.chromosomeLength);

        const builder = new SearchAlgorithmBuilder('random')
            .addProperties(properties)
            .addChromosomeGenerator(new BitstringChromosomeGenerator(properties,
                new BitflipMutation(),
                new SinglePointCrossover()))
            .initializeFitnessFunction(FitnessFunctionType.ONE_MAX, properties.chromosomeLength, []);

        const randomSearch = builder.buildSearchAlgorithm();
        const solutions = await randomSearch.findSolution();
        const firstSolution = solutions.get(0);

        expect(await firstSolution.getFitness(fitnessFunction)).toBe(properties.chromosomeLength);
    });

    test('Setter', () => {
        const stoppingCondition = new OneOfStoppingCondition(
            new FixedIterationsStoppingCondition(1000),
            new OptimalSolutionStoppingCondition()
        );
        const properties = {
            populationSize: 1,
            chromosomeLength: 2,
            stoppingCondition,
            mutationProbability: undefined,
            crossoverProbability: undefined,
            testGenerator: undefined,
            integerRange: undefined,
            reservedCodons: undefined
        };

        const fitnessFunction = new OneMaxFitnessFunction(properties.chromosomeLength);
        const chromosomeGenerator = new BitstringChromosomeGenerator(properties, new BitflipMutation(), new SinglePointCrossover());

        const randomSearch = new RandomSearch();

        randomSearch.setProperties(properties);
        expect(randomSearch["_properties"]).toBe(properties);
        expect(randomSearch["_stoppingCondition"]).toBe(stoppingCondition);

        randomSearch.setChromosomeGenerator(chromosomeGenerator);
        expect(randomSearch["_chromosomeGenerator"]).toBe(chromosomeGenerator);

        randomSearch.setFitnessFunction(fitnessFunction);
        expect(randomSearch["_fitnessFunction"]).toBe(fitnessFunction);

        expect(function () {
            randomSearch.setSelectionOperator(null);
        }).toThrow();
    });

});
