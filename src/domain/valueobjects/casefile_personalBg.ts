import {IValueObject} from '../interfaces/value-object.interface';

class CaseFilePersonalBg implements IValueObject<CaseFilePersonalBg> {
    
    _personalBg: String;

    constructor(personalBg: String) {
        this._personalBg = personalBg;
    }

    equals(other: CaseFilePersonalBg): boolean {
        return this._personalBg == other._personalBg;
    }
}