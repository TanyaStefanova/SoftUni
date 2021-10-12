function carePuppy(input) {
    let index = 0;
    let boughtFoodKg = input[index++];
    let boughtFoodGrams = boughtFoodKg * 1000;
    let neededFood = 0;
    let command = input[index];
    while (command !== "Adopted") {
        command = Number(input[index]);
        neededFood += command;
        index++;
        command = input[index];
    }
    if (neededFood <= boughtFoodGrams) {
        console.log(`Food is enough! Leftovers: ${boughtFoodGrams - neededFood} grams.`);
    } else {
        console.log(`Food is not enough. You need ${neededFood - boughtFoodGrams} grams more.`);
    }

}
carePuppy([2, 999, 456, 999, 999, 123, 456, "Adopted"])