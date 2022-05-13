import {IValueObject} from '../interfaces/value-object.interface';

export class DoctorLastName implements IValueObject<DoctorLastName> {

    _lastName: string;

    constructor(lastName: string) {
        this._lastName = lastName;
    }

    equals(other: DoctorLastName): boolean {
        return this._lastName == other._lastName;
    }
}