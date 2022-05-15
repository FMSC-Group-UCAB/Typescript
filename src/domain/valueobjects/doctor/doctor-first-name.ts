import { IValueObject } from '../../interfaces/value-object.interface';

export class DoctorFirstName implements IValueObject<DoctorFirstName> {
    private constructor(private readonly firstName: String) { }

    get value() { return this.firstName; }

    equals(other: DoctorFirstName): boolean {
        return this.firstName == other.firstName;
    }

    /**
     * Patron Factory
     * @param firstName nombre del doctor
     * @returns `DoctorFirstName`
     */
    public static create(firstName: String): DoctorFirstName {
        if (firstName == null || firstName == undefined) {
            throw new Error('El nombre del doctor no puede ser null/undefined.');
        }
        return new DoctorFirstName(firstName);
    }
}