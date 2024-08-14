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

//Task 3

class student extends person {
    constructor(name, age, studentId){
        super(name, age)
        this.studentId = studentId
    }
    getStudentId(){
        console.log(`Student id is ${this.studentId}`);
    }
    greeting(){
        return `Student name is ${this.name} and Student id is ${this.studentId}`
    }

}

const chai = new student("chai", 20, "#232323")
chai.getStudentId();
//Task 4
console.log(chai.greeting());

