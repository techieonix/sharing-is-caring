console.log("Enter number");
let num = 35247
console.log(num);
console.log("");

num = num.toString()

let reversed = ""
for (let i = num.length - 1; i >= 0; i--) {
  debugger
  reversed = reversed.concat("", num[i])
}
console.log("The reverse of given number: " + reversed);