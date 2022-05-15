import { IValueObject } from "../../interfaces/value-object.interface";

/** SuscriptionId: Es el Value Object del identificador de las suscripciones.*/
export class SubscriptionId implements IValueObject<SubscriptionId>{
    private constructor(private readonly id: number) { }

    get Value() { return this.id; }

    equals(other: SubscriptionId): boolean {
        return this.id == other.id;
    }

    /**
     * Patron Factory.
     * @param id Identificador de la suscripción.
     * @returns `SuscriptionId`.*/
    public static create(id: number): SubscriptionId {
        if (id == null || id == undefined || id == 0) {
            throw new Error("El Id de suscriptción no puede ser nulo.");
        }

        return new SubscriptionId(id);
    }
}