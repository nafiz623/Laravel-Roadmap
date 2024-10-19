let array = [10, 20, 30, 40, 50, 100, 90, 80, 70, 60];
let max = array[0];
for (let i = 0; i < array.length; i++) {
    let elements = array[i];
    if (elements > max) {
        max = elements;
    }
}
console.log("Maximum value is", max);