// respuestas 03-exercises

// 1- Esto es un comentario en una linea

/*
2- esto es un comentario
de varias lineas 
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let cadena = "esto es un texto"
let numero = 15
let decimal = 3.14
let undefinedValue
let nullValue = null
let symbolValue = Symbol("valor")
let numberBigInt = BigInt(3213123123123127361278368126361236816387)

// 4. Imprime por consola el valor de todas las variables
// 5. Imprime por consola el tipo de todas las variables
console.log(cadena + ", es de tipo: " + typeof (cadena))
console.log(numero + ", es de tipo: " + typeof (numero))
console.log(decimal + ", es de tipo: " + typeof (decimal))
console.log(undefinedValue + ", es de tipo: " + typeof (undefinedValue))
console.log(nullValue + ", es de tipo: " + typeof (nullValue))
console.log(symbolValue.description + ", es de tipo: " + typeof (symbolValue))
console.log(numberBigInt + ", es de tipo: " + typeof (numberBigInt))

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
cadena = "cadena nueva"
numero = 26
decimal = 25.33

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
cadena = 50 
numero = "ahora esto es un numero"

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const cadenaConst= "esto es un texto"
const numeroConst= 15
const  decimalConst= 3.14
// const undefinedValueConst --> no se puede declarar una constante undefined
const nullValueConst = null
const symbolConst = Symbol("valor")
const bigIntConst = BigInt(3213123123123127361278368126361236816387)

// 9. A continuación, modifica los valores de las constantes
//cadenaConst = "nuevo valor" --> no se puede modificar el valor de las constantes

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse


