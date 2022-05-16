import { Exception } from "./exception";

export class PayMethodException extends Exception {
    constructor() {
        super("Ha ocurrido un error al procesar el pago");
        Object.setPrototypeOf(this, PayMethodException.prototype);
    }

    public static create(): PayMethodException {
        return new PayMethodException();
    }

    serializeErrors() {
        return [
            {
                message: "Ha ocurrido un error al procesar el pago",
            },
        ];
    }
}