function journey(arg1, arg2) {
    let budget = Number(arg1);
    let season = arg2;
    let destination;
    let type;
    let expenses = 0;
    if (budget <= 100) {
        destination = "Bulgaria";
        if (season === "summer") {
            type = "Camp";
            expenses = budget * 0.30;
        } else if (season === "winter") {
            type = "Hotel";
            expenses = budget * 0.70;
        }
    }
    if (budget > 100 && budget <= 1000) {
        destination = "Balkans";
        if (season === "summer") {
            type = "Camp";
            expenses = budget * 0.40;
        } else if (season === "winter") {
            type = "Hotel";
            expenses = budget * 0.80;
        }
    }
    if (budget > 1000) {
        destination = "Europe";
        type = "Hotel";
        expenses = budget * 0.90;
    }
console.log(`Somewhere in ${destination}`);
console.log(`${type} - ${expenses.toFixed(2)}`);
}
journey("1500", "summer")