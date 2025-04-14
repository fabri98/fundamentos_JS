// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = "fabri"
if (nombre === "fabri") {
    console.log(nombre)
}
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuario = "fabri98"
let password = 1234

if (usuario === "fabri97" && password == 1234) {
    console.log("Usuario autenticado.")
} else {
    console.log("Usuario o contraseña incorrecto/s")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let numero = -1

if (numero > 0) {
    console.log("El numero es positivo")

} else if (numero < 0) {
    console.log("El numero es negativo")

} else {
    console.log("El numero es cero")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad = 15

if (edad >= 18) {
    console.log("Es mayor puede votar")
} else {
    let diferenciaEdad = 18 - edad
    console.log(`Es menor. No puede votar, le faltan ${diferenciaEdad} años para poder hacerlo.`)
}
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad

let estadoEdad = edad >= 18 ? "adulto" : "menor"

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = "Abril"

if (mes === "Diciembre" || mes === "Enero" || mes === "Febrero") {
    console.log("Invierno")
} else if (mes === "Marzo" || mes === "Abril" || mes === "Mayo") {
    console.log("Primavera")
} else if (mes === "Junio" || mes === "Agosto" || mes === "Septiembre") {
    console.log("Verano")
} else {
    console.log("Otoño")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (mes === "Diciembre" || mes === "Enero" || mes === "Marzo" || mes === "Mayo" || mes === "Julio" || mes === "Agosto" || mes === "Octubre") {
    console.log(`El mes ${mes} tiene 31 dias.`)
} else if (mes === "Abril" || mes === "Junio" || mes === "Septiembre" || mes === "Noviembre") {
    console.log(`El mes ${mes} tiene 30 dias.`)
} else {
    console.log(`El mes ${mes} tiene 28 dias.`)
}
// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "español"

switch (idioma) {
    case "español":
        console.log("hola")
        break
    case "ingles":
        console.log("hello")
        break
    case "italiano":
        console.log("chiao")
    default:
        console.log("No conozco ese idioma :(")
        break
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

switch (mes) {
    case "Diciembre":
    case "Enero":
    case "Febrero":
        console.log("Invierno");
        break
    case "Marzo":
    case "Abril":
    case "Mayo":
        console.log("Primavera");
        break
    case "Junio":
    case "Julio":
    case "Agosto":
        console.log("Verano");
        break
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
        console.log("Otoño");
        break
    default:
        console.log("Mes no válido");
        break
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7

switch (mes) {
    case "Diciembre":
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
        console.log(`El mes ${mes} tiene 31 dias.`)
        break
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        console.log(`El mes ${mes} tiene 30 dias.`)
        break
    default:
        console.log(`El mes ${mes} tiene 28 dias.`)
        break
}