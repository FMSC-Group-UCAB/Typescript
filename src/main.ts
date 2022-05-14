import { Suscription } from "./domain/entities/suscription";
import { SpecialtyType } from "./domain/enumerations/specialty-type.enum";
import { SuscriptionCostType } from "./domain/enumerations/suscription-cost-type.enum";
import { SuscriptionType } from "./domain/enumerations/suscription-type.enum";
import { CasefileFactory } from "./domain/factories/casefile-factory";
import { DomainEvent } from "./domain/observables/domain-event";
import { Observable } from "./domain/observables/observable";
import { Observer } from "./domain/observables/observer.interface";
import { CaseFileBloodPressure } from "./domain/valueobjects/casefile/casefile-bloodPressure";
import { CaseFileHeartRate } from "./domain/valueobjects/casefile/casefile-heart-rate";
import { CaseFileHeight } from "./domain/valueobjects/casefile/casefile-height";
import { CaseFileId } from "./domain/valueobjects/casefile/casefile-id";
import { CaseFilePersonalBg } from "./domain/valueobjects/casefile/casefile-personal-bg";
import { CaseFileSaturation } from "./domain/valueobjects/casefile/casefile-saturation";
import { CaseFileWeight } from "./domain/valueobjects/casefile/casefile-weight";
import { SuscriptionClosedAt } from "./domain/valueobjects/suscription/suscription-closed-at";
import { SuscriptionCreatedAt } from "./domain/valueobjects/suscription/suscription-created-at";
import { SuscriptionId } from "./domain/valueobjects/suscription/suscription-id";
import { SuscriptionPaidAt } from "./domain/valueobjects/suscription/suscription-paid-at";

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
    //await observable.run();

    //suscriptionTest();

    const suscription = Suscription.create(
        SuscriptionId.create(1),
        SuscriptionType.MONTHLY,
        SuscriptionCostType.BASIC,
        SuscriptionCreatedAt.create(new Date()),
        SuscriptionPaidAt.create(new Date()),
        null
    );

    //console.log(suscription.Id.Value);

    let casefile = CasefileFactory.fromSpecialty(
        SpecialtyType.CARDIOLOGY,
        CaseFileId.create(1),
        CaseFileBloodPressure.create("Alta"),
        CaseFileHeight.create(45.25),
        CaseFileWeight.create(48.65),
        CaseFileHeartRate.create(79.65),
        CaseFilePersonalBg.create("Diabetes III"),
        CaseFileSaturation.create(48.56),
        {
            albumin: 45.68,
            cholesterol: 48.53
        }
    );

    console.log(casefile);

    casefile.updateCaseFile(casefile.BloodPressure, casefile.Height, casefile.Weight, casefile.HeartRate, CaseFilePersonalBg.create("Cambiado"), casefile.Saturation, { albumin: 90.15, cholesterol: 48.53 });

    console.log(casefile);
}


main();