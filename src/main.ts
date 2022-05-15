import { Appointment } from "./domain/entities/appointment";
import { Doctor } from "./domain/entities/doctor";
import { Patient } from "./domain/entities/patient";
import { Subscription } from "./domain/entities/subscription";
import { AppointmentType } from "./domain/enumerations/appointment-type.enum";
import { HoldType } from "./domain/enumerations/hold-type.enum";
import { SpecialtyType } from "./domain/enumerations/specialty-type.enum";
import { StatusType } from "./domain/enumerations/status-type.enum";
import { SuscriptionCostType } from "./domain/enumerations/suscription-cost-type.enum";
import { SuscriptionType } from "./domain/enumerations/suscription-type.enum";
import { CasefileFactory } from "./domain/factories/casefile-factory";
import { IPayMethod } from "./domain/interfaces/pay-method.interface";
import { DomainEvent } from "./domain/observables/domain-event";
import { Observer } from "./domain/observables/observer.interface";
import { PaySubscriptionUsecase } from "./domain/usecases/pay-subscription-usecase";
import { AppointmentDate } from "./domain/valueobjects/appointment/appointment-date";
import { AppointmentId } from "./domain/valueobjects/appointment/appointment-id";
import { CaseFileBloodPressure } from "./domain/valueobjects/casefile/casefile-bloodPressure";
import { CaseFileHeartRate } from "./domain/valueobjects/casefile/casefile-heart-rate";
import { CaseFileHeight } from "./domain/valueobjects/casefile/casefile-height";
import { CaseFileId } from "./domain/valueobjects/casefile/casefile-id";
import { CaseFilePersonalBg } from "./domain/valueobjects/casefile/casefile-personal-bg";
import { CaseFileSaturation } from "./domain/valueobjects/casefile/casefile-saturation";
import { CaseFileWeight } from "./domain/valueobjects/casefile/casefile-weight";
import { DoctorFirstName } from "./domain/valueobjects/doctor/doctor-first-name";
import { DoctorId } from "./domain/valueobjects/doctor/doctor-id";
import { DoctorLastName } from "./domain/valueobjects/doctor/doctor-last-name";
import { DoctorLocation } from "./domain/valueobjects/doctor/doctor-location";
import { PatientBirthDate } from "./domain/valueobjects/patient/patient-birth-date";
import { PatientEmail } from "./domain/valueobjects/patient/patient-email";
import { PatientFirstName } from "./domain/valueobjects/patient/patient-first-name";
import { PatientId } from "./domain/valueobjects/patient/patient-id";
import { PatientLastName } from "./domain/valueobjects/patient/patient-last-name";
import { PatientOccupation } from "./domain/valueobjects/patient/patient-occupation";
import { PatientPhoneNumber } from "./domain/valueobjects/patient/patient-phone-number";
import { SubscriptionClosedAt } from "./domain/valueobjects/subscription/subscription-closed-at";
import { SubscriptionCreatedAt } from "./domain/valueobjects/subscription/subscription-created-at";
import { SubscriptionId } from "./domain/valueobjects/subscription/subscription-id";
import { SubscriptionPaidAt } from "./domain/valueobjects/subscription/subscription-paid-at";
import { RegisterPatientUseCase } from "./domain/usecases/register-patient-usecase";

export class NuevoObservador implements Observer {
    raise(events: DomainEvent[]) {
        events.forEach(event => {
            console.log(event);
        });
    }
}

export class PaypalPayMethod implements IPayMethod {
    async pay(amount: number): Promise<boolean> {
        await new Promise(resolve => { setTimeout(resolve, 2000) });
        return true;
    }
}

function suscriptionTest() {
    //Suscription test;
    const susId1 = SubscriptionId.create(5);
    const susId2 = SubscriptionId.create(4);
    console.log(susId1);
    console.log(susId2);
    console.log(susId1.equals(susId2));
    console.log(SubscriptionCreatedAt.create(new Date()));
    console.log(SubscriptionPaidAt.create(new Date()));
    console.log(SubscriptionClosedAt.create(new Date()));
}


async function main() {
    const doctor = Doctor.create(
        DoctorId.create(1),
        DoctorFirstName.create("Alberto"),
        DoctorLastName.create("Ruiz"),
        [SpecialtyType.CARDIOLOGY],
        DoctorLocation.create("15", "-52"),
        HoldType.NONE
    );

    const patient = Patient.create(
        PatientId.create(5),
        PatientFirstName.create("José"),
        PatientLastName.create("Perez"),
        PatientBirthDate.create(new Date()),
        PatientEmail.create("email@email.com"),
        PatientPhoneNumber.create("+58 (123)153-1532"),
        PatientOccupation.create("Trabajador"),
        HoldType.NONE
    );

    const appointment = Appointment.create(
        AppointmentId.create(1),
        patient,
        doctor,
        StatusType.PENDING,
        AppointmentDate.create(new Date()),
        AppointmentType.VIRTUAL,
        SpecialtyType.CARDIOLOGY
    );

    let suscription = Subscription.create(
        SubscriptionId.create(1),
        patient,
        SuscriptionType.MONTHLY,
        SuscriptionCostType.BASIC,
        SubscriptionCreatedAt.create(new Date()),
        SubscriptionPaidAt.create(new Date()),
        null
    );

    const casefile = CasefileFactory.fromSpecialty(
        SpecialtyType.CARDIOLOGY,
        CaseFileId.create(1),
        patient,
        doctor,
        CaseFileBloodPressure.create("Alta"),
        CaseFileHeight.create(45.25),
        CaseFileWeight.create(48.65),
        CaseFileHeartRate.create(79.65),
        CaseFilePersonalBg.create("Diabetes III"),
        CaseFileSaturation.create(48.56),
        {
            albumin: 45.68,
            cholesterol: 48.53
        }
    );

    console.log(suscription.PaidAt.value);

    console.log(".............................................................");

    const observador = new NuevoObservador();

    const paypalMethod = new PaypalPayMethod();

    const paySubscriptionUsecase = new PaySubscriptionUsecase(paypalMethod);

    paySubscriptionUsecase.add(observador);

    await paySubscriptionUsecase.paySuscription(suscription);

    console.log(".............................................................");

    console.log(suscription.PaidAt.Value);

    console.log(".............................................................");
    // caso de uso donde se registra el paciente

    const registerUseCase = new RegisterPatientUseCase();
    
    registerUseCase.registerPatient(
        PatientId.create(5),
        PatientFirstName.create("José"),
        PatientLastName.create("Perez"),
        PatientBirthDate.create(new Date()),
        PatientEmail.create("email@email.com"),
        PatientPhoneNumber.create("+58 (123)153-1532"),
        PatientOccupation.create("Trabajador"),
        HoldType.NONE);

    console.log(suscription.PaidAt.value)
}


main();