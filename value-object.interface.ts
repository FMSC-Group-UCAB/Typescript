/** IValueObject es una interfaz utilizada para implementar value objects.
 *  @function {IValueObject} equals: Se utiliza para comparar value objects.*/
export interface IValueObject {
    equals(valueObject: IValueObject): boolean
}
