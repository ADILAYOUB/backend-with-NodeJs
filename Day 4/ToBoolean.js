// to Boolean 
/**
 * The toBoolean abstract operation converts the given type to a Boolean value 
 * ToBoolean works a bit differently when compared to ToString or  ToNumber
 * it maintains a list of values which when received as an argument returns False 
 * and everything aprat from the list of values returns True. 
 * it mentain a list of falsy values we have 
 * ==============================================================
 * Null 
 * undefined
 * NaN
 * +0
 * -0
 * '' (empty String)
 * ===============================================================
 * false 
 * if we get any of these values as an argument it returns false 
 *
 * 
 * How can we test the ToBoolean operation 
 * we can use logical NOT operator (!)
 */

console.log(!0);
// 0 --> falsy value 
// and ToBoolean(0) => false
// hence !0 = true;

console.log(!(-5))
/**
 * -4 --> truthy value
 * and ToBoolean(-4) => true
 * !(-4) = !true = false
 */

// on object  it is a truthy value
console.log(!{})
/**
 * {} --> truthy value
 * and ToBoolean({}) => true
 * !{} = !true = false
 */

console.log(!(console.log(0)))
/**
 * console.log(0) prints the value 0 but it returns undefined 
 * and ToBoolean of undefined is false
 * and !(undefined) = !false = true
 */