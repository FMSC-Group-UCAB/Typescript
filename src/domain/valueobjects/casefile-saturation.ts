import {IValueObject} from '../interfaces/value-object.interface';


export class CaseFileSaturation implements IValueObject<CaseFileSaturation> {

    private saturation: number;

    constructor(saturation: number) {
        this.saturation = saturation;
    }

    equals(other: CaseFileSaturation): boolean {
        return this.saturation == other.saturation;
    }

    getSaturation(): number {
        return this.saturation;
    }
}