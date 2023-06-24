// Order of operators in JavaScript is same with JAVA

console.log(4+5/5);

console.log(4+4*(-1) - 8/2);

//assignment operators

let x = 5;

x+= 5;

console.log(x);

//comparison: similar to JAVA with some differences

let one = 1 ;

let one_again = 1;

let one_string = "1";


console.log(one_again == one_string); // true - since its only comparing values, not data type

console.log(one_again === one_string); //false - its comparing values and data types, therefore we are getting false

//Logical operators

console.log((5 < 2) && (2 <5)); //false

console.log((5>2) && (6>3)); //true 

//Control flow statements: if / if else / switch / break / continue -> same in JAVA

let num1 = 100;

let num2 = 10;

if(num1 > num2) {
    console.log("Number 1 is bigger");
}else {
    console.log("Number 2 is bigger");
}

//ternary operators

let age  = 25 ;

let isEligible = age > 18 ? true : false;

console.log(isEligible); //true 

//switch statement

let month = 2;
let dayCount;

switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:

    dayCount = 31;
        
        break;

        case 4: case 6: case 9: case 11:

        dayCount = 30;

        break;

        case 2:

        dayCount = 29

        break;

    default:
        dayCount = -1;
        break;
}

console.log(dayCount);




