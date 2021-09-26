function numberWars(input) {
    let index = 0;
    let player1Name = input[index++];
    let player2Name = input[index++];
    let command = input[index];
    let p1Points = 0;
    let p2Points = 0;

    while (command !== "End of game") {
        let currentP1Card = Number(command);
        index++;
        command = input[index];
        let currentP2Card = Number(command);

        if (currentP1Card > currentP2Card) {
            p1Points += (currentP1Card - currentP2Card);
        } else if (currentP2Card > currentP1Card) {
            p2Points += (currentP2Card - currentP1Card);
        } else if (currentP1Card === currentP2Card) {
            console.log("Number wars!");
            index++;
            command = input[index];
            currentP1Card = Number(command);
            index++;
            command = input[index];
            currentP2Card = Number(command);
            if (currentP1Card > currentP2Card) {
                console.log(`${player1Name} is winner with ${p1Points} points`);
                break;
            } else {
                console.log(`${player2Name} is winner with ${p2Points} points`);
                break;
            }
        }
        index++;
        command = input[index];
    }
    if (command === "End of game") {
        console.log(`${player1Name} has ${p1Points} points`);
        console.log(`${player2Name} has ${p2Points} points`);
    }
}
numberWars(["Aleks",
    "Georgi",
    4,
    5,
    3,
    2,
    4,
    3,
    4,
    4,
    5,
    2
    ]);
    