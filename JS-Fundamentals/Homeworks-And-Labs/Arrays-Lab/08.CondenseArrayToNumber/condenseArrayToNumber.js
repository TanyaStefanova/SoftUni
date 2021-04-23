function condenseArrayToNum(numbers) {
    let condensed = [];

    if (numbers.length === 1) {
        console.log(numbers[0]);
        return;
    }

    while (numbers.length > 1) {
        condensed = [];
        for (let i = 0; i < numbers.length; i++) {
            if (i !== numbers.length - 1) {
                condensed.push(numbers[i] + numbers[i + 1]);
            } else {
                numbers = condensed;
            }
        }
    }

    console.log(`${condensed}`);
}
condenseArrayToNum([5,0,4,1,2])
