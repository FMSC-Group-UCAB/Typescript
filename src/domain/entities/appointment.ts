import { AppointmentType } from "../enumerations/appointment-type.enum";
import { SpecialtyType } from "../enumerations/specialty-type.enum";
import { StatusType } from "../enumerations/status-type.enum";
import { AppointmentDate } from "../valueobjects/appointment/appointment-date";
import { AppointmentFeedback } from "../valueobjects/appointment/appointment-feedback";
import { AppointmentId } from "../valueobjects/appointment/appointment-id";

/** Appointment: Es una clase concreta que representa una cita entre un paciente y un doctor. */
export class Appointment {
    private constructor(
        private readonly id: AppointmentId,
        private status: StatusType,
        private date: AppointmentDate,
        private type: AppointmentType,
        private feedback: AppointmentFeedback,
        private specialty: SpecialtyType
    ) {
        this.validate();
    }

    //Getters
    get Id() { return this.id; }
    get Status() { return this.status; }
    get Date() { return this.date; }
    get Type() { return this.type; }
    get Feedback() { return this.feedback; }
    get Specialty() { return this.specialty; }

    /** Patron Factory.
     * @param id Identificador del cita.
     * @param status Estado de la cita.
     * @param date Fecha de la cita.
     * @param type Tipo de cita.
     * @param feedback Feedback de la cita.
     * @param specialty Especialidad de la cita.
     * @returns `Appointment`*/
    public static create(id: AppointmentId, status: StatusType, date: AppointmentDate, type: AppointmentType, feedback: AppointmentFeedback, specialty: SpecialtyType): Appointment {
        return new Appointment(id, status, date, type, feedback, specialty);
    }

    /**
     * Permite actualizar los datos de una cita.
     * @param status Estado de la cita.
     * @param date Fecha de la cita.
     * @param type Tipo de cita.
     * @param feedback Feedback de la cita.*/
    public update(status: StatusType, date: AppointmentDate, type: AppointmentType, feedback: AppointmentFeedback) {
        this.status = status;
        this.date = date;
        this.type = type;
        this.feedback = feedback;
        this.validate();
    }

    /** Valida los atributos de la entidad.*/
    private validate(): void {
        if (this.id == null || this.id == undefined) {
            throw new Error("El Id de cita no puede ser null/undefined.");
        }

        if (this.status == null || this.status == undefined) {
            throw new Error("El estado de cita no puede ser null/undefined.");
        }

        if (this.date == null || this.date == undefined) {
            throw new Error("La fecha de cita no puede ser null/undefined.");
        }

        if (this.type == null || this.type == undefined) {
            throw new Error("El tipo de cita no puede ser null/undefined.");
        }

        if (this.feedback == null || this.feedback == undefined) {
            throw new Error("El feedback de la cita no puede ser null/undefined.");
        }

        if (this.specialty == null || this.specialty == undefined) {
            throw new Error("La especialidad de la cita no puede ser null/undefined.");
        }
    }

}