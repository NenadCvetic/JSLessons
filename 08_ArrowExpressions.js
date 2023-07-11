
let x = function (a) {
    return 5*a;
}

let y = a => 5*a; //LAMBDA Arrow function expression in JavaScript

console.log(y(5));

let d = (a,b) => 5*a*b; //passing two arguments in arrow function

console.log(d(3,5));

//map function that comes with arrow expressions
let arr = [5,10,20];

let newArr = arr.map(x => x*2) //multiples elements from arr array with 2 and returns new array

console.log(newArr);

//varArgs in Java

let mid = [3,4]

let arr2 = [1,2,...mid,5,6]

console.log(arr2);


function howManyElements(...theArgs) {

    console.log(theArgs.length);
    
}

howManyElements();

howManyElements(5);

howManyElements(3,4,5,6,7)

function multiply(multiplier, ...theArgs) {
    return theArgs.map(element => multiplier * element)
}


console.log(multiply(5,1,2,3,4,5)); // [5, 10, 15, 20, 25]

let str = "Cydeo"

let chars = [...str];

console.log(chars);