import { IValueObject } from '../../interfaces/value-object.interface';

export class CaseFileHeight implements IValueObject<CaseFileHeight> {
    private constructor(private readonly height: number) { }

    //getter
    get Height(): number { return this.height; }

    equals(other: CaseFileHeight): boolean {
        return this.height == other.height;
    }

    /**
     * Patron Factory.
     * @param height La altura del paciente
     * @returns `CaseFileHeight` */
    static create(height: number): CaseFileHeight {
        if (height == null || height == undefined) {
            throw new Error("La altura no puede ser undefined/null.");
        }
        return new CaseFileHeight(height);
    }
}