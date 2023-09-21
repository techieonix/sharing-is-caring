
// var p = prompt("Enter Principal Amount")
// var r = prompt("Enter rate of interest per year")
// var t = prompt("Enter time period (in years)")
// var n = prompt()


console.log("Enter Principal Amount");
var p = 5000
console.log(p);
console.log("");

console.log("Enter rate of interest per year");
var r = 2 / 100
console.log(r);
console.log("");

console.log("Enter time period (in years)");
var t = 3
console.log(t);
console.log("");

console.log("How many times do you want to compound interest in a year?");
var n = 2
console.log(n);
console.log("");

var a = p * Math.pow((1 + (r / n)), (n * t))

console.log("Your value after compound interest : " + Math.round((a + p)));
console.log("Your compound interest : " + Math.round(a))