import { PaySubscriptionUsecase } from "./domain/usecases/pay-subscription-usecase";
import { SubscriptionId } from "./domain/valueobjects/subscription/subscription-id";
import { PatientRepository } from "./test/repositories/patient.repository";
import { SubscriptionRepository } from "./test/repositories/subscription.repository";
import { RegisterPatientUseCase } from "./domain/usecases/register-patient-usecase";
import { HoldType } from "./domain/enumerations/hold-type.enum";
import { PatientBirthDate } from "./domain/valueobjects/patient/patient-birth-date";
import { PatientEmail } from "./domain/valueobjects/patient/patient-email";
import { PatientFirstName } from "./domain/valueobjects/patient/patient-first-name";
import { PatientLastName } from "./domain/valueobjects/patient/patient-last-name";
import { PatientOccupation } from "./domain/valueobjects/patient/patient-occupation";
import { PatientPhoneNumber } from "./domain/valueobjects/patient/patient-phone-number";
import { RegisterSubscriptionUseCase } from "./domain/usecases/register-subscription-usecase";
import { PatientId } from "./domain/valueobjects/patient/patient-id";
import { SuscriptionCostType } from "./domain/enumerations/suscription-cost-type.enum";
import { SuscriptionType } from "./domain/enumerations/suscription-type.enum";
import { RequestAppointmentUseCase } from "./domain/usecases/request-appointment-usecase";
import { DoctorRepository } from "./test/repositories/doctor.repository";
import { AppointmentRepository } from "./test/repositories/appointment.repository";
import { DoctorId } from "./domain/valueobjects/doctor/doctor-id";
import { AppointmentDate } from "./domain/valueobjects/appointment/appointment-date";
import { SpecialtyType } from "./domain/enumerations/specialty-type.enum";
import { AppointmentType } from "./domain/enumerations/appointment-type.enum";
import { ObserverTest } from "./test/observer-test";
import { PaypalPayMethod } from "./test/paypal-pay-method";
import { Client } from "./test/cliente";

//####################################################################################################################################################################################
//MAIN
//####################################################################################################################################################################################

async function main() {
    const observer = new ObserverTest();

    //CU Pago de Suscripción
    await testPaySubscription(observer);

    //CU Registrar Paciente
    await testRegisterPatient(observer);

    //CU Registrar suscripción
    await RegisterSubscription(observer);

    //CU Pedir cita
    await RequestAppointment(observer);
}

//####################################################################################################################################################################################
//####################################################################################################################################################################################
//####################################################################################################################################################################################

async function testPaySubscription(observer: ObserverTest) {
    //Creamos el caso de uso de pago de suscripción.
    const paySuscriptionUsecase = new PaySubscriptionUsecase(new PaypalPayMethod(), new SubscriptionRepository(), new PatientRepository());

    //Agregamos el observador
    paySuscriptionUsecase.add(observer);

    //Ejecutamos el método.
    await paySuscriptionUsecase.paySuscription(new Client(), SubscriptionId.create(5));
}

async function testRegisterPatient(observer: ObserverTest) {
    const registerPatientUseCase = new RegisterPatientUseCase(new PatientRepository());

    registerPatientUseCase.add(observer);

    await registerPatientUseCase.registerPatient(
        PatientFirstName.create("José"),
        PatientLastName.create("Perez"),
        PatientBirthDate.create(new Date()),
        PatientEmail.create("email@email.com"),
        PatientPhoneNumber.create("+58 (123)153-1532"),
        PatientOccupation.create("Trabajador"),
        HoldType.EXPIREDSUBSCRIPTION
    );
}

async function RegisterSubscription(observer: ObserverTest) {
    const registerSuscriptionUsecase = new RegisterSubscriptionUseCase(new PaypalPayMethod(), new SubscriptionRepository(), new PatientRepository());

    registerSuscriptionUsecase.add(observer);

    await registerSuscriptionUsecase.registerSuscription(new Client(), PatientId.create(1), SuscriptionType.MONTHLY, SuscriptionCostType.BASIC);
}

async function RequestAppointment(observer: ObserverTest) {
    const requestAppointmentUsecase = new RequestAppointmentUseCase(new PatientRepository(), new DoctorRepository(), new AppointmentRepository());

    requestAppointmentUsecase.add(observer);

    await requestAppointmentUsecase.requestAppointment(new Client(), PatientId.create(1), DoctorId.create(1), AppointmentDate.create(new Date()), AppointmentType.VIRTUAL, SpecialtyType.CARDIOLOGY);
}

main();