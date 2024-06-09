//el uso del || y del  ? para datos opcionales 
//no utilizar any

type Programador = {
    nombre : string,
    tecnologias : string[],
    tomarMate : boolean | null
}

let programador2: Programador = {
    nombre : 'Ricardo Buenardo',
    tecnologias : ['.net'],
    tomarMate : false
}

let programador3: Programador = {
    nombre : 'Federico',
    tecnologias: ['HTML', 'Cobol'],
    tomarMate : null
}