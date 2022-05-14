import { IValueObject } from '../../interfaces/value-object.interface';

export class CaseFileAlbumin implements IValueObject<CaseFileAlbumin> {
    private constructor(private readonly albumin: number) { }

    //getter
    get Albumin(): number { return this.albumin; }

    equals(other: CaseFileAlbumin): boolean {
        return this.albumin == other.albumin;
    }

    /**
     * Patron Factory.
     * @param albumin Albumina del paciente
     * @returns `CaseFileAlbumin` */
    static create(albumin: number): CaseFileAlbumin {
        if (albumin == null || albumin == undefined) {
            throw new Error("La albumina no puede ser undefined/null.");
        }
        return new CaseFileAlbumin(albumin);
    }
}