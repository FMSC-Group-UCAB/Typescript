import { IValueObject } from "../../interfaces/value-object.interface";

/** SuscriptionPaidAt: Value Object para las fechas de pago de las suscripciones.*/
export class SubscriptionPaidAt implements IValueObject<SubscriptionPaidAt>{
    private constructor(private readonly paidAt: Date) { }

    get Value() { return this.paidAt; }

    equals(other: SubscriptionPaidAt): boolean {
        return this.paidAt == other.paidAt;
    }

    /**
     * Patron Factory.
     * @param paidAt Fecha de pago de la suscripción.
     * @returns `SuscriptionPaidAt`.*/
    public static create(paidAt: Date): SubscriptionPaidAt {
        if (paidAt == null || paidAt == undefined) {
            throw new Error("La fecha de pago de una suscriptción no puede ser undefined/null.");
        }

        return new SubscriptionPaidAt(paidAt);
    }
}