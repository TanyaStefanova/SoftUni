function basketball(input) {
    let index = 0;
    let name = input[index++];
    let command = input[index];

    let wins = 0;
    let losses = 0;
    let games = 0;

    while (command !== "End of tournaments") {
        let currentGames = Number(command);
        index++;
        command = input[index];
        let gamesCounter = 0;
        for (let i = 0; i < currentGames; i++) {
            let teamDessiPoints = Number(command);
            index++;
            command = input[index];
            let otherTeamPoints = Number(command);
            gamesCounter++;
            if (teamDessiPoints > otherTeamPoints) {
                wins++;
                games++;
                console.log(`Game ${gamesCounter} of tournament ${name}: win with ${teamDessiPoints - otherTeamPoints} points.`);
            } else {
                losses++;
                games++;
                console.log(`Game ${gamesCounter} of tournament ${name}: lost with ${otherTeamPoints - teamDessiPoints} points.`);
            }
            index++;
            command = input[index];
        }
        if (command === "End of tournaments") {
            break;
        }
        name = command;
        index++;
        command = input[index];
    }
    if (command === "End of tournaments") {
        console.log(`${(wins / games * 100).toFixed(2)}% matches win`);
        console.log(`${(losses / games * 100).toFixed(2)}% matches lost`);
    }
}
basketball([
    'Ballers',            '3',
    '87',                 '63',
    '56',                 '65',
    '75',                 '64',
    'Sharks',             '4',
    '64',                 '76',
    '65',                 '86',
    '68',                 '99',
    '45',                 '78',
    'End of tournaments', ''
  ])



// [
//     'Dunkers', '2',
//     '75', '65',
//     '56', '73',
//     'Fire Girls', '3',
//     '67', '34',
//     '83', '98',
//     '66', '45',
//     'End of tournaments', ''
// ]