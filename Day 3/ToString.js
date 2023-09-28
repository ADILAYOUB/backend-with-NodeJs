// + operator => Addition Oerator 
/**
 * 
 */

// ToString()
console.log('Adil' + 'Ayoub')
/**
 * Both of them are already String 
 * so toprimitive conversion will also be a string
 * and we concatenate them 
 */

console.log(undefined + 'node')
/**
 * undefined gets converted into the string 'undefined'
 * and 'undefined' + 'node' = 'undefinednode'
 */

console.log('5' + null)
/**
 * one of them is already a string so both of them will comes as string 
 * '5' + 'null' = '5null
 */

console.log('Adil'+ true)
/**
 * 'Adil' + true = 'Adiltrue
 */

// [null , undefined] => ","
console.log('adil' + [null , undefined])
console.log('adil' + [null])