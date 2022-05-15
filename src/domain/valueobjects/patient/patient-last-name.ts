import { IValueObject } from "src/domain/interfaces/value-object.interface";

/** PatientLastName: Es el Value Object del apellido del paciente.*/
export class PatientLastName implements IValueObject<PatientLastName> {
    private constructor(private readonly lastName: string) { }

    //Getter
    get value() { return this.lastName; }

    equals(other: PatientLastName): boolean {
        return this.lastName == other.lastName;
    }

    /**Patron Factory.
     * @param lastName Apellido del paciente.
     * @returns `PatientLastName`.*/
    public static create(lastName: string): PatientLastName {
        if (lastName == null || lastName == undefined || lastName == "") {
            throw new Error("El apellido del paciente no puede ser nulo.");
        }

        return new PatientLastName(lastName);
    }
}