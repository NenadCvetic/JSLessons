//no access modifiers, no method overloading, no method overriding

function add(a , b) { 
    
    console.log("Total is: " + (a + b)); //no return type function

}

add(10,20) // calling a function

//return type functions 
function multiply(a , b) {

    return (a * b)
    
}

console.log(multiply(10, 20));

//no overloading 
add(10, 20, 30) //we dont have function that will add 3 numbers, however this function will add first two numbers and ignore third one. Also we don't get error


/**another type of data type in JS. Functions -> first class citizens of JavaScript
 * 
 * 1. You can pass arguments to other functions
 *  (instead of a, b we pass function)
 * 2. We can return function from the function (return type is function)
 * 3. We can store a function as a variable 
 */

let divide = function (a , b) {

    return a/b
    
}

console.log(divide(10,2));

let anyFunction = divide;

console.log(anyFunction(25,5));