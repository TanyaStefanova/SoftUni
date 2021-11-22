function touristShop(input) {
    let index = 0;
    let budget = Number(input[index++]);
    let command = input[index];
    let totalPrice = 0;
    let counter = 0;

    while (command !== "Stop") {
        let name = command;
        counter++;
        index++;
        command = input[index];
        let price = Number(command);

        if (counter % 3 === 0) {
            price = price / 2;
        }

        totalPrice += price;

        if (price > budget) {
            console.log("You don't have enough money!");
            console.log(`You need ${price - budget} leva!`);
            break;
        }
        budget -= price;
        index++;
        command = input[index];
    }

    if (command === "Stop") {
        console.log(`You bought ${counter} products for ${totalPrice} leva.`);
    }
}
touristShop([
    "153.20",
    "Backpack",
    "25.20",
    "Shoes",
    "54",
    "Sunglasses",
    "30",
    "Stop"
])
