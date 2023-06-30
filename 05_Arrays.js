
/**
 * 
 * There is no collection in JAVASCRIPT. IN JS, we only have Arrays and MAP
 * SIZE is not fixed!!!
 * There are two important brackets in JAVASCRIPT
 * 1. [] -> creates and ARRAY
 * 2. {} -> creates and OBJECT
 */


let scores = new Array(); // creating empty array

let numbers = new Array(10); // creating array with size of 10

let emptyArray = [];

let myNumbers = [1,2,3,5,8,12]

let colors = ['Red', 'Blue', 'Black', 'Brown']

let random = ['color', 5, 'check', true, 10]

console.log(scores);

console.log(numbers);

console.log(emptyArray);

console.log(myNumbers);

console.log(colors);

console.log(random);

//print second element in Array
console.log(colors[1]);

//PUSH method -> pushing element to the end of array
colors.push('White')

console.log(colors);

//Adding elements to the beginning of Array -> 
colors.unshift('Orange')

console.log(colors);

console.log(colors.pop()); // returning last element of an Array and removing at the same time

console.log(colors);

//size of the array

console.log(colors.length);

for (let i = 0; i < colors.length; i++) {

   console.log(colors[i]);
    
}

//loop with values of Array
for (let value of colors) {
    
        console.log(value + ' check');

}

colors.forEach(element => {
    
        console.log(element + ' forEach');

});