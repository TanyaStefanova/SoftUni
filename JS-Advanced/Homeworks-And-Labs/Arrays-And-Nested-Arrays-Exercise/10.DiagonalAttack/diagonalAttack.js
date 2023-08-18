function diagonalAttack(arr) {
    let matrix = [];

    let sumFirstDiagonal = 0;
    let sumSecondDiagonal = 0;

    arr.forEach(x => {
        let row = x.split(' ').map(Number);
        matrix.push(row);
    });

    let firstCounter = 0;
    let secondCounter = matrix[0].length - 1;

    matrix.forEach(row => {
        sumFirstDiagonal += row[firstCounter++];
        sumSecondDiagonal += row[secondCounter--];
    });

    if (sumFirstDiagonal !== sumSecondDiagonal) {

       return matrix.forEach(row => {
            console.log(row.join(' '));
        });
    } else {
        let first = 0;
        let second = matrix[0].length - 1;
        for (let row of matrix) {
            for (let i = 0; i < row.length; i++) {
                if (i !== first && i !== second) {
                    row[i] = sumFirstDiagonal;
                }
            }
            first++;
            second--;
        }

       matrix.forEach(row => console.log(row.join(' '))); 
    }
}
diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);

// diagonalAttack(['1 1 1',
//     '1 1 1',
//     '1 1 0']);

// Мое решение 100/100:
// function solve(arr) {
//     let matrix = [];

//     arr.forEach(line => {
//         line = line.split(' ').map(Number);
//         matrix.push(line);
//     });

//     let counterFirstDiagonal = 0;
//     let sumFirstDiagonal = 0;
//     let sumSecondDiagonal = 0;

//     for (let i = 0; i < matrix.length; i++) {
//         sumFirstDiagonal += matrix[i][counterFirstDiagonal];
//         counterFirstDiagonal++;
//     }

//     counterSecondDiagonal = matrix[0].length - 1;

//     for (let i = 0; i < matrix.length; i++) {
//         sumSecondDiagonal += matrix[i][counterSecondDiagonal];
//         counterSecondDiagonal--;
//     }

//     if (sumFirstDiagonal == sumSecondDiagonal) {
//         counterFirstDiagonal = 0;
//         counterSecondDiagonal = matrix[0].length - 1;

//         for (let i = 0; i < matrix.length; i++) {
//             let line = matrix[i];

//             for (let j = 0; j < line.length; j++) {
//                 if (j == counterFirstDiagonal || j == counterSecondDiagonal) {
//                     continue;
//                 } else {
//                     line[j] = sumFirstDiagonal;
//                 }
//             }
//             counterFirstDiagonal++;
//             counterSecondDiagonal--;
//             console.log(line.join(' '));
//         }
//     } else {
//         matrix.forEach(x => console.log(x.join(' ')));
//     }
// }