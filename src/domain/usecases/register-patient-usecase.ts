import { Patient } from "../entities/patient";
import { PatientId } from "../valueobjects/patient/patient-id";
import { PatientFirstName } from "../valueobjects/patient/patient-first-name";
import { PatientLastName } from "../valueobjects/patient/patient-last-name";
import { PatientBirthDate } from "../valueobjects/patient/patient-birth-date";
import { PatientEmail } from "../valueobjects/patient/patient-email";
import { PatientPhoneNumber } from "../valueobjects/patient/patient-phone-number";
import { PatientOccupation } from "../valueobjects/patient/patient-occupation";
import { HoldType } from "../enumerations/hold-type.enum";
import { DomainEvent } from "../observables/domain-event"
import { Observable } from "../observables/observable";
import { IRepository } from "../interfaces/repository.interface";


export class RegisterPatientUseCase extends Observable {
    private events: DomainEvent[] = [];

    constructor(private readonly patientRepository: IRepository<Patient>) {
        super();
    }

    public async registerPatient(
        patientFirstName: PatientFirstName,
        patientLastName: PatientLastName,
        patientBirthDate: PatientBirthDate,
        patientEmail: PatientEmail,
        patientPhoneNumber: PatientPhoneNumber,
        patientOcupation: PatientOccupation,
        holdType: HoldType
    ) {
        this.events.push(DomainEvent.create(
            "Registro de paciente Iniciado",
            {}
        ));

        const patient = Patient.create(
            PatientId.create(1),
            patientFirstName,
            patientLastName,
            patientBirthDate,
            patientEmail,
            patientPhoneNumber,
            patientOcupation,
            holdType = HoldType.EXPIREDSUBSCRIPTION
        );

        //Hacemos permanente al paciente.
        await this.patientRepository.save(patient);

        //Emitimos los eventos.
        this.events.push(DomainEvent.create(
            "Registro de paciente",
            {
                owner: patient.FirstName.value + " " + patient.LastName.value
            }
        ));

        //Notificamos los observadores
        this.notifyAll(this.events);
    }

}