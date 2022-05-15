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

    public async paySuscription(subscription: Subscription) {
        if (subscription == null || subscription == undefined) {
            throw Error("Al pagar una suscripción esta no puede ser null/undefined.");
        }

        if (subscription.ClosedAt) {
            ClosedSubscriptionException.create();
        }

        //TODO: Validar que este vencida.

        const results = await this.payMethod.pay(subscription.Cost);

        if (!results) {
            throw new Error("No se pudo realizar el pago.");
        }

        subscription.update(subscription.Type, SuscriptionCostType.PREMIUM, SubscriptionPaidAt.create(new Date()), null);

        this.events.push(DomainEvent.create(
            "Pago de Suscripción",
            {
                owner: subscription.Patient.FirstName.value + " " + subscription.Patient.LastName.value,
                id: "Suscripción #" + subscription.Id.value,
                cost: "$" + subscription.Cost,
            }
        ));

        this.notifyAll(this.events);
    }
}