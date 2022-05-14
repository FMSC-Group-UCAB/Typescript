import {IValueObject} from '../interfaces/value-object.interface';

export class DoctorLocation implements IValueObject<DoctorLocation> {


    private constructor(private readonly latitude: String, private readonly longitude: String ) { }

    get Latitude() { return this.latitude; }
    get Longitude() { return this.longitude; }

    equals(other: DoctorLocation): boolean {
        return this.latitude == other.latitude && this.longitude == this.longitude;
    }

    /**
     * 
     * @param latitude latitud del doctor
     * @param longitude longitud del doctor
     * @returns 
     */
    public static create(latitude: String, longitude: String): DoctorLocation {
        if (latitude == null || latitude == undefined){
            throw new Error('La latitud de la ubicacion no puede ser null/undefined.');
        }
        if (longitude == null || longitude == undefined){
            throw new Error('La longitud de la ubicacion no puede ser null/undefined.');
        }
        return new DoctorLocation(latitude, longitude);
    }
}