/** IClient: Es una interfaz utilizada para implementar el cliente que ejecuta los CU.*/
export interface IClient {
    isDoctor(): boolean;
    isPatient(): boolean;
    isAdmin(): boolean;
}