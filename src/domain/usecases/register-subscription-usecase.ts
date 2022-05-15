import { Patient } from "../entities/patient";
import { SubscriptionId } from "../valueobjects/subscription/subscription-id";
import { SubscriptionCreatedAt } from "../valueobjects/subscription/subscription-created-at";
import { SubscriptionPaidAt } from "../valueobjects/subscription/subscription-paid-at";
import { SubscriptionClosedAt } from "../valueobjects/subscription/subscription-closed-at";
import { SuscriptionCostType } from "../enumerations/suscription-cost-type.enum";
import { SuscriptionType } from "../enumerations/suscription-type.enum";
import { Subscription } from "../entities/subscription";
import { Observable } from "../observables/observable";
import { DomainEvent } from "../observables/domain-event";
import { IPayMethod } from "../interfaces/pay-method.interface";

export class RegisterSubscriptionUseCase extends Observable {

    private events: DomainEvent[] = [];
    private subscription: Subscription;

    constructor(private readonly payMethod: IPayMethod) {
        if (payMethod == null || payMethod == undefined) { throw Error("Se debe inyectar un método de pago definido."); }
        super();
    }

    /**
     * Caso de uso que registra una suscripcion.
     * @param id identificador de la suscripción
     * @param patient paciente 
     * @param createdAt fecha de creacion de la suscripción
     * @param paidAt fecha de pago de la suscripción
     * @param closedAt fecha de cierre de la suscripción
     * @param costType tipo de costo de la suscripción
     * @param type tipo de suscripción anual o mensual
     */
    public async registerSuscription(
        id : SubscriptionId,
        patient: Patient,
        createdAt: SubscriptionCreatedAt,
        paidAt : SubscriptionPaidAt,
        closedAt : SubscriptionClosedAt,
        costType: SuscriptionCostType,
        type: SuscriptionType
    ) {
        //Se verifica que el metodo de pago sea valido.
        const results = await this.payMethod.pay(costType);
        
        //Si no es asi se lanza una excepcion.
        if (!results) {
            throw new Error("No se pudo realizar el pago.");
        }
        //Se crea la suscripcion.
        this.subscription = Subscription.create(
            id,
            patient,
            type,
            costType,
            createdAt,
            paidAt,
            closedAt);

        //Se arega el evento a la lista de eventos.
        this.events.push(DomainEvent.create(
            "Registro de Suscripción",
            {
                owner: patient.FirstName.value + " " + patient.LastName.value,
                id: "Suscripción #" + id.value,
                cost: "$" + costType,
            }));
        
            //Se notifica a todos los observadores.
        this.notifyAll(this.events);

    } 

    
}
