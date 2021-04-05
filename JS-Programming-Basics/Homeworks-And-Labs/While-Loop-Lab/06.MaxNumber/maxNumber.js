function maxNumber(input) {
    let index = 0;
    let maxNumber = Number(input[index]);
    while (input[index] !== "Stop") {
        let currentNum = Number(input[index]);
        if (currentNum > maxNumber) {
            maxNumber = currentNum;
        }
        index++

    }
    console.log(maxNumber);
}
maxNumber(["100", "99", "80", "70", "Stop"])



