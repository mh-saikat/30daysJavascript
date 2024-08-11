export const user = {
    name:"Saikat",
    isLoggedIn: true,
    email:"mh@mh.com"
};

export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
export const divide = (a, b) => a / b;

export function printMe(user){
    console.log(`My name is`, user);
    
}