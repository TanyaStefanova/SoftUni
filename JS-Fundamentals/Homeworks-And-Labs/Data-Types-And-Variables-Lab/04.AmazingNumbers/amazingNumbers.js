function amazingNumbers(num) {
    let sum = 0;
    num = num.toString();
    for (let i = 0; i < num.length; i++) {
        let currentNum = Number(num[i]);
        sum += currentNum;
    }
    let sumAsString = sum.toString();

    if (sumAsString.includes('9')) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }
}
amazingNumbers(1233)