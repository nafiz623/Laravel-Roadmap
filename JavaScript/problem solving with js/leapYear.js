function leapYear(yearValue){
    let dicition = yearValue % 4;
    if (dicition == 0) {
        console.log("This is a leap year.");     
    }
    else {
        console.log("This is not a leap year.");
    }
}

leapYear(2004);