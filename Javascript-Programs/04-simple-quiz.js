
console.log("I am going to ask you five questions. Each question carry 1 marks");
var total = 0

console.log("");


console.log("What element does 'O' represent on the periodic table?");
let q1 = "oxygen"
if (q1 == "Oxygen" || q1 == "oxygen") {
    total++
    console.log(q1 + ' is correct')
} else {
    console.log(q1 + ' is wrong')
}
console.log("");

console.log("What is capital of Pakistan?");
let q2 = "Islamabad"
if (q2 == "Islamabad" || q2 == "islamabad") {
    total++
    console.log(q2 + ' is correct')
} else {
    console.log(q2 + ' is wrong')
}
console.log("");

console.log("How many continents are there on Earth?");
let q3 = 7
if (q3 == "seven" || q3 == "Seven" || q3 == 7) {
    total++
    console.log(q3 + ' is correct')
} else {
    console.log(q3 + ' is wrong')
}
console.log("");

console.log("How many months are there in a year?");
let q4 = 12
if (q4 == "Twelve" || q4 == "twelve" || q4 == 12) {
    total++
    console.log(q4 + ' is correct')
} else {
    console.log(q3 + ' is wrong')
}
console.log("");

console.log("What is the name of our planet?");
let q5 = "Moon"
if (q5 == "Earth" || q5 == "earth") {
    total++
    console.log(q5 + ' is correct')
} else {
    console.log(q5 + ' is wrong')
}
console.log("");

console.log("Your total score is : " + total);
