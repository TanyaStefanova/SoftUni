function ticTacToe(arr) {

    let board = [[false, false, false],
    [false, false, false],
    [false, false, false]];

    let lastMove = 'O';
    let isWinner = false;

    for (let command of arr) {
        let [row, col] = command.split(' ').map(Number);

        if (board[row][col] == false) {
            if (lastMove == 'O') {
                board[row][col] = 'X';
                lastMove = 'X';
            } else if (lastMove == 'X') {
                board[row][col] = 'O';
                lastMove = 'O';
            }
        } else {
            let isFull = true;
            for (let row of board) {
                if (row.includes(false)) {
                    isFull = false;
                }
            }
            if (!isFull) {
                console.log('This place is already taken. Please choose another!');
            }
            continue;
        }

        rowsCheck(board);
        columnsCheck(board);
        diagonalsCheck(board);

        if (isWinner) {
            return board.forEach(row => {
                console.log(row.join('\t'));
            });
        }

    }

    function rowsCheck(matrix) {
        for (let row of matrix) {
            let string = '';
            for (let el of row) {
                string += el;
            }

            if (string == 'XXX') {
                isWinner = true;
                return console.log('Player X wins!');
            } else if (string === 'OOO') {
                isWinner = true;
                return console.log('Player O wins!');
            }
        }
    }

    function columnsCheck(matrix) {
        if ((matrix[0][0] == 'X' && matrix[1][0] == 'X' && matrix[2][0] == 'X')
            || (matrix[0][1] == 'X' && matrix[1][1] == 'X' && matrix[2][1] == 'X')
            || (matrix[0][2] == 'X' && matrix[1][2] == 'X' && matrix[2][2] == 'X')) {
            isWinner = true;
            return console.log('Player X wins!');
        } else if ((matrix[0][0] == 'O' && matrix[1][0] == 'O' && matrix[2][0] == 'O')
            || (matrix[0][1] == 'O' && matrix[1][1] == 'O' && matrix[2][1] == 'O')
            || (matrix[0][2] == 'O' && matrix[1][2] == 'O' && matrix[2][2] == 'O')) {
            isWinner = true;
            return console.log('Player O wins!');
        }
    }

    function diagonalsCheck(matrix) {
        let firstDiagonal = '';
        let secondDiagonal = '';

        let firstCounter = 0;
        let secontCounter = matrix[0].length - 1;

        matrix.forEach(row => {
            firstDiagonal += row[firstCounter++];
            secondDiagonal += row[secontCounter--];
        });

        if (firstDiagonal == 'XXX' || secondDiagonal == 'XXX') {
            isWinner = true;
            return console.log('Player X wins!');
        } else if (firstDiagonal == 'OOO' || secondDiagonal == 'OOO') {
            isWinner = true;
            return console.log('Player O wins!');
        }
    }

    console.log('The game ended! Nobody wins :(');
    return board.forEach(row => {
        console.log(row.join('\t'));
    });
}
// ticTacToe(["0 1",
//     "0 0",
//     "0 2",
//     "2 0",
//     "1 0",
//     "1 1",
//     "1 2",
//     "2 2",
//     "2 1",
//     "0 0"]);

// ticTacToe(["0 0",
//     "0 0",
//     "1 1",
//     "0 1",
//     "1 2",
//     "0 2",
//     "2 2",
//     "1 2",
//     "2 2",
//     "2 1"]);

ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]);

    // Мое решение 90/100:
    // function solve(arr) {
    //     let dashboard = [[false, false, false],
    //     [false, false, false],
    //     [false, false, false]];
    
    //     let player = 'X';
    
    //     for (let i = 0; i < arr.length; i++) {
    //         let [row, col] = arr[i].split(' ').map(Number);
    
    //         if (dashboard[row][col] == false) {
    //             dashboard[row][col] = player;
    //         } else {
    //             if (dashboard[0].some(x => x == false) && dashboard[1].some(x => x == false) && dashboard[2].some(x => x == false)) {
    //                 console.log('This place is already taken. Please choose another!');
    //                 continue;
    //             }
    
    //         }
    
    //         if(isWinner(dashboard)){ 
    //                 console.log(`Player ${player} wins!`);
    //                 return dashboard.forEach(x => console.log(x.join('\t'))); 
    //         }
    
    //         if (player == 'X') {
    //             player = 'O'
    //         } else if (player == 'O') {
    //             player = 'X'
    //         }
                // Или същото с тернарен оператор:
                // player = player =='X' ? 'O' : 'X';


    
    
    //     }
    
    //     function isWinner(matrix){
    //         if(dashboard[0][0] == player && dashboard[0][1] == player && dashboard[0][2] == player
    //             || dashboard[1][0] == player && dashboard[1][1] == player && dashboard[1][2] == player
    //             || dashboard[2][0] == player && dashboard[2][1] == player && dashboard[2][2] == player
    //             || dashboard[0][0] == player && dashboard[1][0] == player && dashboard[2][0] == player
    //             || dashboard[0][1] == player && dashboard[1][1] == player && dashboard[2][1] == player
    //             || dashboard[0][2] == player && dashboard[1][2] == player && dashboard[2][2] == player
    //             || dashboard[0][0] == player && dashboard[1][1] == player && dashboard[2][2] == player
    //             || dashboard[0][2] == player && dashboard[1][1] == player && dashboard[2][0] == player){
    
    //                 return true;
    //         }
    //     }
    
    //     if (dashboard[0].some(x => x == false) == false
    //         && dashboard[1].some(x => x == false) == false
    //         && dashboard[2].some(x => x == false) == false) {
    //         console.log('The game ended! Nobody wins :(');
    //         dashboard.forEach(x => console.log(x.join('\t')));
    //     }
    // }