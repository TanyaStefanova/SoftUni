function nonDecreasing(arr) {
    let result = [];
    let biggestNum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            biggestNum = arr[i];
            result.push(biggestNum);
        }

        if (biggestNum <= arr[i + 1]) {
            biggestNum = arr[i + 1];
            result.push(biggestNum);
        }
    }
    console.log(result.join(' '));
}
nonDecreasing([ 20, 3, 2, 15, 6, 1]);

// [ 1, 3, 8, 4, 10, 12, 3, 2, 24]
// [ 1, 2, 3, 4]
// [ 20, 3, 2, 15, 6, 1]
