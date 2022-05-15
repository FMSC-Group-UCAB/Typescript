import { IValueObject } from "../../interfaces/value-object.interface";

/** SuscriptionCreatedAt: Value Object para las fechas de creación de las suscripciones.*/
export class SubscriptionCreatedAt implements IValueObject<SubscriptionCreatedAt>{
    private constructor(private readonly createdAt: Date) { }

    get value() { return this.createdAt; }

    equals(other: SubscriptionCreatedAt): boolean {
        return this.createdAt == other.createdAt;
    }

    /**
     * Patron Factory.
     * @param createdAt Fecha de creación de la suscripción.
     * @returns `SuscriptionCreatedAt`.*/
    public static create(createdAt: Date): SubscriptionCreatedAt {
        if (createdAt == null || createdAt == undefined) {
            throw new Error("La fecha de creación de una suscriptción no puede ser undefined/null.");
        }

        return new SubscriptionCreatedAt(createdAt);
    }
}