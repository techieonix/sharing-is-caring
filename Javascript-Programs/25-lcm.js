let num1 = 12
let num1Multiples = division(num1)

let num2 = 18
let num2Multiples = division(num2)

let lcm = 1

for (let i = 0; i < num1Multiples.length; i++) {
    for (let j = 0; j < num2Multiples.length; j++) {
        if (num1Multiples[i] == num2Multiples[j]) {
            lcm = lcm * num2Multiples[j]
            num2Multiples.splice(j, 1)
            num1Multiples.splice(i, 1)
            i--
            break
        }
    }
}
remainingSum(num1Multiples)
remainingSum(num2Multiples)

console.log(`The LCM of given numbers (${num1} and ${num2}) is : ${lcm}`);


function remainingSum(multiples) {
    multiples.forEach(element => {
        lcm = lcm * element
    });
}
function division(number) {
    let array = []
    let i = 2
    while (number != 1) {
        if (number % i == 0) {
            array.push(i)
            number = number / i
        } else {
            i++
        }
    }
    return array
}