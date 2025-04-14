// Map

// Declaración 

let myMap = new Map()
console.log(myMap)

// Inicialización

myMap = new Map(
    [
        ["fabri", "armoa"],
        ["edad", 26],
        ["email", "fabri111298@gmail.com"]
    ]
)
console.log(myMap)

// Métodos y propiedades

// set: insertamos un par clave - valor

myMap.set("alias", "negro")
console.log(myMap)

// NOTA: no se pueden duplicar las claves
myMap.set("fabri", "della valle")
console.log(myMap)

// get: obtenemos el valor de la clave especificada
console.log(myMap.get("email"))

// has
console.log(myMap.has("edad")) // true

// delete
myMap.delete("email")

// clear
// myMap.clear()

// keys, values y entries
console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

// size
console.log(myMap.size())
