function orbit(coordinates) {
    let [rows, cols, x, y] = coordinates;
    let matrix = [];

    for (let i = 0; i < rows; i++) {
        matrix.push([]);
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - x), Math.abs(col - y)) + 1;
        }
    }

    // console.log(matrix.map(row => row.join(" ")).join("\n"));

    matrix.forEach(row => console.log(row.join(" ")));
}
// orbit([4, 4, 0, 0]);
orbit([5, 5, 2, 2]);