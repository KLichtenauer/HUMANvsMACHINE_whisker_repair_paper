import {Block, isBlock} from "../Block";
import {ShadowInput} from "../Inputs";
import {MotionBlockOpcode, motionBlockOpcodes, Opcode} from "../Opcode";
import {EmptyObject} from "../../../utils/Objects";
import {BlockWithShadowInput} from "../other/BlockWithShadowInput";
import {ShadowBlock} from "../other/ShadowBlock";
import {BlockWithField} from "../other/BlockWithField";

type None = EmptyObject;

export interface MotionBlock extends Block {
    opcode: MotionBlockOpcode;
}

type Steps = Record<"STEPS", ShadowInput>;

export interface MotionMoveSteps extends MotionBlock {
    opcode: "motion_movesteps";
    inputs: Steps;
    fields: None;
    shadow: false;
}

type Degrees = Record<"DEGREES", ShadowInput>;

interface MotionTurnDirection extends MotionBlock {
    inputs: Degrees;
    fields: None;
    shadow: false;
}

export interface MotionTurnRight extends MotionTurnDirection {
    opcode: "motion_turnright";
}

export interface MotionTurnLeft extends MotionTurnDirection {
    opcode: "motion_turnleft";
}

type Destination = Record<"TO", ShadowInput>;

export interface MotionGoto extends MotionBlock, BlockWithShadowInput {
    opcode: "motion_goto";
    inputs: Destination;
    fields: None;
    shadow: false;
}

type DestinationChoice = Record<"TO", [
    spriteName: string | "_random_" | "_mouse_", blockID: null
]>;

export interface MotionGotoMenu extends MotionBlock, ShadowBlock {
    opcode: "motion_goto_menu";
    fields: DestinationChoice;
    inputs: None;
    shadow: true;
    next: null;
}

type XYCoordinates = Record<"X" | "Y", ShadowInput>;

export interface MotionGotoXY extends MotionBlock {
    opcode: "motion_gotoxy";
    inputs: XYCoordinates;
    fields: None;
    shadow: false;
}

type Seconds = Record<"SECS", ShadowInput>;

export interface MotionGlideTo extends MotionBlock, BlockWithShadowInput {
    opcode: "motion_glideto";
    inputs: Destination & Seconds;
    fields: None;
    shadow: false;
}

export interface MotionGlideToMenu extends MotionBlock, ShadowBlock {
    opcode: "motion_glideto_menu";
    fields: DestinationChoice;
    inputs: None;
    next: null;
    shadow: true;
}

export interface MotionGlideSecsToXY extends MotionBlock {
    opcode: "motion_glidesecstoxy";
    inputs: Seconds & XYCoordinates;
    fields: None;
    shadow: false;
}

type Direction = Record<"DIRECTION", ShadowInput>;

export interface MotionPointInDirection extends MotionBlock {
    opcode: "motion_pointindirection";
    inputs: Direction;
    fields: None;
    shadow: false;
}

type Towards = Record<"TOWARDS", ShadowInput>;

export interface MotionPointTowards extends MotionBlock, BlockWithShadowInput {
    opcode: "motion_pointtowards";
    inputs: Towards;
    fields: None;
    shadow: false;
}

type DirectionChoice = Record<"TOWARDS", [
    spriteName: string | "_mouse_",
    blockID: null
]>;

export interface MotionPointTowardsMenu extends MotionBlock, ShadowBlock {
    opcode: "motion_pointtowards_menu";
    fields: DirectionChoice;
    inputs: None;
    next: null;
    shadow: true;
}

interface MotionChangeCoordinate extends MotionBlock {
    fields: None;
    shadow: false;
}

type DeltaX = Record<"DX", ShadowInput>;

export interface MotionChangeXBy extends MotionChangeCoordinate {
    opcode: "motion_changexby";
    inputs: DeltaX;
}

type DeltaY = Record<"DY", ShadowInput>;

export interface MotionChangeYBy extends MotionChangeCoordinate {
    opcode: "motion_changeyby";
    inputs: DeltaY;
}

interface MotionSetCoordinate extends MotionBlock {
    fields: None;
    shadow: false;
}

type NewX = Record<"X", ShadowInput>;

export interface MotionSetX extends MotionSetCoordinate {
    opcode: "motion_setx";
    inputs: NewX;
}

type NewY = Record<"Y", ShadowInput>;

export interface MotionSetY extends MotionSetCoordinate {
    opcode: "motion_sety";
    inputs: NewY;
}

export interface MotionIfOnEdgeBounce extends MotionBlock {
    opcode: "motion_ifonedgebounce";
    inputs: None;
    fields: None;
    shadow: false;
}

export const rotationStyles = ["left-right", "don't rotate", "all around"] as const;

type RotationStyle = Record<"STYLE", [
    rotationStyle: typeof rotationStyles[number],
    blockID: null,
]>;

export interface MotionSetRotationStyle extends MotionBlock, BlockWithField {
    opcode: "motion_setrotationstyle";
    inputs: None;
    fields: RotationStyle;
    shadow: false;
}

interface MotionLocation extends MotionBlock {
    inputs: None;
    fields: None;
}

export interface MotionXPosition extends MotionLocation {
    opcode: "motion_xposition";
}

export interface MotionYPosition extends MotionLocation {
    opcode: "motion_yposition";
}

export interface MotionDirection extends MotionLocation {
    opcode: "motion_direction";
}

/**
 * Tells whether the given block is a motion block.
 * https://en.scratch-wiki.info/wiki/Motion_Blocks
 *
 * @param o the block to check
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function isMotionBlock(o: {}): o is MotionBlock {
    return isBlock(o) && (motionBlockOpcodes as Readonly<Array<Opcode>>).includes(o.opcode);
}
