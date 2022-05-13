import { DomainEvent } from "./domain/observables/domain-event";
import { Observable } from "./domain/observables/observable";
import { Observer } from "./domain/observables/observer.interface";
import { SuscriptionClosedAt } from "./domain/valueobjects/suscription-closed-at";
import { SuscriptionCreatedAt } from "./domain/valueobjects/suscription-created-at";
import { SuscriptionId } from "./domain/valueobjects/suscription-id";
import { SuscriptionPaidAt } from "./domain/valueobjects/suscription-paid-at";

export class NuevoObservable extends Observable {
    async run() {
        let events: DomainEvent[] = [];
        for (let i = 0; i < 3; i++) {
            await new Promise(resolve => { setTimeout(resolve, 1000 + (i * 500)) });
            events.push(DomainEvent.create("CambioNombre", { iteración: i + 1 }));
            console.log("Event added: " + (i + 1));
        }
        await new Promise(resolve => { setTimeout(resolve, 1000) });
        console.log("Sending...");
        await new Promise(resolve => { setTimeout(resolve, 1000) });
        this.notifyAll(events);
    }
}

export class NuevoObservador implements Observer {
    raise(events: DomainEvent[]) {
        events.forEach(event => {
            console.log(event);
        });
    }
}

function suscriptionTest() {
    //Suscription test;
    const susId1 = SuscriptionId.create(5);
    const susId2 = SuscriptionId.create(4);
    console.log(susId1);
    console.log(susId2);
    console.log(susId1.equals(susId2));
    console.log(SuscriptionCreatedAt.create(new Date()));
    console.log(SuscriptionPaidAt.create(new Date()));
    console.log(SuscriptionClosedAt.create(new Date()));
}

async function main() {
    //Observable Test
    const observable = new NuevoObservable();
    const observador = new NuevoObservador();
    observable.add(observador);
    await observable.run();

    //suscriptionTest();
}


main();