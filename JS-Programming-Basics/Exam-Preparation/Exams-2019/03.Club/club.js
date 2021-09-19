function club(input) {
    let index = 0;
    let target = Number(input[index++])
    let command = input[index];
    let priceForCoctail = command.length;
    let money = 0;
    let countCoctails = 0;

    while (command !== "Party!") {
        let currentPrice = 0;
        let price = Number(priceForCoctail);
        index++;
        countCoctails = Number(input[index++]);
        currentPrice = price * countCoctails;
        if (currentPrice % 2 !== 0) {
            currentPrice *= 0.75;
        }
        money += currentPrice;
        if (money >= target) {
            console.log("Target acquired.");
            console.log(`Club income - ${money.toFixed(2)} leva.`);
            break;
        }

        command = input[index];
        priceForCoctail = command.length;
    }
    if (command === "Party!") {
        console.log(`We need ${(target - money).toFixed(2)} leva more.`);
        console.log(`Club income - ${money.toFixed(2)} leva.`);
    }

}
club([100, "Sidecar", 7, "Mojito", 5, "White Russian", 10])