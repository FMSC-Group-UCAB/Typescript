import { Exception } from "./exception";

export class NotExpiredSubscriptionException extends Exception {
    constructor() {
        super('La suscripción aun no esta vencida');
        Object.setPrototypeOf(this, NotExpiredSubscriptionException.prototype);
    }

    public static create(): NotExpiredSubscriptionException {
        return new NotExpiredSubscriptionException();
    }

    serializeErrors() {
        return [
            {
                message: "La suscripción aun no esta vencida",
            },
        ];
    }
}