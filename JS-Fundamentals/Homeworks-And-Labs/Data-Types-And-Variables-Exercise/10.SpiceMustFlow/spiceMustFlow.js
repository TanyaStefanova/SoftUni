function spiceMustFlow(startingYield) {
    let days = 0;
    let workersConsumation = 26;
    let totalYield = 0;

    while (startingYield >= 100) {
        days++;
        totalYield += startingYield - workersConsumation;
        startingYield -= 10;
    }
    if (startingYield < 100) {
        if (totalYield >= workersConsumation) {
            totalYield -= workersConsumation;
        }
    }
    console.log(days);
    console.log(totalYield);
}
spiceMustFlow(111)