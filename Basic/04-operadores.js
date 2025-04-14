// Operadores aritmeticos
let a = 5
let b = 10

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b) // modulo
console.log(a ** b) // potencia

a++ // incremento
console.log(a)

b-- // decremento
console.log(b)

// Operadores de asignación
let myVariable = 4
console.log(myVariable)
myVariable += 2 // esto lo podemos hacer con todas las operaciones aritmeticas
console.log(myVariable)

// Operadores de comparación
console.log(a > b)
console.log(a < b)
console.log(a == b)
console.log(a)
console.log(a == '6') // esto nos devuelve true ya que solo esta comparando el valor
console.log(a === '6') // esto nos devuelve false ya que realizando la comparacion: Igualdad por identidad (por tipo y valor)
console.log(0 == "") // true 
console.log(0 == "  ") // true
console.log(0 == '') // true
console.log(0 === '') // false
console.log(undefined == null) // true

// Truthy values ( valores verdaderos): son valores que son true simplemente porque al lenguaje se le dio la gana

// Todos los numeros positivos y negativos menos el cero
// Todas las cadenas de texto menos las vacias
// Todos los boolean

// Falsy values (valores falsos): misma premisa que los Truthy pero al reves

// 0
// 0n
// null
// undefined
// Nan
// El boolean false
// cadenas de texto vacias

// Operadores lógicos

// and (&&)
console.log(5 > 10 && 15 < 20)// false
console.log(5 < 10 && 15 < 20)// true

// or (||)
console.log(5 > 10 || 15 < 20)// true
console.log(5 < 10 || 15 < 20)// true
console.log(5 > 10 || 15 > 20)// false

// not (!)
console.log(!(5 > 10)) // true
console.log(!(5 < 10)) // false

// and y or a nivel de bits (compara ambos lados incluso si la primera condición es false)
console.log(5 < 10 & 15 > 20) // 0
console.log(5 > 10 | 15 < 20) // 1

// Operadores ternarios
console.log(5 > 10 ? "es mayor" : "es menor")