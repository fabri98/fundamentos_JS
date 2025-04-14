// 1. Crea un array que almacene cinco animales

let array = ["perro", "gato", "pajaro", "conejo", "elefante"]

// 2. Añade dos más. Uno al principio y otro al final
array.unshift("leon")
array.push("tigre")
console.log(array)

// 3. Elimina el que se encuentra en tercera posición
array.splice(3, 1)
console.log(array)

// 4. Crea un set que almacene cinco libros
mySet = new Set(["maldicion", "raro thomas", "velocidad", "la niebla", "el psicoanalista"])

// 5. Añade dos más. Uno de ellos repetido

mySet.add("cementerio de animales")
mySet.add("velodidad")

// 6. Elimina uno concreto a tu elección
mySet.delete("maldicion")

// 7. Crea un mapa que asocie el número del mes a su nombre
let meses = new Map(
    [
        [1, "Enero"],
        [2, "febrero"],
        [3, "marzo"],
        [4, "abril"],
        [5, "mayo"],
        [6, "junio"],
        [7, "julio"],
        [8, "agosto"],
        [9, "septiembre"],
        [10, "octubre"],
        [11, "noviembre"],
        [12, "diciembre"],
    ]
)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (meses.has(5)) {
    console.log(`Si, el mes ${meses.get(5)} existe dentro del map`)
} else {
    console.log(`No, el mes ${meses.get(5)} no existe dentro del map`)

}

// 9. Añade al mapa una clave con un array que almacene los meses de verano

meses.set("verano", ["diciembre", "enero", "febrero"])
console.log(meses.get("verano"))

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let arr = [1, 2, 3, 4, 5]

let newSet = new Set(arr)

let newMap = new Map(
    [
        ["mySet", newSet]
    ]
)

console.log(newMap)