// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function suma(a = 0, b = 0) {
    return a + b
}

console.log(suma(4, 6))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
let numeros = [4, 6, 9, 123, 45]

function numeroMayor(numeros) {
    let mayor = 0

    numeros.forEach(valor => {
        mayor = valor > mayor ? valor : mayor
    });
    return mayor
}

console.log(numeroMayor(numeros))


// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
let cadena = "hola como andas"

function cantVocales(cadena) {
    let vocales = ['a', 'e', 'i', 'o', 'u']
    let contVocales = 0

    for (let letra of cadena) {
        if (vocales.includes(letra)) {
            contVocales++
        }
    }
    return contVocales
}
console.log(cantVocales(cadena))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

let nombres = ["fabri", "pepi", "jim", "rubi"]

function mayuscula(arr) {

    let arrMayus = []

    arr.forEach(valor => {
        arrMayus.push(valor.toUpperCase())
    })
    return arrMayus
}
console.log(mayuscula(nombres))


// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function esPrimo(numero) {

    if (numero === 1) return true
    if (numero > 2 && numero % 2 === 0) return false

    for (let index = 2; index < numero; index++) {
        if (numero % index === 0) {
            return false
        }
    }
    return true
}

console.log(esPrimo(49))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

function elementosComunes(arr1, arr2) {
    let arrElementosComunes = []

    for (let index = 0; index < arr1.length; index++) {
        for (let index2 = 0; index2 < arr2.length; index2++) {
            if (arr1[index] === arr2[index2]) {
                arrElementosComunes.push(arr1[index])
            }
        }

    }

    return arrElementosComunes
}
numeros = [4, 6, 9, 123, 45]
let numeros2 = [2, 14, 7, 123, 45, 9]

console.log(elementosComunes(numeros, numeros2))


// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function sumatoriaNumerosPares(arr) {
    let sumatoria = 0

    arr.forEach(valor => {
        if (valor % 2 == 0) sumatoria += valor
    })

    return sumatoria
}

numeros = [4, 6, 9, 123, 45]
console.log(sumatoriaNumerosPares(numeros))
// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function elevarAlCuadrado(arr) {
    let cuadrados = []

    arr.forEach(valor => {
        cuadrados.push(valor ** 2)
    })

    return cuadrados
}

numeros = [4, 2, 3, 5]
console.log(elevarAlCuadrado(numeros))
// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function invertirCadena(cadena){
    let cadenaInvertida = ""
    for (let index = cadena.length - 1; index >= 0; index--) {
        cadenaInvertida += cadena.charAt(index)
    }

    return cadenaInvertida
}
console.log(invertirCadena("hola"))

// 10. Crea una función que calcule el factorial de un número dado

function factorial(n){

    if(n==0 || n==1) return 1

    return n * factorial(n-1)
}

console.log(factorial(6))