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


export class RegisterPatientUseCase extends Observable {
    private events: DomainEvent[] = [];
    private patient: Patient;


    constructor(){
        super();
    }

    public async registerPatient(patientId: PatientId,
         patientFirstName: PatientFirstName,
         patientLastName: PatientLastName,
         patientBirthDate: PatientBirthDate,
         patientEmail: PatientEmail,
         patientPhoneNumber: PatientPhoneNumber,
         patientOcupation: PatientOccupation,
         holdType: HoldType){

        this.patient = Patient.create(patientId,
             patientFirstName, 
             patientLastName, 
             patientBirthDate, 
             patientEmail, 
             patientPhoneNumber,
             patientOcupation, 
             holdType);

        // Aqui es donde se registraria el paciente en el userRepository.
        console.log("Paciente registrado con exito.");

        // el owner deberia ser el administrador que registra el paciente, nos lo dara el framework mas tarde.
        this.events.push(DomainEvent.create(
            "Registro de paciente",{
                owner: this.patient.FirstName.ValueFirstName + " " + this.patient.LastName.ValueLastName
            }
        ));
        
        this.notifyAll(this.events);

    }

}