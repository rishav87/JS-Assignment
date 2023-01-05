//Solution 1
txt = 'There is no exercise better for the heart than reaching down and lifting people up.'
console.log(txt);

//Solution 2
txt2 = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(txt2);

//Solution 3

console.log(typeof('10')== typeof(10));
//Making it true
console.log(typeof(parseInt('10')) == typeof(10));

//Solution 4


console.log(parseFloat(9.8) == 10);
//Making it true
console.log(Math.round(9.8));

//Solution 5

var n1 = "python";
var n2 = "jargon";
console.log(n1.includes("on") && n2.includes("on"));

//Solution 6

var sent = "I hope this course is not full of jargon.";
console.log(sent.includes("jargon"));

//Solution 7

var s7 =Math.floor(Math.random()*100);
console.log(s7);

//solution 8
const num_12 = Math.floor(Math.random()*(100 - 50 + 1) + 50);
console.log(num_12);

//Solution 9
const num_123 = Math.floor(Math.random()*(255 - 0 + 1) + 0);
console.log(num_123);

//Solution 10

//Solution 11

console.log('1\t1\t1\t1\t1')
console.log('2\t1\t2\t4\t8')
console.log('3\t1\t3\t9\t27')
console.log('4\t1\t4\t16\t64')
console.log('5\t1\t5\t25\t125')

//Solution 12
txt4 = 'You cannot end a sentence with because because because is a conjunction'
res = txt4.substr(txt4.indexOf("because"),23);
console.log(res);
