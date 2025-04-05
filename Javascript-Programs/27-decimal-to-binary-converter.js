console.log("Enter number");
let num = 45
console.log(num);
console.log("");


let number = num
let opposite = ""
let binary = ""
for (let i = num; i != 1;) {
    opposite = opposite.concat("", num % 2)
    num % 2 == 1 ? num = (num - 1) / 2 : num = num / 2
    i = num
}
opposite = opposite.concat("", 1)
for (let i = opposite.length - 1; i >= 0; i--) {
    binary = binary.concat("", opposite[i])
}
console.log("The decimal number (" + number + ") in binary form: " + binary);