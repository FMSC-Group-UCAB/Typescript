import { Subscription } from "../../domain/entities/subscription";
import { SuscriptionCostType } from "../../domain/enumerations/suscription-cost-type.enum";
import { SuscriptionType } from "../../domain/enumerations/suscription-type.enum";
import { IRepository } from "../../domain/interfaces/repository.interface";
import { PatientId } from "../../domain/valueobjects/patient/patient-id";
import { SubscriptionCreatedAt } from "../../domain/valueobjects/subscription/subscription-created-at";
import { SubscriptionId } from "../../domain/valueobjects/subscription/subscription-id";
import { SubscriptionPaidAt } from "../../domain/valueobjects/subscription/subscription-paid-at";
import { PatientRepository } from "./patient.repository";

export class SubscriptionRepository implements IRepository<Subscription>{
    async save(entity: Subscription): Promise<void> {
        console.log("Se guardo: ");
        console.log(entity);
    }

    async update(entity: Subscription): Promise<void> {
        console.log("Se actualizó: ");
        console.log(entity);
    }

    async findOne(items: Partial<Subscription>): Promise<Subscription> {
        const patient = await new PatientRepository().findOne({ Id: PatientId.create(1) });

        const suscription = Subscription.create(
            SubscriptionId.create(items.Id.value),
            patient,
            SuscriptionType.MONTHLY,
            SuscriptionCostType.BASIC,
            SubscriptionCreatedAt.create(new Date()),
            SubscriptionPaidAt.create(new Date(new Date().setMonth(new Date().getMonth() - 12))),
            null
        );

        return suscription;
    }

    async find(items: Partial<Subscription>): Promise<Subscription[]> {
        return [];
    }

    async delete(entity: Subscription): Promise<void> {
        console.log("Se eliminó: ");
        console.log(entity);
    }
}