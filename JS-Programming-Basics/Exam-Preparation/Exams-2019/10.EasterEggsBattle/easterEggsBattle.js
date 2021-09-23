function eggBattle(input) {
    let index = 0;
    let eggsPlayer1 = Number(input[index++]);
    let eggsPlayer2 = Number(input[index++]);
    let command = input[index];

    while (command !== "End of battle") {
        if (command === "one") {
            eggsPlayer2 -= 1;
        } else if (command === "two") {
            eggsPlayer1 -= 1;
        }

        if (eggsPlayer1 === 0) {
            console.log(`Player one is out of eggs. Player two has ${eggsPlayer2} eggs left.`);
            break;
        } else if (eggsPlayer2 === 0) {
            console.log(`Player two is out of eggs. Player one has ${eggsPlayer1} eggs left.`);
            break;
        }
        index++;
        command = input[index];
    }
    if (command === "End of battle") {
        console.log(`Player one has ${eggsPlayer1} eggs left.`);
        console.log(`Player two has ${eggsPlayer2} eggs left.`);
    }
}
eggBattle([6,
    3,
    "one",
    "two",
    "two",
    "one",
    "one"
    ])