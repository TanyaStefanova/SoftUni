function primeNumbers(num) {
    let output = '';
    if (num % 2 === 0 || num % 3 === 0) {
        output = false;
    } else {
        output = true;
    }
    console.log(output);
}
primeNumbers(81)