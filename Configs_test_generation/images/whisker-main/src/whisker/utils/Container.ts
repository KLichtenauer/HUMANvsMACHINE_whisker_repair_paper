import {WhiskerSearchConfiguration} from "./WhiskerSearchConfiguration";
import VirtualMachine from "scratch-vm/src/virtual-machine";
import VMWrapper from "../../vm/vm-wrapper";
import TestDriver from "../../test/test-driver.js";
import {ScratchPosition} from "../scratch/ScratchPosition";
import {StatementFitnessFunction} from "../testcase/fitness/StatementFitnessFunction";
import {GradientDescent} from "../whiskerNet/Misc/GradientDescent";

export class Container {
    static config: WhiskerSearchConfiguration;
    static vm: VirtualMachine
    static vmWrapper: VMWrapper;
    static testDriver: TestDriver;
    static acceleration: number;
    static pathToGoal: ScratchPosition[];
    static isNeuroevolution: boolean
    static debugLog: typeof console.log;
    static statementFitnessFunctions: StatementFitnessFunction[];
    static backpropagationData: Record<string, unknown>;
    static backpropagationInstance: GradientDescent;
    static neatestTargetId: string
    static peerToPeerSharing: boolean;

    /**
     * Whether to suppress certain irrelevant/uninteresting log messages emitted by puppeteer.
     */
    static reduceSpam: boolean;

    /**
     * Repair-specific property. Whether to subsume negative test results:
     * - If `true`, a Whisker test with execution status "fail", "error", or "skip" is considered negative.
     * - If `false`, a Whisker test is considered negative only if its status is "fail". The statuses "error" and
     *   "skip" are ignored.
     *
     * Relevant for computing fitness and suspiciousness.
     */
    static subsumeNegativeTestResults: boolean;
}
