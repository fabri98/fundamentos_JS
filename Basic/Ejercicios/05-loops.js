// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for (let index = 1; index <= 20; index++) {
    console.log(index)

}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let sumatoria = 0
for (let index = 1; index <= 100; index++) {
    sumatoria += index
}
console.log("Resultado sumatoria: " + sumatoria)


// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

let i = 1
while (i <= 50) {
    if (i % 2 == 0) {
        console.log(i)
    }
    i++
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nombres = ["fabri", "pepi", "jim", "rubi"]
for (let nombre of nombres) {
    console.log(nombre)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let cadena = "hola como andas eh"
let vocales = ['a', 'e', 'i', 'o', 'u']
let contVocales = 0
for (let letra of cadena) {
    if (vocales.includes(letra)) {
        contVocales++
    }
}
console.log("La cantidad de vocales de la cadena es: " + contVocales)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numeros = [2, 4, 6, 7, 12]
let producto = 1

for (let num of numeros) {
    producto *= num
}
console.log(producto)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
let cinco = 5
let multiplicador = 0
while (multiplicador <= 10) {
    console.log(`${cinco} x ${multiplicador} = ${cinco * multiplicador}`)
    multiplicador++
}


// 8. Usa un bucle para invertir una cadena de texto
let texto = "hola"
let cadenaInvertida = ""

for (let index = texto.length - 1; index >= 0; index--) {
    cadenaInvertida += texto.charAt(index)
}
console.log(cadenaInvertida)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let fib = [0, 1]

for (let i = 2; i < 10; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
}

console.log(fib)


// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let arrNumeros = [3, 8, 24, 56, 80, 2]
let numMayores10 = []

for (let num of arrNumeros) {
    if (num > 10) {
        numMayores10.push(num)
    }
}
console.log(numMayores10)