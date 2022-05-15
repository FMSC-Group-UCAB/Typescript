import { Subscription } from "../entities/subscription";
import { SuscriptionCostType } from "../enumerations/suscription-cost-type.enum";
import { IPayMethod } from "../interfaces/pay-method.interface";
import { DomainEvent } from "../observables/domain-event";
import { Observable } from "../observables/observable";
import { SubscriptionPaidAt } from "../valueobjects/subscription/subscription-paid-at";

export class PaySubscriptionUsecase extends Observable {
    private events: DomainEvent[] = [];

    constructor(private readonly payMethod: IPayMethod) {
        if (payMethod == null || payMethod == undefined) { throw Error("Se debe inyectar un método de pago definido."); }
        super();
    }

    public async paySuscription(suscription: Subscription) {
        if (suscription == null || suscription == undefined) {
            throw Error("Al pagar una suscripción esta no puede ser null/undefined.");
        }

        if (suscription.ClosedAt) {
            ClosedSubscriptionException.create();
        }

        //TODO: Validar que este vencida.

        const results = await this.payMethod.pay(suscription.Cost);

        if (!results) {
            throw new Error("No se pudo realizar el pago.");
        }

        suscription.update(suscription.Type, SuscriptionCostType.PREMIUM, SubscriptionPaidAt.create(new Date()), null);

        this.events.push(DomainEvent.create(
            "Pago de Suscripción",
            {
                owner: suscription.Patient.FirstName.value + " " + suscription.Patient.LastName.value,
                id: "Suscripción #" + suscription.Id.value,
                cost: "$" + suscription.Cost,
            }
        ));

        this.notifyAll(this.events);
    }
}