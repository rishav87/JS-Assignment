//Solution 1
//Could have used all the months which has 31 days together as || and months with 30 days together. And add Feb in default
var month = prompt("Enter month name")
switch (true) {
    case month == "January":
        console.log("January has 31 days");
        break;
     case month == "February":
        console.log("February has 28 days");
        break;
    case month == "March":
        console.log("March has 31 days");
        break;
        case month == "April":
            console.log("April has 30 days");
            break;
            case month == "May":
        console.log("March has 31 days");
        break;
        case month == "June":
        console.log("June has 30 days");
        break;
        case month == "July":
        console.log("July has 31 days");
        break;
        case month == "August":
        console.log("August has 31 days");
        break;
        case month == "September":
        console.log("September has 30 days");
        break;
        case month == "October":
        console.log("October has 31 days");
        break;
        case month == "November":
        console.log("November has 30 days");
        break;
        case month == "December":
        console.log("December has 31 days");
        break;
}
//Solution 2
var month = prompt("Enter month name")
switch (true) {
    case month == "January":
        console.log("January has 31 days");
        break;
     
    case month == "March":
        console.log("March has 31 days");
        break;
        case month == "April":
            console.log("April has 30 days");
            break;
            case month == "May":
        console.log("March has 31 days");
        break;
        case month == "June":
        console.log("June has 30 days");
        break;
        case month == "July":
        console.log("July has 31 days");
        break;
        case month == "August":
        console.log("August has 31 days");
        break;
        case month == "September":
        console.log("September has 30 days");
        break;
        case month == "October":
        console.log("October has 31 days");
        break;
        case month == "November":
        console.log("November has 30 days");
        break;
        case month == "December":
        console.log("December has 31 days");
        break;
}
if (month== "February") {
  var year = prompt( "Enter year:");
  if (year % 400 == 0) {
    console.log("February has 29 days");
  }  
  else{
    console.log("February has 28 days");
  }
} 