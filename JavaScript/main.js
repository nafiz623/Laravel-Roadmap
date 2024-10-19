console.log("Hello World"); // for printing string
console.log(12); // for printing integer
console.log(22.5); // for printing float

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
console.log(countryName.toLowerCase()); // uppercase to lowercase string
console.log(countryName.toUpperCase()); // lowercase to uppercase string
console.log(countryName.indexOf("l")); // string searching method
console.log(countryName.split('d')); // dividing string method

var number1 = 25;
var number2 = "15.5";
number2 = parseFloat(number2); // string to float type casting also possible for another data types
console.log(number1 + number2);

var num1 = 25.5;
var num2 = "15.5";
num2 = +num2; // another method of type casting
var sum = num1 + num2;
sum = sum.toFixed(3); // fixed limit of float
console.log(sum);

var nm = 12;
nm = ''+nm; // integer to string method
console.log(typeof nm);

let number = 20; // changeable variable
const pi = 22/7; // not changeable variable

// this is single line comment.

/**
 this is
 multi line
 comment
 */

// arithmetic operators

var num1 = 12;
var num2 = 34;
var result1 = num1 + num2; // plus
console.log(result1);

var num3 = 12;
var num4 = 34;
var result2 = num4 - num3; // minus
console.log(result2);

var num5 = 12;
var num6 = 34;
var result3 = num5 * num6; // multiplication
console.log(result3);

var num7 = 12;
var num8 = 34;
var result4 = num7 / num8; // division
console.log(result4);

var num9 = 12;
var num10 = 34;
var result5 = num9 % num10; // floor division
console.log(result5);

var num11 = 12;
num11++;              // increment operator
console.log(num11);

var num11 = 12;
num11--;              // decrement operator
console.log(num11);

var num12 = -5;
var absoluteNumber = Math.abs(num12); // absolute value of a number
console.log(absoluteNumber);

var num13 = 5.1234;
var num14 = 5.5678;
var num15 = 5.1243;
var num16 = 5.9990;
var round = Math.round(num13); // smallest integer
var round2 = Math.round(num14); // biggest integer
var ceiling = Math.ceil(num15); // biggest integer always
var floor = Math.floor(num16); // smallest integer always
console.log(round);
console.log(round2);
console.log(ceiling);
console.log(floor);

var num17 = Math.random() * 100;
var result6 = Math.round(num17); // random number
console.log(num17);

// control statement

var number1 = 100;
var number2 = 300;
var number3 = 200;
if (number1>number2 && number1>number3){
    console.log("Number 1 is largest.");
}
else if (number2>number1 && number2>number3){
    console.log("Number 2 is largest.");
}
else {
    console.log("Number 3 is largest.");
}

var array = [10, 20, 30, 40]; // an array

console.log(array[2]); // array index no 2 print

array[1] = 200; // set new value of index no 1

console.log(array); // print the array

var position = array.indexOf(40); // index number of value 40

console.log(position); // show the position

array.push(50); // add elements in last position

array.pop(); // remove the last element of array

array.unshift(0); // add elements in first position

array.shift(); // remove the first element of array

array.slice(1, 2); // start and end control

console.log(array.length); // size of array

// looping

var i = 0;
while (i <= 10){
    console.log(i);
    i = i + 1;
}

for (var i = 0; i <= 10; i++) {
    console.log(i);
}

var array = ['a', 'b', 'c', 'd', 'e'];

for (var i = 0; i < array.length; i++) {
    var alphabet = array[i];
    console.log(alphabet);
}

// function statement

function print(){
    console.log("Hello World.");
}
print();

function doubleIt(number){
    var result = number * 2;
    return result;
}

var double = doubleIt(5);
console.log(double);


// switch statement

var number = 100;
switch (number){
    case 1000:
        console.log("it's 1000.");
        break;
    case 500:
        console.log("it's 500.");
        break;
    case 100:
        console.log("it's 100.");
        break;
    case 50:
    case 10:
    case 0:
        console.log("it's less then 100.");
        break;
    default:
        console.log("i don't know what is it.");
}

// object

var student1 = {name: "David", roll: 101, class: 12}; // object define
var student2 = {name: "Joni", roll: 102, class: 11};
var student3 = {name: "Jen", roll: 103, class: 10};

console.log(student1); // print the object
console.log(student2);
console.log(student3);

var rollNo1 = student1.roll; // access property method 1
var rollNo2 = student2["roll"];  // access property method 2

var rollInfo = "roll"; // access property method 3
var rollNo3 = student3[rollInfo];

console.log(rollNo1); // print property
console.log(rollNo2);
console.log(rollNo3);

student1.name = "John Weak"; // update property method 1
student2["class"] = 10; // update property method 2
student3[rollInfo] = 100;  // update property method 3

console.log(student1); // print property after update
console.log(student2);
console.log(student3);

student1.address = "America"; // add a new property
console.log(student1);