function minNumber(input) {
    let index = 0;
    let minNumber = Number.MAX_SAFE_INTEGER;
    while (input[index] !== "Stop") {
        let currentNum = Number(input[index]);
        if (currentNum < minNumber) {
            minNumber = currentNum;
        }
        index++
    }
    console.log(minNumber);
}
minNumber(["45","-20","7","99","Stop"])


