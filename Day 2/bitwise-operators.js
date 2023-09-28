// Comparison Operators
// ==, !=, >, <, >=, <= 
// > Greater than 
console.log(2 > 1);
// < Less than
console.log(2 < 1);
// >= Greater than or equal to
console.log(2 >= 1);
// <= Less than or equal to
console.log(2 <= 1);

//? will learn them in detail in coversion 
// == Equal abstract equality
console.log(2 == 1); 
// != Not equal abstract notequalto 
console.log(2 != 1);
// === Strictly equal
console.log(2 === 1);
// !== Strictly not equal
console.log(2 !== 1);



// String base operator 
// + Concatenation
console.log("Hello" + "World");
//? will learn them in detail in coversion


// Bitwise Operators
// These operators don't directyly operate on numbers,
// but instead operate on binary representation of the number 

// bitwise and => & 
console.log(2 & 1); // 2 = 1 0 & 1 = 0 1 and there & = 0
//bitwise or => |
console.log(2 | 1); // 2 = 1 0 | 1 = 0 1 and there | = 1 1
// bitwise xor => ^
console.log(2 ^ 1); // 2 = 1 0 ^ 1 = 0 1 and there ^ = 1 1
// bitwise not => ~
console.log(~2);
//left shift => <<
console.log(2 << 1); // it will convert 2 to 10 then left shift  and will that many zeros by the numbers present on the right side that is 1 0 0 => it shift the number by 1 position  

console.log(5 << 2) // 5 = 0 0 0 0 1 0 1 shift by 2 position it will look like 0 0 1 0 1 - -  and at both the vacent position we will add two zero
// it has very intresting porperty 
// if we do 1 << 1 it will give 2
// if we do 2 << 1 it will give 4 
// if we do 4 << 1 it will give 8 
// 2^2 => 2^3


// right shift => >>
console.log(5 >> 1); // 5 = 0 0 0 0 1 0 1 it will right shift every bit thus will loose i bit 
// and we have vaccent postion at the left most position - 0 0 0 1 0  and at the vaccient postion will be zero
// 8 >> 1 => 4
// 4 >> 1 => 2
// right shift on power of 2 will do division by 

// 8 >> 3 => 1