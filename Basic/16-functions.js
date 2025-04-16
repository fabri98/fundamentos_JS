// funciones

// simple
function foo() {
    console.log("hola funcion")
}

foo()

// Con parámetros

function fooConParametros(name) {
    console.log("Hola " + name)
}

fooConParametros("fabri")

// Funcions anónimas
let funcAnonima = function (name, lastname) {
    console.log(`Hola ${name} ${lastname}`)
}

funcAnonima("fabri", "armoa")

// Funciones flecha

let funcionFlecha = (name) => {
    console.log("Hola " + name)
}

// Funciones con parámetros por defecto

function suma(a = 0, b = 0) {
    console.log(a + b)
}

suma(4, 6)
suma(2)

// Retorno de valores
function mult(a, b) {
    return a * b
}
let result = mult(3, 3)
console.log(result)

// Funciones anidadas
function externa() {
    console.log("Función externa")
    function interna() {
        console.log("Función interna")
    }
    interna()
}

externa()
// interna() Error: fuera del scope

// Funciones de orden superior: son funciones que reciben otras funciones como paramatros
function applyFunc(func, param) {
    func(param)
}

applyFunc(funcionFlecha, "pepita pepilinda")

// forEach
let array = [4, 6, 9, 123, 45]

array.forEach(value => console.log(value))