function rotations(arr, n) {

    for (let i = 0; i < n; i++) {
        let currentNum = arr.shift();
        arr.push(currentNum);
    }
    console.log(arr.join(' '));
}
rotations([2, 4, 15, 31], 5)