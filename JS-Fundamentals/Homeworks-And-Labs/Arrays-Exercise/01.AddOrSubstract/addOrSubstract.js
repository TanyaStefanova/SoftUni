function addOrSubstract(arr) {
    let newArray = [];
    let sumFirstArray = 0;
    let sumNewArray = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        sumFirstArray += currentNum;
        if (currentNum % 2 === 0) {
            currentNum += i;
        } else {
            currentNum -= i;
        }
        newArray.push(currentNum);
        sumNewArray += newArray[i];
    }
    console.log(newArray);
    console.log(sumFirstArray);
    console.log(sumNewArray);
}
addOrSubstract([-5, 11, 3, 0, 2]);