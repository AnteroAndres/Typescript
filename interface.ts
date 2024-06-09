interface Programador1 {
    nombre : string,
    tecnologias : string[],
    tomarMate? : boolean | null
}

let dev: Programador = {
    nombre : 'Ricardo Buenardo',
    tecnologias : ['.net'],
    tomarMate : false
}

let dev2: Programador = {
    nombre : 'Federico',
    tecnologias: ['HTML', 'Cobol'],
    tomarMate : null
}

function enviarcv(programador : Programador){
    console.log(`Enviando cv de ${programador.nombre}`)
}