console.log("Enter number");
let num = 28
console.log(num);
console.log("");


let friends = 0
let i = 0
for (let i = 0; i < num; i++) {
    if (num % i == 0) {
        friends += i
    }
}
if (num == friends) {
    console.log("Since given number(" + num + ") is equal to the sum of friends(" + friends + "), therefore the given number is a perfect number");
} else {
    console.log("Since given number(" + num + ") is not equal to the sum of friends(" + friends + "), therefore the given number is not a perfect number");
}