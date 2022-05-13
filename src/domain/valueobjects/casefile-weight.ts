import { IValueObject } from '../interfaces/value-object.interface';

export class CaseFileWeight implements IValueObject<CaseFileWeight> {

    private weight: number;

    constructor(weight: number) {
        this.weight = weight;
    }

    equals(other: CaseFileWeight): boolean {
        return this.weight == other.weight;
    }

    getWeight(): number {
        return this.weight;
    }
}