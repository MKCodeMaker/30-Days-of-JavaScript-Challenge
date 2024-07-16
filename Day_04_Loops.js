// Activity 1: For Loop
// Task 1: Write a program to print numbers from 1 to 10 using a for loop.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Task 2: Write a program to print the multiplication table of 5 using a for loop.

for (let i = 5; i <= 5; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(i + '*' + j + ' = ' + (i*j));
    }
}


// Activity 2: For Loop
// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

let num1 = 1  
let sum = 0
while(num1 <= 10){
    sum = sum + num1;   
    
    num1++;
}
console.log(sum);


// Task 4: Write a program to print numbers from 10 to 1 using a for loop.

let num2 = 10
while(num2 >= 1){
    console.log(num2);
    num2--;
}


// Activity 3: Do..While Loop
// Task 5: Write a program to print numbers from 1 to 5 using a do..while loop.

let num=1
do{
    console.log(num);
    num++
}while(num <=5)


// Task 6: Write a program to calculate the factorial of a number using a do..while loop.

const number = 5
let i = number
let fact = 1

do{
    fact *= i
    i--
}while(i > 0)

console.log(`The factorial of ${number} is: ${fact}`);


// Activity 4: Nested Loop
// Task 7: Write a program to print a pattern using nested for loops:


let row1 = 5
for(let a=1; a <= row1; a++){ 
    let row1 = '';
    for(let b=0; b<a; b++){
        row1 += '*'
    }
    console.log(row1);
}


// Activity 5: Loop Control Statement
// Task 8: Write a program to print numbers from 1 to 10 but skip the numbers 5 using the continue statement.

for(let p=1; p <=10; p++){
    if(p==5){
    console.log('Detected 5');
    continue;
    }
    console.log(p);
}

// Task 9: Write a program to print numbers from 1 to 10 but skip the numbers 5 using the continue statement.

for(let q=1; q<=10; q++){
    if(q==7){
        console.log('Here is 7');
        break;
    }
    console.log(q)
}