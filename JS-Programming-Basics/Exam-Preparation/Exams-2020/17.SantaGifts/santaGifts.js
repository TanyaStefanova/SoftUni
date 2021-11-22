function santaGifts(input) {
    let index = 0;
    let n = Number(input[index++]);
    let m = Number(input[index++]);
    let s = Number(input[index++]);
    let output = " ";
    for (let i = m; i >= n; i--) {
        if (i % 2 === 0 && i % 3 === 0) {
            if (i === s) {
                break;
            }
         output += i + " ";
         
        }
    }
    console.log(output);
}
santaGifts([1, 30, 15])