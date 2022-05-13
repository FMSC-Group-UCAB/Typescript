import { DoctorId } from "../valueobjects/doctor_id";
import { DoctorFirstName } from "../valueobjects/doctor_first_name";
import { DoctorLastName } from "../valueobjects/doctor_last_name";
import { SpecialtyType } from "../enumerations/specialty_type";
import { DoctorLocation } from "../valueobjects/doctor_location";
import { HoldType } from "../enumerations/hold_type";


export class Doctor {

    _id: DoctorId;
    _firstName: DoctorFirstName;
    _lastName: DoctorLastName;
    _specialty: Array<SpecialtyType>;
    _location: DoctorLocation;
    _holdType: HoldType;

    constructor(
        id: DoctorId,
        firstName: DoctorFirstName,
        lastName: DoctorLastName,
        specialty: Array<SpecialtyType>,
        location: DoctorLocation,
        holdType: HoldType
    ){
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._specialty = specialty;
        this._location = location;
        this._holdType = holdType;
    }


}