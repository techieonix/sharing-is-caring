var array = [4, 'g', 2, 2, 2, 3, 2, 'g', 'e', 'l', 'e', 2]
for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j]) {
            array.splice(j, 1)
            j--
        }
    }
}
console.log(array);
