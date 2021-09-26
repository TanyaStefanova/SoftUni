function pcShop(input) {
    let index = 0;
    let games = input[index++];
    let command = input[index];

    let hearthStone = 0;
    let fornite = 0;
    let overwatch = 0;
    let others = 0;
    let total = 0;

    for (let i = 1; i <= games; i++) {
        if (command === "Hearthstone") {
            hearthStone++;
            total++;
        } else if (command === "Fornite") {
            fornite++;
            total++;
        } else if (command === "Overwatch") {
            overwatch++;
            total++;
        } else {
            others++;
            total++;
        }
        index++;
        command = input[index];
    }
    console.log(`Hearthstone - ${(hearthStone / total * 100).toFixed(2)}%`);
    console.log(`Fornite - ${(fornite / total * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${(overwatch / total * 100).toFixed(2)}%`);
    console.log(`Others - ${(others / total * 100).toFixed(2)}%`);
}
pcShop([3, "Hearthstone", "Diablo 2", "Star Craft 2"])