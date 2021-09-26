function familyTrip(arg1, arg2, arg3, arg4) {
    let budget = arg1;
    let nights = arg2;
    let priceForNight = arg3;
    let additionalExpenses = arg4;

    if (nights > 7) {
        priceForNight *= 0.95;
    }
    let finalPriceNights = priceForNight * nights;
    let amountAdditionalExpenses = budget * (additionalExpenses / 100);
    let finalPrice = finalPriceNights + amountAdditionalExpenses;

    if (budget >= finalPrice) {
        console.log(`Ivanovi will be left with ${(budget - finalPrice).toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${(Math.abs(finalPrice - budget)).toFixed(2)} leva needed.`);
    }
}
familyTrip(500, 7, 66, 15)