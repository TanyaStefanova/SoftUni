function sumEvenNumbers(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentNum = Number(arr[i]);
        if (currentNum % 2 === 0) {
            sum += currentNum;
        }
    }

    // for (let number of arr) {
    //         if (number % 2 === 0) {
    //         sum += Number(number);
    //     }
    // }
    
    console.log(sum);
}
sumEvenNumbers(['2', '4', '6', '8', '10']);