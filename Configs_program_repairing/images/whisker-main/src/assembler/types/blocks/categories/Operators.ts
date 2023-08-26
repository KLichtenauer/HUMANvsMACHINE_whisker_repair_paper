import {Block} from "../Block";
import {NoShadowInput, ShadowInput} from "../Inputs";
import {Opcode, OperatorBlockOpcode, operatorBlockOpcodes} from "../Opcode";
import {SensingBlock} from "./Sensing";
import {EmptyObject} from "../../../utils/Objects";
import {BlockWithField} from "../other/BlockWithField";


type None = EmptyObject;
type Optional<T> = Partial<T>;

type Input<K extends string> = Record<K, ShadowInput>;

export interface OperatorBlock extends Block {
    opcode: OperatorBlockOpcode;
    shadow: false;
}

type Num1 = Input<"NUM1">;
type Num2 = Input<"NUM2">;

interface BinaryArithmetic extends OperatorBlock {
    inputs: Num1 & Num2;
    fields: None;
}

export interface OperatorAdd extends BinaryArithmetic {
    opcode: "operator_add";
}

export interface OperatorSubtract extends BinaryArithmetic {
    opcode: "operator_subtract";
}

export interface OperatorMultiply extends BinaryArithmetic {
    opcode: "operator_multiply";
}

export interface OperatorDivide extends BinaryArithmetic {
    opcode: "operator_divide";
}

export interface OperatorMod extends BinaryArithmetic {
    opcode: "operator_mod";
}

type From = Input<"FROM">;
type To = Input<"TO">;
type Range = From & To;

export interface OperatorRandom extends OperatorBlock {
    opcode: "operator_random";
    inputs: Range;
    fields: None;
}

type Operand1 = Input<"OPERAND1">;
type Operand2 = Input<"OPERAND2">;

interface BinaryRelational extends OperatorBlock {
    inputs: Operand1 & Operand2;
    fields: None;
}

export interface OperatorGt extends BinaryRelational {
    opcode: "operator_gt";
}

export interface OperatorLt extends BinaryRelational {
    opcode: "operator_lt";
}

export interface OperatorEquals extends BinaryRelational {
    opcode: "operator_equals";
}

type LogicOperand1 = Record<"OPERAND1", NoShadowInput>;
type LogicOperand2 = Record<"OPERAND2", NoShadowInput>;
type LogicOperands = LogicOperand1 & LogicOperand2;
type LogicOperand = Record<"OPERAND", NoShadowInput>;

interface BinaryLogic extends OperatorBlock {
    inputs: Optional<LogicOperands>;
    fields: None;
}

export interface OperatorAnd extends BinaryLogic {
    opcode: "operator_and";
}

export interface OperatorOr extends BinaryLogic {
    opcode: "operator_or";
}

export interface OperatorNot extends OperatorBlock {
    opcode: "operator_not";
    inputs: Optional<LogicOperand>;
    fields: None;
}

type String1 = Input<"STRING1">
type String2 = Input<"STRING2">
type Str = Input<"STRING">
type Letter = Input<"LETTER">

export interface OperatorJoin extends OperatorBlock {
    opcode: "operator_join";
    inputs: String1 & String2;
    fields: None;
}

export interface OperatorLetterOf extends OperatorBlock {
    opcode: "operator_letter_of";
    inputs: Letter & Str;
    fields: None;
}

export interface OperatorLength extends OperatorBlock {
    opcode: "operator_length";
    inputs: Str;
    fields: None;
}

export interface OperatorContains extends OperatorBlock {
    opcode: "operator_contains";
    inputs: String1 & String2;
    fields: None;
}

type Num = Input<"NUM">;

export interface OperatorRound extends OperatorBlock {
    opcode: "operator_round";
    inputs: Num;
    fields: None;
}

export const operators = [
    "abs",
    "floor",
    "ceiling",
    "sqrt",
    "sin",
    "cos",
    "tan",
    "asin",
    "acos",
    "atan",
    "ln",
    "log",
    "e ^",
    "10 ^",
] as const;

type OperatorChoice = Record<"OPERATOR", [
    operator: typeof operators[number],
    blockID: null,
]>;

export interface OperatorMathOp extends OperatorBlock, BlockWithField {
    opcode: "operator_mathop";
    inputs: Num;
    fields: OperatorChoice;
    shadow: false;
}

/**
 * Tells whether the given block is an operator block.
 * https://en.scratch-wiki.info/wiki/Operators_Blocks
 *
 * @param block the block to check
 */
export function isOperatorBlock(block: Block): block is SensingBlock {
    return (operatorBlockOpcodes as Readonly<Array<Opcode>>).includes(block.opcode);
}
