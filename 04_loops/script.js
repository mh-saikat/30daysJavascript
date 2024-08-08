//Activity 1
//Task 1
for (let i = 1; i <= 10 ; i++) {
    console.log(i);    
}
//Task 2
for (let i = 1; i <= 10 ; i++) {
    let result = i * 5
    console.log(`5 * ${i} = ${result}`);
}
//Activity 2
//Task 3
let i = 1
while (i <= 10) {
    let sum = i + i
    console.log(`${i} + ${i} = ${sum}`);
    i++
}
//Task 4
let index = 10
while(index >= 1){
    console.log(index);
    index = index - 1
}
    //using for loop
    function decriment(num){
        for (num; num>=1; num--) {
            console.log(num);
            
        }
    }
    decriment(10)
//Actibity 3
//Task 5
let num = 1
do {
    console.log(num);
    num++
} while (num <= 5);
//Task 6
function findFactroial(num){
    let fac = 1
    for (num; num >=1; num--) {
        fac = fac * num
        console.log(fac);
    }
}
findFactroial(4)
//Actibity 4
//Task 7
let star = ['*','**','***','****','*****']
for (let i = 0; i<star.length; i++) {
    console.log(star[i]);
}
//Actibity 5
//Task 8
for (let i = 1; i <= 10; i++) {
    
    if (i === 5) {
        continue
    }
    console.log(i);
}
//Task 9
for (let i = 1; i <= 10; i++) {
    console.log(i);    
    if (i === 7) {
        break
    }
}

