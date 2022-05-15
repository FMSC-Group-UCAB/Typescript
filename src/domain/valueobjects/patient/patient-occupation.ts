import { IValueObject } from "src/domain/interfaces/value-object.interface";

/** PatientOccupation: Es el Value Object del ocupacion del paciente.*/
export class PatientOccupation implements IValueObject<PatientOccupation> {
    private constructor(private readonly occupation: string) { }

    //Getter
    get ValueOccupation() { return this.occupation; }

    equals(other: PatientOccupation): boolean {
        return this.occupation == other.occupation;
    }

    /**Patron Factory.
     * @param occupation Ocupacion del paciente.
     * @returns `PatientOccupation`.*/
    public static create(occupation: string): PatientOccupation {
        if (occupation == null || occupation == undefined || occupation == "") {
            throw new Error("La ocupacion del paciente no puede ser nula.");
        }

        return new PatientOccupation(occupation);
    }
}