function sumNumbers(firstArg, secondArg) {
    let firstNum = Number(firstArg);
    let secondNum = Number(secondArg);
    let sum = 0;

    for (let i = firstNum; i <= secondNum; i++) {
        sum += i;
    }
    console.log(sum);
}
sumNumbers('1', '5' );
sumNumbers('-8', '20');