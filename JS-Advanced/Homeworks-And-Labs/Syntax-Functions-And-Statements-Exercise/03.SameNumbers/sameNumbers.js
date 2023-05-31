function sameNumbers(num) {
    let str = num.toString();
    let firstChar = str[0];
    let sum = 0;
    let isSame = false;

    for (let char of str) {
        if (char == firstChar) {
            sum += Number(char);
            isSame = true;
        } else {
            sum += Number(char);
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(sum);

    // console.log(`${isSame}\n${sum}`);


    // function sameNumbers(num) {
    //     let arr = num.toString().split('');
    //     let isSame = true;
    //     let number = arr[0];
    
    //     for (let i = 0; i < arr.length; i++) {
    //         if (arr[i] !== number) {
    //             isSame = false;
    //             break;
    //         }
    //     }
    
    //     let sum = arr.map(Number).reduce((a, x) => a + x, 0);
    //     console.log(isSame);
    //     console.log(sum);
    // }
}
sameNumbers(2222222);
sameNumbers(1234);