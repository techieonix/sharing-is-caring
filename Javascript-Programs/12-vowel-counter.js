let word = prompt("Enter word")
var countVowel = 0
for (let i = 0; i < word.length; i++) {
    word[i] == 'a' || word[i] == 'e' || word[i] == 'i' || word[i] == 'o' || word[i] == 'u' ? countVowel++ : null
}
console.log("The vowel count is : " + countVowel);