function mathOperations(firstNum, secondNum, operator) {
    let result = 0;

    if (operator == '+') {
        result = firstNum + secondNum;
    } else if (operator == '-') {
        result = firstNum - secondNum;
    } else if (operator == '*') {
        result = firstNum * secondNum;
    } else if (operator == '/') {
        result = firstNum / secondNum;
    } else if (operator == '%') {
        result = firstNum % secondNum;
    } else if (operator == '**') {
        result = firstNum ** secondNum;
    }

    return result;
}

let output = mathOperations(5, 6, '+');
console.log(output);
// mathOperations(3, 5.5, '*');
