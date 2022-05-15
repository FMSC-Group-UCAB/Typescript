import { Appointment } from "../entities/appointment";
import { Doctor } from "../entities/doctor";
import { Patient } from "../entities/patient";
import { AppointmentType } from "../enumerations/appointment-type.enum";
import { HoldType } from "../enumerations/hold-type.enum";
import { SpecialtyType } from "../enumerations/specialty-type.enum";
import { StatusType } from "../enumerations/status-type.enum";
import { DomainEvent } from "../observables/domain-event";
import { Observable } from "../observables/observable";
import { AppointmentDate } from "../valueobjects/appointment/appointment-date";
import { AppointmentId } from "../valueobjects/appointment/appointment-id";

/** RequestAppointmentUseCase: Caso de uso para solicitar una cita */
export class RequestAppointmentUseCase extends Observable{
    private events: DomainEvent[] = [];
    private appointment: Appointment;


    /**requestAppointment: Se encarga de solicitar una cita al doctor.
     * @param patient Paciente que solicita la cita.
     * @param doctor Doctor que atenderá la cita.
     * @param specialty Especialidad de la cita.
     * @param date Fecha de la cita.
     * @param appointmentType Tipo o modalidad de la cita.
     * @use holdType Tipo de hold que pueda tener un paciente.
     * @returns `Appointment` */
    public async requestAppointment(patient: Patient, doctor: Doctor, date: AppointmentDate, appointmentType: AppointmentType, specialty: SpecialtyType){
    
        if((patient == null || patient == undefined) || (doctor == null || doctor == undefined)){
            throw Error("El paciente y el doctor no pueden ser null/undefined.");
        }

        //Si el paciente tiene un hold por mal uso de la aplicación 
        if(patient.HoldType == HoldType.BADUSE) {
           throw SystemBlockedException.create();
        }

        //Si el paciente tiene un hold por no tener suscripción activa.
        if(patient.HoldType == HoldType.EXPIREDSUBSCRIPTION){
            throw UnpayedSubscriptionException.create();
        }

        /**Creando la cita. */ 
        this.appointment = Appointment.create(AppointmentId.create(1), patient, doctor, StatusType.PENDING, date, appointmentType, specialty);

        //Aquí es donde se registraria la solicitud de cita en el userRepository.
        console.log('El paciente ' + patient.FirstName.value + ' solicitó una cita de '+ specialty + ' con el doctor ' + doctor.FirstName.value + ' para el día ' + this.appointment.Date.value);

        // el owner deberia ser el administrador que registra la solicitud de la cita, nos lo dara el framework mas tarde.
        this.events.push(DomainEvent.create(
            "Solicitud de cita",{
                owner: patient.FirstName.value + " " + patient.LastName.value,
                doctor: doctor.FirstName.value + " " + doctor.LastName.value,
            }
        ));
        
        //Notificando a los observers.
        this.notifyAll(this.events);
    }
}