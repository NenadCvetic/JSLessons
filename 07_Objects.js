
let person = {
    firstName : "Mike",
    lastName : "Tyson",
    age : 28

}

console.log(typeof person);

console.log(person); //JSON - JAVASCRIPT OBJECT NOTATION

console.log(person.lastName);


let address = {

    'building no' : 5555,
    street : 'Pustorecka 8a',
    state: 'Serbia',
    city : 'Belgrade'

}

console.log(address);

console.log(address["building no"]);

//adding new property to an Object
person.number_of_cars = 2;

console.log(person);