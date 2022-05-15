import { IValueObject } from '../../interfaces/value-object.interface';
import { CaseFileRange } from './casefile-range';

export class CaseFileCholesterol implements IValueObject<CaseFileCholesterol> {
    private constructor(
        private readonly cholesterol: number,
        private readonly range: CaseFileRange,
    ) { }

    //Getter
    get value() { return this.cholesterol; }
    get rangeValue() { return this.range; }

    equals(other: CaseFileCholesterol): boolean {
        return this.cholesterol == other.cholesterol;
    }

    /**
     * Patron Factory.
     * @param cholesterol Colesterol del paciente
     * @param range Rango min/max de Colesterol
     * @returns `CaseFileCholesterol`*/
    static create(cholesterol: number, range: CaseFileRange): CaseFileCholesterol {
        if (cholesterol == null || cholesterol == undefined || range == null || range == undefined) {
            throw new Error("El colesterol/rango no pueden ser undefined/null.");
        }

        return new CaseFileCholesterol(cholesterol, range);
    }
}