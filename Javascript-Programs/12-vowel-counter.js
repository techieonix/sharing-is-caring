console.log("Enter word");
let word = 'Hello world'
var countVowel = 0

console.log(word);
console.log("");

for (let i = 0; i < word.length; i++) {
    word[i] == 'a' || word[i] == 'e' || word[i] == 'i' || word[i] == 'o' || word[i] == 'u' ? countVowel++ : null
}
console.log("The vowel count is : " + countVowel);