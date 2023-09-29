//NaN stands for Not a Number 
/**
 * It is a number 
 *  It doesn't actually mean not a number, rahter it gives notion of an invalid number 
 * example in linear search number no found we should return NaN 
 * 'adil' if we try to convert to number it will return NaN 
 * 
 *  NaN == NaN => false 
 *  because in Strict Equality if Type is NaN (on left side ) return false and don't check what is on the right side
 * same will be for the NaN on the right side 
 * 
 *   NaN == NaN 
 *   in the case of Abstract Equality 
 *   If the type(x) is same as the type(y) then 
 * return the result of performing Strict Equality Comparison x == y
 *! NaN  is the only premitive value in JS that doesn't follow identity property and is not equal to itself
 */

 let a = '10';
 let b = 'abc';
 let c = 'adil';
 let d = 10- c;
 console.log(a,b,c,d)
 console.log(isNaN(a));
 console.log(isNaN(b));
 console.log(isNaN(c));
 console.log(isNaN(d));

 /**
  *  This isNaN function coerces the argument before
  *  checking for NaN. Now String is not NaN, right??
  *  but when we convert String like "abc" to Number 
  *  it becomes NaN and hence isNaN returns true
  * 
  * isNaN is doing Coersion 
  */
let x = 9.8/Infinity  //{valueOf(){return 2}}//letx;//!NaN//0/0 //10/0//10/'adil';
console.log(x);
 console.log((typeof(x) == 'number' && isNaN(x)) ? 'NaN value' : 'not NaN Value');


 //! Number.isNaN(NaN)
 // This function will not do coersion 
 console.log(Number.isNaN(NaN)); 
 console.log(Number.isNaN('abc'))