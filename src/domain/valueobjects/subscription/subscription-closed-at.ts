import { IValueObject } from "../../interfaces/value-object.interface";

/** SuscriptionClosedAt: Value Object para las fechas de cierre de las suscripciones.*/
export class SubscriptionClosedAt implements IValueObject<SubscriptionClosedAt>{
    private constructor(private readonly closedAt: Date) { }

    get Value() { return this.closedAt; }

    equals(other: SubscriptionClosedAt): boolean {
        return this.closedAt == other.closedAt;
    }

    /**
     * Patron Factory.
     * @param closedAt Fecha de cierre de la suscripción.
     * @returns `SuscriptionClosedAt`.*/
    public static create(closedAt: Date): SubscriptionClosedAt {
        if (closedAt == null || closedAt == undefined) {
            throw new Error("La fecha de cierre de una suscriptción no puede ser undefined/null.");
        }

        return new SubscriptionClosedAt(closedAt);
    }
}