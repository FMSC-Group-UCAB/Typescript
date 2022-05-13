import {IValueObject} from '../interfaces/value-object.interface';

export class CaseFileId implements IValueObject<CaseFileId> {

    private id: number;

    constructor(id: number) {
        this.id = id;
    }

    equals(other: CaseFileId): boolean {
        return this.id == other.id;
    }

    getId(): number {
        return this.id;
    }
}