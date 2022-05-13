import { CaseFile } from "./casefile";
import { CaseFileId } from "../valueobjects/casefile_id";
import { CaseFileBloodPressure } from "../valueobjects/casefile_bloodPressure";
import { CaseFileHeight } from "../valueobjects/casefile_height";
import { CaseFileWeight } from "../valueobjects/casefile_weight";
import { CaseFileHeartRate } from "../valueobjects/casefile_heartRate";
import { CaseFilePersonalBg } from "../valueobjects/casefile_personalBg";
import { CaseFileSaturation } from "../valueobjects/casefile_saturation";
import { SpecialtyType } from "../enumerations/specialty_type";


export class CaseFileCardiologist extends CaseFile {

    constructor(id: CaseFileId, bloodPressure: CaseFileBloodPressure, height: CaseFileHeight, weight: CaseFileWeight, heartRate: CaseFileHeartRate, personalBg: CaseFilePersonalBg, saturation: CaseFileSaturation) {
        super(id, bloodPressure, height, weight, heartRate, personalBg, saturation);
    }

    updateCaseFile(other: CaseFile): void {}

    fromSpecialty(specialty: SpecialtyType, object: any): CaseFile {
        //Placeholder para implementar
        return null;
    }
}