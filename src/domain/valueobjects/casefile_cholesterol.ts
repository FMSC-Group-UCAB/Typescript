import {IValueObject} from '../interfaces/value-object.interface';

export class caseFileCholesterol implements IValueObject<caseFileCholesterol> {

    _cholesterol: number;

    constructor(cholesterol: number) {
        this._cholesterol = cholesterol;
    }

    equals(other: caseFileCholesterol): boolean {
        return this._cholesterol == other._cholesterol;
    }
}