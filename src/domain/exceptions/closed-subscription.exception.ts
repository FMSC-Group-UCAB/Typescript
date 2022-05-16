import { Exception } from "./exception";

export class ClosedSubscriptionException extends Exception {
    constructor() {
        super("No se puede modificar una suscripción cancelada.");
        Object.setPrototypeOf(this, ClosedSubscriptionException.prototype);
    }

    public static create(): ClosedSubscriptionException {
        return new ClosedSubscriptionException();
    }

    serializeErrors() {
        return [
            {
                message: "No se puede modificar una suscripción cancelada.",
            },
        ];
    }
}