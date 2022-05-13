import {IValueObject} from '../interfaces/value-object.interface';

export class CaseFileHeartRate implements IValueObject<CaseFileHeartRate> {

    private heartRate: number;

    constructor(heartRate: number) {
        this.heartRate = heartRate;
    }

    equals(other: CaseFileHeartRate): boolean {
        return this.heartRate == other.heartRate;
    }

    getHeartRate(): number {
        return this.heartRate;
    }
    
}