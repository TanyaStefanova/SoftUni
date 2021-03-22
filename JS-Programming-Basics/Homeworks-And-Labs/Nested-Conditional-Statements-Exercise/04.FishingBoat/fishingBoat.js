function fishingBoat(arg1, arg2, arg3) {
    let groupBudget = Number(arg1);
    let season = arg2;
    let countFishers = Number(arg3);
    let boatPrice = 0;
    switch (season) {
        case "Spring":
            boatPrice = 3000;
            if (countFishers <= 6) {
                boatPrice = boatPrice * 0.90;
            } else if (countFishers >= 7 && countFishers <= 11) {
                boatPrice = boatPrice * 0.85;
            } else if (countFishers >= 12) {
                boatPrice = boatPrice * 0.75;
            }
            break;
        case "Summer":
            boatPrice = 4200;
            if (countFishers <= 6) {
                boatPrice = boatPrice * 0.90;
            } else if (countFishers >= 7 && countFishers <= 11) {
                boatPrice = boatPrice * 0.85;
            } else if (countFishers >= 12) {
                boatPrice = boatPrice * 0.75;
            }
            break;
        case "Autumn":
            boatPrice = 4200;
            if (countFishers <= 6) {
                boatPrice = boatPrice * 0.90;
            } else if (countFishers >= 7 && countFishers <= 11) {
                boatPrice = boatPrice * 0.85;
            } else if (countFishers >= 12) {
                boatPrice = boatPrice * 0.75;
            }
            break;
        case "Winter":
            boatPrice = 2600;
            if (countFishers <= 6) {
                boatPrice = boatPrice * 0.90;
            } else if (countFishers >= 7 && countFishers <= 11) {
                boatPrice = boatPrice * 0.85;
            } else if (countFishers >= 12) {
                boatPrice = boatPrice * 0.75;
            }
            break;
    }
    if (countFishers % 2 === 0 && season !== "Autumn") {
        boatPrice = boatPrice * 0.95;
    }

    if (boatPrice > groupBudget) {
        console.log(`Not enough money! You need ${(boatPrice - groupBudget).toFixed(2)} leva.`);
    } else {
        console.log(`Yes! You have ${(groupBudget - boatPrice).toFixed(2)} leva left.`);
    }


}

fishingBoat("2000", "Winter", "13")
