
console.log("I am going to ask you five questions. Each question carry 1 marks");
var total = 0

let q1 = prompt("What element does 'O' represent on the periodic table?")
if (q1 == "Oxygen" || q1 == "oxygen") {
    total++
    alert('Correct')
} else {
    alert('Wrong')
}

let q2 = prompt("What is capital of Pakistan?")
if (q2 == "Islamabad" || q2 == "islamabad") {
    total++
    alert('Correct')
} else {
    alert('wrong')
}

let q3 = prompt("How many continents are there on Earth?")
if (q3 == "seven" || q3 == "Seven" || q3 == 7) {
    total++
    alert('Correct')
} else {
    alert('Wrong')
}

let q4 = prompt("How many months are there in a year?")
if (q4 == "Twelve" || q4 == "twelve" || q4 == 12) {
    total++
    alert('Correct')
} else {
    alert('Wrong')
}

let q5 = prompt("What is the name of our planet?")
if (q5 == "Earth" || q5 == "earth") {
    total++
    alert('Correct')
} else {
    alert('Wrong')
}

console.log("Your total score is : " + total);
