import { Appointment } from "./domain/entities/appointment";
import { Doctor } from "./domain/entities/doctor";
import { Patient } from "./domain/entities/patient";
import { Suscription } from "./domain/entities/suscription";
import { AppointmentType } from "./domain/enumerations/appointment-type.enum";
import { HoldType } from "./domain/enumerations/hold-type.enum";
import { SpecialtyType } from "./domain/enumerations/specialty-type.enum";
import { StatusType } from "./domain/enumerations/status-type.enum";
import { SuscriptionCostType } from "./domain/enumerations/suscription-cost-type.enum";
import { SuscriptionType } from "./domain/enumerations/suscription-type.enum";
import { CasefileFactory } from "./domain/factories/casefile-factory";
import { DomainEvent } from "./domain/observables/domain-event";
import { Observable } from "./domain/observables/observable";
import { Observer } from "./domain/observables/observer.interface";
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
import { SuscriptionClosedAt } from "./domain/valueobjects/suscription/suscription-closed-at";
import { SuscriptionCreatedAt } from "./domain/valueobjects/suscription/suscription-created-at";
import { SuscriptionId } from "./domain/valueobjects/suscription/suscription-id";
import { SuscriptionPaidAt } from "./domain/valueobjects/suscription/suscription-paid-at";

export class NuevoObservable extends Observable {
    async run() {
        let events: DomainEvent[] = [];
        for (let i = 0; i < 3; i++) {
            await new Promise(resolve => { setTimeout(resolve, 1000 + (i * 500)) });
            events.push(DomainEvent.create("CambioNombre", { iteración: i + 1 }));
            console.log("Event added: " + (i + 1));
        }
        await new Promise(resolve => { setTimeout(resolve, 1000) });
        console.log("Sending...");
        await new Promise(resolve => { setTimeout(resolve, 1000) });
        this.notifyAll(events);
    }
}

export class NuevoObservador implements Observer {
    raise(events: DomainEvent[]) {
        events.forEach(event => {
            console.log(event);
        });
    }
}

function suscriptionTest() {
    //Suscription test;
    const susId1 = SuscriptionId.create(5);
    const susId2 = SuscriptionId.create(4);
    console.log(susId1);
    console.log(susId2);
    console.log(susId1.equals(susId2));
    console.log(SuscriptionCreatedAt.create(new Date()));
    console.log(SuscriptionPaidAt.create(new Date()));
    console.log(SuscriptionClosedAt.create(new Date()));
}

async function main() {
    //Observable Test
    const observable = new NuevoObservable();
    const observador = new NuevoObservador();
    observable.add(observador);
    //await observable.run();

    //suscriptionTest();

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

    const suscription = Suscription.create(
        SuscriptionId.create(1),
        patient,
        SuscriptionType.MONTHLY,
        SuscriptionCostType.BASIC,
        SuscriptionCreatedAt.create(new Date()),
        SuscriptionPaidAt.create(new Date()),
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

    console.log(suscription);
    console.log(appointment);
    console.log(casefile);
}


main();