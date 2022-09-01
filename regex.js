// Task 1

/* 
In this task we are going to build up a regex which will check to 
see if a number is in a correct GBP currency format "£XX.XX", 
This will be built up over several behaviors, each of the console logs
is a separate behavior so you should aim to pass each one of them at a time
using the same regex
*/

//part 1
// create a variable called gbpRegex

//part 2
console.log("the regex should check to see if there is a £ at the start");

console.log(gbpRegex.test("£0.12"), "<< should be true");
console.log(gbpRegex.test("10.00"), "<< should be false");
console.log(gbpRegex.test("bananas"), "<< should be false");

//part 3
console.log("should contain a decimal place");

console.log(gbpRegex.test("£0.00"), "<< should be true");
console.log(gbpRegex.test("£1000"), "<< should be false");

//part 4
console.log("the number should have at least 1 number before the decimal");

console.log(gbpRegex.test("£0.12"), "<< should be true");
console.log(gbpRegex.test("£1.00"), "<< should be true");
console.log(gbpRegex.test("£9999.00"), "<< should be true");
console.log(gbpRegex.test("£.00"), "<< should be false");
console.log(gbpRegex.test("£A.00"), "<< should be false");

//part 5
console.log("Should only have 2 decimal places, which are numbers");

console.log(gbpRegex.test("£0.12"), "<< should be true");
console.log(gbpRegex.test("£1.00"), "<< should be true");
console.log(gbpRegex.test("£9999.000"), "<< should be false");
console.log(gbpRegex.test("£.0"), "<< should be false");
console.log(gbpRegex.test("£A.0A"), "<< should be false");
