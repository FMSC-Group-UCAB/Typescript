import { IValueObject } from '../../interfaces/value-object.interface';

export class CaseFileRange implements IValueObject<CaseFileRange> {
    private constructor(
        private readonly min: number,
        private readonly max: number
    ) { }

    //getter
    get minValue(): number { return this.min; }
    get maxValue(): number { return this.max; }

    equals(other: CaseFileRange): boolean {
        return this.min == other.min && this.max == other.max;
    }

    /**
     * Patron Factory.
     * @param min Valor minimo del rango
     * @param max Valor maximo del rango
     * @returns `CaseFileRange` */
    static create(min: number, max: number): CaseFileRange {
        if (min == null || min == undefined || max == null || max == undefined) {
            throw new Error("Los valores min/max no pueden ser undefined/null.");
        }
        return new CaseFileRange(min, max);
    }
}