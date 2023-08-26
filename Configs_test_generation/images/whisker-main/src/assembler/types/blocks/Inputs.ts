import {BlockID, isBlockID} from "./Block";
import {Opcode} from "./Opcode";
import {getInputKeys} from "../../utils/Blocks";
import {NoSuchKeyError} from "../../errors";

export type Inputs = {
    [inputID in InputKey]?: Input;
};

export const shadowTypes = Object.freeze({
    unobscuredShadow: 1,
    noShadow: 2,
    obscuredShadow: 3,
} as const);

export type ShadowType = typeof shadowTypes[keyof typeof shadowTypes];

/**
 * Represents an input to a block.
 *
 * https://en.scratch-wiki.info/wiki/Scratch_File_Format#Blocks
 * https://en.scratch-wiki.info/wiki/Argument
 * https://github.com/LLK/scratch-vm/blob/develop/src/serialization/sb3.js#L39-L41
 */
export type Input = ShadowInput | NoShadowInput | DeletedInput;
export type ShadowInput = UnobscuredShadowInput | ObscuredShadowInput;

/**
 * A shadow block as input argument. The first array element is always 1. The second element represents the shadow
 * block. It is either a primitive input (of type 4 to 11), represented as an array, or a block ID referring to the
 * oval-shaped drop-down menu of the block. Note that primitive inputs of type 11 (broadcasts) are also drawn as
 * oval-shaped drop-down menus. Primitive inputs of type 12 (variables) and 13 (lists) should never appear as they
 * would obscure an existing input.
 */
export type UnobscuredShadowInput = [
    shadowType: typeof shadowTypes.unobscuredShadow,
    inputBlock: PrimitiveInput | BlockID
];

export function isUnobscuredShadowInput(input: Input): input is UnobscuredShadowInput {
    const [type, inputBlock] = input;
    return type === shadowTypes.unobscuredShadow &&
        (isPrimitiveInput(inputBlock) || isBlockID(inputBlock));
}

/**
 * A shadow block as input argument, but it is obscured by another reporter block that was dropped on top of it.
 * The first array element is always 3, the second element is the input block that obscured the shadow block,
 * and the third element is the obscured shadow block itself (represented as ShadowBlock or via its ID). Example:
 * https://en.scratch-wiki.info/wiki/Dropdown_Menu#Block_inputs
 * Note: BlockIDs seem to be used when predefined variables such as "answer" or "x position" are used. In contrast,
 * when using custom variables (such as "my variable"), the shadow block model seems to be used.
 */
export type ObscuredShadowInput = [
    shadowType: typeof shadowTypes.obscuredShadow,
    inputBlock: ConnectedVariableBlock | ConnectedListBlock | BlockID,
    obscuredBlock: PrimitiveInput | BlockID
];

export function isObscuredShadowInput(input: Input): input is ObscuredShadowInput {
    const [shadowType, inputBlock, obscuredBlock] = input;
    return shadowType === shadowTypes.obscuredShadow &&
        (isBlockID(inputBlock) || isVariableInput(inputBlock)) &&
        (isBlockID(obscuredBlock) || isPrimitiveInput(obscuredBlock));
}

/**
 * No shadow block as input. Typically, this applies to blocks requiring boolean inputs (such as if-blocks) and
 * C-blocks. The first array element is always 2. The second element represents the input block via its ID: for
 * boolean input blocks, the ID refers to the boolean block itself; for "substacks" (i.e., the blocks in the
 * if-condition or else-condition), the ID refers to the first block of the substack.
 */
export type NoShadowInput = [
    shadowType: typeof shadowTypes.noShadow,
    inputBlock: BlockID
];

export function isNoShadowInput(input: Input): input is NoShadowInput {
    const [shadowType, inputBlock] = input;
    return shadowType === shadowTypes.noShadow && isBlockID(inputBlock);
}

/**
 * This is not a real input, but merely a dummy input that signals the absence of an input. It can occur as a leftover
 * when a substack or boolean input has been deleted in the Scratch IDE. In the JSON, one can also delete the
 * corresponding input key from the {@link Inputs} object to get the same effect.
 */
export type DeletedInput = [
    shadowType: typeof shadowTypes.unobscuredShadow, // Yes, it uses unobscuredShadow instead of noShadow!
    inputBlock: null
]

export function deletedInput(): DeletedInput {
    return [
        shadowTypes.unobscuredShadow,
        null,
    ];
}

export function isDeletedInput(input: Input): input is DeletedInput {
    const [shadowType, inputBlock] = input;
    return shadowType === shadowTypes.unobscuredShadow && inputBlock === null;
}

export const primitiveInputTypes = Object.freeze({
    number: 4,
    positiveNumber: 5,
    positiveInteger: 6,
    integer: 7,
    angle: 8,
    color: 9,
    string: 10,
    broadcast: 11,
    variable: 12,
    list: 13,
} as const);

export type PrimitiveInputType = typeof primitiveInputTypes[keyof typeof primitiveInputTypes];

export function isClearedInput(input: Input): boolean {
    const [shadowType, inputBlock] = input;

    if (shadowType !== shadowTypes.unobscuredShadow) {
        return false;
    }

    if (isBlockID(inputBlock)) {
        return false;
    }

    const [inputType, value] = inputBlock;
    const clearableInputTypes = [
        primitiveInputTypes.number,
        primitiveInputTypes.positiveNumber,
        primitiveInputTypes.positiveInteger,
        primitiveInputTypes.integer,
        primitiveInputTypes.angle,
        primitiveInputTypes.string,
    ] as Array<number>;

    return clearableInputTypes.includes(inputType) && value === "";
}

/**
 * "Primitive" blocks that are usually "shadows" (i.e., placeholders). They encompass literal numbers and strings, but
 * also variables, lists, and broadcasts. They are not represented as {@link Block} object, and as such they cannot be
 * referred to via a blockID. Instead, they are modelled by arrays whose first element is a number representing the
 * block applied. The remaining elements encode additional information, such as the name and ID of the variable, list,
 * or broadcast the block represents.
 *
 * https://github.com/LLK/scratch-vm/blob/develop/src/serialization/sb3.js#L60-L81
 */
export type PrimitiveInput =
    | MathNumberInput
    | MathPositiveNumberInput
    | MathWholeNumberInput
    | MathIntegerInput
    | MathAngleInput
    | ColorPickerInput
    | TextInput
    | BroadCastInput
    | VariableInput
    | ListInput
    ;

export function isPrimitiveInput(input: PrimitiveInput | BlockID | null | undefined): input is PrimitiveInput {
    return Array.isArray(input);
}

/**
 * "#" followed by a hexadecimal numeral representing a color.
 */
type RGBString = `#${string}`;

/**
 * The string representation of a number (e.g., "10", "3.2", or "10e5" in scientific notation) or the empty string.
 */
type NumberAsString = `${number}` | "";

export type MathNumberInput = [
    shadowType: typeof primitiveInputTypes.number,
    number: NumberAsString
];

export function isMathNumberInput(i: PrimitiveInput | BlockID): i is MathNumberInput {
    if (isBlockID(i)) {
        return false;
    }

    const [type, number] = i;
    return type === primitiveInputTypes.number && (typeof number === "string");
}

export type MathPositiveNumberInput = [
    shadowType: typeof primitiveInputTypes.positiveNumber,
    positivenNmber: NumberAsString
];

export function isMathPositiveNumberInput(i: PrimitiveInput | BlockID): i is MathPositiveNumberInput {
    if (isBlockID(i)) {
        return false;
    }

    const [type, number] = i;
    return type === primitiveInputTypes.positiveNumber && (typeof number === "string");
}

export type MathWholeNumberInput = [ // actually only non-negative whole numbers…
    shadowType: typeof primitiveInputTypes.positiveInteger,
    positiveInteger: NumberAsString
];

export function isMathWholeNumberInput(i: PrimitiveInput | BlockID): i is MathWholeNumberInput {
    if (isBlockID(i)) {
        return false;
    }

    const [type, number] = i;
    return type === primitiveInputTypes.positiveInteger && (typeof number === "string");
}

export type MathIntegerInput = [
    shadowType: typeof primitiveInputTypes.integer,
    integer: NumberAsString
];

export function isMathIntegerInput(i: PrimitiveInput | BlockID): i is MathIntegerInput {
    if (isBlockID(i)) {
        return false;
    }

    const [type, number] = i;
    return type === primitiveInputTypes.integer && (typeof number === "string");
}

export type MathAngleInput = [
    shadowType: typeof primitiveInputTypes.angle,
    angle: NumberAsString
];

export function isMathAngleInput(i: PrimitiveInput | BlockID): i is MathAngleInput {
    if (isBlockID(i)) {
        return false;
    }

    const [type, number] = i;
    return type === primitiveInputTypes.angle && (typeof number === "string");
}

export type ColorPickerInput = [
    shadowType: typeof primitiveInputTypes.color,
    color: RGBString
]

export function isColorPickerInput(i: PrimitiveInput | BlockID): i is ColorPickerInput {
    if (isBlockID(i)) {
        return false;
    }

    const [type, color] = i;
    return type === primitiveInputTypes.color
        && typeof color === "string"
        && color.startsWith("#");
}

export type TextInput = [
    shadowType: typeof primitiveInputTypes.string,
    text: string
];

export function isTextInput(i: PrimitiveInput | BlockID): i is TextInput {
    if (isBlockID(i)) {
        return false;
    }

    const [type, number] = i;
    return type === primitiveInputTypes.string && (typeof number === "string");
}

export type BroadCastInput = [
    shadowType: typeof primitiveInputTypes.broadcast,
    broadcastName: string,
    broadcastID: string
];

export function isBroadCastInput(i: PrimitiveInput | BlockID): i is BroadCastInput {
    if (isBlockID(i)) {
        return false;
    }

    const [type, broadcastName, broadcastID] = i;
    return type === primitiveInputTypes.broadcast
        && typeof broadcastName === "string"
        && typeof broadcastID === "string";
}

export type VariableInput = ConnectedVariableBlock | TopLevelVariableBlock;

export function isVariableInput(i: PrimitiveInput | BlockID): i is VariableInput {
    if (isBlockID(i)) {
        return false;
    }

    const [type, variableName, variableID] = i;
    return type === primitiveInputTypes.variable
        && typeof variableName === "string"
        && typeof variableID === "string";
}

export type ConnectedVariableBlock = [
    shadowType: typeof primitiveInputTypes.variable,
    variableName: string,
    variableID: string
];

export type TopLevelVariableBlock = [
    ...variable: ConnectedVariableBlock,
    x: number,
    y: number,
];

export type ListInput = ConnectedListBlock | TopLevelListBlock;

export function isListInput(i: PrimitiveInput | BlockID): i is ListInput {
    if (isBlockID(i)) {
        return false;
    }

    const [type, listName, listID] = i;
    return type === primitiveInputTypes.list

        && typeof listName === "string"
        && typeof listID === "string";
}

export type ConnectedListBlock = [
    shadowType: typeof primitiveInputTypes.list,
    listName: string,
    listID: string
];

export type TopLevelListBlock = [
    ...list: ConnectedListBlock,
    x: number,
    y: number
];

// eslint-disable-next-line @typescript-eslint/ban-types
export function isTopLevelDataBlock(o: {}): o is TopLevelVariableBlock | TopLevelListBlock {
    return Array.isArray(o) &&
        (o[0] === primitiveInputTypes.variable || o[0] === primitiveInputTypes.list) &&
        typeof o[1] === "string" &&
        typeof o[2] === "string" &&
        typeof o[3] === "number" &&
        typeof o[4] === "number";
}

export type InputKey = typeof inputKeys[number];

export const inputKeys = Object.freeze([
    "SUBSTACK",
    "SUBSTACK2",
    "CONDITION",
    "TIMES",
    "DURATION",
    "VALUE",
    "CHANGE",
    "NUM",
    "MESSAGE",
    "SECS",
    "SIZE",
    "STEP",
    "DEGREES",
    "FROM",
    "DIRECTION",
    "X",
    "Y",
    "DX",
    "DY",
    "NUM1",
    "NUM2",
    "OPERAND1",
    "OPERAND2",
    "OPERAND",
    "STRING1",
    "STRING2",
    "STRING",
    "LETTER",
    "COLOR",
    "COLOR2",
    "QUESTION",
    "VOLUME",
    "ITEM",
    "INDEX",
    "STEPS",
    "BROADCAST_INPUT",
    "custom_block",
    // Can refer to a shadow block, or a primitive input:
    "TO",
    // These keys always refer to shadow blocks:
    "TOWARDS",
    "COSTUME",
    "BACKDROP",
    "SOUND_MENU",
    "CLONE_OPTION",
    "TOUCHINGOBJECTMENU",
    "DISTANCETOMENU",
    "KEY_OPTION",
    "OBJECT",
    "COLOR_PARAM",
] as const);

export function inputRefersToShadowBlock(opcode: Opcode, key: InputKey): boolean {
    if (!getInputKeys(opcode).includes(key)) {
        throw new NoSuchKeyError(`Block "${opcode}" does not take input "${key}"`);
    }

    // These keys always refer to shadow inputs:
    const shadowInputKeys = [
        "TOWARDS",
        "COSTUME",
        "BACKDROP",
        "SOUND_MENU",
        "CLONE_OPTION",
        "TOUCHINGOBJECTMENU",
        "DISTANCETOMENU",
        "KEY_OPTION",
        "OBJECT",
    ] as Readonly<Array<InputKey>>;

    if (shadowInputKeys.includes(key)) {
        return true;
    }

    // The "TO" key can refer to a shadow block, or a primitive input, but it depends on the opcode:
    return key === "TO" && opcode !== "operator_random";
}
