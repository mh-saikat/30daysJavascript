//Task 5
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
    static greetMsg(){
        return `Hello Everyone`
    }
}

console.log(person.greetMsg());

//Task 6

class Student {
    static totalStudents = 0;

    constructor(studentName, studentAge, studentId){
        this.studentName = studentName;
        this.studentAge = studentAge;
        this.studentId = studentId;

        Student.totalStudents++;
    }

    static getTotalStudents(){
        return `Total number of students: ${Student.totalStudents}`;
    }
}

const chai = new Student("chai", 21, "#222222")
const alex = new Student("Alex", 34, "#55555")
const saikat = new Student("Saikat", 34, "#55555")

console.log(Student.getTotalStudents());
