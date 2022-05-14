import { CaseFile } from "./casefile";
import { CaseFileId } from "../valueobjects/casefile-id";
import { CaseFileBloodPressure } from "../valueobjects/casefile-bloodPressure";
import { CaseFileHeight } from "../valueobjects/casefile-height";
import { CaseFileWeight } from "../valueobjects/casefile-weight";
import { CaseFileHeartRate } from "../valueobjects/casefile-heart-rate";
import { CaseFilePersonalBg } from "../valueobjects/casefile-personal-bg";
import { CaseFileSaturation } from "../valueobjects/casefile-saturation";
import { SpecialtyType } from "../enumerations/specialty-type";
import { CaseFileAlbumin } from "../valueobjects/casefile-albumin";
import { CaseFileCholesterol } from "../valueobjects/casefile-cholesterol";


export class CaseFileCardiologist extends CaseFile {

    private constructor(
        protected id: CaseFileId,
        protected bloodPressure: CaseFileBloodPressure,
        protected height: CaseFileHeight,
        protected weight: CaseFileWeight,
        protected heartRate: CaseFileHeartRate,
        protected personalBg: CaseFilePersonalBg,
        protected saturation: CaseFileSaturation,
        protected albumin: CaseFileAlbumin,
        protected cholesterol: CaseFileCholesterol,
    ) {
        super(id, bloodPressure, height, weight, heartRate, personalBg, saturation);
        this.albumin = albumin;
        this.cholesterol = cholesterol;
        this.validate();
    }
    
    //Setters

    set Albumin(albumin: CaseFileAlbumin) { this.albumin = albumin; }

    set Cholesterol(cholesterol: CaseFileCholesterol) { this.cholesterol = cholesterol; }

    //Getters
    get Albumin(): CaseFileAlbumin { return this.albumin; }
    
    get Cholesterol(): CaseFileCholesterol { return this.cholesterol; }


    /**
     * Patron Factory.
     * @param id Identificador de la historia medica
     * @param bloodPressure Presion arterial del paciente
     * @param height Altura del paciente
     * @param weight Peso del paciente
     * @param heartRate La frecuencia cardiaca del paciente
     * @param personalBg Antecedentes personales del paciente
     * @param saturation Saturacion de oxigeno del paciente
     * @param albumin Albumina del paciente
     * @param cholesterol Colesterol del paciente
     */
    public static create(id: CaseFileId, bloodPressure: CaseFileBloodPressure, height: CaseFileHeight, weight: CaseFileWeight, heartRate: CaseFileHeartRate, personalBg: CaseFilePersonalBg, saturation: CaseFileSaturation, albumin: CaseFileAlbumin, cholesterol: CaseFileCholesterol): CaseFileCardiologist {
        return new CaseFileCardiologist(id, bloodPressure, height, weight, heartRate, personalBg, saturation, albumin, cholesterol);
    }
    
    //Metodos de la clase
    updateCaseFile(other: CaseFile): void { }

    fromSpecialty(specialty: SpecialtyType, object: any): CaseFile {
        //Placeholder para implementar
        return null;
    }

    validate(): void {
        //Placeholder para implementar
        if ( this.Id == null || this.Id == undefined){ throw new Error("El identificador de la historia medica no puede ser nulo/undefined"); }

        if ( this.BloodPressure == null || this.BloodPressure == undefined){ throw new Error("La presion arterial no puede ser nula/undefined"); }

        if ( this.Height == null || this.Height == undefined){ throw new Error("La altura no puede ser nula/undefined"); }

        if ( this.Weight == null || this.Weight == undefined){ throw new Error("El peso no puede ser nulo/undefined"); }

        if ( this.HeartRate == null || this.HeartRate == undefined){ throw new Error("La frecuencia cardiaca no puede ser nula/undefined"); }

        if ( this.PersonalBg == null || this.PersonalBg == undefined){ throw new Error("Los antecedentes personales no puede ser nulo/undefined"); }

        if ( this.Saturation == null || this.Saturation == undefined){ throw new Error("La saturacion no puede ser nula/undefined"); }

        if ( this.Albumin == null || this.Albumin == undefined){ throw new Error("La albumina no puede ser nula/undefined"); }

        if ( this.Cholesterol == null || this.Cholesterol == undefined){ throw new Error("El colesterol no puede ser nulo/undefined"); }
    }


}