/**UnpayedSubscriptionException: Excepción que se lanza cuando un paciente no tiene una suscripción activa y quiere realizar una 
 * acción que requiere de una. */
class UnpayedSubscriptionException  extends Error {

    constructor(m: string) {
        super(m);
    }

    /**Patrón Factory */
    static create() {
        return new UnpayedSubscriptionException('No se puede realizar esta acción sin pagar una suscripción.');
    }
}