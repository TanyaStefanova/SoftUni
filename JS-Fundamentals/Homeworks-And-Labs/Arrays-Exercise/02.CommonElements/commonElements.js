function commonElements(firstArr, secondArr) {

    for (let i = 0; i < firstArr.length; i++) {
        for (let j = 0; j < secondArr.length; j++) {
            if (secondArr[j] === firstArr[i]) {
                console.log(firstArr[i]);
            }
        }
    }
}
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']);

// Another decision:
// for (let el of firstArr) {
//     let isCommon = secondArr.includes(el);
//     if (isCommon) {
//         console.log(el);
//     }
// }