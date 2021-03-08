function godzilla(arg1, arg2, arg3) {
    let budget = Number(arg1);
    let extras = Number(arg2);
    let costumePrice = Number(arg3);
    let decor = budget * 0.10;
    let totalCostumePrice = extras * costumePrice;

    if (extras >= 150) {
        totalCostumePrice = totalCostumePrice * 0.90;

    }
    let totalExpenses = totalCostumePrice + decor;
    let totalMoviePrice = budget - totalExpenses;
    if (totalExpenses <= budget) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${totalMoviePrice.toFixed(2)} leva left.`);
    }
    else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalExpenses - budget).toFixed(2)} leva more.`);
    }
}
godzilla("20000", "120", "55.5")