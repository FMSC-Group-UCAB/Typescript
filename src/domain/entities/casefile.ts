import { SpecialtyType } from '../enumerations/specialty-type.enum';
import { CaseFileBloodPressure } from '../valueobjects/casefile/casefile-bloodPressure';
import { CaseFileHeartRate } from '../valueobjects/casefile/casefile-heart-rate';
import { CaseFileHeight } from '../valueobjects/casefile/casefile-height';
import { CaseFileId } from '../valueobjects/casefile/casefile-id';
import { CaseFilePersonalBg } from '../valueobjects/casefile/casefile-personal-bg';
import { CaseFileSaturation } from '../valueobjects/casefile/casefile-saturation';
import { CaseFileWeight } from '../valueobjects/casefile/casefile-weight';
import { CaseFileCardiologist } from './casefile-cardiologist';
import { CaseFileCholesterol } from "../valueobjects/casefile/casefile-cholesterol";
import { CaseFileAlbumin } from '../valueobjects/casefile/casefile-albumin';
import { CaseFileType } from '../valueobjects/casefile/casefile-type';

export abstract class CaseFile {
    private readonly id: CaseFileId;
    protected abstract readonly type: CaseFileType;
    protected abstract readonly specialtyType: SpecialtyType;

    private bloodPressure: CaseFileBloodPressure;
    private height: CaseFileHeight;
    private weight: CaseFileWeight;
    private heartRate: CaseFileHeartRate;
    private personalBg: CaseFilePersonalBg;
    private saturation: CaseFileSaturation;

    //Setters
    set BloodPressure(value: CaseFileBloodPressure) { this.bloodPressure = value; }
    set Height(value: CaseFileHeight) { this.height = value; }
    set Weight(value: CaseFileWeight) { this.weight = value; }
    set HeartRate(value: CaseFileHeartRate) { this.heartRate = value; }
    set PersonalBg(value: CaseFilePersonalBg) { this.personalBg = value; }
    set Saturation(value: CaseFileSaturation) { this.saturation = value; }

    //Getters
    get Id(): CaseFileId { return this.id; }
    get Type(): CaseFileType { return this.type; };
    get SpecialtyType(): SpecialtyType { return this.specialtyType; };
    get BloodPressure(): CaseFileBloodPressure { return this.bloodPressure; }
    get Height(): CaseFileHeight { return this.height; }
    get Weight(): CaseFileWeight { return this.weight; }
    get HeartRate(): CaseFileHeartRate { return this.heartRate; }
    get PersonalBg(): CaseFilePersonalBg { return this.personalBg; }
    get Saturation(): CaseFileSaturation { return this.saturation; }

    protected constructor(id: CaseFileId, bloodPressure: CaseFileBloodPressure, height: CaseFileHeight, weight: CaseFileWeight, heartRate: CaseFileHeartRate, personalBg: CaseFilePersonalBg, saturation: CaseFileSaturation) {
        this.id = id;
        this.bloodPressure = bloodPressure;
        this.height = height;
        this.weight = weight;
        this.heartRate = heartRate;
        this.personalBg = personalBg;
        this.saturation = saturation;
        this.validate();
    }

    /**
     * Valida el estado de la entidad.*/
    protected validate(): void {
        if (this.Id == null || this.Id == undefined) { throw new Error("El identificador de la historia medica no puede ser nulo/undefined"); }

        if (this.BloodPressure == null || this.BloodPressure == undefined) { throw new Error("La presion arterial no puede ser nula/undefined"); }

        if (this.Height == null || this.Height == undefined) { throw new Error("La altura no puede ser nula/undefined"); }

        if (this.Weight == null || this.Weight == undefined) { throw new Error("El peso no puede ser nulo/undefined"); }

        if (this.HeartRate == null || this.HeartRate == undefined) { throw new Error("La frecuencia cardiaca no puede ser nula/undefined"); }

        if (this.PersonalBg == null || this.PersonalBg == undefined) { throw new Error("Los antecedentes personales no puede ser nulo/undefined"); }

        if (this.Saturation == null || this.Saturation == undefined) { throw new Error("La saturacion no puede ser nula/undefined"); }
    }

    /**
     * Patron Factory para generar un nuevo Casefile en función de la especialidad y el tipo.
     * @param id Identificador de la historia medica
     * @param type Tipo de casefile.
     * @param specialtyType Especialidad del casefile.
     * @param bloodPressure Presion arterial del paciente
     * @param height Altura del paciente
     * @param weight Peso del paciente
     * @param heartRate La frecuencia cardiaca del paciente
     * @param personalBg Antecedentes personales del paciente
     * @param saturation Saturacion de oxigeno del paciente
     * @param extra Información extra necesaria para el tipo de casefile.
     * @returns `Casefile` */
    public static fromSpecialty(id: CaseFileId, type: CaseFileType, specialtyType: SpecialtyType, bloodPressure: CaseFileBloodPressure, height: CaseFileHeight, weight: CaseFileWeight, heartRate: CaseFileHeartRate, personalBg: CaseFilePersonalBg, saturation: CaseFileSaturation, extra: any): CaseFile {
        switch (specialtyType) {
            case SpecialtyType.CARDIOLOGY:
                switch (type.Value) {
                    case 0:
                        return CaseFileCardiologist.create(id, bloodPressure, height, weight, heartRate, personalBg, saturation, CaseFileAlbumin.create(extra['albumin']), CaseFileCholesterol.create(extra['cholesterol']));
                    default:
                        throw new Error('Type inválida.');
                }
            case SpecialtyType.OPHTHALMOLOGY:
                switch (type.Value) {
                    case 0:
                        return null;
                    default:
                        throw new Error('Type inválida.');
                }
            case SpecialtyType.OTOLARYNGOLOGY:
                switch (type.Value) {
                    case 0:
                        return null;
                    default:
                        throw new Error('Type inválida.');
                }
            default:
                throw new Error('Especialidad inválida.');
        }
    }

    abstract updateCaseFile(data: any): void;
}