//Task 1

class person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greeting(){
        return `My name is ${this.name} and age is ${this.age}`
    }
    updateAge(newAge){
        this.age = newAge
    }
}
const person1 = new person("MH Saikat", "19")
console.log(person1.greeting());

//Task 2

person1.updateAge(20)
console.log(person1.greeting());