import {IValueObject} from '../interfaces/value-object.interface';

export class DoctorId implements IValueObject<DoctorId> {

    _id: number;

    constructor(id: number) {
        this._id = id;
    }

    equals(other: DoctorId): boolean {
        return this._id == other._id;
    }
}