import {IValueObject} from '../interfaces/value-object.interface';

export class caseFileWeight implements IValueObject<caseFileWeight> {

    _weight: number;

    constructor(weight: number) {
        this._weight = weight;
    }

    equals(other: caseFileWeight): boolean {
        return this._weight == other._weight;
    }
}