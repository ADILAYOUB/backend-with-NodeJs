// Functions 

// functions are used to create reusable code
// functions in js are first class citizens 
// we can pass a function as an argument to another function or 
// return a function from another function

// function sayHello() {
//     block of code
//}   

// function expressions are used to create functions on the fly 
// let sayHello = function () {
//     block of code
// }

// if we don't put return it automatically reutrn undefined

function sayHello(x) {
    console.log(x + 10);
    return x*10;
   
}

let x = sayHello(10);

console.log(x)

// function takes input and excutes a piece of logic returns output