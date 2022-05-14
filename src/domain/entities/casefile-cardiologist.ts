import { SpecialtyType } from "../enumerations/specialty-type.enum";
import { CaseFileAlbumin } from "../valueobjects/casefile/casefile-albumin";
import { CaseFileBloodPressure } from "../valueobjects/casefile/casefile-bloodPressure";
import { CaseFileCholesterol } from "../valueobjects/casefile/casefile-cholesterol";
import { CaseFileHeartRate } from "../valueobjects/casefile/casefile-heart-rate";
import { CaseFileHeight } from "../valueobjects/casefile/casefile-height";
import { CaseFileId } from "../valueobjects/casefile/casefile-id";
import { CaseFilePersonalBg } from "../valueobjects/casefile/casefile-personal-bg";
import { CaseFileRange } from "../valueobjects/casefile/casefile-range";
import { CaseFileSaturation } from "../valueobjects/casefile/casefile-saturation";
import { CaseFileWeight } from "../valueobjects/casefile/casefile-weight";
import { CaseFile } from "./casefile";

export class CaseFileCardiologist extends CaseFile {
    protected readonly specialtyType: SpecialtyType = SpecialtyType.CARDIOLOGY;
    private cholesterol: CaseFileCholesterol;
    private albumin: CaseFileAlbumin;

    //Getters
    get Albumin(): CaseFileAlbumin { return this.albumin; }
    get Cholesterol(): CaseFileCholesterol { return this.cholesterol; }

    protected constructor(id: CaseFileId, bloodPressure: CaseFileBloodPressure, height: CaseFileHeight, weight: CaseFileWeight, heartRate: CaseFileHeartRate, personalBg: CaseFilePersonalBg, saturation: CaseFileSaturation, albumin: CaseFileAlbumin, cholesterol: CaseFileCholesterol) {
        super(id, bloodPressure, height, weight, heartRate, personalBg, saturation);
        this.cholesterol = cholesterol;
        this.albumin = albumin;
        this.validate();
    }

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
     * @param cholesterol Colesterol del paciente */
    public static create(id: CaseFileId, bloodPressure: CaseFileBloodPressure, height: CaseFileHeight, weight: CaseFileWeight, heartRate: CaseFileHeartRate, personalBg: CaseFilePersonalBg, saturation: CaseFileSaturation, albumin: any, cholesterol: any): CaseFileCardiologist {
        return new CaseFileCardiologist(
            id,
            bloodPressure,
            height,
            weight,
            heartRate,
            personalBg,
            saturation,
            CaseFileAlbumin.create(
                albumin,
                CaseFileRange.create(0, 150)
            ),
            CaseFileCholesterol.create(
                cholesterol,
                CaseFileRange.create(50.5, 80.5)
            )
        );
    }

    updateExtras(extras: any): void {
        this.albumin = CaseFileAlbumin.create(extras['albumin'], this.albumin.rangeValue);
        this.cholesterol = CaseFileCholesterol.create(extras['cholesterol'], this.cholesterol.rangeValue);
        this.validate();
    }

    protected validate(): void {
        if (this.Albumin == null || this.Albumin == undefined) { throw new Error("La albumina no puede ser nula/undefined"); }
        if (this.Cholesterol == null || this.Cholesterol == undefined) { throw new Error("El colesterol no puede ser nulo/undefined"); }
        super.validate();
    }
}