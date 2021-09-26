function football(input) {
    let index = 0;
    let teamName = input[index++];
    let countGames = Number(input[index++]);
    let command = input[index];

    let w = 0;
    let d = 0;
    let l = 0;
    let totalGames = 0;
    let totalPoints = 0;

    for (let i = 0; i < countGames; i++) {
        if (command === "W") {
            w++;
            totalGames++;
            totalPoints += 3;
        } else if (command === "D") {
            d++;
            totalGames++;
            totalPoints += 1;
        } else if (command === "L") {
            l++;
            totalGames++;
        }
        index++;
        command = input[index];
    }

    if (countGames === 0) {
        console.log(`${teamName} hasn't played any games during this season.`);
    } else {
        console.log(`${teamName} has won ${totalPoints} points during this season.`);
        console.log("Total stats:");
        console.log(`## W: ${w}`);
        console.log(`## D: ${d}`);
        console.log(`## L: ${l}`);
        console.log(`Win rate: ${(w / totalGames * 100).toFixed(2)}%`);
    }
}
football(["Liverpool", 10,
    "W",
    "D",
    "D",
    "W",
    "L",
    "W",
    "D",
    "D",
    "W",
    "W",])