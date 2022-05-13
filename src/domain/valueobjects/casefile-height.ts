import {IValueObject} from '../interfaces/value-object.interface';

export class CaseFileHeight implements IValueObject<CaseFileHeight> {

    private height: number;

    constructor(height: number) {
        this.height = height;
    }

    equals(other: CaseFileHeight): boolean {
        return this.height == other.height;
    }

    getHeight(): number {
        return this.height;
    }
}