// first method
let a = 5;
let b = 7;
console.log("Before swap a =", a, "b = ", b);
let temp = a;
a = b;
b = temp;
console.log("After swap a =", a, "b = ", b);

// second method
let x = 5;
let y = 7;
console.log("Before swap x =", x, "y = ", y);
x = x + y;
y = x - y;
x = x - y;
console.log("After swap x =", x, "y = ", y);

// special method for java script
p = 5;
q = 7;
[p, q] = [q, p];
console.log("After swap p =", p, "q = ", q);