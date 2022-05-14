import { HoldType } from "../enumerations/hold-type.enum";
import { SpecialtyType } from "../enumerations/specialty-type.enum";
import { DoctorFirstName } from "../valueobjects/doctor/doctor-first-name";
import { DoctorId } from "../valueobjects/doctor/doctor-id";
import { DoctorLastName } from "../valueobjects/doctor/doctor-last-name";
import { DoctorLocation } from "../valueobjects/doctor/doctor-location";

export class Doctor {

    constructor(
        private id: DoctorId,
        private firstName: DoctorFirstName,
        private lastName: DoctorLastName,
        private specialty: Array<SpecialtyType>,
        private location: DoctorLocation,
        private holdType: HoldType
    ) {
        this.validate();
    }

    get Id() { return this.Id; }
    get FirstName() { return this.FirstName; }
    get LastName() { return this.LastName; }
    get Specialty() { return this.Specialty; }
    get Location() { return this.Location; }
    get HoldType() { return this.HoldType; }

    /**
     * Patron Factory
     * @param id identificador del doctor
     * @param firstName primer nombre del doctor
     * @param lastName apellido del doctor
     * @param specialty especialidad del doctor
     * @param location ubicacion del doctor
     * @param holdType retencion que el doctor pueda tener en el sistema
     * @returns `Doctor`*/
    public static create(id: DoctorId,
        firstName: DoctorFirstName,
        lastName: DoctorLastName,
        specialty: Array<SpecialtyType>,
        location: DoctorLocation,
        holdType: HoldType): Doctor {
        return new Doctor(id, firstName, lastName, specialty, location, holdType);
    }

    private validate(): void {
        if (this.id == null || this.id == undefined) {
            throw new Error("El Id del doctor no puede ser null/undefined");
        }
        if (this.firstName == null || this.firstName == undefined) {
            throw new Error("El primer nombre del doctor no puede ser null/undefined");
        }
        if (this.lastName == null || this.lastName == undefined) {
            throw new Error("El apellido del doctor no puede ser null/undefined");
        }
        if (this.specialty == null || this.specialty == undefined) {
            throw new Error("la especialidad del doctor no puede ser null/undefined");
        }
        if (this.location == null || this.location == undefined) {
            throw new Error("la ubicacion del doctor no puede ser null/undefined");
        }
        if (this.holdType == null || this.holdType == undefined) {
            throw new Error("la retencion del doctor no puede ser null/undefined");
        }
    }
}