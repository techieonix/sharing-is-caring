console.log("Enter word");
let word = "Hello world"
console.log(word);
console.log("");

console.log("Enter the letter that you want to count");
let letter = 'l'
console.log(letter);
console.log("");

let countLetter = 0

for (let i = 0; i < word.length; i++) {
    word[i] == letter ? countLetter++ : null
}
console.log("The letter count in the given word is : " + countLetter);