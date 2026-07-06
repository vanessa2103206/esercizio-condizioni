// 1. SOLUZIONE CON IF / ELSE
let v1 = 29;

if (v1 < 18) {
    console.log("insufficiente");
} else if (v1 >= 18 && v1 < 21) {
    console.log("sufficiente");
} else if (v1 >= 21 && v1 < 24) {
    console.log("buono");
} else if (v1 >= 24 && v1 < 27) {
    console.log("distinto");
} else if (v1 >= 27 && v1 <= 29) {
    console.log("ottimo");
} else if (v1 === 30) {
    console.log("eccellente");
} else {
    console.log("Voto non valido");
}


// 2. SOLUZIONE CON SWITCH
let v2 = 29;

switch (true) {
    case (v2 < 18):
        console.log("insufficiente");
        break;
    case (v2 >= 18 && v2 < 21):
        console.log("sufficiente");
        break;
    case (v2 >= 21 && v2 < 24):
        console.log("buono");
        break;
    case (v2 >= 24 && v2 < 27):
        console.log("distinto");
        break;
    case (v2 >= 27 && v2 <= 29):
        console.log("ottimo");
        break;
    case (v2 === 30):
        console.log("eccellente");
        break;
    default:
        console.log("Voto non valido");
        break;
}
