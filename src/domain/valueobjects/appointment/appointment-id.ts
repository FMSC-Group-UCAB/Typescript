import { IValueObject } from "src/domain/interfaces/value-object.interface";

/**AppointmentId: Es un Value Object que representa el identificador de una cita. */
export class AppointmentId implements IValueObject<AppointmentId> {
    
    private constructor (private readonly id: number) { }

    //Getter
    get ValueId() { return this.id; }

    
    equals(other: AppointmentId): boolean {
        return this.id == other.id;
    }


    /**Patron Factory.
     * @param id Identificador de la cita.
     * @returns `AppointmentId`.*/
    public static create(id: number): AppointmentId {
        if (id == null || id == undefined || id == 0) {
            throw new Error("El Id de la cita no puede ser nulo.");
        }

        return new AppointmentId(id);
    }
}