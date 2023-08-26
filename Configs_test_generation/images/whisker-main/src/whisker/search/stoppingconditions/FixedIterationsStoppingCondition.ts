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

import {StoppingCondition} from '../StoppingCondition';
import {Chromosome} from "../Chromosome";
import {StatisticsCollector} from "../../utils/StatisticsCollector";

export class FixedIterationsStoppingCondition<T extends Chromosome> implements StoppingCondition<T> {

    private readonly _maxIterations: number;

    constructor(iterationLimit: number) {
        this._maxIterations = iterationLimit;
    }

    async isFinished(): Promise<boolean> {
        return StatisticsCollector.getInstance().iterationCount >= this._maxIterations;
    }

    async getProgress(): Promise<number> {
        return StatisticsCollector.getInstance().iterationCount / this._maxIterations;
    }

    get maxIterations(): number {
        return this._maxIterations;
    }
}
