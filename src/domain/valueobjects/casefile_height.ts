import {IValueObject} from '../interfaces/value-object.interface';

export class CaseFileHeight implements IValueObject<CaseFileHeight> {

    _height: number;

    constructor(height: number) {
        this._height = height;
    }

    equals(other: CaseFileHeight): boolean {
        return this._height == other._height;
    }
}