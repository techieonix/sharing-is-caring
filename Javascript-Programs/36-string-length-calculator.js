console.log("Enter word");
let word = "Hello world5"
console.log(word);

word = word.replace(" ", "").split("")
let count = 0

for (let i = 0; i < word.length; i++) {
    Number.isNaN(parseInt(word[i])) ? count++ : null
}

console.log("The string length of the given word: " + count);