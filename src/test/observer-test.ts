import { DomainEvent } from "src/domain/observables/domain-event";
import { Observer } from "src/domain/observables/observer.interface";

export class ObserverTest implements Observer {
    raise(events: DomainEvent[]) {
        events.forEach(event => {
            console.log(event);
        });
    }
}
