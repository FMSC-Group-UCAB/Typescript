import { CaseFileId } from '../valueobjects/casefile-id';
import { CaseFileBloodPressure } from '../valueobjects/casefile-bloodPressure';
import { CaseFileHeight } from '../valueobjects/casefile-height';
import { CaseFileWeight } from '../valueobjects/casefile-weight';
import { CaseFileHeartRate } from '../valueobjects/casefile-heart-rate';
import { CaseFilePersonalBg } from '../valueobjects/casefile-personal-bg';
import { CaseFileSaturation } from '../valueobjects/casefile-saturation';
import { SpecialtyType } from '../enumerations/specialty-type';

export abstract class CaseFile {
    private id: CaseFileId;
    private bloodPressure: CaseFileBloodPressure;
    private height: CaseFileHeight;
    private weight: CaseFileWeight;
    private heartRate: CaseFileHeartRate;
    private personalBg: CaseFilePersonalBg;
    private saturation: CaseFileSaturation;

    constructor(id: CaseFileId, bloodPressure: CaseFileBloodPressure, height: CaseFileHeight, weight: CaseFileWeight, heartRate: CaseFileHeartRate, personalBg: CaseFilePersonalBg, saturation: CaseFileSaturation) {
        this.id = id;
        this.bloodPressure = bloodPressure;
        this.height = height;
        this.weight = weight;
        this.heartRate = heartRate;
        this.personalBg = personalBg;
        this.saturation = saturation;
    }

    abstract updateCaseFile(other: CaseFile): void
    //El static no se puede poner por el abstract
    abstract fromSpecialty(specialty: SpecialtyType, object): CaseFile


    getId() { return this.id; }

    getBloodPressure(): CaseFileBloodPressure { return this.bloodPressure; }

    getHeight(): CaseFileHeight { return this.height; }

    getWeight(): CaseFileWeight { return this.weight; }    

    getHeartRate(): CaseFileHeartRate { return this.heartRate; }

    getPersonalBg(): CaseFilePersonalBg { return this.personalBg; }

    getSaturation(): CaseFileSaturation { return this.saturation; }
    
}