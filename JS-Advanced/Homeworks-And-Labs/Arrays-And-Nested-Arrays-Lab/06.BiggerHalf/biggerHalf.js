function biggerHalf(arr) {
    arr.sort((a, b) => a - b);
    let i = Math.floor(arr.length / 2);
    let output = arr.slice(i);
    
    return output;
}