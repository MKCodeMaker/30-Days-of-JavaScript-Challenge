// Activity 1: If-Else Statements
// Task 1: Wirte a program to check if a number is positive, negative, or zero, and log the result to the console.

let number = 5
let result;

if(number > 0){
    result = "Positive";
}else if(number <0){
    result = "Negative";
}else{
    result = "Zero";
}

console.log(result);


// Task 2: Write a program to check if a person is eligible to vote (ag>=18) and log the result to the console.

const age = 20
let vote;

if(age >= 18){
    vote = "you are eligible for vote";
}else{
    vote = "you are not eligible for vote";
}

console.log(vote);


// Activity 2: Nested If-Else statements
// Task 3: Write a program to find the largest of three numbers using nested if-else statement.

const num1 = 4
const num2 = 50
const num3 = 370
let largest;

if(num1 >= num2){
    if(num1 >= num3){
        largest = num1;
    }else{
        largest = num3;
    }
}else{
    if(num2 >= num3){
        largest = num2;
    }else{
        largest = num3;
    }
}

console.log(largest);


// Activity 3: Switch Case
// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

const dayNumber = 5
let day;

switch (dayNumber){
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thrusday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    case 7:
        day = "Sunday";
        break;
    default:
        day = "you are enter a invalid digit.";
}

console.log(day);

// Task 5: Write a program that uses a switch case to assign a grade('A','B','C','D','F') base on a score and log the grade to the console.

const yourScore = 66
let grade;

switch (true){
    case (yourScore >= 90):
        grade = "A";
        break;
    case (yourScore >= 70):
        grade = "B";
        break;
    case(yourScore >= 50):
        grade = "C";
        break;
    case (yourScore >= 30):
        grade = "D";
        break;
    case (yourScore >= 0):
        grade ="F";
        break;
    default:
        grade = "Invalid score";
}

console.log(grade);


// Activity 4: Conditional(Ternary) Operator
// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

const value = 332
let output = (value % 2 == 0)? "even" : "odd" ;

console.log(output);


// Activity 5: Combining Conditions
// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

const year = 2025
let isLeapYear;

if ((year % 4 == 0 && year % 100 !==0 ) || (year % 400 === 0)){
    isLeapYear = "true";
}else{
    isLeapYear = "false"
}

console.log(isLeapYear);
 