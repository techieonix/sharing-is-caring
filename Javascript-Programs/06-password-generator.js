let random = 'abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()-=+/`~[]{},.<>?/|'

let passwordLength = 8
let password = ''

for (let i = 0; i < passwordLength; i++) {
    let index = Math.floor(Math.random() * random.length)
    password += random[index]
}

console.log(password);