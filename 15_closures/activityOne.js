//Task 1

function outer(){
    let name = "Saikat"
    function inner(){
        console.log(`User name is ${name} `);
    }
    return inner
}
const result = outer()
result()

//Task 2

function makeCounter(){
    let count = 0;
    
    return {
        increment: function(){
            count++
        },
        getCount: function(){
            return count
        }
    }
}

const myCounter = makeCounter()
myCounter.increment()
myCounter.increment()
myCounter.increment()

console.log(myCounter.getCount());


