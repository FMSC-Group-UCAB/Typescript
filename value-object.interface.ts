/** IValueObject: Es una interfaz genérica utilizada para implementar value objects.
 *  @function(other: T) {boolean} equals: Compara la igualdad de dos value objects.*/
export interface IValueObject<T> {
    equals(other: T): boolean
}
