import {IValueObject} from '../interfaces/value-object.interface';

 export class caseFileAlbumin implements IValueObject<caseFileAlbumin> {

    _albumin: number;

    constructor(albumin: number) {
        this._albumin = albumin;
    }

    equals(other: caseFileAlbumin): boolean {
        return this._albumin == other._albumin;
    }
}