console.log("Given word:");
let word = "Listen"
console.log(word);
console.log("");

console.log("Given Anagram:");
let anagram = "silent"
console.log(anagram);
console.log("");

word = word.toLowerCase().replace(" ", "").split("")
anagram = anagram.toLowerCase().replace(" ", "").split("")

for (let i = 0; i < word.length; i++) {
    for (let j = i; j < anagram.length; j++) {
        if (word[i] == anagram[j]) {
            word.splice(i, 1)
            anagram.splice(j, 1)
            j--
            i--
            break
        }
    }
}
console.log(word.length == 0 && anagram.length == 0);