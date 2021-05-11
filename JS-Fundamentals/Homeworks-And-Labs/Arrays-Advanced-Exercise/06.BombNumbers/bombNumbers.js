function bombNumbers(firstArr, secondArr) {
    let bombNum = secondArr[0];
    let power = secondArr[1];
    let sum = 0;

    let bombIndex = firstArr.indexOf(bombNum);

    while (firstArr.includes(bombNum)) {

        firstArr.splice(Math.max((bombIndex - power),0), Math.min(power, bombIndex));
        bombIndex = firstArr.indexOf(bombNum);
        firstArr.splice(bombIndex, power + 1);
        bombIndex = firstArr.indexOf(bombNum);
    }

    for (let n of firstArr) {
        sum += n;
    }

    console.log(sum);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]);

bombNumbers([1, 4, 4, 2, 8, 9, 1],
    [9, 3]);

bombNumbers([1, 7, 7, 1, 2, 3],
    [7, 1]);

bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]);
