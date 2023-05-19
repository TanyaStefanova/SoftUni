function strLength(firstStr, secondStr, thirdStr) {
    let sum = firstStr.length + secondStr.length + thirdStr.length;
    let averageSum = sum / 3;

    console.log(Math.floor(sum));
    console.log(Math.floor(averageSum));
}
// strLength('chocolate', 'ice cream', 'cake');
strLength('pasta', '5', '22.3');