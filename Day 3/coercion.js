
// there are mainly 4 pillers in JS

//! 1. Scopes 

//! 2. Asynchronous programming

//! 3. Objects

//! 4. Coercion 

//! Coercion 

console.log('1'+'2')
console.log(1+'2')
console.log('1'-'1') // this is no where seen in the other language like c cpp or java 




// Coercionit stands for type inter conversion

// 1. Implicit coercion: (language automatically doing interconversion)


// 2. Explicit coercion: (one is manually doing interconversion)


// in C C++ java etc type exists for veriables (int a = 10)
// where as in JS language type exists for values (let x = 10 and later x = 'str')

// How JS handles Coercion 
/*
 for this we have we have to know Abstract Operations
 Abstract operatios are not not part of the ECMAScript language they
  are defined here to solely to aid the specification of the sematics 
  of the ECMAScript language.

They there for end user to understand the documentation and can't be used by them.

2. Type Coversion => ECMAScript impilicit performs autonatic type conversion as needed.
Abstract operations are polymorphic operation 
*/

// First Astraction operation is 

// 1. ToPrimitive : The toPrimitive abstract operation takes an input argument and an optinal preferred type argument.
// this operation converts the input to a non-object type value (primitive value). If an argument is is capable of  getting 
// converted into more thatn one primitive type then the function uses Preferred type argument to resolve it .

// As we said this also a abstract operation that means it is conceptual we can't invoke it but JS internally can.

// Assert : means verify 
// see doc for the algorithm 

// derived from the algorithm => OrdinaryToPrimitive(Object, valueOf()) 
// if hint/preferred type is a number then on input argument we call valueOf() function to get the number 
// and if it doesn't give primitive we call toString() function to get the string.
// otherwise if hint argument is string then we first call toString() and then valueOf(). 


// thus we came to the conclusion
/*
  if hint ===> "Number" then we call valueOf() then toString()

  if hint  ===>" String" then we call toString() then valueOf()
    1 - "1"





    2. ToString ==> Primitive Operation
       converts a value to a string. not the sybol => typeconverstion error
       ToString ==> calls toPrimitve internally for the object => where hint == "hintString" and resutl and will 
       apply toString on the result. )


       1 - 'abc' NaN
       undefined - 10 => NaN
       null - 9 =>  -9
       NaN - NaN => NaN
       Infinity -> Infinity 
       Infinity - Infinity => NaN
       3 / 0 => Infinity
       2 / 'number' => NaN
       true - 8 => -7 => true gets converted to 1 and that is - by 8

      two number operation 
       '' => 0
       '0' => 0
       '-0' => -0
       '3.124' => 3.124
       '0.' => 0
       '.' => NaN
       '123' => 123
       '12 + 3' + 4 => NaN
       'a' - 4 = NaN
       'abc' + 4 => NaN
       true + 'false' => NaN and  true - 'false' => NaN
       [null] -9 = -9 => because if we have and array of 
          1. [null] convert into 0
          2. [undefined] convert into 0
          3. ['0'] convert into 0
          4. ['] convert into 0
          5. [1,2,3] convert into NaN

       When wever in an numaric operation we don't have a number, ToNumber() is called for example in 
       subtraction operation. 

       10 - '070' = -60
       '070' - 1 = 69

       10 - {'a': 1} = NaN

       10 - {'a': 10, valueOf(){reutrn 8;}} = 2
       10 - {'a': 10 , valueOf() {return{};} , toString() {return '5'}} => 5

       default behaviour
       a = {'x': 10}
       a.toString() => '[object Object]'
       a.valueOf() => {'x': 10}

       let x = {'x': 10}
       x.a => 10;
       x.b => 30;
       x
       {'a': 10, 'b' : 30}


       a = {'a': 10, 'b': 20} => {a: 10, b: 20}
       a.a=3 => 3
       a => {a: 3, b: 20}
       a.a = 3
    / see algo in  documentation  
*/


console.log(12 - 2)