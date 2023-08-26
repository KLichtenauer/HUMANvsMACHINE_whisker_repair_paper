import {ListID, VariableID} from "./types/Target";
import {BlockID} from "./types/blocks/Block";

abstract class CustomError extends Error {
    protected constructor(override readonly message) {
        super(message);
    }

    override get name(): string {
        return this.constructor.name;
    }
}

export class NoSuchBlockError extends CustomError {
    constructor(private readonly _blockID: BlockID) {
        super(`Block "${_blockID}" does not exist`);
    }

    get blockID(): BlockID {
        return this._blockID;
    }
}

export class NoSuchScriptError extends CustomError {
    constructor(arg: BlockID | NoSuchBlockError) {
        if (arg instanceof NoSuchBlockError) {
            arg = arg.blockID;
        }

        super(`Script with root "${arg}" does not exist`);
    }
}

export class NoSuchSpriteError extends CustomError {
    constructor(name: string) {
        super(`Sprite "${name}" does not exist`);
    }
}

export class InvalidBlockError extends CustomError {
    constructor(override readonly message: string) {
        super(message);
    }
}

export class InvalidInputError extends CustomError {
    constructor(override readonly message: string) {
        super(message);
    }
}

export class InvalidScriptError extends CustomError {
    constructor(override readonly message: string) {
        super(message);
    }
}

export class InvalidTargetError extends CustomError {
    constructor(override readonly message: string) {
        super(message);
    }
}

export class ValidationError extends CustomError {
    constructor(override readonly message: string) {
        super(message);
    }
}

export class NoSuchKeyError extends CustomError {
    constructor(override readonly message: string) {
        super(message);
    }
}

export class NoSuchVariableError extends CustomError {
    constructor(variableID: VariableID) {
        super(`Variable with ID "${variableID}" does not exist`);
    }
}

export class NoSuchListError extends CustomError {
    constructor(listID: ListID) {
        super(`List with ID "${listID}" does not exist`);
    }
}
