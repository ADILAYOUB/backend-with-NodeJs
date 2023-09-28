
console.log(12 - 2) // both of them are number so we just subtract 
console.log(undefined - 3)
// undifined is not a valid number so we make it undergo ToNumber abstract operation 
// thus it return NaN - 3 and any number when you do nay operation with Nan it result into NaN 

console.log(null - 4)
/**
 * null is not a valid number  so we make it undergo ToNumber abstract operation 
 * ToNumber(null ) = +0
 * and 0 - 4 = -4
 */

console.log("120" - 5)
/**
 * "120" is a string so we make it undergo ToNumber abstract operation
 * ToNumber("120") = +120
 * and 120 - 5 = 115
 */

console.log('12fd' - 20)
/**
 * "12fd" is a string so we make it undergo ToNumber abstract operation
 * ToNumber("12fd") = +NaN
 * NaN
 */

// console.log(Symbol('125') - 5)
/**
 * Symbol('125') is a symbol so we make it undergo ToNumber abstract operation
 * ToNumber(Symbol('125')) => can't convert Symbol value into number
 */

console.log(4 - true)
/**
 * true is a boolen value of 1 
 * ToNumber(true) = 1
 * and 4 - true = -3
 */