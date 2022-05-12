import { Observer } from "./observer.interface";
import { DomainEvent } from "./domain-event";

/** Observable: Es una clase abstracta utilizada para agregar, remover y notificar a los observadores de la misma.
 *  @var observers: Observadores a notificar.
 *  @function(observer: Observer) {void} add: Permite agregar un nuevo observador.
 *  @function(observer: Observer) {void} remove: Permite eliminar un observador.
 *  @function(events: DomainEvent[]) {void} notifyAll: Notifica los observadores.*/
export abstract class Observable {
    private observers: Observer[] = [];

    public add(observer: Observer): void {
        this.observers.push(observer);
    }

    public remove(observer: Observer): void {
        this.observers = this.observers.filter(obj => { return obj !== observer });
    }

    public notifyAll(events: DomainEvent[]): void {
        this.observers.forEach(observer => {
            observer.raise(events);
        });
    }
}