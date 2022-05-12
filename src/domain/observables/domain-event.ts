
/** Event: Es una clase concreta utilizada para implementar eventos del dominio.
 *  @var name: Nombre del evento.
 *  @var timestamp: Fecha y hora en la que se genero el evento.
 *  @var payload: Información del evento. 
 *  @function(name, payload) {Event} create: Fábrica para generar eventos.*/
export class DomainEvent {
    private name: string;
    private timestamp: Date;
    private payload: any;

    get Name() { return this.name; }
    get Timestamp() { return this.timestamp; }
    get Payload() { return this.payload; }

    constructor(name, payload) {
        this.name = name;
        this.timestamp = new Date();
        this.payload = payload;
    }

    public static create(name, payload): DomainEvent {
        return new DomainEvent(name, payload);
    }
}