import {Block} from "../Block";
import {ShadowInput} from "../Inputs";
import {EventBlockOpcode, eventBlockOpcodes, HatBlockOpcode, Opcode} from "../Opcode";
import {HatBlock} from "../shapes/HatBlock";
import {EmptyObject} from "../../../utils/Objects";
import {BlockWithField} from "../other/BlockWithField";

type None = EmptyObject;

export interface EventBlock extends Block {
    opcode: EventBlockOpcode;
}

export interface EventWhenFlagClicked extends EventBlock, HatBlock {
    opcode: "event_whenflagclicked";
    inputs: None;
    fields: None;
    shadow: false;
    parent: null;
    topLevel: true;
}

type PressedKey = Record<"KEY_OPTION", KeyOption>;

export type Key = typeof keys[number];

/**
 * The keys (on your keyboard) Scratch provides handlers/listeners for.
 */
export const keys = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "space", "up arrow", "down arrow", "right arrow", "left arrow", "any"
] as const;

type KeyOption = [key: Key, blockID: null];

export interface EventWhenKeyPressed extends EventBlock, HatBlock, BlockWithField {
    opcode: "event_whenkeypressed";
    inputs: None;
    fields: PressedKey;
    shadow: false;
    parent: null;
    topLevel: true;
}

interface EventWhenTargetClicked extends EventBlock, HatBlock {
    opcode: EventBlockOpcode & HatBlockOpcode;
    inputs: None;
    fields: None;
    shadow: false;
    parent: null;
    topLevel: true;
}

export interface EventWhenThisSpriteClicked extends EventWhenTargetClicked {
    opcode: "event_whenthisspriteclicked";
}

export interface EventWhenStageClicked extends EventWhenTargetClicked {
    opcode: "event_whenstageclicked";
}

type Backdrop = Record<"BACKDROP", BackdropName>;
type BackdropName = [backdropName: string, blockID: null];

export interface EventWhenBackdropSwitchesTo extends EventBlock, HatBlock, BlockWithField {
    opcode: "event_whenbackdropswitchesto";
    inputs: None;
    fields: Backdrop;
    shadow: false;
    parent: null;
    topLevel: true;
}

type Threshold = Record<"VALUE", ShadowInput>;

type LoudnessOrTimer = Record<"WHENGREATERTHANMENU", [
    loudnessOrTimer: "LOUDNESS" | "TIMER",
    blockID: null
]>;

export interface EventWhenGreaterThan extends EventBlock, HatBlock, BlockWithField {
    opcode: "event_whengreaterthan";
    inputs: Threshold;
    fields: LoudnessOrTimer;
    shadow: false;
    parent: null;
    topLevel: true;
}

type ReceivedBroadcast = Record<"BROADCAST_OPTION", BroadcastOption>;
type BroadcastOption = [broadcastName: string, broadcastID: string];

export interface EventWhenBroadcastReceived extends EventBlock, HatBlock, BlockWithField {
    opcode: "event_whenbroadcastreceived";
    inputs: None;
    fields: ReceivedBroadcast;
    shadow: false;
    parent: null;
    topLevel: true;
}

type Broadcast = Record<"BROADCAST_INPUT", ShadowInput>;

export interface EventBroadcast extends EventBlock {
    opcode: "event_broadcast";
    inputs: Broadcast;
    fields: None;
    shadow: false;
}

export interface EventBroadcastAndWait extends EventBlock {
    opcode: "event_broadcastandwait";
    inputs: Broadcast;
    fields: None;
    shadow: false;
}

/**
 * Tells whether the given block is an event block.
 * https://en.scratch-wiki.info/wiki/Events_Blocks
 *
 * @param block the block to check
 */
export function isEventBlock(block: Block): block is EventBlock {
    return (eventBlockOpcodes as Readonly<Array<Opcode>>).includes(block.opcode);
}
