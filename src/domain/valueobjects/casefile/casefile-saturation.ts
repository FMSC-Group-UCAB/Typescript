import { IValueObject } from '../../interfaces/value-object.interface';

export class CaseFileSaturation implements IValueObject<CaseFileSaturation> {
    private constructor(private readonly saturation: number) { }

    //getter
    get Saturation(): number { return this.saturation; }

    equals(other: CaseFileSaturation): boolean {
        return this.saturation == other.saturation;
    }

    /**
     * Patron Factory.
     * @param saturation La saturacion del paciente
     * @returns `CaseFileSaturation` */
    public static create(saturation: number): CaseFileSaturation {
        if (saturation == null || saturation == undefined) {
            throw new Error("La saturacion no puede ser undefined/null.");
        }
        return new CaseFileSaturation(saturation);
    }
}