import { IValueObject } from "src/domain/interfaces/value-object.interface";

/** PatientBirthDate: Es el Value Object de la fecha de nacimiento del paciente.*/
export class PatientBirthDate implements IValueObject<PatientBirthDate> {

    private constructor(private readonly birthDate: Date) { }

    //Getter
    get value() { return this.birthDate; }


    equals(other: PatientBirthDate): boolean {
        return this.birthDate == other.birthDate;
    }

    
    /**Patron Factory.
     * @param birthDate Fecha de nacimiento del paciente.
     * @returns `PatientBirthDate`.*/
    public static create(birthDate: Date): PatientBirthDate {
        if (birthDate == null || birthDate == undefined) {
            throw new Error("La fecha de nacimiento del paciente no puede ser nula.");
        }

        return new PatientBirthDate(birthDate);
    }
}