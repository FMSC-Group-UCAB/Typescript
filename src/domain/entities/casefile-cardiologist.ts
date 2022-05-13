import { CaseFile } from "./casefile";
import { CaseFileId } from "../valueobjects/casefile-id";
import { CaseFileBloodPressure } from "../valueobjects/casefile-bloodPressure";
import { CaseFileHeight } from "../valueobjects/casefile-height";
import { CaseFileWeight } from "../valueobjects/casefile-weight";
import { CaseFileHeartRate } from "../valueobjects/casefile-heart-rate";
import { CaseFilePersonalBg } from "../valueobjects/casefile-personal-bg";
import { CaseFileSaturation } from "../valueobjects/casefile-saturation";
import { SpecialtyType } from "../enumerations/specialty-type";


export class CaseFileCardiologist extends CaseFile {

    constructor(id: CaseFileId, bloodPressure: CaseFileBloodPressure, height: CaseFileHeight, weight: CaseFileWeight, heartRate: CaseFileHeartRate, personalBg: CaseFilePersonalBg, saturation: CaseFileSaturation) {
        super(id, bloodPressure, height, weight, heartRate, personalBg, saturation);
    }

    updateCaseFile(other: CaseFile): void { }

    fromSpecialty(specialty: SpecialtyType, object: any): CaseFile {
        //Placeholder para implementar
        return null;
    }
}