function foodForPets(input) {
    let index = 0;
    let days = Number(input[index++]);
    let totalQuantity = Number(input[index++]);
    let dogFood = 0;
    let catFood = 0;
    let foodEaten = 0;
    let biscuits = 0;

    for (let i = 1; i <= days; i++) {
        let currentDogFood = Number(input[index]);
        dogFood += currentDogFood;
        index++;
        let currentCatFood = Number(input[index]);
        catFood += currentCatFood;
        index++;

        let currentDay = currentDogFood + currentCatFood;
        foodEaten += currentDay;

        if (i % 3 === 0) {
            biscuits = currentDay * 0.10;
        }
        currentDay = 0;
    }
    console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
    console.log(`${((foodEaten / totalQuantity) * 100).toFixed(2)}% of the food has been eaten.`);
    console.log(`${((dogFood / foodEaten) * 100).toFixed(2)}% eaten from the dog.`);
    console.log(`${((catFood / foodEaten) * 100).toFixed(2)}% eaten from the cat.`);

}

foodForPets([3, 500, 100, 30, 110, 25, 120, 35])
