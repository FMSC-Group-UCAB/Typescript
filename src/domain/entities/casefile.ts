import {CaseFileId} from '../valueobjects/casefile_id';
import {CaseFileBloodPressure} from '../valueobjects/casefile_bloodPressure';
import {CaseFileHeight} from '../valueobjects/casefile_height';
import {CaseFileWeight} from '../valueobjects/casefile_weight';
import {CaseFileHeartRate} from '../valueobjects/casefile_heartRate';
import {CaseFilePersonalBg} from '../valueobjects/casefile_personalBg';
import {CaseFileSaturation} from '../valueobjects/casefile_saturation';
import {SpecialtyType} from '../enumerations/specialty-type.enum';

export abstract class CaseFile {
    _id: CaseFileId;
    _bloodPressure: CaseFileBloodPressure;
    _height: CaseFileHeight;
    _weight: CaseFileWeight;
    _heartRate: CaseFileHeartRate;
    _personalBg: CaseFilePersonalBg;
    _saturation: CaseFileSaturation;

    constructor(id: CaseFileId, bloodPressure: CaseFileBloodPressure, height: CaseFileHeight, weight: CaseFileWeight, heartRate: CaseFileHeartRate, personalBg: CaseFilePersonalBg, saturation: CaseFileSaturation) {
        this._id = id;
        this._bloodPressure = bloodPressure;
        this._height = height;
        this._weight = weight;
        this._heartRate = heartRate;
        this._personalBg = personalBg;
        this._saturation = saturation;
    }

    abstract updateCaseFile(other: CaseFile): void
    //El static no se puede poner por el abstract
    abstract  fromSpecialty(specialty: SpecialtyType, object): CaseFile
}