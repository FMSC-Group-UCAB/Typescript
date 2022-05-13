import {IValueObject} from '../interfaces/value-object.interface';

export class caseFileCholesterol implements IValueObject<caseFileCholesterol> {

    private cholesterol: number;

    constructor(cholesterol: number) {
        this.cholesterol = cholesterol;
    }

    equals(other: caseFileCholesterol): boolean {
        return this.cholesterol == other.cholesterol;
    }

    getCholesterol(): number {
        return this.cholesterol;
    }
}