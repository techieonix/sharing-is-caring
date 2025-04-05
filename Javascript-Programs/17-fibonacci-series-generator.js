let n = 12
let array = []
let sum = 0
for (let i = 0; i <= n; i++) {
    if (i == 0 || i == 1) {
        array.push(i)
    } else {
        for (let j = 0; j < array.length; j++) {
            sum = array[j] + array[j - 1]
        }
        array.push(sum)
    }
}
console.log(array);