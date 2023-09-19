var p = prompt("Enter Principal Amount ")
var r = prompt("Enter rate of interest per year")
var t = prompt("Enter time period (in years)")

var i = (p * r * t) / 100

console.log("Your value after simple interest : " + i);
console.log("Your simple interest : " + (i - p))