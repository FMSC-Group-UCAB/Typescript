import {IValueObject} from '../interfaces/value-object.interface';

export class CaseFilePersonalBg implements IValueObject<CaseFilePersonalBg> {
    
    private personalBg: String;

    constructor(personalBg: String) {
        this.personalBg = personalBg;
    }

    equals(other: CaseFilePersonalBg): boolean {
        return this.personalBg == other.personalBg;
    }

    getPersonalBg(): String {
        return this.personalBg;
    }
}