import {Block} from "../Block";
import {DeletedInput, Input, NoShadowInput, ShadowInput} from "../Inputs";
import {ControlBlockOpcode, controlBlockOpcodes, Opcode} from "../Opcode";
import {EmptyObject} from "../../../utils/Objects";
import {BlockWithShadowInput} from "../other/BlockWithShadowInput";
import {ShadowBlock} from "../other/ShadowBlock";
import {BlockWithField} from "../other/BlockWithField";

type None = EmptyObject;
type Optional<T extends Record<string, Input>> = Partial<T> | Record<keyof T, DeletedInput>;

export interface ControlBlock extends Block {
    opcode: ControlBlockOpcode;
}

type Duration = Record<"DURATION", ShadowInput>;

export interface ControlWait extends ControlBlock {
    opcode: "control_wait";
    inputs: Duration;
    fields: None;
    shadow: false;
}

type Repetitions = Record<"TIMES", ShadowInput>;
type LoopBody = Optional<Record<"SUBSTACK", NoShadowInput>>;

export interface ControlRepeat extends ControlBlock {
    opcode: "control_repeat";
    inputs: Repetitions & LoopBody;
    fields: None;
    shadow: false;
}

export interface ControlForever extends ControlBlock {
    opcode: "control_forever";
    inputs: LoopBody;
    fields: None;
    shadow: false;
}

type Condition = Optional<Record<"CONDITION", NoShadowInput>>;
type ThenBranch = Optional<Record<"SUBSTACK", NoShadowInput>>;
type ElseBranch = Optional<Record<"SUBSTACK2", NoShadowInput>>;

export interface ControlIf extends ControlBlock {
    opcode: "control_if";
    inputs: Condition & ThenBranch;
    fields: None;
    shadow: false;
}

export interface ControlIfElse extends ControlBlock {
    opcode: "control_if_else";
    inputs: Condition & ThenBranch & ElseBranch;
    fields: None;
    shadow: false;
}

export interface ControlWaitUntil extends ControlBlock {
    opcode: "control_wait_until";
    inputs: Condition;
    fields: None;
    shadow: false;
}

export interface ControlRepeatUntil extends ControlBlock {
    opcode: "control_repeat_until";
    inputs: Condition & LoopBody;
    fields: None;
    shadow: false;
}

type WhatToStop = Record<"STOP_OPTION", StopOption>;
type StopOption = [
    scripts: "all" | "this script" | "other scripts in sprite",
    blockID: null
];

export interface ControlStop extends ControlBlock, BlockWithField {
    opcode: "control_stop";
    inputs: None;
    fields: WhatToStop;
    shadow: false;
}

type CloneOption = Record<"CLONE_OPTION", ShadowInput>;

export interface ControlCreateCloneOf extends ControlBlock, BlockWithShadowInput {
    opcode: "control_create_clone_of";
    inputs: CloneOption;
    fields: None;
    shadow: false;
}

type SpriteChoice = Record<"CLONE_OPTION", [
    spriteName: "_myself_" | string,
    blockID: null
]>;

export interface ControlCreateCloneOfMenu extends ControlBlock, ShadowBlock {
    opcode: "control_create_clone_of_menu";
    fields: SpriteChoice;
    inputs: None;
    next: null;
    shadow: true;
}

export interface ControlDeleteThisClone extends ControlBlock {
    opcode: "control_delete_this_clone";
    inputs: None;
    fields: None;
    shadow: false;
}

export interface ControlStartAsClone extends ControlBlock {
    opcode: "control_start_as_clone";
    inputs: None;
    fields: None;
    shadow: false;
}

/**
 * Tells whether the given block is a control block.
 * https://en.scratch-wiki.info/wiki/Control_Blocks
 *
 * @param block the block to check
 */
export function isControlBlock(block: Block): block is ControlBlock {
    return (controlBlockOpcodes as Readonly<Array<Opcode>>).includes(block.opcode);
}
