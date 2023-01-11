//Solution 1
var base = prompt("Enter base:");
var height = prompt("Enter height");
var area = 0.5 * base * height;
console.log("The area of triangle is",area);

//Solution 2

var side1 = prompt("Enter side1:");
var side2 = prompt("Enter side2:");
var side3 = prompt("Enter side3")
var perimeter = side1 + side2+ side3;
console.log("The perimeter of triangle is",perimeter);
//Solution3
var length = prompt("Enter length");
var width = prompt("Enter width");
var perimeter = 2 *(length + width);
var area = length*width;
console.log("The perimeter of rectangle is",perimeter);
console.log("The area of rectangle is",area);

//Solution 4
var radius = prompt("Enter radius");
var area = 3.14 * radius * radius;
var circumference = 2 * 3.14 * radius;
console.log("The area is:",area);
console.log("The circumference is",circumference);

//Solution 9
var hrs = prompt("Enter hours");
var rph = prompt("Enter rate per hour");
var payOfThePerson = hrs * rph;
console.log("The Pay of the person is",payOfThePerson);

//Solution 10
var name = "Rishav Sinha";
if (length(name > 7)) {
    console.log("Your name is long");
    
}
else{
    console.log("Your name is short");
}

//Solution 11
let fname = "Rishav";
let lname = "Sinha";
if (length(fname) > length(lname)) {
    console.log(`Your first name , ${fname} is longer than your family name, ${lname}` 
    );
}
//Solution  12
let myAge = 20;
let yourAge = 21;
let dif = myAge - yourAge
console.log(`You are ${dif} years older than me.
 `);

 //Solution 13
 var birthYear = prompt("Enter Birth Year");
 const currentYear = 2023;
 var difference = currentYear - birthYear  
 var ageDif = 18 - difference
 if (difference>18 ) {
    console.log(`You are ${difference}. You are old enough to drive`);
 } else {
    console.log(`You are ${difference}. You will be allowed to drive after ${ageDif}`);
 }

 //Solution 14
var numberOfYears = prompt("Enter number if years you live");
var seconds = numberOfYears*365*24*60*60;
console.log(`You lived ${seconds} seconds`);


//Solution 15
var d = new Date();
console.log(d, '-');
console.logr(d, '/');

