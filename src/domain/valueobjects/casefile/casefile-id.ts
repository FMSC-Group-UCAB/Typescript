import { IValueObject } from '../../interfaces/value-object.interface';

export class CaseFileId implements IValueObject<CaseFileId> {
    private constructor(private readonly id: number) { }

    //Getter
    get Id(): number { return this.id; }

    equals(other: CaseFileId): boolean {
        return this.id == other.id;
    }

    /**
     * Patron Factory.
     * @param id identificador de la historia medica
     * @returns `CaseFileId` */
    static create(id: number): CaseFileId {
        if (id == null || id == undefined) {
            throw new Error("El id no puede ser undefined/null.");
        }

        return new CaseFileId(id);
    }
}