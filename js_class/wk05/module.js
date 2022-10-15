export default class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

export function printName(person) {
    console.log(`Person's name is ${person.name}`)
}

export function printAge(person) {
    console.log(`Person's age is ${person.age}`)
}


