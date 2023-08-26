import {Assembler} from "../../assembler/Assembler";
import {MultiMap} from "../../assembler/utils/MultiMap";
import {DropDownSelector} from "../../assembler/selectors";
import {Field} from "../../assembler/types/blocks/Fields";
import {FixSpace, MutationCategory, RepairMutationOperator} from "./RepairMutation";
import {DebugLogger, pick, pickBySuspiciousness} from "./utils";
import {ChangeLog} from "../utils/RepairMeta";
import {SuspiciousnessMap} from "../SuspiciousnessMetric";
import {BlockID} from "../../assembler/types/blocks/Block";


export const switchDropDownValue = new class implements RepairMutationOperator {
    private _getValuesPerMenu(assembler: Assembler, blacklist: Set<BlockID>): MultiMap<DropDownSelector, Field> {
        const valuesPerMenu = new MultiMap<DropDownSelector, Field>();
        for (const menu of assembler.getDropDowns(true).filter((menu) => !blacklist.has(menu.blockID))) {
            valuesPerMenu.setAll(menu, assembler.getPossibleDropDownValues(menu, true));
        }
        return valuesPerMenu;
    }

    canApply(assembler: Assembler, fixSpace: FixSpace, blacklist: Set<BlockID>): boolean {
        return this._canApply(this._getValuesPerMenu(assembler, blacklist));
    }

    private _canApply(valuesPerMenu: MultiMap<DropDownSelector, Field>): boolean {
        return valuesPerMenu.size > 0
    }

    // Select another randomly chosen value in the drop-down menu of a suspicious statement.
    apply(
        assembler: Assembler,
        suspiciousness: SuspiciousnessMap,
        debugLog: DebugLogger,
        fixSpace: FixSpace,
        blacklist: Set<BlockID>
    ): ChangeLog | null {
        const valuesPerMenu = this._getValuesPerMenu(assembler, blacklist);

        if (!this._canApply(valuesPerMenu)) {
            return null;
        }

        const menus = [...valuesPerMenu.keys()];
        const block = pickBySuspiciousness(menus.map(({blockID}) => blockID), suspiciousness);
        const menu = menus.find(({blockID}) => blockID === block);
        const value = pick(valuesPerMenu.get(menu));
        debugLog(`Switching to value "${value}" in dropdown menu "${menu.key}" of block "${menu.blockID}"`);
        assembler.setDropDownValue(menu, value);

        const changeLog = {
            parents: [],
            operator: this.toString(),
            operands: [menu.blockID],
            renamed: {},
            deleted: [],
            menu,
            value,
        };

        return changeLog;
    }

    toString(): string {
        return 'switch dropdown value mutation';
    }

    get category(): MutationCategory {
        return "change";
    }
};
