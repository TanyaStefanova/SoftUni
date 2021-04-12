function printAndSum(firstNum, secondNum) {
    let numbers = "";
    let sum = 0;
    for (let i = firstNum; i <= secondNum; i++) {
        numbers += i + " ";
        sum += i;
    }
    console.log(numbers);
    console.log(`Sum: ${sum}`);
}
printAndSum(50, 60)