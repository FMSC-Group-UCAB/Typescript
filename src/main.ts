import { DomainEvent } from "./domain/observables/domain-event";
import { Observable } from "./domain/observables/observable";
import { Observer } from "./domain/observables/observer.interface";

export class NuevoObservable extends Observable {
    run() {
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const event = DomainEvent.create("CambioNombre", { iteración: i });
                this.notifyAll([event]);
            }, 1000 + (i * 1000));
        }
    }
}

export class NuevoObservador implements Observer {
    raise(events: DomainEvent[]) {
        events.forEach(event => {
            console.log(event);
        });
    }
}

function main() {
    const observable = new NuevoObservable();

    const observador = new NuevoObservador();

    observable.add(observador);

    observable.run();
}

main();