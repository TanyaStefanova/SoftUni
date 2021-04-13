function bitcoin(input) {
    let index = 0;
    let command = input[index];

    let goldMoney = 0;
    let totalBitcoins = 0;
    let days = 0;
    let dayOfFirstBitcoin = 0;

    for (let i = 0; i < input.length; i++) {
        let currentDayGrams = command;
        days++;
        if (days % 3 === 0) {
            currentDayGrams = command * 0.70;
        }
        goldMoney += currentDayGrams * 67.51;
        while (goldMoney >= 11949.16) {
            if (dayOfFirstBitcoin === 0) {
                dayOfFirstBitcoin = days;
            }
            totalBitcoins++;
            goldMoney -= 11949.16;
        }
        index++;
        command = input[index];
    }
    console.log(`Bought bitcoins: ${totalBitcoins}`);
    if (totalBitcoins !== 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
    }
    console.log(`Left money: ${goldMoney.toFixed(2)} lv.`);
}
bitcoin([3124.15, 504.212, 2511.124])