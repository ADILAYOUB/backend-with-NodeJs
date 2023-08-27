// Loops in JS 

//for loop

// for (let i = 0; i < 10; i++) {
//     console.log(i);

// }

// while loop
// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }

// do while loop
// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 10);

//! break and continue

//? Break
// it will brack the the nearst loop not the if statement
// for (let i = 0; i < 10; i++) {
//     if (i == 5) {
//         break;
//     }
//     console.log(i);
// }

for (let i = 0; i < 5; i++) {
    let str = '';
    for (let j = 0; true; j++) {
        str += '*';
        if(j == i){
            break;
        }
    }
    console.log(str);
}

//? continue 

// when we hit continue we again move to nearst loop for execution (take back to nearst loop)

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}

// switch case

// switch (value) {
//     case value1:
//         code block
//         break;
//     case value2:
//         code block
//         break;
//     default:
//         code block
// }

switch (2) {
    case 1: 
        console.log('adil');
        break;
    case 2:
        console.log('ayoub');
        break;
    default:
        console.log('bhat');
        break;

}

let expression = '-';
let a = 10;
let b = 5;

switch (expression) {
    case '+': 
        console.log(a + b);
        break;
    case '-':
        console.log(a - b);
        break;
    case '*':
        console.log(a * b);
        break;
    case '/':
        console.log(a / b);
        break;
    default:
        console.log('Invalid');
        break;

}