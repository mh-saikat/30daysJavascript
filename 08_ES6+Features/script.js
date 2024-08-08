//Activity 1
//Task 1

const name = 'MH Saikat'
const age = 25
const personInfo = `Person name is ${name} and age is ${age}`
console.log(personInfo);
//Task 2
const multiLineInfo = `Person name is ${name}.
They are ${age} years old.`

//Activity 2
//Task 3

const arr = [0, 1, 2, 3, 4, 5, 6]
const[first, second] = arr
console.log(first, second);
//Task 4
const book = {
    title:'History',
    author:'MH Saikat'
}
const{title, author} = book
console.log(title, author);

//Activity 3
//Task 5

const arr1 = ["Saikat","Khalil","Ram"]
const arr2 = ['Robin','Antor','Miad']
const newArr = [...arr1, ...arr2, ...arr]
console.log(newArr);
//Task 6
function arbitaryNum(...num){
    const sum = num.reduce((acc, curr) => acc + curr , 0)
    return sum
}
const sumOfArbitaryNum = arbitaryNum(200, 400, 500, 600)
console.log(sumOfArbitaryNum);

//Activity 4
//Task 7

function defaultPara(para1, para2 = 1){
    return para2 === 1 ? para1 : {para1, para2}
}
console.log(defaultPara("Saikat", 25))
console.log(defaultPara("Saikat"))

//Activity 5
//Task 8

const userName = "Saikat"
const password = 12121
const gotUserName = () => userName
const userDetail = {
    userName,
    password,
    gotUserName
}
console.log(userDetail);
//Task 9
const propName = 'age'
const updateUserDetail = {
    userName,
    password,
    [propName]:25,
    gotUserName
}
console.log(updateUserDetail);