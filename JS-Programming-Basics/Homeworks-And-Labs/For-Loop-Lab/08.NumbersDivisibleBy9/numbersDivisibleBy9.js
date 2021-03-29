function numbersDivisibleBy9(arg1, arg2) {
    let num1 = Number(arg1);
    let num2 = Number(arg2);
    let result = 0;

    for (let i = num1; i <= num2; i++) {
        if (i % 9 === 0) {
            result += i;

        }
    }
    console.log(`The sum: ${result}`);

    for (let z = num1; z <= num2; z++) {
        if (z % 9 === 0) {
            console.log(z);
        }
    }
}
numbersDivisibleBy9("100", "200")