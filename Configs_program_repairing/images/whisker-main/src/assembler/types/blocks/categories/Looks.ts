import {Block} from "../Block";
import {ShadowInput} from "../Inputs";
import {LooksBlockOpcode, looksBlockOpcodes, Opcode} from "../Opcode";
import {EmptyObject} from "../../../utils/Objects";
import {BlockWithShadowInput} from "../other/BlockWithShadowInput";
import {ShadowBlock} from "../other/ShadowBlock";
import {BlockWithField} from "../other/BlockWithField";

type None = EmptyObject;

export interface LooksBlock extends Block {
    opcode: LooksBlockOpcode;
}

type Message = Record<"MESSAGE", ShadowInput>;
type Seconds = Record<"SECS", ShadowInput>;

interface LooksSayThinkForSecs extends LooksBlock {
    inputs: Message & Seconds;
    fields: None;
    shadow: false;
}

export interface LooksSayForSecs extends LooksSayThinkForSecs {
    opcode: "looks_sayforsecs";
}

export interface LooksThinkForSecs extends LooksSayThinkForSecs {
    opcode: "looks_thinkforsecs";
}

export interface LooksSayThink extends LooksBlock {
    inputs: Message;
    fields: None;
    shadow: false;
}

export interface LooksSay extends LooksSayThink {
    opcode: "looks_say";
}

export interface LooksThink extends LooksSayThink {
    opcode: "looks_think";
}

type Costume = Record<"COSTUME", ShadowInput>;

export interface LooksSwitchCostumeTo extends LooksBlock, BlockWithShadowInput {
    opcode: "looks_switchcostumeto";
    inputs: Costume;
    fields: None;
    shadow: false;
}

type CostumeChoice = Record<"COSTUME", [name: string, blockID: null]>;

export interface LooksCostume extends LooksBlock, ShadowBlock {
    opcode: "looks_costume";
    fields: CostumeChoice;
    inputs: None;
    shadow: true;
    next: null;
}

export interface LooksNextCostume extends LooksBlock {
    opcode: "looks_nextcostume";
    inputs: None;
    fields: None;
    shadow: false;
}

type Backdrop = Record<"BACKDROP", ShadowInput>;

interface LooksSwitchBackdrop extends LooksBlock, BlockWithShadowInput {
    opcode: "looks_switchbackdropto" | "looks_switchbackdroptoandwait";
    inputs: Backdrop;
    fields: None;
    shadow: false;
}

export interface LooksSwitchBackdropTo extends LooksSwitchBackdrop {
    opcode: "looks_switchbackdropto";
}

// only for the stage!
export interface LooksSwitchBackdropAndWait extends LooksSwitchBackdrop {
    opcode: "looks_switchbackdroptoandwait";
}

type BackdropChoice = Record<"BACKDROP", [
    name: "next backdrop" | "previous backdrop" | "random backdrop" | string,
    blockID: null
]>;

export interface LooksBackdrops extends LooksBlock, ShadowBlock {
    opcode: "looks_backdrops";
    fields: BackdropChoice;
    inputs: None;
    shadow: true;
    next: null;
}

export interface LooksNextBackdrop extends LooksBlock {
    opcode: "looks_nextbackdrop";
    inputs: None;
    fields: None;
    shadow: false;
}

export interface LooksChangeSizeBy extends LooksBlock {
    opcode: "looks_changesizeby";
    inputs: None;
    fields: None;
    shadow: false;
}

type Size = Record<"SIZE", ShadowInput>;

export interface LookSetSizeTo extends LooksBlock {
    opcode: "looks_setsizeto";
    inputs: Size;
    fields: None;
    shadow: false;
}

type Change = Record<"CHANGE", ShadowInput>;

export const looksEffects = ["COLOR", "FISHEYE", "WHIRL", "PIXELATE", "MOSAIC", "BRIGHTNESS", "GHOST"] as const;

type Effect = Record<"EFFECT", [
    effect: typeof looksEffects[number],
    blockID: null
]>;

export interface LooksChangeEffectBy extends LooksBlock, BlockWithField {
    opcode: "looks_changeeffectby";
    inputs: Change;
    fields: Effect;
    shadow: false;
}

type Value = Record<"VALUE", ShadowInput>;

export interface LooksSetEffectTo extends LooksBlock, BlockWithField {
    opcode: "looks_seteffectto";
    inputs: Value;
    fields: Effect;
    shadow: false;
}

export interface LooksClearGraphicEffects extends LooksBlock {
    opcode: "looks_cleargraphiceffects";
    inputs: None;
    fields: None;
    shadow: false;
}

export interface LooksShow extends LooksBlock {
    opcode: "looks_show";
    inputs: None;
    fields: None;
    shadow: false;
}

export interface LooksHide extends LooksBlock {
    opcode: "looks_hide";
    inputs: None;
    fields: None;
    shadow: false;
}

type FrontOrBack = Record<"FRONT_BACK", [
    frontOrBack: "front" | "back", blockID: null
]>;

export interface LooksGotoFrontBack extends LooksBlock, BlockWithField {
    opcode: "looks_gotofrontback";
    inputs: None;
    fields: FrontOrBack;
    shadow: false;
}

type Layers = Record<"NUM", ShadowInput>;

type ForwardOrBackward = Record<"FORWARD_BACKWARD", [
    forwardOrBackward: "forward" | "backward",
    blockID: null
]>;

export interface LooksGoForwardBackwardLayers extends LooksBlock, BlockWithField {
    opcode: "looks_goforwardbackwardlayers";
    inputs: Layers;
    fields: ForwardOrBackward;
    shadow: false;
}

type NumberOrName = Record<"NUMBER_NAME", [
    numberOrName: "number" | "name", blockID: null
]>;

interface LooksCostumeBackdropNumberName extends LooksBlock, BlockWithField {
    opcode: "looks_costumenumbername" | "looks_backdropnumbername";
    inputs: None;
    fields: NumberOrName;
    shadow: false;
}

export interface LooksCostumeNumberName extends LooksCostumeBackdropNumberName {
    opcode: "looks_costumenumbername";
}

export interface LooksBackdropNumberName extends LooksCostumeBackdropNumberName {
    opcode: "looks_backdropnumbername";
}

/**
 * Tells whether the given block is a looks block.
 * https://en.scratch-wiki.info/wiki/Looks_Blocks
 *
 * @param block the block to check
 */
export function isLooksBlock(block: Block): block is LooksBlock {
    return (looksBlockOpcodes as Readonly<Array<Opcode>>).includes(block.opcode);
}
