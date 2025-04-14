// array

// Declaración
let myArray = [1, 2, 3, 4, 5] // esta es la forma mas recomendada
let myArray2 = new Array(3) // declaramos un array con la longitud inicial

console.log(myArray) // [ 1 ]
console.log(myArray2) // [ <3 empty items> ]

// Inicialización 
myArray2 = new Array(1, 2, 3, 4, 5, "hola", "fabri")
console.log(myArray2)

// en JS podemos poner cualquier tipo de dato en un array

// Métodos comunes
myArray = []
// push y pop
myArray.push("fabri")
myArray.push("Armoa")
myArray.push(26)

console.log(myArray)

myArray.pop()
console.log(myArray)

// shift: elimina el primer elemento del array
myArray.shift()
console.log(myArray)

// unshift: inserta elementos al principio del array
myArray.unshift("fabri", "daniel")
console.log(myArray)

// clear
myArray = []

// slice: retorna una copia de la seccion "recortada" de una array
myArray.push(1, 2, 3, 4, 5, "hola", "fabri")
let arraySlice = myArray.slice(0, 4)
console.log(arraySlice)

// splice: recorta los elementos en el rango determinado
myArray.splice(1, 3)
console.log(myArray)

// splice (sobrecargado): recorta los elementos en el rango determinado, e inserta un/os elemento/s en las posicion/es que fueron eliminadas
myArray.splice(1, 2, "elemento nuevo", "otro elemento")
console.log(myArray)
myArray.splice()
