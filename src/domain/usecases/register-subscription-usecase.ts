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
import { IRepository } from "../interfaces/repository.interface";
import { IClient } from "../interfaces/client.interface";
import { PatientId } from "../valueobjects/patient/patient-id";
import { InsufficientPrivilegeException } from "../exceptions/insufficient-privileges.exception";
import { HoldType } from "../enumerations/hold-type.enum";
import { SystemBlockedException } from "../exceptions/system-blocked.exception";
import { PayMethodException } from "../exceptions/pay-method.exception";

export class RegisterSubscriptionUseCase extends Observable {

    private events: DomainEvent[] = [];

    constructor(private readonly payMethod: IPayMethod, private readonly subscriptionRepository: IRepository<Subscription>, private readonly patientRepository: IRepository<Patient>) {
        super();
    }

    /**
     * Caso de uso que registra una suscripcion.
     * @param patient paciente 
     * @param createdAt fecha de creacion de la suscripción
     * @param paidAt fecha de pago de la suscripción
     * @param closedAt fecha de cierre de la suscripción
     * @param costType tipo de costo de la suscripción
     * @param type tipo de suscripción anual o mensual */
    public async registerSuscription(
        client: IClient,
        patientId: PatientId,
        type: SuscriptionType,
        costType: SuscriptionCostType
    ) {
        this.events.push(DomainEvent.create(
            "Registro de Suscripción Iniciado",
            {
                client
            }
        ));

        //Verificamos que sea paciente
        if (!client.isPatient()) { throw InsufficientPrivilegeException.create(); }

        //Buscamos los datos del paciente
        const patient = await this.patientRepository.findOne({ Id: patientId });

        //Verificamos que no este bloqueado el paciente
        if (patient.HoldType == HoldType.BADUSE) { throw SystemBlockedException.create(); }

        //Se procede a realizar el pago
        const results = await this.payMethod.pay(costType);

        //Si no es asi se lanza una excepcion.
        if (!results) { throw PayMethodException.create(); }

        //Se crea la suscripcion.
        const subscription = Subscription.create(
            SubscriptionId.create(1),
            patient,
            type,
            costType,
            SubscriptionCreatedAt.create(new Date()),
            SubscriptionPaidAt.create(new Date()),
            null
        );

        //Hacemos permanente los cambios
        await this.subscriptionRepository.save(subscription);

        //Se arega el evento a la lista de eventos.
        this.events.push(DomainEvent.create(
            "Registro de Suscripción",
            {
                owner: patient.FirstName.value + " " + patient.LastName.value,
                id: "Suscripción #" + subscription.Id.value,
                cost: "$" + costType,
            }
        ));

        //Se notifica a todos los observadores.
        this.notifyAll(this.events);
    }
}
