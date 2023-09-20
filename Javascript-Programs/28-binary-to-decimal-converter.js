let num = prompt("Enter number")
let decimal = 0
let power = num.length - 1
for (let i = 0; i < num.length; i++) {
  decimal += num[i] * Math.pow(2, power)
  power--
}
console.log(decimal);