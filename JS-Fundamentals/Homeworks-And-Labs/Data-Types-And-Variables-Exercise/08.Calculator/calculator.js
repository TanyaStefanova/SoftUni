function calculator(firstNum, symbol, secondNum) {
    let result = 0;
    if (symbol === '+') {
        result += firstNum + secondNum;
    } else if (symbol === '-') {
        result += firstNum - secondNum;
    } else if (symbol === '*') {
        result += firstNum * secondNum;
    } else if (symbol === '/') {
        result += firstNum / secondNum;
    }
    console.log(result.toFixed(2));
}
calculator(5, '+', 10)