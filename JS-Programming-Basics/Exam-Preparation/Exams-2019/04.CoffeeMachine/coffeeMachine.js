function coffeeMachine(arg1, arg2, arg3) {
   
    let type = arg1;
    let sugarTaste = arg2;
    let count = Number(arg3);
    let price = 0;

    if (type === "Espresso") {
        switch (sugarTaste) {
            case "Without":
                price += 0.90;
                break;
            case "Normal":
                price += 1;
                break;
            case "Extra":
                price += 1.20;
                break;
        }

    } else if (type === "Cappuccino") {
        switch (sugarTaste) {
            case "Without":
                price += 1;
                break;
            case "Normal":
                price += 1.20;
                break;
            case "Extra":
                price += 1.60;
                break;
        }
    } else if (type === "Tea") {
        switch (sugarTaste) {
            case "Without":
                price += 0.50;
                break;
            case "Normal":
                price += 0.60;
                break;
            case "Extra":
                price += 0.70;
                break;
        }
    }
    let totalPrice = price * count;
    
    if(sugarTaste === "Without"){
totalPrice = totalPrice * 0.65;
    }
    if(type === "Espresso" && count >= 5){
totalPrice = totalPrice * 0.75;
    }
    if(totalPrice > 15){
totalPrice *= 0.80;
    }
    console.log(`You bought ${count} cups of ${type} for ${totalPrice.toFixed(2)} lv.`);
}
coffeeMachine("Tea", "Extra", 3)