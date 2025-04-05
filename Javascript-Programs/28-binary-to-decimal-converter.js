console.log("Enter number");
let num = 101101
console.log(num);
console.log("");

num = num.toString()


let number = num
let decimal = 0
let power = num.length - 1
for (let i = 0; i < num.length; i++) {
  decimal += num[i] * Math.pow(2, power)
  power--
}
console.log("The binary number (" + number + ") in decimal form: " + decimal);