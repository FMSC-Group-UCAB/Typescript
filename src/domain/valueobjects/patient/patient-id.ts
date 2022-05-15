import { IValueObject } from "src/domain/interfaces/value-object.interface";

/** PatientId: Es el Value Object del identificador de los pacientes*/
export class PatientId implements IValueObject<PatientId>{
    private constructor(private readonly id: number) { }

    //Getter
    get ValueId() { return this.id; }

    equals(other: PatientId): boolean {
        return this.id == other.id;
    }

    /**Patron Factory.
     * @param id Identificador del paciente.
     * @returns `PatientId`.*/
    public static create(id: number): PatientId {
        if (id == null || id == undefined || id == 0) {
            throw new Error("El Id del paciente no puede ser nulo.");
        }

        return new PatientId(id);
    }
}