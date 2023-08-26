import {ShadowInput} from "../Inputs";
import {Block} from "../Block";
import {Opcode, SoundBlockOpcode, soundBlockOpcodes} from "../Opcode";
import {EmptyObject} from "../../../utils/Objects";
import {BlockWithShadowInput} from "../other/BlockWithShadowInput";
import {ShadowBlock} from "../other/ShadowBlock";
import {BlockWithField} from "../other/BlockWithField";

type None = EmptyObject;

export interface SoundBlock extends Block {
    opcode: SoundBlockOpcode;
}

type Sound = Record<"SOUND_MENU", ShadowInput>;

export interface SoundPlayUntilDone extends SoundBlock, BlockWithShadowInput {
    opcode: "sound_playuntildone";
    inputs: Sound;
    fields: None;
    shadow: false;
}

export interface SoundPlay extends SoundBlock, BlockWithShadowInput {
    opcode: "sound_play";
    inputs: Sound;
    fields: None;
    shadow: false;
}

type SoundChoice = Record<"SOUND_MENU", [
    soundName: string, blockID: null
]>;

export interface SoundsMenu extends SoundBlock, ShadowBlock {
    opcode: "sound_sounds_menu";
    fields: SoundChoice;
    shadow: true;
    inputs: None;
    next: null;
}

export interface SoundStopAllSounds extends SoundBlock {
    opcode: "sound_stopallsounds";
    inputs: None;
    fields: None;
    shadow: false;
}

type Value = Record<"VALUE", ShadowInput>;

export const soundEffects = ["PITCH", "PAN"] as const;

type EffectName = Record<"EFFECT", [
    effectName: typeof soundEffects[number], objectID: null
]>;

export interface SoundChangeEffectBy extends SoundBlock, BlockWithField {
    opcode: "sound_changeeffectby";
    inputs: Value;
    fields: EffectName;
}

export interface SoundSetEffectTo extends SoundBlock, BlockWithField {
    opcode: "sound_seteffectto";
    inputs: Value;
    fields: EffectName;
}

export interface SoundClearEffects extends SoundBlock {
    opcode: "sound_cleareffects";
    inputs: None;
    fields: None;
}

type Volume = Record<"VOLUME", ShadowInput>;

export interface SoundChangeVolumeBy extends SoundBlock {
    opcode: "sound_changevolumeby";
    inputs: Volume;
    fields: None;
}

export interface SoundSetVolumeTo extends SoundBlock {
    opcode: "sound_setvolumeto";
    inputs: Volume;
    fields: None;
}

export interface SoundVolume extends SoundBlock {
    opcode: "sound_volume";
    inputs: None;
    fields: None;
}

/**
 * Tells whether the given block is a sound block.
 * https://en.scratch-wiki.info/wiki/Sound_Blocks
 *
 * @param block the block to check
 */
export function isSoundBlock(block: Block): block is SoundBlock {
    return (soundBlockOpcodes as Readonly<Array<Opcode>>).includes(block.opcode);
}
