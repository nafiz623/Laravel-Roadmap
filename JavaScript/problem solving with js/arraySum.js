let array = [10, 20, 30, 40, 50, 100, 90, 80, 70, 60];
let sum = 0;
for (let i = 0; i < array.length; i++) {
    let element = array[i];
    let sum = sum + element;
}
console.log("Sum is", sum);