import { Doctor } from "../../domain/entities/doctor";
import { HoldType } from "../../domain/enumerations/hold-type.enum";
import { SpecialtyType } from "../../domain/enumerations/specialty-type.enum";
import { IRepository } from "../../domain/interfaces/repository.interface";
import { DoctorFirstName } from "../../domain/valueobjects/doctor/doctor-first-name";
import { DoctorId } from "../../domain/valueobjects/doctor/doctor-id";
import { DoctorLastName } from "../../domain/valueobjects/doctor/doctor-last-name";
import { DoctorLocation } from "../../domain/valueobjects/doctor/doctor-location";

export class DoctorRepository implements IRepository<Doctor>{
    async save(entity: Doctor): Promise<void> {
        console.log("Se guardo: ");
        console.log(entity);
    }

    async update(entity: Doctor): Promise<void> {
        console.log("Se actualizó: ");
        console.log(entity);
    }

    async findOne(items: Partial<Doctor>): Promise<Doctor> {
        const doctor = Doctor.create(
            DoctorId.create(items.Id.value),
            DoctorFirstName.create("Alberto"),
            DoctorLastName.create("Ruiz"),
            [SpecialtyType.CARDIOLOGY],
            DoctorLocation.create("15", "-52"),
            HoldType.NONE
        );

        return doctor;
    }

    async find(items: Partial<Doctor>): Promise<Doctor[]> {
        return [];
    }

    async delete(entity: Doctor): Promise<void> {
        console.log("Se eliminó: ");
        console.log(entity);
    }
}