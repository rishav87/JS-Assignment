//Solution 1
/*var score = prompt("Enter a score out of 100");
if (score>= 80){
    console.log("A");
}
if (score >70 && score <=89 ) {
    console.log("B");
}
if (score > 60 && score <=69) {
    console.log("C");
}
if (score > 50 && score <=59) {
    console.log("D");
}
if (score > 0 && score <=49) {
    console.log("F");
}

//Solution 2
var month = prompt("Enter the name of a month");
switch (true) {
    case month == "Spetember" || "October" || "November":
        console.log("The season is Autumn");
        break;
    case month == "December" || "January" || "February":
        console.log("The season is Winter"); 
        break;
    case month == "March" || "April" || "May":
        console.log("The season is Spring");
        break;
    case month == "June" || "July" || "August":
        console.log("The season is summer");
        break;
}
*/
//Solution 3

var dayName = prompt("Enter the name of the day")
if (dayName == "Saturday"|| "saturDay" || "saturday" || "SATURDAY"  || "SaturDay" ) {
    console.log(`${dayName} is a weekend day`);
} else {
    console.log(`${dayName} is a working day`);
}