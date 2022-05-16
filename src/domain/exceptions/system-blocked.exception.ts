/** SystemBlockedException: Excepción que es arrojada cuando un usuario intenta realizar una operación, pero tiene su cuenta bloqueada
 * por mal uso de la misma. */
class SystemBlockedException extends Error {
    constructor(m: string) {
        super(m);
    }

    /**Patrón Factory */
    public static create(): SystemBlockedException {
        return new SystemBlockedException("El sistema está bloqueado para el paciente o para el doctor por el mal uso del mismo.")
    }
}