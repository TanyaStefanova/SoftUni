function oddEvenSum(num) {
    let oddSum = 0;
    let evenSum = 0;

    let arr = String(num).split('');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenSum += Number(arr[i]);
        } else {
            oddSum += Number(arr[i]);
        }
    }

    let result = `Odd sum = ${oddSum}, Even sum = ${evenSum}`
    return result;
}
console.log(oddEvenSum(3495892137259234));