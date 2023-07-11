
//we are using new PROMISE keyword(function(resolve,reject))

let stateOfTheWebPage = function (state) {
    
    return new Promise(function(resolve, reject){
        if(state) {
            resolve("Page is loaded")
        }else {
            reject("Page is not loaded yet")
        }
    })
}


console.log(stateOfTheWebPage (true).then(function (anyName) {
    console.log(anyName);
}));

console.log(stateOfTheWebPage(false).catch((errorMessage) => {
    console.log(errorMessage);
}));


new Promise(function(resolve, reject){

    setTimeout(() => {
        resolve(1)
    }, 3000);
}).then((blabla) => {
    console.log(blabla);
    return blabla *2;
}).then((result2) =>  {

    console.log(result2);
    return result2 *2;
}).then((result3) => {

    console.log(result3);
    return result3 *2;
}).then((check4) => {
    console.log(check4);
})