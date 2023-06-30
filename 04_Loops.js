
//Loops are same with JAVA: for loop, while loop, do while

for (let i = 0; i < 5; i++) {
    
    console.log(i);

}


//old type of declaring variables ES6, always use LET instead of VAR when declaring variables
for (var j = 0 ; j < 5 ; j++) {

console.log(j);

}

console.log(j); // VAR variables are global scope variables 

let n1 = 0;

while (n1 < 3) {
    
    console.log(n1 + 'check');

    n1++

}

let n2 = 0;

do {

    console.log(n2 + ' check2');
    n2++;
    
} while (n2 < 3);

