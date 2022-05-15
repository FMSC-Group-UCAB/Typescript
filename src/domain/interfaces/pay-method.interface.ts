/** IPayMethod: Es una interfaz utilizada para implementar métodos de pago.*/
export interface IPayMethod {
    /**
     * Permite realizar un pago a traves de un método especificado.
     * @param amount Cantidad a descontar. */
    pay(amount: number): boolean;
}