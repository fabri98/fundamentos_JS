// objetos

// Sintaxis

let person = {
    name: "Fabri",
    email: "fabri111298@gmail.com",
    age: 26
}

// Acceso a propiedades

// Notación punto
console.log(person.name)

// Notación de corchetes
console.log(person["email"])

// Modificación
person.name = "Fabrizio"
console.log(person.name)

// Eliminar propiedades
delete person.age
console.log(person)

// Agregar nueva propiedad

person.lastName = "Armoa"
console.log(person)

// Métodos
let person2 = {
    name: "Fabri",
    email: "fabri111298@gmail.com",
    age: 26,
    walk: function () {
        console.log("caminando...")
    }
}

person2.walk()

// Anidación de objetos
let person3 = {
    name: "Fabri",
    email: "fabri111298@gmail.com",
    age: 26,
    walk: function () {
        console.log("caminando...")
    },
    job: {
        name: "Programador",
        work: function () {
            console.log("laburando...")
        }
    }
}

console.log(person3.job.name)
person3.job.work()

// Igualdad de objetos

// let person4 = {
//     name: "Fabri",
//     email: "fabri111298@gmail.com",
//     age: 26
// }
// console.log(person == person4) esto da false

let person4 = person
console.log(person == person4) // esto da true

// Iteración con for in

for (let key in person4) {
    console.log(key + " : " + person4[key])
}

// Acesso a propiedades del objeto (usamos this)

let person5 = {
    name: "Fabri",
    email: "fabri111298@gmail.com",
    age: 26,
    work: function () {
        console.log(`La persona ${this.name} esta trabajando`)
    }
}
person5.work()

// Funciones com objetos (un constructor)
// NOTA: esto deberia ser usado en una clase, no de esta forma

function Persona(name, age) {
    this.name = name
    this.age = age
}

let person6 = new Persona("fabri", 26)
console.log(person6)

