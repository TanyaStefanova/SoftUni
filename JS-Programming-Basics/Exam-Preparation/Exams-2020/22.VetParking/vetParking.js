function vetParking(input) {
    let index = 0;
    let days = Number(input[index++]);
    let hours = Number(input[index]);

    let totalPrice = 0;

    for (let i = 1; i <= days; i++) {
        let currentDay = i;
        let currentPrice = 0;
        for (let j = 1; j <= hours; j++) {
            if (i % 2 === 0 && j % 2 !== 0) {
                currentPrice += 2.50;
                totalPrice += 2.50;
            } else if (i % 2 !== 0 && j % 2 === 0) {
                currentPrice += 1.25;
                totalPrice += 1.25;
            } else {
                currentPrice += 1;
                totalPrice += 1;
            }
        }
        console.log(`Day: ${currentDay} - ${currentPrice.toFixed(2)} leva`);
    }
    console.log(`Total: ${totalPrice.toFixed(2)} leva`);
}
vetParking([5, 2])