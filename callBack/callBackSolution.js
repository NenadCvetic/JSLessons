
function waitingForSomeData(myCallback) {
    let dataN;
    setTimeout(() => {
        console.log("Backend getting the data");
        dataN = "Cydeo";
        myCallback(dataN);
    }, 5000);
    //return dataN;
}

function functionThatGetsData (info) {
    console.log("I need to use backend data " + info);
}

waitingForSomeData(functionThatGetsData);