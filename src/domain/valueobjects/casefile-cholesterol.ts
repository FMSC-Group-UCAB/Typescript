import {IValueObject} from '../interfaces/value-object.interface';

export class CaseFileCholesterol implements IValueObject<CaseFileCholesterol> {
    
    private constructor(private readonly cholesterol: number) { }

    equals(other: CaseFileCholesterol): boolean {
        return this.cholesterol == other.cholesterol;
    }
    /**
     * Patron Factory.
     * @param cholesterol Colesterol del paciente
     * @returns `CaseFileCholesterol`*/
    static create(cholesterol: number): CaseFileCholesterol { 
        if (cholesterol == null || cholesterol == undefined) {
            throw new Error("El colesterol no puede ser undefined/null.");
        }

        return new CaseFileCholesterol(cholesterol); 
    }
    //Getter
    get Cholesterol(): number { return this.cholesterol;}
}