
import {IValueObject} from '../../interfaces/value-object.interface';

export class DoctorLastName implements IValueObject<DoctorLastName> {
    private constructor(private readonly lastName: String) { }

    get value() { return this.lastName; }

    equals(other: DoctorLastName): boolean {
        return this.lastName == other.lastName;
    }

    /**
     * Patron Factory
     * @param lastName apellido del doctor
     * @returns `DoctorLastName`
     */
    public static create(lastName: String): DoctorLastName {
        if (lastName == null || lastName == undefined){
            throw new Error('El apellido del doctor no puede ser null/undefined.');
        }
        return new DoctorLastName(lastName);
    }
}