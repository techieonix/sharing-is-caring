let word = prompt("Enter word")
let letter = prompt("enter the letter that you want to count")

let countLetter = 0

for (let i = 0; i < word.length; i++) {
    word[i] == letter ? countLetter++ : null
}
console.log("The letter count in the given word is : " + countLetter);