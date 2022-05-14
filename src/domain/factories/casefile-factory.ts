import { CaseFile } from "../entities/casefile";
import { CaseFileCardiologist } from "../entities/casefile-cardiologist";
import { SpecialtyType } from "../enumerations/specialty-type.enum";
import { CaseFileBloodPressure } from "../valueobjects/casefile/casefile-bloodPressure";
import { CaseFileHeartRate } from "../valueobjects/casefile/casefile-heart-rate";
import { CaseFileHeight } from "../valueobjects/casefile/casefile-height";
import { CaseFileId } from "../valueobjects/casefile/casefile-id";
import { CaseFilePersonalBg } from "../valueobjects/casefile/casefile-personal-bg";
import { CaseFileSaturation } from "../valueobjects/casefile/casefile-saturation";
import { CaseFileWeight } from "../valueobjects/casefile/casefile-weight";

/**
 * CasefileFactory: Clase concreta utilizada para crear Casefiles.*/
export class CasefileFactory {
    /**
     * Patron Factory para generar un nuevo Casefile en función de la especialidad y el tipo.
     * @param id Identificador de la historia medica
     * @param specialtyType Especialidad del casefile.
     * @param bloodPressure Presion arterial del paciente
     * @param height Altura del paciente
     * @param weight Peso del paciente
     * @param heartRate La frecuencia cardiaca del paciente
     * @param personalBg Antecedentes personales del paciente
     * @param saturation Saturacion de oxigeno del paciente
     * @param extra Información extra necesaria para el tipo de casefile.
     * @returns `Casefile` */
    public static fromSpecialty(specialtyType: SpecialtyType, id: CaseFileId, bloodPressure: CaseFileBloodPressure, height: CaseFileHeight, weight: CaseFileWeight, heartRate: CaseFileHeartRate, personalBg: CaseFilePersonalBg, saturation: CaseFileSaturation, extra: any): CaseFile {
        switch (specialtyType) {
            case SpecialtyType.CARDIOLOGY:
                return CaseFileCardiologist.create(id, bloodPressure, height, weight, heartRate, personalBg, saturation, extra['albumin'], extra['cholesterol']);
            case SpecialtyType.OPHTHALMOLOGY:
                return null;
            case SpecialtyType.OTOLARYNGOLOGY:
                return null;
            default:
                throw new Error('Especialidad inválida.');
        }
    }
}