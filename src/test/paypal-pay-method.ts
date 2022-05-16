import { IPayMethod } from "src/domain/interfaces/pay-method.interface";

export class PaypalPayMethod implements IPayMethod {
    async pay(amount: number): Promise<boolean> {
        await new Promise(resolve => { setTimeout(resolve, 2000) });
        return true;
    }
}