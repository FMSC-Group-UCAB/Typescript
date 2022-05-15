class ClosedSubscriptionException extends Error {
    constructor(m: string) {
        super(m);
    }

    public static create(): ClosedSubscriptionException {
        return new ClosedSubscriptionException("No se puede modificar una suscripción cancelada.")
    }
}