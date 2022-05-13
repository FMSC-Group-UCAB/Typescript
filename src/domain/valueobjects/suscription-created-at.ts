import { IValueObject } from "../interfaces/value-object.interface";

/** SuscriptionCreatedAt: Value Object para las fechas de creación de las suscripciones.*/
export class SuscriptionCreatedAt implements IValueObject<SuscriptionCreatedAt>{
    private constructor(private readonly createdAt: Date) { }

    get CreatedAt() { return this.createdAt; }

    equals(other: SuscriptionCreatedAt): boolean {
        return this.createdAt == other.createdAt;
    }

    /**
     * Patron Factory.
     * @param createdAt Fecha de creación de la suscripción.
     * @returns `SuscriptionCreatedAt`.*/
    public static create(createdAt: Date): SuscriptionCreatedAt {
        if (createdAt == null || createdAt == undefined) {
            throw new Error("La fecha de creación de una suscriptción no puede ser undefined/null.");
        }

        return new SuscriptionCreatedAt(createdAt);
    }
}