function asciiSumator(arr) {
    let firstCode = arr.shift().charCodeAt();
    let secondCode = arr.shift().charCodeAt();
    let str = arr.shift();
    let sum = 0;

    for (let char of str) {
        let currentCode = char.charCodeAt();
        if (firstCode < secondCode) {
            if (currentCode > firstCode && currentCode < secondCode) {
                sum += currentCode;
            }
        } else {
            if (currentCode > secondCode && currentCode < firstCode) {
                sum += currentCode;
            }
        }
    }
    console.log(sum);
}
asciiSumator(['.', '@', 'dsg12gr5653feee5']);
asciiSumator(['?', 'E', '@ABCEF']);
asciiSumator(['a', '1', 'jfe392$#@j24ui9ne#@$'])