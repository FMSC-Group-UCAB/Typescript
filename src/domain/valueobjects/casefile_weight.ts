import {IValueObject} from '../interfaces/value-object.interface';

export class CaseFileWeight implements IValueObject<CaseFileWeight> {

    _weight: number;

    constructor(weight: number) {
        this._weight = weight;
    }

    equals(other: CaseFileWeight): boolean {
        return this._weight == other._weight;
    }
}