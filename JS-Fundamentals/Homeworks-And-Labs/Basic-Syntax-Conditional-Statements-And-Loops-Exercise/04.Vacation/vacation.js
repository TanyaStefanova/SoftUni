function vacation(arg1, arg2, arg3) {
    let peopleCount = Number(arg1);
    let type = arg2;
    let day = arg3;
    let price = 0;
    let totalPrice = 0;

    if (type === "Students") {
        switch (day) {
            case "Friday":
                price += 8.45;
                totalPrice += peopleCount * price;
                break;
            case "Saturday":
                price += 9.80;
                totalPrice += peopleCount * price;
                break;
            case "Sunday":
                price += 10.46;
                totalPrice += peopleCount * price;
                break;
        }
    } else if (type === "Business") {
        switch (day) {
            case "Friday":
                price += 10.90;
                totalPrice += peopleCount * price;
                break;
            case "Saturday":
                price += 15.60;
                totalPrice += peopleCount * price;
                break;
            case "Sunday":
                price += 16;
                totalPrice += peopleCount * price;
                break;
        }
    } else if (type === "Regular") {
        switch (day) {
            case "Friday":
                price += 15;
                totalPrice += peopleCount * price;
                break;
            case "Saturday":
                price += 20;
                totalPrice += peopleCount * price;
                break;
            case "Sunday":
                price += 22.50;
                totalPrice += peopleCount * price;
                break;
        }
    }
    if (type === "Students" && peopleCount >= 30) {
        totalPrice *= 0.85;
    }
    if (type === "Business" && peopleCount >= 100) {
        totalPrice = price * (peopleCount - 10);
    }
    if (type === "Regular" && peopleCount >= 10 && peopleCount <= 20) {
        totalPrice *= 0.95;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(40, "Regular", "Saturday")