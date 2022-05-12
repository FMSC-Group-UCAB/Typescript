import {IValueObject} from '../interfaces/value-object.interface';

export class CaseFileId implements IValueObject<CaseFileId> {

    _id: number;

    constructor(id: number) {
        this._id = id;
    }

    equals(other: CaseFileId): boolean {
        return this._id == other._id;
    }
}