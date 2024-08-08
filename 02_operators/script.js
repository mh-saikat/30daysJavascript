//Acrivity 1
//Task 1

function addTwoNumbers(num1, num2){
    return num1 + num2
}
const sum = addTwoNumbers(100, 50);
console.log(sum);

//Task 2

function subtractTwoNumbers(num1, num2){
    return num1 - num2
}
const subtract = subtractTwoNumbers(100, 60)
console.log(subtract);

//Task 3

function multiplyTwoNumbers(num1, num2){
    console.log(num1 * num2);
}
multiplyTwoNumbers(5, 5)

//Task 4

function divideTwoNumbers(num1, num2){
    console.log(num1 / num2);
}
divideTwoNumbers(200, 10)

//Task 5

function findRemainder(num1, num2){
    console.log(num1 % num2);
}
findRemainder(4824, 240)

//Activity 2
//Task 6

function addAgain(num1, num2){
    let add = num1 += num2
    console.log(add);
}
addAgain(255, 255)

//Task 7 

function subAgain(num1, num2){
    let sub = num1 -= num2
    console.log(sub);
}
subAgain(255, 245)

//Activity 3
//Task 8

function compareUsingGreaterAndLess(num1, num2){
    if (num1 > num2) {
        console.log(`${num1} is greater then ${num2}`);
    } else{
        console.log(`${num1} is less then ${num2}`);
    }
}
compareUsingGreaterAndLess(255,500)

//Task 9

function compareUsingGreaterLessEqule(num1, num2){
    if (num1 >= num2) {
        console.log(`${num1} is greater then equle ${num2}`);
    } else {
        console.log(`${num1} is less then equle ${num2}`);
    }
}
compareUsingGreaterLessEqule(7587247, 345544)

//Task 10

function compareUsingEqule(num1, num2){
    if (num1 === num2) {
        console.log(`The numbers are same type and they are equle`);
    } else if (num1 == num2) {
        console.log(`The numbers are not same type but equle`);
    }
}

compareUsingEqule('124',124)

//Activity 4
//Task 11
if (3 > 2 && 2 < 3) {
    console.log(`3 greater then 2`);
}

//Task 12
if (4 > 5 || 4 < 5) {
    console.log(`4 less then 5`);
}

//Task 13

let num = ''

if (!num) {
    console.log('true');
} else{
    console.log('false');
}

//Activity 5
//Task14

let isLoggedIn = true

const result = isLoggedIn?'LoggedIn':'not LoggedIn'
console.log(result);