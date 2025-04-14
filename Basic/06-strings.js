// Comparación
let myName = "fabri"
let greeting = "hola " + myName

console.log(greeting)

// Longitud
console.log(greeting.length)

// Acceso a caracteres
console.log(greeting[0])
console.log(greeting[50]) // nos retorna undefined

// Métodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.indexOf("fabri")) // retorna la posicion de la primera ocurrencia del substring
console.log(greeting.includes("hola")) // retorna true o false
console.log(greeting.slice(0, 4))
console.log(greeting.replace("hola", "nos vemos"))

// Template literals (plantillas literales)
let message = `hola
como
andas?`
console.log(`${message} todo bien?`) // interpolación