import { IValueObject } from '../../interfaces/value-object.interface';

export class CaseFileBloodPressure implements IValueObject<CaseFileBloodPressure> {
    private constructor(private readonly bloodPressure: String) { }

    //getter
    get BloodPressure(): String { return this.bloodPressure; }

    equals(other: CaseFileBloodPressure): boolean {
        return this.bloodPressure == other.bloodPressure;
    }

    /**
     * Patron Factory.
     * @param bloodPressure La presion arterial del paciente
     * @returns `CaseFileBloodPressure` */

    static create(bloodPressure: String): CaseFileBloodPressure {
        if (bloodPressure == null || bloodPressure == undefined) {
            throw new Error("La presion no puede ser undefined/null.");
        }
        return new CaseFileBloodPressure(bloodPressure);
    }
}