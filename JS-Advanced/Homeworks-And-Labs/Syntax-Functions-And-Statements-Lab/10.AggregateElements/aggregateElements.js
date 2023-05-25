function aggregateElements(arr) {
    let firstSum = 0;
    let secondSum = 0;
    let str = '';

    for (let num of arr) {
        firstSum += num;
        secondSum += 1 / num;
        str += num;
    }

    // let firstSum = arr.reduce((a, x) => a + x, 0);
    // let secondSum = arr.reduce((a, x) => a + 1/ x, 0);
    // let str = arr.join('');

    console.log(`${firstSum}\n${secondSum}\n${str}`);
}
// aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);