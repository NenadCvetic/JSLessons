
/**
 * 
 * First solution for dealing with asynchronous nature of JavaScript is using callback functions
 * In 2017 they introduced async functions, await keyword
 */

function waitingForSomeData(myCallback) {
    let dataN;
    setTimeout(() => {
        console.log("Backend getting the data");
        dataN = "Cydeo";
        myCallback(dataN);
    }, 5000);
    return dataN;
}

function functionThatGetsData (info) {
    console.log("I need to use backend data " + info);
}

waitingForSomeData(functionThatGetsData);

//alert("This is JavaScript alert") -> JavaScript commands like alert and prompt, they only work in browser with live server!!!