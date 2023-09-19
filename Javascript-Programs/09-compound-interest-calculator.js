
var p = prompt("Enter Principal Amount")
var r = prompt("Enter rate of interest per year") / 100
var t = prompt("Enter time period (in years)")
var n = prompt("How many times do you want to compound interest in a year?")

var a = p * Math.pow((1 + (r / n)), (n * t))

console.log("Your value after compound interest : " + a);
console.log("Your compound interest : " + (a - p))