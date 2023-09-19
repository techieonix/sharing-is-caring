let programName = "Simple Calculator"
console.log(`This simple program is about to create a ${programName}!`)

function simpleCalculator(numberOne, numberTwo, operator){

    if(typeof(operator) !== "string"){
        console.log("The operator should be of type 'string'");
        return;
    }

    switch (operator) {
        case "+":
            return numberOne + numberTwo
        case "-":
            return numberOne - numberTwo
        case "*":
            return numberOne * numberTwo
        case "/":
            if(numberTwo !== 0){
                console.log("Divisioin by zero is not allowed")
                return;
            }else {
                return numberOne / numberTwo
            }
        default:
            console.log("Please check, the operator should be +, -, *, /")
            break;
    }
}

let result = simpleCalculator(4,4,"+")
console.log(result)