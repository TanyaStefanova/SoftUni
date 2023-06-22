function lastKNumsSequence(n, k) {
    let output = [1];

    for (let i = 1; i < n; i++) {
        let current = output.slice(-k);
        let nextNum = current.reduce((a, b) => a + b, 0);
        output.push(nextNum);
    }

    return output;
}
lastKNumsSequence(6, 3);
lastKNumsSequence(8, 2);