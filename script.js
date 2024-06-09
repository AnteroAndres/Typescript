"use strict";
let estudiasteJs = true;
if (estudiasteJs) {
    console.log("puedes seguir estudiando el curso de ts");
}
else {
    console.log("debes estudiar js antes de ts");
}
let interMiami = 11;
let fcDallas = 11;
let messi = 1;
let juegamessi = true;
function jugar(equipo1, equipo2, juegammessi) {
    let motivo = ' porque juega messi';
    if (juegamessi)
        equipo1 += messi;
    if (equipo1 > equipo2)
        console.log(`gana interMiami ${motivo}`);
    if (equipo1 == equipo2)
        console.log("empate");
    if (equipo2 > equipo1)
        console.log("gana fcDallas");
}
jugar(interMiami, fcDallas, juegamessi);
