//Task 7
function memoize(fn){
    let cache = {}
    return function(x){
        if(cache[x] !== undefined){
            return cache[x]
        }
        const result = fn(x);
        cache[x] = result;
        return result
    }
}

const square = (x) => x * x;

const memoizeSquare = memoize(square)

console.log(memoizeSquare(4));
console.log(memoizeSquare(4));
console.log(memoizeSquare(5));

//Task 8
function createFactorialMenoizer(){

    let cache = {};
    function factorial(n){
        if (n < 0) return undefined;
        if (n === 0) return 1;
        if(cache[n] !== undefined){
            return cache[n]
        }
        let result = 1;
        
        for (let i = 1; i <= n; i++) {
            result *= i
        }
        cache[n] = result;
        return result
    }
    return factorial
}
const memoizedFactorial = createFactorialMenoizer();
console.log(memoizedFactorial(4));
console.log(memoizedFactorial(4));
console.log(memoizedFactorial(5));

