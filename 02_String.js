let str1 = 'Java';

let str2 = "Script";

let str3 = 'awesome';

let result;

result = "The result variable is " + str1 + str2 + ' ' +  str3;

console.log(result);

//difference from Java: backtics for variable insertion

result = `The result variable is: ${str1}${str2} ${str3}`

console.log(result);