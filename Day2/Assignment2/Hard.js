//Solution 1
const txt ='Love is the best thing in this world. Some found their love and some are still looking for their love.' 
console.log(txt.match("love"));

//Solution 2
const txt1 = 'You cannot end a sentence with because because because is a conjunction'
console.log(txt1.match("because"));

//Solution 3
//No idea of RegEx!

// Solution 4
var baseSallary = 5000;
var annualBonus = 10000;
var onlineCourses = 15000;

var totalSallary = (baseSallary + onlineCourses )*12 + annualBonus;
console.log(totalSallary);