function sumOddNumbers(arg) {
    let totalNumbers = arg;
    let counter = 0;
    let sum = 0;

    let num = 1;

    while (counter < totalNumbers) {
        if (num % 2 !== 0) {
            console.log(num);
            sum += num;
        }
        num += 2;
        counter += 1;
    }
    console.log(`Sum: ${sum}`);
}
sumOddNumbers(3)