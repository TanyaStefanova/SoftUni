function operations(arg1, arg2, arg3) {
    let num1 = Number(arg1);
    let num2 = Number(arg2);
    let operator = arg3;
    let evenOrOdd;
    let result = 0;
    if (operator === "+") {
        result = num1 + num2;
        if (result % 2 === 0) {
            evenOrOdd = "even";
        } else if (result % 2 !== 0) {
            evenOrOdd = "odd";
        }
        console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOrOdd}`);
    }

    if (operator === "-") {
        result = num1 - num2;
        if (result % 2 === 0) {
            evenOrOdd = "even";
        } else if (result % 2 !== 0) {
            evenOrOdd = "odd";
        }
        console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOrOdd}`);
    }

    if (operator === "*") {
        result = num1 * num2;
        if (result % 2 === 0) {
            evenOrOdd = "even";
        } else if (result % 2 !== 0) {
            evenOrOdd = "odd";
        }
        console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOrOdd}`);
    }

    if (operator === "/" && num2 !== 0) {
        result = num1 / num2;
        console.log(`${num1} / ${num2} = ${result.toFixed(2)}`);
    } else if (operator === "/" && num2 === 0) {
        console.log(`Cannot divide ${num1} by zero`);
    }

    if (operator === "%" && num2 !== 0) {
        result = num1 % num2;
        console.log(`${num1} % ${num2} = ${result}`);
    } else if (operator === "%" && num2 === 0) {
        console.log(`Cannot divide ${num1} by zero`);
    }

}
operations("10", "0", "%")