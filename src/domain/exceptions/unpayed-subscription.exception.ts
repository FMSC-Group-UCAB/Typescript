import { Exception } from "./exception";

export class UnpayedSubscriptionException extends Exception {
    constructor() {
        super('No se puede solicitar una cita sin pagar la suscripción.');
        Object.setPrototypeOf(this, UnpayedSubscriptionException.prototype);
    }

    public static create(): UnpayedSubscriptionException {
        return new UnpayedSubscriptionException();
    }

    serializeErrors() {
        return [
            {
                message: 'No se puede solicitar una cita sin pagar la suscripción.',
            },
        ];
    }
}