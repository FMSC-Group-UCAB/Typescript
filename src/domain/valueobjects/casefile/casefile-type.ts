import { IValueObject } from '../../interfaces/value-object.interface';

export class CaseFileType implements IValueObject<CaseFileType> {
    private constructor(private readonly type: number) { }

    //getter
    get Value(): number { return this.type; }

    equals(other: CaseFileType): boolean {
        return this.type == other.type;
    }

    /**
     * Patron Factory.
     * @param type Tipo de Casefile.
     * @returns `CaseFileType` */
    public static create(type: number): CaseFileType {
        if (type == null || type == undefined || type < 0) {
            throw new Error("El tipo no puede ser undefined/null.");
        }
        return new CaseFileType(type);
    }
}