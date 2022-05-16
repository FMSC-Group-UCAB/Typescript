/** ClosedSubscriptionException: Excepción que se arroja cuando se intenta modificar una suscripción cerrada. */
class ClosedSubscriptionException extends Error {
    constructor(m: string) {
        super(m);
    }

    /**Patrón Factory */
    public static create(): ClosedSubscriptionException {
        return new ClosedSubscriptionException("No se puede modificar una suscripción cancelada.")
    }
}