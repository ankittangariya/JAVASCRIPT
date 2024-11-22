/*
        conversion to numbers

*/


//let score = "33"; // valueInNumber will print 33 after converting 
//let score = "33abc"; // valueInNumber will print NaN(not a number)
//let score = null; //valueInNumber will print 2
//let score = undefined; //valueInNumber will print NaN(not a number)
let score = false; // valueInNumber will print 1(true), 0(false)

console.log(typeof score);
console.log(typeof (score));
let valueInNumber = Number(score);//to convert string into number
console.log(typeof valueInNumber);
console.log(valueInNumber);
