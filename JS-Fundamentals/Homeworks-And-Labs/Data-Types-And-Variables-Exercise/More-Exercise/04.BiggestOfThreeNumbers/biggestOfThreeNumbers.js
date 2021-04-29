function biggestNumber(x, y, z) {
    let biggestNum = Number.MIN_SAFE_INTEGER;

    if (x > biggestNum) {
        biggestNum = x;
    }
    if (y > biggestNum) {
        biggestNum = y;
    }
    if (z > biggestNum) {
        biggestNum = z;
    }
    console.log(biggestNum);
}
biggestNumber(43, 43.2, 43.1);