import {Block} from "../Block";
import {ShadowInput} from "../Inputs";
import {Opcode, SensingBlockOpcode, sensingBlockOpcodes} from "../Opcode";
import {Key as KeyOption} from "./Events";
import {EmptyObject} from "../../../utils/Objects";
import {BlockWithShadowInput} from "../other/BlockWithShadowInput";
import {ShadowBlock} from "../other/ShadowBlock";
import {BlockWithField} from "../other/BlockWithField";
import {TargetName} from "../../Target";

type None = EmptyObject;

export interface SensingBlock extends Block {
    opcode: SensingBlockOpcode;
}

type ObjectToTouch = Record<"TOUCHINGOBJECTMENU", ShadowInput>;

export interface SensingTouchingObject extends SensingBlock, BlockWithShadowInput {
    opcode: "sensing_touchingobject";
    inputs: ObjectToTouch;
    fields: None;
    shadow: false;
}

type MouseOrEdgeOrSprite = Record<"TOUCHINGOBJECTMENU", [
    spriteName: string | "_mouse_" | "_edge_", blockID: null
]>;

export interface SensingTouchingObjectMenu extends SensingBlock, ShadowBlock {
    opcode: "sensing_touchingobjectmenu";
    fields: MouseOrEdgeOrSprite;
    inputs: None;
    shadow: true;
    next: null;
}

type Color = Record<"COLOR", ShadowInput>;
type Color1 = Color;
type Color2 = Record<"COLOR2", ShadowInput>;

export interface SensingTouchingColor extends SensingBlock {
    opcode: "sensing_touchingcolor";
    inputs: Color;
    fields: None;
    shadow: false;
}

export interface SensingColorIsTouchingColor extends SensingBlock {
    opcode: "sensing_coloristouchingcolor";
    inputs: Color1 & Color2;
    fields: None;
    shadow: false;
}

type Target = Record<"DISTANCETOMENU", ShadowInput>;

export interface SensingDistanceTo extends SensingBlock, BlockWithShadowInput {
    opcode: "sensing_distanceto";
    inputs: Target;
    fields: None;
}

type MouseOrSprite = Record<"DISTANCETOMENU", [
    spriteName: "_mouse_" | string, blockID: null
]>;

export interface SensingDistanceToMenu extends SensingBlock, ShadowBlock {
    opcode: "sensing_distancetomenu";
    fields: MouseOrSprite;
    inputs: None;
    next: null;
    shadow: true;
}

type Question = Record<"QUESTION", ShadowInput>;

export interface SensingAskAndWait extends SensingBlock {
    opcode: "sensing_askandwait";
    inputs: Question;
    fields: None;
    shadow: false;
}

export interface SensingAnswer extends SensingBlock {
    opcode: "sensing_answer";
    inputs: None;
    fields: None;
}

type Key = Record<"KEY_OPTION", ShadowInput>;

export interface SensingKeyPressed extends SensingBlock, BlockWithShadowInput {
    opcode: "sensing_keypressed";
    inputs: Key;
    fields: None;
    shadow: false;
}

type PressedKey = Record<"KEY_OPTION", [
    pressedKey: KeyOption, blockID: null
]>;

export interface SensingKeyOptions extends SensingBlock, ShadowBlock {
    opcode: "sensing_keyoptions";
    fields: PressedKey;
    inputs: None;
    next: null;
    shadow: true;
}

interface SensingMouse extends SensingBlock {
    inputs: None;
    fields: None;
}

export interface SensingMouseDown extends SensingMouse {
    opcode: "sensing_mousedown";
}

export interface SensingMouseX extends SensingMouse {
    opcode: "sensing_mousex";
}

export interface SensingMouseY extends SensingMouse {
    opcode: "sensing_mousey";
}

type DragMode = Record<"DRAG_MODE", [
    dragMode: "draggable" | "not draggable", blockID: null
]>;

export interface SensingDragMode extends SensingBlock, BlockWithField {
    opcode: "sensing_setdragmode";
    fields: DragMode;
    inputs: None;
    shadow: false;
}

export interface SensingLoundness extends SensingBlock {
    opcode: "sensing_loudness";
    fields: None;
    inputs: None;
}

export interface SensingTimer extends SensingBlock {
    opcode: "sensing_timer";
    fields: None;
    inputs: None;
}

export interface SensingResetTimer extends SensingBlock {
    opcode: "sensing_resettimer";
    inputs: None;
    fields: None;
    shadow: false;
}

type SpriteOrStage = Record<"OBJECT", ShadowInput>;

type Property = StageProperty | SpriteProperty;

export const spriteProperties = [
    "x position",
    "y position",
    "direction",
    "costume #",
    "costume name",
    "size",
    "volume",
] as const;

type SpriteProperty = Record<"PROPERTY", [
    variableName: typeof spriteProperties[number] | string,
    blockID: null
]>;

export const stageProperties = [
    "backdrop #",
    "backdrop name",
    "volume",
] as const;

type StageProperty = Record<"PROPERTY", [
    variableName: typeof stageProperties[number] | string,
    blockID: null
]>;

export interface SensingOf extends SensingBlock, BlockWithShadowInput, BlockWithField {
    opcode: "sensing_of";
    inputs: SpriteOrStage;
    fields: Property;
}

type SensedObject = Record<"OBJECT", [
    targetName: TargetName, blockID: null
]>;

export interface SensingOfObjectMenu extends SensingBlock, ShadowBlock, BlockWithField {
    opcode: "sensing_of_object_menu";
    fields: SensedObject;
    inputs: None;
    next: null;
    shadow: true;
}

export const sensingCurrentOptions = [
    "YEAR",
    "MONTH",
    "DATE",
    "DAYOFWEEK",
    "HOUR",
    "MINUTE",
    "SECOND",
] as const;

type WhatToSense = Record<"CURRENTMENU", [
    whatToSense: typeof sensingCurrentOptions[number],
    objectID: null,
]>;

export interface SensingCurrent extends SensingBlock, BlockWithField {
    opcode: "sensing_current";
    inputs: None;
    fields: WhatToSense;
}

export interface SensingDaysSince2000 extends SensingBlock {
    opcode: "sensing_dayssince2000";
    inputs: None;
    fields: None;
}

export interface SensingUsername extends SensingBlock {
    opcode: "sensing_username";
    inputs: None;
    fields: None;
}

/**
 * Tells whether the given block is a sensing block.
 * https://en.scratch-wiki.info/wiki/Sensing_Blocks
 *
 * @param block the block to check
 */
export function isSensingBlock(block: Block): block is SensingBlock {
    return (sensingBlockOpcodes as Readonly<Array<Opcode>>).includes(block.opcode);
}
