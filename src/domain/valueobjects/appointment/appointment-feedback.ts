import { IValueObject } from "src/domain/interfaces/value-object.interface";

/** AppointmentFeedback: Es el Value Object de la calificacion de una cita. */
export class AppointmentFeedback implements IValueObject<AppointmentFeedback> {

    private constructor(private readonly comment: string, private readonly rating: number) { }

    //Getter
    get valueComment() { return this.comment; }
    get valueRating() { return this.rating; }


    equals(other: AppointmentFeedback): boolean {
        return this.comment == other.comment && this.rating == other.rating;
    }


    /**Patron Factory.
     * @param comment Comentario de la cita.
     * @param rating Calificación de la cita.
     * @returns `AppointmentFeedback`.*/
    public static create(comment: string, rating: number): AppointmentFeedback {
        if (comment == null || comment == undefined) {
            throw new Error("El comentario de la cita no puede ser nulo.");
        }
        if (rating == null || rating == undefined) {
            throw new Error("La calificación de la cita no puede ser nula.");
        }

        return new AppointmentFeedback(comment, rating);
    }
}