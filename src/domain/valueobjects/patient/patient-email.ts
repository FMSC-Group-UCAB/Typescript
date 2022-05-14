import { IValueObject } from "src/domain/interfaces/value-object.interface";

/** PatientEmail: Es el Value Object del email del paciente.*/
export class PatientEmail implements IValueObject<PatientEmail> {

    private constructor(private readonly email: string) { }

    //Getter
    get Value() { return this.email; }


    equals(other: PatientEmail): boolean {
        return this.email == other.email;
    }

    
    /**Patron Factory.
     * @param email Email del paciente.
     * @returns `PatientEmail`.*/
    public static create(email: string): PatientEmail {
        if (email == null || email == undefined || email == "") {
            throw new Error("El email del paciente no puede ser nulo.");
        }

        return new PatientEmail(email);
    }
}