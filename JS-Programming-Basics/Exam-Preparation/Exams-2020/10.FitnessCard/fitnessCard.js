function fitnessCard(arg1, arg2, arg3, arg4) {
    let availableMoney = arg1;
    let sex = arg2;
    let age = arg3;
    let sport = arg4;
    let price = 0;

    if (sex === "m") {
        switch (sport) {
            case "Gym":
                price = 42;
                break;
            case "Boxing":
                price = 41;
                break;
            case "Yoga":
                price = 45;
                break;
            case "Zumba":
                price = 34;
                break;
            case "Dances":
                price = 51;
                break;
            case "Pilates":
                price = 39;
                break;
        }
    } else if (sex === "f") {
        switch (sport) {
            case "Gym":
                price = 35;
                break;
            case "Boxing":
                price = 37;
                break;
            case "Yoga":
                price = 42;
                break;
            case "Zumba":
                price = 31;
                break;
            case "Dances":
                price = 53;
                break;
            case "Pilates":
                price = 37;
                break;
        }
    }

    if (age <= 19) {
        price = price * 0.80;
    }

    if (availableMoney >= price) {
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else {
        console.log(`You don't have enough money! You need $${(price - availableMoney).toFixed(2)} more.`);
    }

}
fitnessCard(10, "m", 50, "Pilates")
