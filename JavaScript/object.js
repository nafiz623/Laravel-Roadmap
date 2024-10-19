// object

var student1 = {name: "David", roll: 101, class: 12}; // object define
var student2 = {name: "Joney", roll: 102, class: 11};
var student3 = {name: "Jeney", roll: 103, class: 10};

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