function negativePositiveNum(arr) {
    let output = [];

    for (let num of arr) {
        if (num < 0) {
            output.unshift(num);
        } else {
            output.push(num);
        }
    }

    output.forEach(num => console.log(num));
    // console.log(output.join('\n'));
}
// negativePositiveNum([7, -2, 8, 9]);
negativePositiveNum([3, -2, 0, -1]);