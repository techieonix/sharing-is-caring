var word = prompt("Enter a word to check if it's palindrome or not")
var reverseWord = ""
console.log(word);
for (let i = 0; i < word.length; i++) {
    debugger
    reverseWord += word.slice(word.length - (i + 1), word.length - i)
}
if (word == reverseWord) {
    console.log("The given word in palindrome");
} else {
    console.log("The given word in not palindrome");
}