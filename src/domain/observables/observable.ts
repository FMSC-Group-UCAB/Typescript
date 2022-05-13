import { Observer } from "./observer.interface";
import { DomainEvent } from "./domain-event";

/** Observable: Es una clase abstracta utilizada para agregar, remover y notificar a los observadores de la misma.*/
export abstract class Observable {
    private observers: Observer[] = [];

    /**
     * Permite agregar un nuevo observador.
     * @param observer Observador a agregar.*/
    public add(observer: Observer): void {
        this.observers.push(observer);
    }

    /**
     * Permite eliminar un observador.
     * @param observer Observador a eliminar.*/
    public remove(observer: Observer): void {
        this.observers = this.observers.filter(obj => { return obj !== observer });
    }

    /**
     * Notifica los observadores.
     * @param domainEvents Eventos del dominio a notificar.*/
    public notifyAll(domainEvents: DomainEvent[]): void {
        this.observers.forEach(observer => {
            observer.raise(domainEvents);
        });
    }
}