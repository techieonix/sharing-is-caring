console.log("Enter number");
let number = 31
console.log(number);
console.log("");

let prime = true
for (let i = 2; i < number; i++) {
    debugger
    if (number % i == 0) {
        prime = false
        break
    } else {
        prime = true
    }
}
prime ? console.log("Given number is prime number") : console.log("Given number is composite number");