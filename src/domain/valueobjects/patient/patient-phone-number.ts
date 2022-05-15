import { IValueObject } from "src/domain/interfaces/value-object.interface";

/** PatientPhoneNumber: Es el Value Object del numero de telefono del paciente.*/
export class PatientPhoneNumber implements IValueObject<PatientPhoneNumber> {
    private constructor(private readonly phoneNumber: string) { }

    //Getter
    get ValuePhoneNumber() { return this.phoneNumber; }

    equals(other: PatientPhoneNumber): boolean {
        return this.phoneNumber == other.phoneNumber;
    }


    /**Patron Factory.
     * @param phoneNumber Numero de telefono del paciente.
     * @returns `PatientPhoneNumber`.*/
    public static create = (phoneNumber: string): PatientPhoneNumber => {
        if (phoneNumber == null || phoneNumber == undefined || phoneNumber == "") {
            throw new Error("El numero de telefono del paciente no puede ser nulo.");
        }

        return new PatientPhoneNumber(phoneNumber);
    }
}