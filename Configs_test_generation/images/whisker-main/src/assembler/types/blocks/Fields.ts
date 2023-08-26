import {Broadcasts, Lists, Variables} from "../Target";
import {Entry} from "../../utils/Objects";
import {BroadCastInput} from "./Inputs";

/**
 * Fields are text boxes, drop-down menus, etc. These are used directly in blocks where there is an input into which
 * one cannot drop a reporter. Fields are encoded as arrays. The first element of each array is the field's value
 * (such as "_random_" or "_mouse_"). For certain fields, such as variable and broadcast dropdown menus, there is also
 * a second element, which is the ID of the field's value.
 *
 * https://en.scratch-wiki.info/wiki/Dropdown_Menu
 */
export type Fields = {
    [fieldID in FieldKey]?: Field;
}

export type Field = Field1 | Field2;

export type Field1 = [value: string] | [value: string, elementID: null];

export type Field2 = [value: string, elementID: string];

export function variableToField([variableID, [variableName]]: Entry<Variables>): Field2 {
    return [variableName, variableID];
}

export function listToField([listID, [listName]]: Entry<Lists>): Field2 {
    return [listName, listID];
}

export function broadcastToField([broadcastID, broadcastName]: Entry<Broadcasts>): Field2 {
    return [broadcastName, broadcastID];
}

export function broadcastInputToField([, broadcastName, broadcastID]: BroadCastInput): Field2 {
    return [broadcastName, broadcastID];
}

// Rectangular drop-down menus
const noShadowFieldKeys = [
    "STYLE",
    "EFFECT",
    "FRONT_BACK",
    "FORWARD_BACKWARD",
    "NUMBER_NAME",
    "WHENGREATERTHANMENU",
    "BROADCAST_OPTION",
    "STOP_OPTION",
    "DRAG_MODE",
    "PROPERTY",
    "CURRENTMENU",
    "OPERATOR",
    "VARIABLE",
    "LIST",
] as const;

// Oval-shaped drop-down menus
const shadowFieldKeys = [
    "TO",
    "TOWARDS",
    "COSTUME",
    "SOUND_MENU",
    "CLONE_OPTION",
    "TOUCHINGOBJECTMENU",
    "DISTANCETOMENU",
    "OBJECT",
    "VALUE", // for the argument definitions in the signature of custom blocks
    "colorParam",
] as const;

export const fieldKeys = [
    ...noShadowFieldKeys,
    ...shadowFieldKeys,
    // These keys can occur in both a rectangular or oval-shaped drop-down menu:
    "KEY_OPTION",
    "BACKDROP",
] as const;

export type FieldKey = typeof fieldKeys[number];
