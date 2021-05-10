function processOddNums(arr) {

    function oddPositions(value, index) {
        if (index % 2 !== 0) {
            return index;
        }
    }

    let filtered = arr.filter(oddPositions);
    let doubled = filtered.map(x => x * 2);
    let output = doubled.reverse();
    console.log(output.join(' '));
}

processOddNums([10, 15, 20, 25]);
// processOddNums([3, 0, 10, 4, 7, 3]);