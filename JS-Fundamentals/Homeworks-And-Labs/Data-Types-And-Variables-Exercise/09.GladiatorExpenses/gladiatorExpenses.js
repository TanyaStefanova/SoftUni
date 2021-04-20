function gladiator(arg1, arg2, arg3, arg4, arg5) {
    let lossesCount = arg1;
    let helmetPrice = arg2;
    let swordPrice = arg3;
    let shieldPrice = arg4;
    let armorPrice = arg5;

    let totalExpenses = 0;
    let counter = 0;
    let shieldBrakesCounter = 0;

    for (let i = 1; i <= lossesCount; i++) {
        counter++;
        if (counter % 2 === 0) {
            totalExpenses += helmetPrice;
        }
        if (counter % 3 === 0) {
            totalExpenses += swordPrice;
        }
        if (counter % 2 === 0 && counter % 3 === 0) {
            shieldBrakesCounter++;
            totalExpenses += shieldPrice;
            if (shieldBrakesCounter % 2 === 0) {
                totalExpenses += armorPrice;
            }
        }
    }
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}
gladiator(23, 12.50, 21.50, 40, 200)