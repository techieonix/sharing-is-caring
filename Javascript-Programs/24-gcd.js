let num1 = 45
let num2 = 100
let num1Divisors = divisors(num1)
let num2Divisors = divisors(num2)
let commonDivisors = []

for (let i = 0; i < num1Divisors.length; i++) {
    for (let j = i; j < num2Divisors.length; j++) {
        if (num1Divisors[i] == num2Divisors[j]) {
            commonDivisors.push(num1Divisors[i])
            break
        }
    }
}
console.log(`The GCD of given numbers (${num1} and ${num2}) is : ${Math.max(...commonDivisors)}`);


function divisors(number) {
    let array = [1]
    for (let i = 2; i <= number; i++) {
        if (number % i == 0) {
            array.push(i)
        }
    }
    return array
}