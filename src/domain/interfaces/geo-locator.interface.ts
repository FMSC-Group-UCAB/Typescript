/** IGeoLocator: Es una interfaz genérica utilizada para implementar conversiones de objetos de localización (`D` <--> `G`).
 *  @typeParam `D` Tipo del parametro del objeto de Dominio.
 *  @typeParam `G` Tipo del parametro del objeto del geolocalizador.*/
export interface IGeoLocator<D, G> {
    /**
     * Transforma la información del geolocalizador a dominio.
     * @param data Data del geolocalizador.*/
    toDomain(data: G): D;

    /**
     * Transforma la información del dominio `D` a geolocalizador `G`.
     * @param other Data del objecto de dominio. */
    fromDomain(other: D): G;
}