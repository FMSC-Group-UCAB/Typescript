import { CaseFile } from "../../domain/entities/casefile";
import { SpecialtyType } from "../../domain/enumerations/specialty-type.enum";
import { CasefileFactory } from "../../domain/factories/casefile-factory";
import { IRepository } from "../../domain/interfaces/repository.interface";
import { CaseFileBloodPressure } from "../../domain/valueobjects/casefile/casefile-bloodPressure";
import { CaseFileHeartRate } from "../../domain/valueobjects/casefile/casefile-heart-rate";
import { CaseFileHeight } from "../../domain/valueobjects/casefile/casefile-height";
import { CaseFileId } from "../../domain/valueobjects/casefile/casefile-id";
import { CaseFilePersonalBg } from "../../domain/valueobjects/casefile/casefile-personal-bg";
import { CaseFileSaturation } from "../../domain/valueobjects/casefile/casefile-saturation";
import { CaseFileWeight } from "../../domain/valueobjects/casefile/casefile-weight";
import { DoctorId } from "../../domain/valueobjects/doctor/doctor-id";
import { PatientId } from "../../domain/valueobjects/patient/patient-id";
import { DoctorRepository } from "./doctor.repository";
import { PatientRepository } from "./patient.repository";

export class CaseFileRepository implements IRepository<CaseFile>{
    async save(entity: CaseFile): Promise<void> {
        console.log("Se guardo: ");
        console.log(entity);
    }

    async update(entity: CaseFile): Promise<void> {
        console.log("Se actualizó: ");
        console.log(entity);
    }

    async findOne(items: Partial<CaseFile>): Promise<CaseFile> {
        const patient = await new PatientRepository().findOne({ Id: PatientId.create(1) });
        const doctor = await new DoctorRepository().findOne({ Id: DoctorId.create(1) });

        const casefile = CasefileFactory.fromSpecialty(
            SpecialtyType.CARDIOLOGY,
            CaseFileId.create(items.Id.value),
            patient,
            doctor,
            CaseFileBloodPressure.create("Alta"),
            CaseFileHeight.create(45.25),
            CaseFileWeight.create(48.65),
            CaseFileHeartRate.create(79.65),
            CaseFilePersonalBg.create("Diabetes III"),
            CaseFileSaturation.create(48.56),
            {
                albumin: 45.68,
                cholesterol: 48.53
            }
        );

        return casefile;
    }

    async find(items: Partial<CaseFile>): Promise<CaseFile[]> {
        return [];
    }

    async delete(entity: CaseFile): Promise<void> {
        console.log("Se eliminó: ");
        console.log(entity);
    }
}