function christmasGifts(input) {
    let index = 0;
    let command = input[index];

    let kids = 0;
    let adults = 0;
    let moneyForToys = 0;
    let moneyForSweaters = 0;

    while (command !== "Christmas") {
        command = Number(input[index]);

        if (command <= 16) {
            kids++;
            moneyForToys += 5;
        } else if (command > 16) {
            adults++;
            moneyForSweaters += 15;
        }
        index++;
        command = input[index];
    }
    console.log(`Number of adults: ${adults}`);
    console.log(`Number of kids: ${kids}`);
    console.log(`Money for toys: ${moneyForToys}`);
    console.log(`Money for sweaters: ${moneyForSweaters}`);
}
christmasGifts([18, 20, 48, 45, 56, 37, 12, 14, "Christmas"])