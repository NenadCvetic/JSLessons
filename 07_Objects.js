
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

//deleting a property
delete person.number_of_cars

console.log(person);

//checking a property in an object if it exists (True / False)
console.log("street" in address);

//we can put arrays inside of the objects
let course = {
    name : "JavaScript",
    url : "www.cydeo.com",
    subjects : ["Objects", "Functions", "Arrays", "Live Server"]
}


console.log(course.subjects);

console.log(course);

//we can loop with keys of objects using FOR IN LOOP
for (let key in course) {
    
        console.log(key + " : " + course[key]); //value which was array turned into string -> Objects,Functions,Arrays,Live Server

}

/**
 * 
 * In Cypress, we will have fixtures folder, in which we store JSON files (Similar to configuration.properties file in Selenium Framework)
 * 
 */


//creating function within an object (variables, objects, functions etc.)

let myCar = {
    make : "Dacia",
    color : "black",
    year : 2022,
    engine : {
        cylinders : 3,
        size : 1.0,
    },
    extras : ["AC", "Cruise control", "Sound system"],
    drive : function () {
        console.log("Running of LPG");
    }
}


myCar.drive(); //calling a method through an object, same as in JAVA

console.log(myCar.extras[1]); //same logic from API testing


