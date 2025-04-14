// condicionales

let numero1 = 10
let numero2 = 20

if (numero1 > numero2) {
    console.log(`El numero mayor es ${numero1}`)
} else {
    console.log(`El numero mayor es ${numero2}`)
}

// ternario
let esMayor = numero1 > numero2 ? `El numero mayor es ${numero1}` : `El numero mayor es ${numero2}`
console.log(esMayor)

// switch

let opc = 2

switch (opc) {
    case 1:
        console.log("opicion 1")
        break
    case 2:
        console.log("opcion 2")
        break
    default:
        console.log("opcion inválida")
}