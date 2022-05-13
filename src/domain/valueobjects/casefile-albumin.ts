import {IValueObject} from '../interfaces/value-object.interface';

 export class CaseFileAlbumin implements IValueObject<CaseFileAlbumin> {

    private albumin: number;

    constructor(albumin: number) {
        this.albumin = albumin;
    }

    equals(other: CaseFileAlbumin): boolean {
        return this.albumin == other.albumin;
    }

    getAlbumin(): number {
        return this.albumin;
    }
}