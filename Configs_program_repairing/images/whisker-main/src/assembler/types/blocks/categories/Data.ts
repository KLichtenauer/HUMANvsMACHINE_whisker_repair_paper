import {ShadowInput} from "../Inputs";
import {Block} from "../Block";
import {DataBlockOpcode, dataBlockOpcodes, Opcode} from "../Opcode";
import {EmptyObject} from "../../../utils/Objects";

type None = EmptyObject;
export interface DataBlock extends Block {
    opcode: DataBlockOpcode;
}

/**
 * A reference to a variable or list. Every variable/list has a name and an ID. The name of a
 * variable/list must be unique as well.
 */
export type Reference = [
    name: string,
    id: string
];

type ChosenVariable = Record<"VARIABLE", Reference>
type ChosenList = Record<"LIST", Reference>;
type InputValue = Record<"VALUE", ShadowInput>;

export interface DataSetVariableTo extends DataBlock {
    opcode: "data_setvariableto";
    inputs: InputValue;
    fields: ChosenVariable;
    shadow: false;
}

export interface DataChangeVariableBy extends DataBlock {
    opcode: "data_changevariableby";
    inputs: InputValue;
    fields: ChosenVariable;
    shadow: false;
}

export interface DataShowVariable extends DataBlock {
    opcode: "data_showvariable";
    inputs: None;
    fields: ChosenVariable;
    shadow: false;
}

export interface DataHideVariable extends DataBlock {
    opcode: "data_hidevariable";
    inputs: None;
    fields: ChosenVariable;
    shadow: false;
}

type Item = Record<"ITEM", ShadowInput>;

export interface DataAddToList extends DataBlock {
    opcode: "data_addtolist";
    inputs: Item;
    fields: ChosenList;
    shadow: false;
}

type Index = Record<"INDEX", ShadowInput>;

export interface DataDeleteOfList extends DataBlock {
    opcode: "data_deleteoflist";
    inputs: Index;
    fields: ChosenList;
    shadow: false;
}

export interface DataDeleteAllOfList extends DataBlock {
    opcode: "data_deletealloflist";
    inputs: None;
    fields: ChosenList;
    shadow: false;
}

export interface DataInsertAtList extends DataBlock {
    opcode: "data_insertatlist";
    inputs: Item & Index;
    fields: ChosenList;
    shadow: false;
}

export interface DataReplaceItemOfList extends DataBlock {
    opcode: "data_replaceitemoflist";
    inputs: Item & Index;
    fields: ChosenList;
    shadow: false;
}

export interface DataItemOfList extends DataBlock {
    opcode: "data_itemoflist";
    inputs: Index;
    fields: ChosenList;
}

export interface DataItemNumOfList extends DataBlock {
    opcode: "data_itemnumoflist";
    inputs: Item;
    fields: ChosenList;
}

export interface DataLengthOfList extends DataBlock {
    opcode: "data_lengthoflist";
    inputs: None;
    fields: ChosenList;
}

export interface DataListContainsItem extends DataBlock {
    opcode: "data_listcontainsitem";
    inputs: Item;
    fields: ChosenList;
}

interface DataShowHideList extends DataBlock {
    inputs: None;
    fields: ChosenList;
    shadow: false;
}

export interface DataShowList extends DataShowHideList {
    opcode: "data_showlist";
}

export interface DataHideList extends DataShowHideList {
    opcode: "data_hidelist";
}

export type Variable = RegularVariable | CloudVariable;

/**
 * The values a variable/list can hold.
 */
export type Value = Scalar | Multiple;
export type Scalar = number | string;
export type Multiple = Scalar[];

/**
 * The state of a variable in a Scratch program is represented as a name-value pair. The first
 * element of the pair is the variable name, the second is the value. Variables can either be
 * "regular" variables or cloud variables.
 */
export type RegularVariable = [
    name: string,
    value: Scalar
];

/**
 * Cloud data is a feature that allows users to store number-containing variables "in the cloud," or on Scratch's
 * servers. Cloud variables have the character "☁" (a cloud icon in the font Scratch uses) in front of them, to
 * distinguish them from regular variables.
 *
 * https://en.scratch-wiki.info/wiki/Cloud_Data
 */
export type CloudVariable = [
    name: string,
    value: Scalar,
    isCloudVariable: true
];

/**
 * The state of a list is represented as a name-value pair. The first element is the name of the
 * list, the second element is an array containing the values of the list.
 */
export type List = [
    name: string,
    value: Multiple
];

/**
 * Tells whether the given block is a variable block.
 * https://en.scratch-wiki.info/wiki/Variables_Blocks
 *
 * @param block the block to check
 */
export function isDataBlock(block: Block): block is DataBlock {
    return (dataBlockOpcodes as Readonly<Array<Opcode>>).includes(block.opcode);
}

export function isCloudVariable(variable: Variable): variable is CloudVariable {
    return variable[2] ?? false;
}
