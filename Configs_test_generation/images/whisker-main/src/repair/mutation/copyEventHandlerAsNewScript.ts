import {Assembler} from "../../assembler/Assembler";
import {MultiMap} from "../../assembler/utils/MultiMap";
import {BlockMeta} from "../../assembler/meta";
import {UniqueTargetName} from "../../assembler/selectors";
import {FixSpace, MutationCategory, RepairMutationOperator} from "./RepairMutation";
import {DebugLogger, pickUniformKeyThenValue} from "./utils";
import {ChangeLog} from "../utils/RepairMeta";
import {SuspiciousnessMap} from "../SuspiciousnessMetric";
import {BlockID} from "../../assembler/types/blocks/Block";

export const copyEventHandlerAsNewScript = new class implements RepairMutationOperator {
    private _getInsertionPointsPerHandler(project: Assembler, {handlers}: FixSpace): MultiMap<BlockMeta, UniqueTargetName> {
        const insertionPointsPerHandler = new MultiMap<BlockMeta, UniqueTargetName>();
        for (const handler of handlers) {
            const insertionPoints = project.getScriptInsertionPoints(handler);
            insertionPointsPerHandler.setAll(handler, insertionPoints);
        }
        return insertionPointsPerHandler;
    }

    canApply(project: Assembler, fixSpace: FixSpace, blacklist: Set<BlockID>): boolean {
        return this._canApply(this._getInsertionPointsPerHandler(project, fixSpace));
    }

    private _canApply(insertionPointsPerHandler: MultiMap<BlockMeta, UniqueTargetName>): boolean {
        return insertionPointsPerHandler.size > 0
    }

    // Choose a random event handler and insert it as new script into a random script.
    apply(
        project: Assembler,
        suspiciousness: SuspiciousnessMap,
        debugLog: DebugLogger,
        fixSpace: FixSpace,
    ): ChangeLog | null {
        const insertionPointsPerHandler = this._getInsertionPointsPerHandler(project, fixSpace);

        if (!this._canApply(insertionPointsPerHandler)) {
            return null;
        }

        const [handler, insertionPoint] = pickUniformKeyThenValue(insertionPointsPerHandler);
        debugLog(`Copying event handler "${handler.rootID}" as new script to "${insertionPoint}"`);
        const renamed = project.insertScript(insertionPoint, handler);

        const changeLog = {
            parents: [],
            operator: this.toString(),
            operands: [handler.rootID],
            renamed,
            deleted: [],
            handler,
            insertionPoint,
        };

        return changeLog;
    }

    toString(): string {
        return 'copy event handler as new script mutation';
    }

    get category(): MutationCategory {
        return "insertion";
    }
};
