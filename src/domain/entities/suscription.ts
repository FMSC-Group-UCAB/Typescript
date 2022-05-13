import { SuscriptionCostType } from "../enumerations/suscription-cost-type.enum";
import { SuscriptionType } from "../enumerations/suscription-type.enum";
import { SuscriptionClosedAt } from "../valueobjects/suscription-closed-at";
import { SuscriptionCreatedAt } from "../valueobjects/suscription-created-at";
import { SuscriptionId } from "../valueobjects/suscription-id";
import { SuscriptionPaidAt } from "../valueobjects/suscription-paid-at";

/** Suscription: Es una clase concreta utilizada para el manejo de las suscripcionones del paciente.*/
export class Suscription {
    private constructor(
        private readonly id: SuscriptionId,
        private type: SuscriptionType,
        private cost: SuscriptionCostType,
        private createdAt: SuscriptionCreatedAt,
        private paidAt: SuscriptionPaidAt,
        private closedAt: SuscriptionClosedAt,
    ) {
        this.validate();
    }

    get Id() { return this.id; }
    get Type() { return this.type; }
    get Cost() { return this.cost; }
    get CreatedAt() { return this.createdAt; }
    get PaidAt() { return this.paidAt; }
    get ClosedAt() { return this.closedAt; }

    /**
     * Patron Factory.
     * @param id Identificador de la suscripción.
     * @param type Tipo de suscripción.
     * @param cost Tipo de costo de la suscripción.
     * @param createdAt Fecha de creación de la suscripción.
     * @param paidAt Fecha de pago de la suscripción.
     * @param closedAt Fecha de cierre de la suscripción.
     * @returns `Suscription`*/
    public static create(id: SuscriptionId, type: SuscriptionType, cost: SuscriptionCostType, createdAt: SuscriptionCreatedAt, paidAt: SuscriptionPaidAt, closedAt: SuscriptionClosedAt): Suscription {
        return new Suscription(id, type, cost, createdAt, paidAt, closedAt);
    }

    /** Valida los atributos de la entidad.*/
    private validate(): void {
        if (this.id == null || this.id == undefined) {
            throw new Error("El Id de suscriptción no puede ser null/undefined.");
        }

        if (this.type == null || this.type == undefined) {
            throw new Error("El tipo de suscriptción no puede ser null/undefined.");
        }

        if (this.cost == null || this.cost == undefined) {
            throw new Error("El costo de la suscriptción no puede ser null/undefined.");
        }

        if (this.createdAt == null || this.createdAt == undefined) {
            throw new Error("La fecha de creación de suscriptción no puede ser null/undefined.");
        }

        if (this.paidAt == null || this.paidAt == undefined) {
            throw new Error("La fecha de cierre de suscriptción no puede ser null/undefined.");
        }
    }
}