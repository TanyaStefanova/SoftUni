function biggestElement(arr) {
    let maxNumber = Number.MIN_SAFE_INTEGER;

    for (let row of arr) {
        let currentMax = Math.max(...row);

        if (currentMax > maxNumber) {
            maxNumber = currentMax;
        }
    }

    return maxNumber;

    // Папазов обяснява тези решения - вж. от 3-тия час нататък:
    /* let maxNumber = arr
        .map(row => Math.max(...row))
        .reduce((a, x) => Math.max(a, x), Number.MIN_SAFE_INTEGER);

        console.log(maxNumber);
     */

        // Или директно така:
        // let maxNumbers = arr
        // .map(row => Math.max(...row));
        // console.log(Math.mat(...maxNumbers));
}
let result = biggestElement([[20, 50, 10],
[8, 33, 145]]);

console.log(result);
// biggestElement([[3, 5, 7, 12],
//     [-1, 4, 33, 2],
//     [8, 3, 0, 4]]);

// Other solution:
// function solve(matrix) {
//     let biggestEl = Number.MIN_SAFE_INTEGER;

//     for(let arr of matrix){
//         for(let el of arr){
//             if(el > biggestEl){
//                 biggestEl = el;
//             }
//         }
//     }

//     console.log(biggestEl);
// }