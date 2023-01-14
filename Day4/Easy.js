//Solution 1
var age = prompt("Enter your age");
dif = 18 - age
if (age >= 18) {
    console.log("You can drive");
} 
if (age < 18){
    console.log(`You have to wait for ${dif} years.`);
}

//Solution 2
var myAge = 20;
var yourAge = prompt("Enter your age");
dif = yourAge - myAge; 
if (myAge > yourAge) {
    console.log("I am older than you");
} else {
    console.log(`You are ${dif} older than me`);
}
//Solution 3
var a = prompt("Enter a value for a");
var b = prompt("Enter a value for b");
if (a > b) {
    console.log("a is greater than b");
} else {
    console.log("b is greater than a");
}
//Ternary Operator
(a>b) ? console.log("a is greater than be"): console.log("b is greater than a");

//Solution 4
var num = prompt("Enter a number");
if (num % 2 == 0) {
    console.log(`${num} is an even number`);
} else {
    console.log(`${num} is an odd number`);
}
