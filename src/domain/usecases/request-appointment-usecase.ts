import { Appointment } from "../entities/appointment";
import { Doctor } from "../entities/doctor";
import { Patient } from "../entities/patient";
import { AppointmentType } from "../enumerations/appointment-type.enum";
import { HoldType } from "../enumerations/hold-type.enum";
import { SpecialtyType } from "../enumerations/specialty-type.enum";
import { StatusType } from "../enumerations/status-type.enum";
import { InsufficientPrivilegeException } from "../exceptions/insufficient-privileges.exception";
import { SystemBlockedException } from "../exceptions/system-blocked.exception";
import { UnpayedSubscriptionException } from "../exceptions/unpayed-subscription.exception";
import { IClient } from "../interfaces/client.interface";
import { IRepository } from "../interfaces/repository.interface";
import { DomainEvent } from "../observables/domain-event";
import { Observable } from "../observables/observable";
import { AppointmentDate } from "../valueobjects/appointment/appointment-date";
import { AppointmentId } from "../valueobjects/appointment/appointment-id";
import { DoctorId } from "../valueobjects/doctor/doctor-id";
import { PatientId } from "../valueobjects/patient/patient-id";

/** RequestAppointmentUseCase: Caso de uso para solicitar una cita */
export class RequestAppointmentUseCase extends Observable {
    private events: DomainEvent[] = [];

    constructor(private readonly patientRepository: IRepository<Patient>, private readonly doctorRepository: IRepository<Doctor>, private readonly appointmentRepository: IRepository<Appointment>) {
        super();
    }

    /**requestAppointment: Se encarga de solicitar una cita al doctor.
     * @param patientId Id del Paciente que solicita la cita.
     * @param doctorId Id del Doctor que atenderá la cita.
     * @param specialty Especialidad de la cita.
     * @param date Fecha de la cita.
     * @param appointmentType Tipo o modalidad de la cita.
     * @use holdType Tipo de hold que pueda tener un paciente.
     * @returns `Appointment` */
    public async requestAppointment(client: IClient, patientId: PatientId, doctorId: DoctorId, date: AppointmentDate, appointmentType: AppointmentType, specialty: SpecialtyType) {
        //Publicamos el evento
        this.events.push(DomainEvent.create(
            "Solicitud de cita Iniciada",
            {
                client
            }
        ));

        //Verificamos que sea paciente
        if (!client.isPatient()) { throw InsufficientPrivilegeException.create(); }

        //Buscamos los datos del paciente
        const patient = await this.patientRepository.findOne({ Id: patientId });

        //Buscamos al doctor
        const doctor = await this.doctorRepository.findOne({ Id: doctorId });

        //Si el paciente tiene un hold por mal uso de la aplicación 
        if (patient.HoldType == HoldType.BADUSE || doctor.HoldType == HoldType.BADUSE) {
            throw SystemBlockedException.create();
        }

        //Si el paciente tiene un hold por no tener suscripción activa.
        if (patient.HoldType == HoldType.EXPIREDSUBSCRIPTION) { throw UnpayedSubscriptionException.create(); }

        /**Creando la cita. */
        const appointment = Appointment.create(AppointmentId.create(1), patient, doctor, StatusType.PENDING, date, appointmentType, specialty);

        await this.appointmentRepository.save(appointment);

        //Publicamos el evento
        this.events.push(DomainEvent.create(
            "Solicitud de cita",
            {
                owner: patient.FirstName.value + " " + patient.LastName.value,
                doctor: doctor.FirstName.value + " " + doctor.LastName.value,
            }
        ));

        //Notificando a los observers.
        this.notifyAll(this.events);
    }
}