function computerRoom(arg1, arg2, arg3, arg4) {
    let month = arg1;
    let hours = Number(arg2);
    let people = Number(arg3);
    let timeOfDay = arg4;
    let price = 0;

    if (month === "march" || month === "april" || month === "may") {
        switch (timeOfDay) {
            case "day":
                price += 10.50;
                break;
            case "night":
                price += 8.40;
                break
        }
    } else if (month === "june" || month === "july" || month === "august") {
        switch (timeOfDay) {
            case "day":
                price += 12.60;
                break;
            case "night":
                price += 10.20;
                break
        }
    }

    if (people >= 4) {
        price = price * 0.90;
    }
    if (hours >= 5) {
        price = price / 2;
    }
    let finalPrice = people * price * hours;
    console.log(`Price per person for one hour: ${price.toFixed(2)}`);
    console.log(`Total cost of the visit: ${finalPrice.toFixed(2)}`);
}
computerRoom("july", 5, 5, "night")