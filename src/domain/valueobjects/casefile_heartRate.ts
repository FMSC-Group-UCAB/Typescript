import {IValueObject} from '../interfaces/value-object.interface';

class CaseFileHeartRate implements IValueObject<CaseFileHeartRate> {

    _heartRate: number;

    constructor(heartRate: number) {
        this._heartRate = heartRate;
    }

    equals(other: CaseFileHeartRate): boolean {
        return this._heartRate == other._heartRate;
    }

}