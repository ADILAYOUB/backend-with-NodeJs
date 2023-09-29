let a = 5; 
if(a) { // as a is truthy value
    console.log('Hi adil'); // this will get printed 
} 
if(a == true){ // here one of the operand is boolen so it will get converted ToNumber which returns 1, 5 == 1 => false 
    console.log('bye bye ') // This will not get prinited 
}

let ans = 0;
for(let i = 0; i<'23' ; i++){
    ans++;
}

console.log(ans); // 23 