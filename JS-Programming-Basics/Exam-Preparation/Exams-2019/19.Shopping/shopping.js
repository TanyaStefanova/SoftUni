function shopping(arg1, arg2, arg3, arg4) {
    let budget = Number(arg1);
    let videoCards = Number(arg2);
    let processors = Number(arg3);
    let ram = Number(arg4);

    let videoCardsExpenses = videoCards * 250;
    let processorsExpenses = processors * (videoCardsExpenses * 0.35);
    let ramExpenses = ram * (videoCardsExpenses * 0.10);

    let totalExpenses = videoCardsExpenses + processorsExpenses + ramExpenses;

    if (videoCards > processors) {
        totalExpenses *= 0.85;
    }
    if (budget >= totalExpenses) {
        console.log(`You have ${(budget - totalExpenses).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalExpenses - budget).toFixed(2)} leva more!`);
    }

}
shopping(920.45, 3, 1, 1)