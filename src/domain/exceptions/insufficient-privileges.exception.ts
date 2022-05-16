import { Exception } from "./exception";

export class InsufficientPrivilegeException extends Exception {
    constructor() {
        super("Privilegios insuficientes.");
        Object.setPrototypeOf(this, InsufficientPrivilegeException.prototype);
    }

    public static create(): InsufficientPrivilegeException {
        return new InsufficientPrivilegeException();
    }

    serializeErrors() {
        return [
            {
                message: "Privilegios insuficientes.",
            },
        ];
    }
}