import { IValueObject } from "src/domain/interfaces/value-object.interface";

/** AppointmentDate: Es el Value Object de la fecha de una cita. */
export class AppointmentDate implements IValueObject<AppointmentDate> {

    private constructor(private readonly date: Date) { }

    //Getter
    get value() { return this.date; }


    equals(other: AppointmentDate): boolean {
        return this.date == other.date;
    }


    /**Patron Factory.
     * @param date Fecha de la cita.
     * @returns `AppointmentDate`.*/
    public static create(date: Date): AppointmentDate {
        if (date == null || date == undefined) {
            throw new Error("La fecha de la cita no puede ser nula.");
        }

        return new AppointmentDate(date);
    }
}