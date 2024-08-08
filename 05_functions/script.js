//Activity 1
//Task 1
function evenOrOdd(num){
    if (num % 2 === 0) {
        return `${num} is Even`
    }else{
        return `${num} is Odd`
    }
}
let result = evenOrOdd(4)
console.log(result);
//Task 2
function numSquare(num){
    return num * num
}
let square = numSquare(2)
console.log(square);

//Activity 2
//Task 3
function maximunValue(a, b){
    if (a > b) {
        console.log(`${a} is greater then ${b}`);
    }else{
        console.log(`${b} is greater then ${a}`);
    }
}
maximunValue(78787, 5487775);
//Task 4
function concatStrings(str1, str2){
    console.log(str1.concat(str2));
}
concatStrings("MH"," Saikat")

//Activity 3
//Task 5

const sumOfTwo = (num1, num2) => {
    let result = num1 + num2;
    return result;
}
let sum = sumOfTwo(8, 8)
console.log(sum);
//Task 6
const containsCharacter = (str, char) => {
   return str.includes(char)
}
console.log(containsCharacter("saikat","r"))
//Activity 4
//Task 7
function returnProduct(str, str1=" Saikat"){
    return str + str1
}
console.log(returnProduct("MH"));
//Task 8
function personDetails(name, age = 20){
    return `Person name is ${name} and age is ${age}`
}
console.log(personDetails("MH Saikat"));

//Actibity 5
//Task 9

function higherOrder(func, n) {
    for (let i = 1; i < n; i++) {
        func(i);
    }
}
function greet() {
    console.log(`Tnx Hitesh sir for free course`);
}
higherOrder(greet, 5)
//Task 10
function applyFun(func1, func2, value){
    return func2(func1(value))
}

function squares(x){
    return x*x
}
function addOne(x){
    return x + 1
}
const values = applyFun(squares, addOne, 5)
console.log(values);

