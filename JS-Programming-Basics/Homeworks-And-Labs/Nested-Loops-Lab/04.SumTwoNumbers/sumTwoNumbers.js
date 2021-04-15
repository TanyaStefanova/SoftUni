function sumTwoNumbers(input) {
    let beginning = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);

    let combinationsCounter = 0;
    let isFound = false;

    for (let x1 = beginning; x1 <= end; x1++) {
        for (let x2 = beginning; x2 <= end; x2++) {
            combinationsCounter++;
            if (x1 + x2 === magicNumber) {
                console.log(`Combination N:${combinationsCounter} (${x1} + ${x2} = ${magicNumber})`);
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${combinationsCounter} combinations - neither equals ${magicNumber}`);
    }
}
sumTwoNumbers(["88",
"888",
"1000"])


