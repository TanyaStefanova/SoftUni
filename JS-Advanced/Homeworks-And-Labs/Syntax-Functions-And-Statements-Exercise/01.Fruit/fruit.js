function fruit(fruit, grams, pricePerKg) {
    let kg = grams / 1000;
    let money = kg * pricePerKg;
    console.log(`I need $${money.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`);
}
fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);