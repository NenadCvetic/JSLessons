/**
 * in Java, we can make connection to Database, get some data, and we use it inside of our code
 * 1. Connect to DB
 * 2. We get the data
 * 3. We wait until data is received
 * 4. Then rest of the code is executed
 * 
 * 
 * in JavaScript
 * 1. While we try to connect to DB
 * 2. The rest of the functions do not wait -> ASYNC CODE
 * 
 */


//check this 



function waitingForSomeData() {
    let dataN;
    setTimeout(() => {
        console.log("Backend getting the data");
        dataN = "Cydeo";
        console.log(dataN);
    }, 5000);
    return dataN;
}

function functionThatGetsData (info) {
    console.log("I need to use backend data " + info);
}

let data = waitingForSomeData(); //calling server connection, getting the data and storing it to a variable

functionThatGetsData(data); // this function doesn't wait of the result of the previous action. 






