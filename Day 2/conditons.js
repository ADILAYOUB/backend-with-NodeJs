// Condition in JS

// what is condition
// if statements are used to execute a block of code if a condition is true
// else statements are used to execute a block of code if a condition is false
// else if statements are used to execute a block of code if a condition is false and if a condition is true
/*
if (conditon) {
    condition is true 
   code block
  
} else {
    condition is not true 
    code block
}

*/

if (2 > 1) {
    console.log('adil');
} else {
    console.log('ayoub');
}

// if else if 
// if (conditon) {
//     condition is true
//     code block
// } else if (conditon) {
//     condition is true    
//     code block
// }
// else {
//     condition is not true   
// }
    
if (2 > 1) {
    console.log('Bhat');
} else if (2 > 3) {
    console.log('adil');
} else {
    console.log('ayoub');
}


// power operator in JS  or exponentiation operator 
// power operator is used to raise a number to a power 
 console.log(2 ** 3);


 //? Question 

 // if ((2>1) && ('adil')) ==> this will be true 
  // because in JS filled string is always considered as true value 
  // T T = T

 // console.log((2>1) && ('adil')); // this will print adil because of short circuiting concept


 // condition inside if else if always gets converted into boolean 
 // will do this in coversion 