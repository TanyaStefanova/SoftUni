function christmasTournament(input) {
    let index = 0;
    let dayCount = Number(input[index]);
    index++;
    let charityMoney = 0;
    let winCount = 0;
    let loseCount = 0;

    for (let i = 0; i < dayCount; i++) {
        let command = input[index];
        index++;
        let tempCharityMoney = 0;
        let tempWinCount = 0;
        let tempLostCount = 0;
        while (command !== "Finish") {
            let sportName = command;
            let result = input[index];
            index++;
            if (result === "win") {
                tempCharityMoney += 20;
                tempWinCount++;
            } else {
                tempLostCount++;
            }
            command = input[index];
            index++;
        }
        if (tempWinCount > tempLostCount) {
            charityMoney += tempCharityMoney * 1.10;
            winCount++;
        } else {
            charityMoney += tempCharityMoney;
            loseCount++;
        }
    }
    if (winCount > loseCount) {
        charityMoney *= 1.20;
        console.log(`You won the tournament! Total raised money: ${charityMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${charityMoney.toFixed(2)}`);
    }
}
christmasTournament(["3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"])
