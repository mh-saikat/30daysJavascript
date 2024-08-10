//Activity 1
//Task 1

function throwsError(){
    throw new Error("This is an intertional error.")  
}
try {
    throwsError()
} catch (error) {
    console.log("An error occurred: " + error.message);   
}
//Task 2
function divideNumbers(numerator, denominator){
    if (denominator === 0) {
        throw new Error("Division by zero is not allowed.")
    }
    return numerator / denominator
}
try {
    let result = divideNumbers(25, 0)
    console.log(result); 
} catch (error) {
    console.log("An error occurred:", error.message);
}
//Activity 2
//Task 3

function executeWithErrorHandling(){
    try {
        console.log("Try block: Starting execution...");

        throw new Error("An intentional error occurred.");        
        
    } catch (error) {
        console.log("Catch block: Caught an error -", error.message)
    } finally{
        console.log("Finally block: Executing cleanup tasks...");
    }
    console.log("Script continues after try-catch-finally...");
    
}
executeWithErrorHandling()

//Activity 3
//Task 4

class customError extends Error {
    constructor(message){
        super(message)
        this.name = this.constructor.name
    }
}
//create function that throw error
function riskyOperation(){
    let isError = true
    if (isError) {
        throw new customError("Something went wrong during the risky operation!")
    }
    return "Operation successful!"
    
}
//handle error
try {
    const result = riskyOperation()
    console.log(result);
    
} catch (error) {
    if (error instanceof customError) {
        console.error("Custom error catch:", error.message)
    } else{
        console.error("An unexpected error occurred:", error.message)
    }
}
//Task 5
function validateUser(username, age, email){
    if (!username) {
        throw new Error("Username cannot be empty")
    } else if (!age) {
        throw new Error("Age cannot be empty")
    } else if (!email){
        throw new Error("Email cannot be empty")
    } else{
        return {
            username : username,
            age : age,
            email : email
        }  
    }
    
}
//handle error
try{
    const user = validateUser("MH Saikat", '', "mh@mh.com")
    console.log("User validated successfully", user);
    
}catch(error){
    console.error("Validation Error:", error.message)
}

//Activity 4
//Task 6

const promiseOne = new Promise( (resolve, reject) =>{
    setTimeout(()=>{
        let error = false
        if (!error) {
            resolve({
                name:"Js",
                price:255
            })
        } else {
            reject("Error somthing went wrong!")
        }
    }, 1000)
} )
promiseOne.then((value) => {
    return value.name
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})
//Task7
async function handleError(){
    try {
        const data = await promiseOne
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
handleError()

//Activity 5
//Task 8

const invalidURL = "https://.github.com/users/mhsaikat"
fetch(invalidURL)
.then((response)=>{
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
    }
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("Error: Invalid URL or Network Issue !", error.message);
})

//Task 9

async function errorHandle(){
    try {
        const response = await fetch(invalidURL)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.error(error.message);
        
    }
}
errorHandle()