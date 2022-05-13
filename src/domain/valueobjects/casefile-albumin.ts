import {IValueObject} from '../interfaces/value-object.interface';

 export class caseFileAlbumin implements IValueObject<caseFileAlbumin> {

    private albumin: number;

    constructor(albumin: number) {
        this.albumin = albumin;
    }

    equals(other: caseFileAlbumin): boolean {
        return this.albumin == other.albumin;
    }

    getAlbumin(): number {
        return this.albumin;
    }
}