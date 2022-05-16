import { Appointment } from "../../domain/entities/appointment";
import { AppointmentType } from "../../domain/enumerations/appointment-type.enum";
import { SpecialtyType } from "../../domain/enumerations/specialty-type.enum";
import { StatusType } from "../../domain/enumerations/status-type.enum";
import { IRepository } from "../../domain/interfaces/repository.interface";
import { AppointmentDate } from "../../domain/valueobjects/appointment/appointment-date";
import { AppointmentId } from "../../domain/valueobjects/appointment/appointment-id";
import { DoctorId } from "../../domain/valueobjects/doctor/doctor-id";
import { PatientId } from "../../domain/valueobjects/patient/patient-id";
import { DoctorRepository } from "./doctor.repository";
import { PatientRepository } from "./patient.repository";

export class AppointmentRepository implements IRepository<Appointment>{
    async save(entity: Appointment): Promise<void> {
        console.log("Se guardo: ");
        console.log(entity);
    }

    async update(entity: Appointment): Promise<void> {
        console.log("Se actualizó: ");
        console.log(entity);
    }

    async findOne(items: Partial<Appointment>): Promise<Appointment> {
        const patient = await new PatientRepository().findOne({ Id: PatientId.create(1) });
        const doctor = await new DoctorRepository().findOne({ Id: DoctorId.create(1) });

        const appointment = Appointment.create(
            AppointmentId.create(items.Id.value),
            patient,
            doctor,
            StatusType.PENDING,
            AppointmentDate.create(new Date()),
            AppointmentType.VIRTUAL,
            SpecialtyType.CARDIOLOGY
        );

        return appointment;
    }

    async find(items: Partial<Appointment>): Promise<Appointment[]> {
        return [];
    }

    async delete(entity: Appointment): Promise<void> {
        console.log("Se eliminó: ");
        console.log(entity);
    }
}