console.log("Enter Principal Amount");
var p = 5000
console.log(p);
console.log("");

console.log("Enter rate of interest per year");
var r = 2
console.log(r);
console.log("");

console.log("Enter time period (in years)");
var t = 3
console.log(t);
console.log("");

var i = (p * r * t) / 100

console.log("Your value after simple interest : " + (p + i));
console.log("Your simple interest : " + i)