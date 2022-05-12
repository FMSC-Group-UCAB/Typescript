import {IValueObject} from '../interfaces/value-object.interface';


class CaseFileSaturation implements IValueObject<CaseFileSaturation> {

    _saturation: number;

    constructor(saturation: number) {
        this._saturation = saturation;
    }

    equals(other: CaseFileSaturation): boolean {
        return this._saturation == other._saturation;
    }

}