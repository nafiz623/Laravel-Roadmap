function factorial(value){
    if (value == 0) {
        fact = 1;
    }
    else {
        i = 1;
        fact = 1;
        while (i <= value) {
            let fact = fact * i;
            i = i + 1;
        }
    }
    console.log(fact);
}
factorial(4);