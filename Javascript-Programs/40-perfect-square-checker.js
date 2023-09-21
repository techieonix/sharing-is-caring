console.log("Enter number");
let num = 1441
let number = num
console.log(num);
console.log("");

let multiplesArr = []

for (let i = 2; num != 1; i++) {
    if (num % i == 0) {
        num = num / i
        multiplesArr.push(i)
        i = 1
    }
}
for (let i = 0; i < multiplesArr.length; i++) {
    for (let j = i + 1; j < multiplesArr.length; j++) {
        debugger
        if (multiplesArr[i] == multiplesArr[j]) {
            multiplesArr.splice(i, 1)
            i--
            j--
            multiplesArr.splice(j, 1)
            break
        }
    }
}

multiplesArr.length == 0 ? console.log("The given number(" + number + ") is a perfect square") : console.log("The given number(" + number + ") is not a perfect square");