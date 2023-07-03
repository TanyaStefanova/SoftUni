function equalNeighbors(matrix) {

    let pairs = 0;

    matrix.forEach((row, i) => {
        row.forEach((el, j) => {
            if (el === row[j + 1]){
                pairs++;
            }

            if(matrix[i + 1] && el === matrix[i + 1][j]){
                pairs++;
            }

            // Ако matrix[i + 1] върне undefined, това &&, което имаме и което е логическа операция, ще спре проверката нататък и т.е. няма да влезем изобщо в if-a. T.e. ако нямаме следващ ред, няма да влезем в проверката и няма да ни гръмне.
            // Ако matrix[i + 1] върне нещо друго (някаква truthy стойност), означава, че имаме още един ред в нашия масив и ще си влезем в if-a.
     })
    });

    console.log(pairs);
}