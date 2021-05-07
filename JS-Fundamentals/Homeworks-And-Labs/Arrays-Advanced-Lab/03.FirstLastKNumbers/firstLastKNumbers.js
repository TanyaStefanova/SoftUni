function firstAndLastKNums(arr) {
    let k = arr.shift();
    let firstK = arr.slice(0, k);
    let lastK = arr.slice(arr.length - k);

    let firstResult = '';
    let secondResult = '';

    for (let i = 0; i < k; i++) {
        firstResult += ` ${firstK[i]}`
        secondResult += ` ${lastK[i]}`
    }
// This can be done with join(' ') as well
    
    console.log(firstResult);
    console.log(secondResult);
}
firstAndLastKNums([3,
    6, 7, 8, 9]);
   