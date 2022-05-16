/** IRepository: Es una interfaz genérica utilizada para implementar permanencia.
 *  @typeParam `T` Tipo del parametro de la entidad*/
export interface IRepository<T> {
    save(entity: T): Promise<void>;
    update(entity: T): Promise<void>;
    findOne(items: Partial<T>): Promise<T>;
    find(items: Partial<T>): Promise<T[]>;
    delete(entity: T): Promise<void>;
}