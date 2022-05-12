import { DomainEvent } from "./domain-event";

/** Observer: Es una interfaz utilizada para recibir eventos de dominio de los obsevables.
 *  @function(events: DomainEvent[]) {void} raise: Recibe los eventos de los observables.*/
export interface Observer {
    raise(events: DomainEvent[]);
}