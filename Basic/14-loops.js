// bucles

// for

let frutas = ["pera", "manzana", "banana"]

let verduras = new Map(
    [
        [1, "lechuga"],
        [2, "papa"],
        [3, "zanahoria"],
    ]
)

console.log("Imprimendo con for...")
for (let index = 0; index < frutas.length; index++) {
    console.log(`${index + 1}. ${frutas[index]}`)
}

// for of

console.log("\nImprimendo arreglo con for of...")

for (let value of frutas) {
    console.log(frutas.indexOf(value) + 1 + ". " + value)
}

console.log("\nImprimendo map con for of...")

for (let value of verduras) {
    console.log(value[0] + ". " + value[1]) // desempaquetado
    // console.log(value)
}