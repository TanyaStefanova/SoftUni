function merge(firstArr, secondArr) {
    let newArr = [];

    for (let i = 0; i < firstArr.length; i++) {
        if (i % 2 === 0) {
            firstArr[i] = Number(firstArr[i]);
            secondArr[i] = Number(secondArr[i]);
            newArr.push(firstArr[i] + secondArr[i]);
        } else {
            newArr.push(firstArr[i] + secondArr[i]);
        }
    }
    console.log(newArr.join(' - '));
}
merge(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']);