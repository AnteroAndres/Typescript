//encapsulamiento y genericos ,get,set, poo
class Sorteo<T>{
    private ticket?: T;

    constructor(
        private nombre: string,
    ){}

    setTicket(ticket: T){
        this.ticket = ticket;
    }

    getTicket(){
        return this.ticket
    }

    public sortear(): string{
        return `Para ${this.nombre} El ticket ganador es ${this.ticket}`
    }
}

let sorteo = new Sorteo<string>('Antero Montalvo')
sorteo.setTicket('S7')
console.log(sorteo.sortear())