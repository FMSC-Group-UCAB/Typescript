class UnpayedSubscriptionException  extends Error {

    constructor(m: string) {
        super(m);
    }

    static create() {
        return new UnpayedSubscriptionException('No se puede solicitar una cita sin pagar la suscripción.');
    }
}