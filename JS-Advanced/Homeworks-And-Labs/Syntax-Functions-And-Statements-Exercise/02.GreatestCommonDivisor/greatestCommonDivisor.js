function greatestCommonDivisor(firstNum, secondNum) {

    // Using recursion:
    if (secondNum == 0) {
        return firstNum;
    } else {
        let remainder = firstNum % secondNum;
        return greatestCommonDivisor(secondNum, remainder);
    }

    // Without recursion:
    // let lower = Math.min(firstNum, secondNum);
    // let bigger = Math.max(firstNum, secondNum);
    // let output = 0;

    // for(let i = lower; i >= 0; i--){
    //     if(bigger % i == 0 && lower % i == 0){
    //         output = i;
    //         break;
    //     }
    // }
    // console.log(output);
}
let result = greatestCommonDivisor(15, 5);
// let result = greatestCommonDivisor(2154, 458);
console.log(result);
