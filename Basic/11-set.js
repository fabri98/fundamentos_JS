
// Declaración

let mySet = new Set()

// Inicialización
mySet = new Set(["fabri", "armoa", 26])
console.log(mySet)

// Métodos comunes

// add y delete

mySet.add("daniel")
console.log(mySet)

mySet.delete("armoa") // retorna true o false dependiendo si el elemento se eliminó
console.log(mySet)

// has: retorna true o false  dependiendo si el valor indicado se encuentra en el set
console.log(mySet.has("daniel"))

// size
console.log(mySet.size)

// Convertir un set a array
let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a set
mySet = new Set(myArray)
console.log(mySet)

// NOTA: los sets no permiten duplicados
mySet.add("fabri") // este elemento no se va a agregar porque ya existe
