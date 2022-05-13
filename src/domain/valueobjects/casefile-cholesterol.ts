import {IValueObject} from '../interfaces/value-object.interface';

export class CaseFileCholesterol implements IValueObject<CaseFileCholesterol> {

    private cholesterol: number;

    constructor(cholesterol: number) {
        this.cholesterol = cholesterol;
    }

    equals(other: CaseFileCholesterol): boolean {
        return this.cholesterol == other.cholesterol;
    }

    getCholesterol(): number {
        return this.cholesterol;
    }
}