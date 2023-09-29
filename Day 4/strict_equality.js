//What is difference between == and === ?

// ==  Abstract equality or  IsLooselyEqual ( x, y )
// === Strictly equality or IsStrictlyEqual ( x, y )
// https://262.ecma-international.org/#sec-testing-and-comparison-operations7.2.14 and 15 
// 

console.log(NaN === 123)
console.log(NaN === NaN)
console.log(123 === 123)
console.log(123 === 3)
console.log(+0 === -0)
console.log(-0 === +0)
console.log(undefined === undefined)
console.log(null === null)
console.log('adil' === 'adil')
// console.log({} ==={}); // false always 
let x = {};
console.log(x === x)

console.log(Symbol('key') === Symbol('key'))
let z = Symbol('adil')
console.log(z === z)