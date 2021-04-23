function equalArrays(fisrtArr, secondArr) {
    let sum = 0;
    let index = 0;

    for (let i = 0; i < fisrtArr.length; i++) {
        fisrtArr[i] = Number(fisrtArr[i]);
    }
    for (let i = 0; i < secondArr.length; i++) {
        secondArr[i] = Number(secondArr[i]);
    }

    let areEqual = true;
    for (let i = 0; i < fisrtArr.length; i++) {
        if (fisrtArr[i] !== secondArr[i]) {
            console.log(`Arrays are not identical. Found difference at ${index} index`);
            areEqual = false;
            break;
        } else {
            index++;
            sum += fisrtArr[i];
        }
    }
    if (areEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);