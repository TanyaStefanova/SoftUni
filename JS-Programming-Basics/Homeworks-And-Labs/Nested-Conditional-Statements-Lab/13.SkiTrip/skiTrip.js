function skiTrip(arg1, arg2, arg3) {
    let days = Number(arg1);
    let type = arg2;
    let grade = arg3;
    let result = 0;
    switch (type) {
        case "room for one person":
            result = (days - 1) * 18.00;
            break;
        case "apartment":
            result = (days - 1) * 25.00;
            if (days < 10) {
                result = result * 0.70;
            } else if (days >= 10 && days <= 15) {
                result = result * 0.65;
            } else {
                result = result * 0.50;
            }
            break;
        case "president apartment":
            result = (days - 1) * 35.00;
            if (days < 10) {
                result = result * 0.90;
            } else if (days >= 10 && days <= 15) {
                result = result * 0.85;
            } else {
                result = result * 0.80;
            }
            break;
        }
        if (grade === "positive"){
result = result * 1.25;
        } else if (grade === "negative"){
            result = result * 0.90;
        }
        console.log(result.toFixed(2));
}
skiTrip("30","president apartment","negative")

