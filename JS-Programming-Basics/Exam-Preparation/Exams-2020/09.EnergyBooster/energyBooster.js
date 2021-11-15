function energyBooster(arg1, arg2, arg3) {
    let fruit = arg1;
    let size = arg2;
    let orderedSets = arg3;
    let price = 0;
    priceForSet = 0;

    if (size === "small") {
        switch (fruit) {
            case "Watermelon":
                price += 56;
                break;
            case "Mango":
                price += 36.66;
                break;
            case "Pineapple":
                price += 42.10;
                break;
            case "Raspberry":
                price += 20;
                break;
        }
    } else if (size === "big") {
        switch (fruit) {
            case "Watermelon":
                price += 28.70;
                break;
            case "Mango":
                price += 19.60;
                break;
            case "Pineapple":
                price += 24.80;
                break;
            case "Raspberry":
                price += 15.20;
                break;
        }
    }
    if (size === "small") {
        priceForSet = price * 2;
    } else {
        priceForSet = price * 5;
    }
    let totalPrice = priceForSet * orderedSets;

    if (totalPrice >= 400 && totalPrice <= 1000) {
        totalPrice = totalPrice * 0.85;
    } else if (totalPrice > 1000) {
        totalPrice = totalPrice / 2;
    }
    console.log(`${totalPrice.toFixed(2)} lv.`)
}
energyBooster("Mango", "big", 8)