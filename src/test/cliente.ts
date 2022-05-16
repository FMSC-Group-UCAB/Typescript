import { IClient } from "src/domain/interfaces/client.interface";

export class Client implements IClient {
    isDoctor(): boolean {
        return true;
    }
    isPatient(): boolean {
        return true;
    }
    isAdmin(): boolean {
        return true;
    }
}