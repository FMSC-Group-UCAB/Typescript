import { Patient } from "../../domain/entities/patient";
import { HoldType } from "../../domain/enumerations/hold-type.enum";
import { IRepository } from "../../domain/interfaces/repository.interface";
import { PatientBirthDate } from "../../domain/valueobjects/patient/patient-birth-date";
import { PatientEmail } from "../../domain/valueobjects/patient/patient-email";
import { PatientFirstName } from "../../domain/valueobjects/patient/patient-first-name";
import { PatientId } from "../../domain/valueobjects/patient/patient-id";
import { PatientLastName } from "../../domain/valueobjects/patient/patient-last-name";
import { PatientOccupation } from "../../domain/valueobjects/patient/patient-occupation";
import { PatientPhoneNumber } from "../../domain/valueobjects/patient/patient-phone-number";

export class PatientRepository implements IRepository<Patient>{
    async save(entity: Patient): Promise<void> {
        console.log("Se guardo: ");
        console.log(entity);
    }

    async update(entity: Patient): Promise<void> {
        console.log("Se actualizó: ");
        console.log(entity);
    }

    async findOne(items: Partial<Patient>): Promise<Patient> {
        const patient = Patient.create(
            PatientId.create(items.Id.value),
            PatientFirstName.create("José"),
            PatientLastName.create("Perez"),
            PatientBirthDate.create(new Date()),
            PatientEmail.create("email@email.com"),
            PatientPhoneNumber.create("+58 (123)153-1532"),
            PatientOccupation.create("Trabajador"),
            HoldType.NONE
        );

        return patient;
    }

    async find(items: Partial<Patient>): Promise<Patient[]> {
        return [];
    }

    async delete(entity: Patient): Promise<void> {
        console.log("Se eliminó: ");
        console.log(entity);
    }
}