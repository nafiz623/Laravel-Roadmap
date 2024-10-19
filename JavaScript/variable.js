var number = 12; // variable
console.log(number); // print variable
console.log(typeof number); // data type of variable

var nam = "apple"; // string variable
console.log(nam);
console.log(typeof nam);

var isCool = true; // boolean variable
console.log(isCool);
console.log(typeof isCool);

var countryName = `Bangladesh`; // `` is another method of define string
console.log(countryName.toLowerCase()); // uppercase to loarcase string
console.log(countryName.toUpperCase()); // loarcase to uppercase string
console.log(countryName.indexOf("l")); // string searching method
console.log(countryName.split('d')); // dividing string method

var number1 = 25;
var number2 = "15.5";
number2 = parseFloat(number2); // string to float type custing also possible for another data types
console.log(number1 + number2);

var num1 = 25.5;
var num2 = "15.5";
num2 = +num2; // another method of type custing
var sum = num1 + num2;
sum = sum.toFixed(3); // fixed limit of float
console.log(sum);

var nm = 12;
nm = ''+nm; // intiser to string method
console.log(typeof nm);

let nmbr = 20; // changeable variable
const pi = 22/7; // not changeable variable