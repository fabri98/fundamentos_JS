// 1. Concatena dos cadenas de texto
let saludo = "hola"
let nombre = "fabri"
console.log(saludo + " " + nombre)
// 2. Muestra la nombrengitud de una cadena de texto
console.log(saludo.length)
// 3. Muestra el primer y último carácter de un string
console.log(`Primer caracter del string ${nombre}: ${nombre[0]}, ultimo caracter del string ${nombre}: ${nombre[4]}`)
// 4. Convierte a mayúsculas y minúsculas un string
console.log(saludo.toUpperCase())
console.log(saludo.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
let cadenaLiteral = `Esta es una 
cadena de varias 
lineas`

// 6. Interpola el valor de una variable en un string
let cadenaInterporlada = `Cadena interpolada ${nombre}`
console.log(cadenaInterporlada)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(cadenaLiteral.replaceAll(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(cadenaInterporlada.includes("fabri"))

// 9. Comprueba si dos strings son iguales
console.log(nombre == "fabri")

// 10. Comprueba si dos strings tienen la misma longitud
console.log(nombre.length == saludo.length)