import { CaseFileId } from '../valueobjects/casefile-id';
import { CaseFileBloodPressure } from '../valueobjects/casefile-bloodPressure';
import { CaseFileHeight } from '../valueobjects/casefile-height';
import { CaseFileWeight } from '../valueobjects/casefile-weight';
import { CaseFileHeartRate } from '../valueobjects/casefile-heart-rate';
import { CaseFilePersonalBg } from '../valueobjects/casefile-personal-bg';
import { CaseFileSaturation } from '../valueobjects/casefile-saturation';
import { SpecialtyType } from '../enumerations/specialty-type';

export abstract class CaseFile {
    protected id: CaseFileId;
    protected bloodPressure: CaseFileBloodPressure;
    protected height: CaseFileHeight;
    protected weight: CaseFileWeight;
    protected heartRate: CaseFileHeartRate;
    protected personalBg: CaseFilePersonalBg;
    protected saturation: CaseFileSaturation;

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


    //setters

    set Id(value: CaseFileId) { this.id = value; }

    set BloodPressure(value: CaseFileBloodPressure) { this.bloodPressure = value; }

    set Height(value: CaseFileHeight) { this.height = value; }

    set Weight(value: CaseFileWeight) { this.weight = value; }

    set HeartRate(value: CaseFileHeartRate) { this.heartRate = value; }

    set PersonalBg(value: CaseFilePersonalBg) { this.personalBg = value; }

    set Saturation(value: CaseFileSaturation) { this.saturation = value; }


    //getters
    
    get Id() { return this.id; }

    get BloodPressure(): CaseFileBloodPressure { return this.bloodPressure; }

    get Height(): CaseFileHeight { return this.height; }

    get Weight(): CaseFileWeight { return this.weight; }    

    get HeartRate(): CaseFileHeartRate { return this.heartRate; }

    get PersonalBg(): CaseFilePersonalBg { return this.personalBg; }

    get Saturation(): CaseFileSaturation { return this.saturation; }
    
}