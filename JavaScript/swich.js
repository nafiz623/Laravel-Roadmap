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