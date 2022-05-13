import { CaseFile } from "./casefile";
import { CaseFileId } from "../valueobjects/casefile-id";
import { CaseFileBloodPressure } from "../valueobjects/casefile-bloodPressure";
import { CaseFileHeight } from "../valueobjects/casefile-height";
import { CaseFileWeight } from "../valueobjects/casefile-weight";
import { CaseFileHeartRate } from "../valueobjects/casefile-heart-rate";
import { CaseFilePersonalBg } from "../valueobjects/casefile-personal-bg";
import { CaseFileSaturation } from "../valueobjects/casefile-saturation";
import { SpecialtyType } from "../enumerations/specialty-type";
import { caseFileAlbumin } from "../valueobjects/casefile-albumin";
import { caseFileCholesterol } from "../valueobjects/casefile-cholesterol";


export class CaseFileCardiologist extends CaseFile {

    private albumin: caseFileAlbumin;
    private cholesterol: caseFileCholesterol;

    constructor(id: CaseFileId, bloodPressure: CaseFileBloodPressure, height: CaseFileHeight, weight: CaseFileWeight, heartRate: CaseFileHeartRate, personalBg: CaseFilePersonalBg, saturation: CaseFileSaturation) {
        super(id, bloodPressure, height, weight, heartRate, personalBg, saturation);
    }

    updateCaseFile(other: CaseFile): void { }

    fromSpecialty(specialty: SpecialtyType, object: any): CaseFile {
        //Placeholder para implementar
        return null;
    }

    getId(): CaseFileId { return this.getId(); }

    getBloodPressure(): CaseFileBloodPressure { return this.getBloodPressure(); }

    getHeight(): CaseFileHeight { return this.getHeight(); }

    getWeight(): CaseFileWeight { return this.getWeight(); }    

    getHeartRate(): CaseFileHeartRate { return this.getHeartRate(); }

    getPersonalBg(): CaseFilePersonalBg { return this.getPersonalBg(); }

    getSaturation(): CaseFileSaturation { return this.getSaturation(); }

    getAlbumin(): caseFileAlbumin { return this.albumin; }

    getCholesterol(): caseFileCholesterol { return this.cholesterol; }

}