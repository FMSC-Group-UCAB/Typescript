import { SpecialtyType } from '../enumerations/specialty-type.enum';
import { CaseFileBloodPressure } from '../valueobjects/casefile/casefile-bloodPressure';
import { CaseFileHeartRate } from '../valueobjects/casefile/casefile-heart-rate';
import { CaseFileHeight } from '../valueobjects/casefile/casefile-height';
import { CaseFileId } from '../valueobjects/casefile/casefile-id';
import { CaseFilePersonalBg } from '../valueobjects/casefile/casefile-personal-bg';
import { CaseFileSaturation } from '../valueobjects/casefile/casefile-saturation';
import { CaseFileWeight } from '../valueobjects/casefile/casefile-weight';
import { Doctor } from './doctor';
import { Patient } from './patient';

export abstract class CaseFile {
    private readonly id: CaseFileId;
    protected abstract readonly specialtyType: SpecialtyType;
    private readonly patient: Patient;
    private readonly doctor: Doctor;

    private bloodPressure: CaseFileBloodPressure;
    private height: CaseFileHeight;
    private weight: CaseFileWeight;
    private heartRate: CaseFileHeartRate;
    private personalBg: CaseFilePersonalBg;
    private saturation: CaseFileSaturation;

    //Getters
    get Id(): CaseFileId { return this.id; }
    get Patient() { return this.patient }
    get Doctor() { return this.doctor }
    get SpecialtyType(): SpecialtyType { return this.specialtyType; };
    get BloodPressure(): CaseFileBloodPressure { return this.bloodPressure; }
    get Height(): CaseFileHeight { return this.height; }
    get Weight(): CaseFileWeight { return this.weight; }
    get HeartRate(): CaseFileHeartRate { return this.heartRate; }
    get PersonalBg(): CaseFilePersonalBg { return this.personalBg; }
    get Saturation(): CaseFileSaturation { return this.saturation; }

    protected constructor(id: CaseFileId, patient: Patient, doctor: Doctor, bloodPressure: CaseFileBloodPressure, height: CaseFileHeight, weight: CaseFileWeight, heartRate: CaseFileHeartRate, personalBg: CaseFilePersonalBg, saturation: CaseFileSaturation) {
        this.id = id;
        this.patient = patient;
        this.doctor = doctor;
        this.bloodPressure = bloodPressure;
        this.height = height;
        this.weight = weight;
        this.heartRate = heartRate;
        this.personalBg = personalBg;
        this.saturation = saturation;
    }

    /**
     * Valida el estado de la entidad.*/
    protected validate(): void {
        if (this.Id == null || this.Id == undefined) { throw new Error("El identificador de la historia medica no puede ser nulo/undefined"); }

        if (this.patient == null || this.patient == undefined) { throw new Error("El paciente asociado a la cita no puede ser null/undefined."); }

        if (this.doctor == null || this.doctor == undefined) { throw new Error("El doctor asociado a la cita no puede ser null/undefined."); }

        if (this.BloodPressure == null || this.BloodPressure == undefined) { throw new Error("La presion arterial no puede ser nula/undefined"); }

        if (this.Height == null || this.Height == undefined) { throw new Error("La altura no puede ser nula/undefined"); }

        if (this.Weight == null || this.Weight == undefined) { throw new Error("El peso no puede ser nulo/undefined"); }

        if (this.HeartRate == null || this.HeartRate == undefined) { throw new Error("La frecuencia cardiaca no puede ser nula/undefined"); }

        if (this.PersonalBg == null || this.PersonalBg == undefined) { throw new Error("Los antecedentes personales no puede ser nulo/undefined"); }

        if (this.Saturation == null || this.Saturation == undefined) { throw new Error("La saturacion no puede ser nula/undefined"); }
    }

    /**
     * Método para actualizar los datos del casefile.
     * @param bloodPressure Presion arterial del paciente
     * @param height Altura del paciente
     * @param weight Peso del paciente
     * @param heartRate La frecuencia cardiaca del paciente
     * @param personalBg Antecedentes personales del paciente
     * @param saturation Saturacion de oxigeno del paciente
     * @param extra Información extra necesaria para el tipo de casefile.*/
    public update(bloodPressure: CaseFileBloodPressure, height: CaseFileHeight, weight: CaseFileWeight, heartRate: CaseFileHeartRate, personalBg: CaseFilePersonalBg, saturation: CaseFileSaturation, extras: any): void {
        this.bloodPressure = bloodPressure;
        this.height = height;
        this.weight = weight;
        this.heartRate = heartRate;
        this.personalBg = personalBg;
        this.saturation = saturation;

        this.updateExtras(extras);
    }

    /**
     * Método para actualizar datos extras de cada casefile.
     * @param extras Información extra necesaria para el tipo de casefile.*/
    protected abstract updateExtras(extras: any): void;
}