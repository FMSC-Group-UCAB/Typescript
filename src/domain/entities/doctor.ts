import { DoctorId } from "../valueobjects/doctor-id";
import { DoctorFirstName } from "../valueobjects/doctor-first-name";
import { DoctorLastName } from "../valueobjects/doctor-last-name";
import { SpecialtyType } from "../enumerations/specialty-type.enum";
import { DoctorLocation } from "../valueobjects/doctor-location";
import { HoldType } from "../enumerations/hold-type.enum";


export class Doctor {
    
    
    constructor(
        private id: DoctorId,
        private firstName: DoctorFirstName,
        private lastName: DoctorLastName,
        private specialty: Array<SpecialtyType>,
        private location: DoctorLocation,
        private holdType: HoldType
    ){
        this.validate();
    }

        get Id(){ return this.id; }
        get FirstName(){ return this.firstName; }
        get LastName(){ return this.lastName; }
        get Specialty(){ return this.specialty; }    
        get Location(){ return this.location; }
        get HoldType(){ return this.holdType; }

        set FirstName( firstName: DoctorFirstName ) { this.firstName = firstName }
        set LastName( lastName: DoctorLastName ) { this.lastName = lastName }
        set Specialty( specialty: Array<SpecialtyType> ) { this.specialty = specialty }
        set Location ( location: DoctorLocation ) { this.location = location }
        set HoldType ( holdType: HoldType ) { this.holdType = holdType }


        /**
         * Patron Factory
         * @param id identificador del doctor
         * @param firstName primer nombre del doctor
         * @param lastName apellido del doctor
         * @param specialty especialidad del doctor
         * @param location ubicacion del doctor
         * @param holdType retencion que el doctor pueda tener en el sistema
         * @returns `Doctor`
         */
        public static create(id: DoctorId,
             firstName: DoctorFirstName, 
             lastName: DoctorLastName, 
             specialty: Array<SpecialtyType>, 
             location: DoctorLocation, 
             holdType: HoldType): Doctor {
                 return new Doctor(id, firstName, lastName,specialty,location,holdType);
             }


             private validate():void {
                if (this.id == null || this.id == undefined){
                    throw new Error("El Id del doctor no puede ser null/undefined");
                }
                if (this.firstName == null || this.firstName == undefined){
                    throw new Error("El primer nombre del doctor no puede ser null/undefined");
                }
                if (this.lastName == null || this.lastName == undefined){
                    throw new Error("El apellido del doctor no puede ser null/undefined");
                }
                if (this.specialty == null || this.specialty == undefined){
                    throw new Error("la especialidad del doctor no puede ser null/undefined");
                }
                if (this.location == null || this.location == undefined){
                    throw new Error("la ubicacion del doctor no puede ser null/undefined");
                }
                if (this.holdType == null || this.holdType == undefined){
                    throw new Error("la retencion del doctor no puede ser null/undefined");
                }
             }

}