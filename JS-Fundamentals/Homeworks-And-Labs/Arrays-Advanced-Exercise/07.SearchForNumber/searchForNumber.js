function searchForNum(firstArr, secondArr) {
    let elements = secondArr[0];
    let elForDelete = secondArr[1];
    let n = secondArr[2];

    let newArr = firstArr.splice(0, elements);
    newArr.splice(0, elForDelete);

    let counter = 0;
    for (let num of newArr) {
        if (num === n) {
            counter++;
        }
    }
    console.log(`Number ${n} occurs ${counter} times.`);
}
searchForNum([5, 2, 3, 4, 1, 6],
    [5, 2, 3]);