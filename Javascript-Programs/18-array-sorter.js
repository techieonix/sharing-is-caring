let array = [4, 1, 8, 14, 90, 15, 5, 7, 12, 3];
let arrDescend = []
let arrAscend = []
let temp;

let i = 0
while (array.length != 0) {
    temp = array[i]
    for (let j = 0; j < array.length; j++) {
        if (temp < array[j]) {
            temp = array[j]
        }
    }
    let index = array.indexOf(temp)
    array.splice(index, 1)
    arrDescend.push(temp)
}

array = [4, 1, 8, 14, 90, 15, 5, 7, 12, 3];
let j = 0
while (array.length != 0) {
    temp = array[j]
    for (let i = 0; i < array.length; i++) {
        if (temp > array[i]) {
            temp = array[i]
        }
    }
    let index = array.indexOf(temp)
    array.splice(index, 1)
    arrAscend.push(temp)
}

console.log(arrAscend);
console.log(arrDescend);