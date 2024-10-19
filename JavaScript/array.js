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