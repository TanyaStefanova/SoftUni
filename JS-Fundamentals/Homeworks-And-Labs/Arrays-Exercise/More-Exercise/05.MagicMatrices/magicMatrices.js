function magicMatrices(arr) {
    let firstArr = arr[0];
    let secondArr = arr[1];
    let thirdArr = arr[2];

    let sumFirstArr = 0;
    let sumSecondArr = 0;
    let sumThirdArr = 0;

    let firstColumn = 0;
    let secondColumn = 0;
    let thirdColumn = 0;

    let isMagic = false;

    for (let i = 0; i < firstArr.length; i++) {
        sumFirstArr += firstArr[i];
    }

    for (let i = 0; i < secondArr.length; i++) {
        sumSecondArr += secondArr[i];
    }

    for (let i = 0; i < thirdArr.length; i++) {
        sumThirdArr += thirdArr[i];
    }

    firstColumn = firstArr[0] + secondArr[0] + thirdArr[0];
    secondColumn = firstArr[1] + secondArr[1] + thirdArr[1];
    thirdColumn = firstArr[2] + secondArr[2] + thirdArr[2];

    if ((sumFirstArr === sumSecondArr && sumFirstArr === sumThirdArr) && (firstColumn === secondColumn && firstColumn === thirdColumn)) {
        isMagic = true;
    }
    console.log(isMagic);
}
magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])
    
    
//    [[11, 32, 45],
//     [21, 0, 1],
//     [21, 1, 1]]