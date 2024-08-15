// Task 3

function createIdGenerator(){
    let lastId = 1;

    return function(){
        lastId += 2
        return `id_${lastId}`
    }
}

const generateId = createIdGenerator()
console.log(generateId());
console.log(generateId());
console.log(generateId());

//Task 4

function user(username){
    return function(){
        console.log(`Welcome ${username}`);
    }
}
const chai = user("Chai ji")
chai()