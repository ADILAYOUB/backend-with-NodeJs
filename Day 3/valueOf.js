let a = {"english": 10, "maths": 20, "science": 30};
console.log(a.toString()); // returns "[Object Object ]"
console.log(a.valueOf()); // returns  {"english": 10, "maths": 20, "science": 30}


// Array [] // object 
// for array => valueOf() returns same array 
// toString() will print the values of the array without the brackets 
let x = [1,2,4,5];
console.log(x.toString())
console.log(x.valueOf())

// object {}
//! ValueOf and toString() are not abstract operation that means we can call them 
// by default toString(0) on an object returns "[Object object]"
// and by default valueOf(0) on an object returns same Object  
// check valueOf.js

console.log('adil'+ {'a':10}) // check The Additional Operator and toPrimitive()
/**
 * 'adil' is already a primitive => String type
 *  {'a' : 10 } is not a primitive , so we call toPrimitive() without a hint, 
 *  means hint => number
 *  we call first valueOf() on {'a' : 10 } -> and it returns the same object and 
 *  call toString() --> toString() returns '[object Object]' which is a string that is primitive 
 *  and we concatenate it with 'adil' with '[object Object]' returns 'adil[object Object]'
 */

// primitive with hint 

console.log(10 - {'a':10})
/**
 * 10 is already a number
 * {'a':10} is goinng to get converted ToNumber, and this ia an object, 
 * for object we call ToPrimitive with hint Number, 
 * first we call valueOf => it returns the same object --> {'a':10}
 * then we call toString --> it returns '[Object object]' which is primitive
 * so call ToNumber on '[Object object]' and it returns NaN
 *  10 - NaN = NaN 
 */

let z = {'b':90 , valueOf() {return 2}}
console.log(z - 10)
/***
 * here we are overriding the valueOf() method which returns 2 
 *  z is an object, we need to pass it to ToPrimitive with hint Number
 *  we call valueOf() which returns 2, which is a primitive 
 *  z becomes 2, 
 *  10 is already a primtive type 
 *  2 - 10 = -8
 */

let s = {'b':90 , valueOf() {return 2} , toString() {return 'custom';}}
console.log(s - 10)
console.log(s + "adil")

// toString() return error 

console.log('adil' + {'a': 90, valueOf(){return {}}, toString() {return {}}})