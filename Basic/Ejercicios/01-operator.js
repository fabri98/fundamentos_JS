// 1. Crea una variable para cada operación aritmética

let suma = 5 + 5
let resta = 5 - 5
let mult = 5 * 5
let div = 5 / 5
let mod = 5 % 5
let potencia = 5 ** 5

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

suma += 2
resta -= 2
mult *= 2
div /= 2
mod %= 2
potencia **= 2

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
let a = 15
let b = 20
console.log(a < b)
console.log(a > 5)
console.log(a === 15)
console.log(b >= 20)
console.log(a != 50)

// 5. Utiliza el operador lógico and
console.log(a < b && a > 5)
// 6. Utiliza el operador lógico or
console.log(a > b || a > 5)

// 7. Combina ambos operadores lógicos
console.log((a < b && a > 5) || (a < 1))

// 8. Añade alguna negación
console.log(!(a < b))

// 9. Utiliza el operador ternario
console.log(a < b ? "es menor" : "es mayor")

// 10. Combina operadores aritméticos, de comparáción y lógicas

result = ((10 + 5) >= a) && ((20 - 5) < b)
            // true     &&     true = true
console.log(result)