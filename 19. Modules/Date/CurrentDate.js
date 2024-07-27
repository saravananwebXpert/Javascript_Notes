//! 4. program to display the date
const date = new Date();
console.log(date);
const n = date.toDateString();
const time = date.toLocaleTimeString();

console.log("Date: " + n);
console.log("Time: " + time);

// converting date to number
const result = date.getTime();
console.log(result);    