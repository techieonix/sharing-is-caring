console.log("Triangle pattern");
let n = 5
let arr = []
for (let i = 0; i < n; i++) {
    arr[i] = []
    for (let j = 0; j <= i; j++) {
        arr[i].push('*')
    }
    console.log(arr[i].join().replace(/,/g, ""));
}
console.log("");


console.log("Inverted Traingle pattern");

n = 5
arr = []
for (let i = n; i > 0; i--) {
    arr[i] = []
    for (let j = 0; j < i; j++) {
        arr[i].push('*')
    }
    console.log(arr[i].join().replace(/,/g, ""));
}