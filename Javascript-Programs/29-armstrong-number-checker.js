console.log("Enter number");
        let num = 3703
        console.log(num);
        num = num.toString().split("")

        let sum = 0
        num.forEach(element => {
            sum += Math.pow(element, num.length)
        });
        num = num.join('')
        console.log(num==sum);