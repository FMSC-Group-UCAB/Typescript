import { Patient } from "../entities/patient";
import { Subscription } from "../entities/subscription";
import { HoldType } from "../enumerations/hold-type.enum";
import { SuscriptionType } from "../enumerations/suscription-type.enum";
import { ClosedSubscriptionException } from "../exceptions/closed-subscription.exception";
import { InsufficientPrivilegeException } from "../exceptions/insufficient-privileges.exception";
import { NotExpiredSubscriptionException } from "../exceptions/not-expired-subscription.exception";
import { PayMethodException } from "../exceptions/pay-method.exception";
import { SystemBlockedException } from "../exceptions/system-blocked.exception";
import { IClient } from "../interfaces/client.interface";
import { IPayMethod } from "../interfaces/pay-method.interface";
import { IRepository } from "../interfaces/repository.interface";
import { DomainEvent } from "../observables/domain-event";
import { Observable } from "../observables/observable";
import { SubscriptionId } from "../valueobjects/subscription/subscription-id";
import { SubscriptionPaidAt } from "../valueobjects/subscription/subscription-paid-at";

export class PaySubscriptionUsecase extends Observable {
    private events: DomainEvent[] = [];

    constructor(
        private readonly payMethod: IPayMethod,
        private readonly subscriptionRepository: IRepository<Subscription>,
        private readonly patientRepository: IRepository<Patient>
    ) {
        if (payMethod == null || payMethod == undefined || subscriptionRepository == null || subscriptionRepository == undefined || patientRepository == null || patientRepository == undefined) {
            throw Error("Fallo en inyecciones.");
        }

        super();
    }

    public async paySuscription(client: IClient, subscriptionId: SubscriptionId) {
        //Agregamos el evento.
        this.events.push(DomainEvent.create(
            "Pago de Suscripción Iniciado",
            {
                client,
            }
        ));

        if (!client.isPatient()) { throw InsufficientPrivilegeException.create(); }

        //Buscamos la suscripción desde su persitencia.
        const subscription = await this.subscriptionRepository.findOne({ Id: subscriptionId });

        if (subscription.Patient.HoldType == HoldType.BADUSE) {
            throw SystemBlockedException.create();
        }

        if (subscription.ClosedAt) {
            throw ClosedSubscriptionException.create();
        }

        //Calculamos la siguiente fecha de pago.
        const nexPaidAt = new Date((new Date(subscription.PaidAt.value)).setMonth(subscription.PaidAt.value.getMonth() + (subscription.Type == SuscriptionType.MONTHLY ? 1 : 12)));

        if (nexPaidAt > new Date()) {
            throw NotExpiredSubscriptionException.create();
        }

        //Se realiza el pago.
        const results = await this.payMethod.pay(subscription.Cost);

        if (!results) { throw PayMethodException.create(); }

        //Actualizamos la fecha de pago
        subscription.update(subscription.Type, subscription.Cost, SubscriptionPaidAt.create(new Date()), null);

        //Hacemos permanente los cambios
        await this.subscriptionRepository.save(subscription);

        //Agregamos el evento.
        this.events.push(DomainEvent.create(
            "Pago de Suscripción",
            {
                owner: subscription.Patient.FirstName.value + " " + subscription.Patient.LastName.value,
                id: "Suscripción #" + subscription.Id.value,
                cost: "$" + subscription.Cost,
            }
        ));

        //Buscamos el paciente asociado a la suscripción
        const patient = await this.patientRepository.findOne({ Id: subscription.Patient.Id });

        //Actualizamos holds
        patient.update(patient.FirstName, patient.LastName, patient.BirthDate, patient.Email, patient.Phone, patient.Occupation, HoldType.NONE);

        //Hacemos permanente los cambios
        await this.patientRepository.save(patient);

        //Agregamos el evento
        this.events.push(DomainEvent.create(
            "Hold Actualizado",
            {
                owner: patient.FirstName.value + " " + patient.LastName.value,
                id: "Paciente #" + patient.Id.value,
                hold: patient.HoldType.toString(),
            }
        ));

        this.notifyAll(this.events);
    }
}