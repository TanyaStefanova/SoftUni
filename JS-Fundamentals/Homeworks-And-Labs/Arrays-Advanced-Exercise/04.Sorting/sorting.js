function sorting(arr) {
    let output = [];
    let length = arr.sort((a, b) => b - a).length;

    for (let i = 0; i < length; i++) {
        let biggest = arr.shift();
        let smallest = arr.pop();
        output.push(biggest,smallest)
    }

    console.log(output.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);