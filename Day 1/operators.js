//! operators: + - * / % ++ --

// + is used for addition
// * is used for multiplication
// / is used for division
// % is used for modulus
// ++ is used for increment
// - is used for subtraction
// -- is used for decrement

console.log(12 + 12);
console.log(12 - 12);
console.log(12 * 12);
console.log(42 / 12);
console.log(42 % 12);

// assignment operator is used to assign value to a variable they are : += -= *= /= %=
let x = 10; // this is assign the value 10 to the variable x

// 1. += is used for addition 
console.log(x += 2); // x = x + 2 first add 2 to x and then assign it to x

// 2. -= is used for subtraction 
console.log(x -= 2); // x = x - 2 first subtract 2 from x and then assign it to x

// 3. *= is used for multiplication 
console.log(x *= 2); // x = x * 2 first multiply x by 2 and then assign it to x

// 4. /= is used for division 
console.log(x /= 2); // x = x / 2 first divide x by 2 and then assign it to x

// 5. %= is used for modulus
console.log(x %= 2); // x = x % 2 first % x by 2 and then assign it to x

// division operator is a floor divisioin operator 5/2 = 2.5 it will give a normal division

// note: if we want to have floor deivisions 
// 1 way ==> is we can use parseInt(5/2)
// 2 way ==> is we can use Math.floor(5/2)

//! logical operators
console.log(true && false); // false
console.log((10 > 5) && (7 < 6)); // false
console.log((10 > 5) || (7 < 6)); // true
console.log((10 > 5) || (7 > 6)); // true


// typeof is used for data type of a value 
console.log(typeof true); // boolean
console.log(typeof "Hello"); // string
console.log(typeof 12); // number

console.log(typeof null); // null
console.log(typeof undefined); // object

console.log(typeof { name: "John" }); // object

console.log(typeof [1, 2, 3]); // object

//symoble 
console.log(typeof Symbol("key"));

// * NAN
console.log(typeof NaN); // number


//! AND

//! OR

//! NOT

/**
    //OR

    a  b  result
    T  T  T
    T  F  T
    F  T  T
    F  F  F

    //AND

    a  b  result
    T  T  T
    T  F  F
    F  T  F
    F  F  F

    // NOT

    a  b  result
    T  T  F
    T  F  T
    F  T  F
    F  F  T


 */

console.log(4 && 0); // 0
console.log(4 || 0); // 4
console.log(0 && 5); // 5
console.log(0 || 5); // 5 // short circuit concept
console.log(4 && 5); // 5
console.log(4 || 5); // 4
console.log(-4 || 5); // -4