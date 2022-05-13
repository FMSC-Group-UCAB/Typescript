import {IValueObject} from '../interfaces/value-object.interface';

export class DoctorFirstName implements IValueObject<DoctorFirstName> {

    _firstName: string;

    constructor(firstName: string) {
        this._firstName = firstName;
    }

    equals(other: DoctorFirstName): boolean {
        return this._firstName == other._firstName;
    }
}