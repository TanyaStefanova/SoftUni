function travelAgency(arg1, arg2, arg3, arg4) {
    let city = arg1;
    let package = arg2;
    let vipDiscount = arg3;
    let days = Number(arg4);
    let price = 0;

    if (city === "Borovets" || city === "Bansko") {
        switch (package) {
            case "noEquipment":
                price += 80;
                break;
            case "withEquipment":
                price += 100;
                break;
        }
        if (vipDiscount === "yes") {
            switch (package) {
                case "noEquipment":
                    price *= 0.95;
                    break;
                case "withEquipment":
                    price *= 0.90;
                    break;
            }
        }
    }


    if (city === "Varna" || city === "Burgas") {
        switch (package) {
            case "noBreakfast":
                price += 100;
                break;
            case "withBreakfast":
                price += 130;
                break;
        }
        if (vipDiscount === "yes") {
            switch (package) {
                case "noBreakfast":
                    price *= 0.93;
                    break;
                case "withBreakfast":
                    price *= 0.88;
                    break;
            }
        }
    }

    if (days > 7) {
        days -= 1;
    }

    let finalPrice = days * price;

    if (days < 1) {
        console.log("Days must be positive number!");
    } else if (city !== "Borovets" && city !== "Bansko" && city !== "Varna" && city !== "Burgas") {
        console.log("Invalid input!");
    } else if (package !== "noEquipment" && package !== "withEquipment" && package !== "noBreakfast" && package !== "withBreakfast") {
        console.log("Invalid input!");
    } else {
        console.log(`The price is ${finalPrice.toFixed(2)}lv! Have a nice time!`);
    }
}
travelAgency("Gabrovo", "noBreakfast", "no", 3)