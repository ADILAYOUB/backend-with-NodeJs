console.log(12);
console.log(12.50);
console.log(-45);
console.log(true);

//! Types of values in JS
// 1. Null 2. Undefined 3. Boolean  4. String 5. Number 6. Symbol 7. Object

// 1. Null is a special value that represents no value. It is a data type of its own 
// It is one of JavaScript's primitive values. It is often used to indicate an 
//? intentional absence of a value.
console.log(null);

// 2. Undefined is a value that represents the absence of a value. It is a data type of its own 
console.log(undefined);

// 3. Boolean is a data type
// It is one of JavaScript's primitive values. It is often used to represent the truth / false value of an expression. 
console.log(true);
console.log(false)

// 4. String is a data type 
// It is one of JavaScript's primitive values. It is often used to represent a sequence of characters. 
console.log("Hello");
console.log("Hello World!"); // this is a text 
console.log('this is the single quote string');
console.log(`this is a backtick string`); 
// JS don't distinguish betweeen charater and string. 
// we don't have signle character data type in JS 

// 5. Number is a data type It is one of JavaScript's primitive values. It is often used to represent a numeric value.
console.log(12);
console.log(12.50);
// 6. Symbol is a data type It is one of JavaScript's primitive values. It is often used to represent a unique value.
console.log(Symbol("key")); // it an immutable data type 


// 7. Object is a data type It is often used to represent a collection of data.
console.log({ name: "John" }); // in store key value pair in collection it acts as Map | HashMap 


/**
 Null vs undefined => learn in coversion leacture
 */

//! in JS we have both 0 and -0 
// why 0 and -0 are different 
//  one area where this distinction can matter is in certain mathematical calculations and edge cases,
//  particularly when dealing with advanced numeric or scientific computations. Developers working with 
//  such specialized scenarios may need to consider the sign of zero, but for typical web development and 
//  everyday programming tasks, treating 0 and -0 as the same value is usually sufficient.
console.log(0);
console.log(-0);