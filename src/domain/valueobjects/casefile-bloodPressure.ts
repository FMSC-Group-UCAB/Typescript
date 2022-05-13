import {IValueObject} from '../interfaces/value-object.interface';

export class CaseFileBloodPressure implements IValueObject<CaseFileBloodPressure> {

    bloodPressure: String;

    constructor(bloodPressure: String) {
        this.bloodPressure = bloodPressure;
    }

    equals(other: CaseFileBloodPressure): boolean {
        return this.bloodPressure == other.bloodPressure;
    }
}