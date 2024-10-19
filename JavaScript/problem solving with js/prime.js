var num = 13;
for (var i = 2; i < num-1; i++) {
    if (num % i == 0) {
        console.log("Your number is a prime number.");
    }
    else{
        console.log("Your number is not a prime number.");
    }
}