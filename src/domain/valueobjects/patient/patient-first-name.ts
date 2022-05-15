import { IValueObject } from "src/domain/interfaces/value-object.interface";

/** PatientFirstName: Es el Value Object del nombre del paciente.*/
export class PatientFirstName implements IValueObject<PatientFirstName> {
    private constructor(private readonly firstName: string) { }

    //Getter
    get value() { return this.firstName; }

    equals(other: PatientFirstName): boolean {
        return this.firstName == other.firstName;
    }

    /**Patron Factory.
     * @param firstName Nombre del paciente.
     * @returns `PatientFirstName`.*/
    public static create(firstName: string): PatientFirstName {
        if (firstName == null || firstName == undefined || firstName == "") {
            throw new Error("El nombre del paciente no puede ser nulo.");
        }

        return new PatientFirstName(firstName);
    }
}