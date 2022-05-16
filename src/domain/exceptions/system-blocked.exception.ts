import { Exception } from "./exception";

export class SystemBlockedException extends Exception {
    constructor() {
        super("Permisos denegados por mal uso del sistema");
        Object.setPrototypeOf(this, SystemBlockedException.prototype);
    }

    /**Patrón Factory */
    public static create(): SystemBlockedException {
        return new SystemBlockedException();
    }

    serializeErrors() {
        return [
            {
                message: "Permisos denegados por mal uso del sistema",
            },
        ];
    }
}