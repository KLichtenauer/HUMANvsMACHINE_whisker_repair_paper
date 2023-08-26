import {Block} from "../Block";
import {PenBlockOpcode} from "../Opcode";
import {EmptyObject} from "../../../utils/Objects";
import {ShadowInput} from "../Inputs";
import {ShadowBlock} from "../other/ShadowBlock";

type None = EmptyObject;

export interface PenBlock extends Block {
    opcode: PenBlockOpcode;
}

export interface PenClear extends PenBlock {
    opcode: "pen_clear",
    inputs: None,
    fields: None,
    shadow: false,
}

export interface PenStamp extends PenBlock {
    opcode: "pen_stamp",
    inputs: None,
    fields: None,
    shadow: false,
}

export interface PenDown extends PenBlock {
    opcode: "pen_penDown",
    inputs: None,
    fields: None,
    shadow: false,
}

export interface PenUp extends PenBlock {
    opcode: "pen_penUp",
    inputs: None,
    fields: None,
    shadow: false,
}

type Color = Record<"COLOR", ShadowInput>;

export interface SetPenColorToColor extends PenBlock {
    opcode: "pen_setPenColorToColor",
    inputs: Color,
    fields: None,
    shadow: false,
}

type ColorParam = Record<"COLOR_PARAM", ShadowInput>;
type Value = Record<"VALUE", ShadowInput>;

export interface ChangePenColorParamBy extends PenBlock {
    opcode: "pen_changePenColorParamBy",
    inputs: ColorParam & Value,
    fields: None,
    shadow: false,
}

export const colorParamOptions = [
    "color",
    "saturation",
    "brightness",
    "transparency",
] as const;

type ColorParamOption = typeof colorParamOptions[number];

type ColorParamChoice = Record<"colorParam", [
    colorParam: ColorParamOption,
    blockID: null,
]>;

export interface PenMenuColorParam extends PenBlock, ShadowBlock {
    opcode: "pen_menu_colorParam",
    next: null,
    inputs: None,
    fields: ColorParamChoice,
    shadow: true,
}

export interface SetPenColorParamTo extends PenBlock{
    opcode: "pen_setPenColorParamTo",
    inputs: ColorParam & Value,
    shadow: false,
    fields: None,
}

type Size = Record<"SIZE", ShadowInput>;

export interface ChangePenSizeBy extends PenBlock {
    opcode: "pen_changePenSizeBy",
    inputs: Size,
    shadow: false,
    fields: None,
}

export interface SetPenSizeTo extends PenBlock {
    opcode: "pen_setPenSizeTo",
    inputs: Size,
    shadow: false,
    fields: None,
}
