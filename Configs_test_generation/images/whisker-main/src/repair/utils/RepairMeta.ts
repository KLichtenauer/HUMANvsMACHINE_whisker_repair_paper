import {HashCode} from "./hashCode";
import {BlockID} from "../../assembler/types/blocks/Block";
import {Pair} from "../../whisker/utils/Pair";
import {TestExecutionTrace} from "../traces";

export interface RepairMeta {
    hashCode: HashCode;
    changeLogs: Array<ChangeLog>;
}

export interface ChangeLog {
    operator: string;
    operands: Array<BlockID>;
    parents: Array<HashCode>;
    renamed: Record<BlockID, BlockID>;
    deleted: Array<BlockID>;
}
