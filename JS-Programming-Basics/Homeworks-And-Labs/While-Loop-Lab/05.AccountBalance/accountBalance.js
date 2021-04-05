function accountBalance(input) {
    let index = 0;
    let sum = 0;
    while (input[index] !== "NoMoreMoney") {
        if (Number(input[index]) < 0) {
            console.log("Invalid operation!");
            break;
        }
        let money = Number(input[index]);
        console.log(`Increase: ${money.toFixed(2)}`);
        sum += money;
        index++
    }
    console.log(`Total: ${sum.toFixed(2)}`);
}
accountBalance(["5.51", "69.42", "100", "NoMoreMoney"])