// function sortArray(arr, criteria) {
//     if (criteria == 'asc') {
//         return arr.sort((a, b) => a - b);
//     } else {
//         return arr.sort((a, b) => b - a);
//     }
// }
// sortArray([14, 7, 17, 6, 8], 'asc');

function sortArray(inputArr, criteria) {

    let sorted = {
        asc: arr => arr.sort((a, b) => a - b),
        desc: arr => arr.sort((a, b) => b - a),
    }

    let func = sorted[criteria];
    return func(inputArr);
}
console.log(sortArray([14, 7, 17, 6, 8], 'asc'));