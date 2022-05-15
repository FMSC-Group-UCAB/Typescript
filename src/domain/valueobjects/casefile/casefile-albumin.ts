import { IValueObject } from '../../interfaces/value-object.interface';
import { CaseFileRange } from './casefile-range';

export class CaseFileAlbumin implements IValueObject<CaseFileAlbumin> {
    private constructor(
        private readonly albumin: number,
        private readonly range: CaseFileRange,
    ) { }

    //getter
    get value() { return this.albumin; }
    get rangeValue() { return this.range; }

    equals(other: CaseFileAlbumin): boolean {
        return this.albumin == other.albumin;
    }

    /**
     * Patron Factory.
     * @param albumin Albumina del paciente
     * @param range Rango min/max de Albumina
     * @returns `CaseFileAlbumin` */
    static create(albumin: number, range: CaseFileRange): CaseFileAlbumin {
        if (albumin == null || albumin == undefined || range == null || range == undefined) {
            throw new Error("La albumina/rango no pueden ser undefined/null.");
        }
        return new CaseFileAlbumin(albumin, range);
    }
}