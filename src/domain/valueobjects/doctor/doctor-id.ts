import {IValueObject} from '../../interfaces/value-object.interface';

export class DoctorId implements IValueObject<DoctorId> {
    private constructor(private readonly id: number) { }

    get value() { return this.id; }

    equals(other: DoctorId): boolean {
        return this.id == other.id;
    }

    /**
     * Patron Factory
     * @param id nombre del doctor
     * @returns `DoctorId`
     */
    public static create(id: number): DoctorId {
        if (id == null || id == undefined || id == 0){
            throw new Error('El id del doctor no puede ser null/undefined.');
        }
        return new DoctorId(id);
    }
}