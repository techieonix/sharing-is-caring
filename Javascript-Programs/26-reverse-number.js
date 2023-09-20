let number = prompt("Enter number")
let reversed = ""
for (let i = number.length - 1; i >= 0; i--) {
  reversed = reversed.concat("", number[i])
}
console.log("The reverse of given number: " + reversed);