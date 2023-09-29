console.log(null == undefined)
console.log( undefined == null)
console.log(10 == '10') // '10' is string so will pass it to ToNumber('10') it returns number 10
// 10 == 10 = true

console.log(10 == '12') // '12' is string so will pass it to ToNumber('12') it returns number 12
// 10 == 12 = false

console.log(false == 0) // ToNumber(false) => 0 , 0 == 0 = true
console.log(true == 10 ) // ToNumber(true) => 1 , 1 == 10 = false

// for object  
console.log(10 == {valueOf(){return 10}})// ToPrimitive(valueOf(){return 10}) => hint: number , 10 == 10 => true