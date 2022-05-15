import { IValueObject } from '../../interfaces/value-object.interface';

export class CaseFileHeartRate implements IValueObject<CaseFileHeartRate> {
    private constructor(private readonly heartRate: number) { }

    //Getter
    get value(): number { return this.heartRate; }

    equals(other: CaseFileHeartRate): boolean {
        return this.heartRate == other.heartRate;
    }

    /**
     * Patron Factory.
     * @param heartRate La frecuencia cardiaca del paciente
     * @returns `CaseFileHeartRate` */
    static create(heartRate: number): CaseFileHeartRate {
        if (heartRate == null || heartRate == undefined) {
            throw new Error("La presion no puede ser undefined/null.");
        }
        return new CaseFileHeartRate(heartRate);
    }
}