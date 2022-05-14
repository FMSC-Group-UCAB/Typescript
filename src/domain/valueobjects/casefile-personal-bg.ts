import {IValueObject} from '../interfaces/value-object.interface';

export class CaseFilePersonalBg implements IValueObject<CaseFilePersonalBg> {
    

    private constructor(private readonly personalBg: String) {}

    equals(other: CaseFilePersonalBg): boolean {
        return this.personalBg == other.personalBg;
    }
     /**
      * Patron Factory.
      * @param personalBg Antecedentes personales del paciente
      * @returns `CaseFilePersonalBg` */
    static create(personalBg: String): CaseFilePersonalBg {
        if ( personalBg == null || personalBg == undefined) {
            throw new Error("La presion no puede ser undefined/null.");
        }
        return new CaseFilePersonalBg(personalBg);
    }
    //getter
    get PersonalBg(): String { return this.personalBg; }
}