import { IValueObject } from '../../interfaces/value-object.interface';

export class CaseFileWeight implements IValueObject<CaseFileWeight> {
    private constructor(private readonly weight: number) { }

    //getter
    get Weight(): number { return this.weight; }

    equals(other: CaseFileWeight): boolean {
        return this.weight == other.weight;
    }

    /**
     * Patron Factory.
     * @param weight Peso del paciente
     * @returns `CaseFileWeight` */
    static create(weight: number): CaseFileWeight {
        if (weight == null || weight == undefined) {
            throw new Error("El peso no puede ser undefined/null.");
        }
        return new CaseFileWeight(weight);
    }
}