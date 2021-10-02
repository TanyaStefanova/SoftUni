function tennisRanklist(input) {
    let index = 0;
    let tournaments = Number(input[index++]);
    let startPoints = Number(input[index++]);
    let command = input[index];

    let totalPoints = 0;
    let wins = 0;
    let currentPointsCounter = 0;

    for (let i = 0; i < tournaments; i++) {
        if (command === "W") {
            wins++;
            currentPointsCounter += 2000;
            totalPoints += 2000;
        } else if (command === "F") {
            currentPointsCounter += 1200;
            totalPoints += 1200;
        } else if (command === "SF") {
            currentPointsCounter += 720;
            totalPoints += 720;
        }
        index++;
        command = input[index];
    }
    console.log(`Final points: ${totalPoints + startPoints}`);
    console.log(`Average points: ${Math.floor(currentPointsCounter / tournaments)}`);
    console.log(`${((wins / tournaments) * 100).toFixed(2)}%`);
}
tennisRanklist([
    '4', '750', 'SF',
    'W', 'SF',  'W',
    '',  ''
  ]
  )


// [
//     '5', '1400',
//     'F',
//     'SF',
//     'W',
//     'W',
//     'SF',
// ]