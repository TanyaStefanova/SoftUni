function calculator(firstNum, secondNum, operator) {
    switch (operator) {
        case 'multiply':
            let multiply = (firstNum, secondNum) => firstNum * secondNum;
            console.log(multiply(firstNum, secondNum));
            break;
        case 'divide':
            let divide = (firstNum, secondNum) => firstNum / secondNum;
            console.log(divide(firstNum, secondNum));
            break;
        case 'add':
            let add = (firstNum, secondNum) => firstNum + secondNum;
            console.log(add(firstNum, secondNum));
            break;
        case 'subtract':
            let subtract = (firstNum, secondNum) => firstNum - secondNum;
            console.log(subtract(firstNum, secondNum));
            break;
    }
}
calculator(5, 5, 'multiply');
calculator(40, 8, 'divide');
calculator(12, 19, 'add');
calculator(50, 13, 'subtract');


// function calculator(firstNum, secondNum, operator) {
//     let operation = null;
//     switch (operator) {
//         case 'multiply':
//             operation = (a, b) => a * b;
//             break;
//         case 'divide':
//             operation = (a, b) => a / b;
//             break;
//         case 'add':
//             operation = (a, b) => a + b;
//             break;
//         case 'subtract':
//             operation = (a, b) => a - b;
//             break;
//     }
//     let result = operation(firstNum, secondNum);
//     console.log(result);
// }
// calculator(40, 8, 'divide')