function integerOrFloat(firstNum, secondNum, thirdNum) {
    let sum = firstNum + secondNum + thirdNum;
    let isInteger = (sum % 1 === 0);
    if (isInteger) {
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }
}
integerOrFloat(9, 100, 1.1);

// let sum = firstNum + secondNum + thirdNum;
// let convertedNum = Math.trunc(sum);
// if(sum === convertedNum){
//     console.log(`${sum} - Integer`);
// } else {
//     console.log(`${sum} - Float`);
// }


