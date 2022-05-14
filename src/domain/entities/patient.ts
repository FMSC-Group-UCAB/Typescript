import { PatientBirthDate } from "../valueobjects/patient/patient-birth-date";
import { PatientEmail } from "../valueobjects/patient/patient-email";
import { PatientFirstName } from "../valueobjects/patient/patient-first-name";
import { PatientId } from "../valueobjects/patient/patient-id";
import { PatientLastName } from "../valueobjects/patient/patient-last-name";
import { PatientOccupation } from "../valueobjects/patient/patient-occupation";
import { PatientPhoneNumber } from "../valueobjects/patient/patient-phone-number";

/** Patient: Es una clase concreta utilizada para el manejo de los pacientes.*/
export class Patient {

    private constructor(
        private readonly id: PatientId,
        private firstName: PatientFirstName,
        private lastName: PatientLastName,
        private birthDate: PatientBirthDate,
        private email: PatientEmail,
        private phone: PatientPhoneNumber,
        private occupation: PatientOccupation,
    ) {
        this.validate();
    }

    //Getters
    get Id() { return this.id; }
    get FirstName() { return this.firstName; }
    get LastName() { return this.lastName; }
    get BirthDate() { return this.birthDate; }
    get Email() { return this.email; }
    get Phone() { return this.phone; }
    get Occupation() { return this.occupation; }

    /** Patron Factory.
     * @param id Identificador del paciente.
     * @param firstName Nombre del paciente.
     * @param lastName Apellido del paciente.
     * @param birthDate Fecha de nacimiento del paciente.
     * @param email Correo electrónico del paciente.
     * @param phone Número de teléfono del paciente.
     * @param occupation Ocupación del paciente.
     * @returns `Patient`*/
    public static create(id: PatientId, firstName: PatientFirstName, lastName: PatientLastName, birthDate: PatientBirthDate, email: PatientEmail, phone: PatientPhoneNumber, occupation: PatientOccupation): Patient {
        return new Patient(id, firstName, lastName, birthDate, email, phone, occupation);
    }

    /**
     * Permite actualizar los datos del paciente.
     * @param firstName Nombre del paciente.
     * @param lastName Apellido del paciente.
     * @param birthDate Fecha de nacimiento del paciente.
     * @param email Correo electrónico del paciente.
     * @param phone Número de teléfono del paciente.
     * @param occupation Ocupación del paciente. */
    public update(firstName: PatientFirstName, lastName: PatientLastName, birthDate: PatientBirthDate, email: PatientEmail, phone: PatientPhoneNumber, occupation: PatientOccupation) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.email = email;
        this.phone = phone;
        this.occupation = occupation;
        this.validate();
    }

    /** Valida los atributos de la entidad.*/
    private validate(): void {
        if (this.id == null || this.id == undefined) {
            throw new Error("El Id del paciente no puede ser null/undefined.");
        }

        if (this.firstName == null || this.firstName == undefined) {
            throw new Error("El nombre del paciente no puede ser null/undefined.");
        }

        if (this.lastName == null || this.lastName == undefined) {
            throw new Error("El apellido del paciente no puede ser null/undefined.");
        }

        if (this.birthDate == null || this.birthDate == undefined) {
            throw new Error("La fecha de nacimiento del paciente no puede ser null/undefined.");
        }

        if (this.email == null || this.email == undefined) {
            throw new Error("El correo electrónico del paciente no puede ser null/undefined.");
        }

        if (this.phone == null || this.phone == undefined) {
            throw new Error("El número de teléfono del paciente no puede ser null/undefined.");
        }

        if (this.occupation == null || this.occupation == undefined) {
            throw new Error("La ocupación del paciente no puede ser null/undefined.");
        }
    }

}