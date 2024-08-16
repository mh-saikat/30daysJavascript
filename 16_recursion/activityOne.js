//Task 1
function factorial(n){
    if(n < 0) return undefined;
    if(n === 0) return 1;

    return n * factorial(n - 1)
}
console.log(factorial(4));

//Task 2

function fibonacci(n){
    if(n < 0) return undefined;
    if(n === 0) return 0;
    if(n === 1) return 1

    return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(5));
