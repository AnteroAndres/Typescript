let estudiasteJs: boolean = true;

if (estudiasteJs){
    console.log("puedes seguir estudiando el curso de ts")
}else{
    console.log("debes estudiar js antes de ts")
}

let interMiami : number = 11
let fcDallas : number = 11
let messi: number = 1
let juegamessi : boolean = true

function jugar(equipo1: number ,equipo2: number, juegammessi:boolean):void{

    let motivo : string = ' porque juega messi'

    if(juegamessi) equipo1 += messi


    if(equipo1 > equipo2)
        console.log(`gana interMiami ${motivo}`)
    if(equipo1 == equipo2)
        console.log("empate")
    if(equipo2 > equipo1)
        console.log("gana fcDallas")
}
jugar(interMiami,fcDallas,juegamessi)

let arregloNumeros : number[] = [1,2,3,4,5,6,7,8,9,10]

let arregloTexto : string[] = ['html','css','js','ts']

arregloTexto[0].indexOf('HTML')

let programador = {
    nombre : 'Antero Montalvo',
    tecnologias : ['react', 'js', 'angular'],
    tomaMate : true
}

programador = {
    nombre : 'Ricardo Buenardo',
    tecnologias : ['.net'],
    tomaMate : false
}

console.log(programador)