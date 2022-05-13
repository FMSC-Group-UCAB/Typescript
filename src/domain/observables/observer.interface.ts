import { DomainEvent } from "./domain-event";

/** Observer: Es una interfaz utilizada para recibir eventos de dominio de los obsevables. */
export interface Observer {
    /**
     * Recibe los eventos del dominio de los observables.
     * @param domainEvents Eventos del dominio del observable. */
    raise(domainEvents: DomainEvent[]): void;
}