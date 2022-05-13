import {IValueObject} from '../interfaces/value-object.interface';

export class DoctorLocation implements IValueObject<DoctorLocation> {

    _latitude: string;
    _longitude: string;

    constructor(latitude: string, longitude: string) {
        this._latitude = latitude;
        this._longitude = longitude;
    }

    equals(other: DoctorLocation): boolean {
        return this._latitude == other._latitude && this._longitude == other._longitude;
    }
}