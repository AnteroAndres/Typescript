//uso de clases y constructores

class Pelicula {
    nombre? : string;
    protagonistas? : string[];
    actores? : string[];

    proyectarenCine(){
        console.log(`Se esta proyectando ${this.nombre} en cartelera`)
    }

    constructor(nombre:string, protagonistas:string[], actores:string[]){
        this.nombre = nombre;
        this.protagonistas = protagonistas;
        this.actores = actores;
    }
}

const pelicula = new Pelicula('barbie',['barbie','ken'],['Margot Robbie','Ryan Gosling']);
const pelicula2 = new Pelicula('batman',['batman','robin'],['Ben Affleck','Jared Leto']);

console.log(pelicula2)
pelicula.proyectarenCine()