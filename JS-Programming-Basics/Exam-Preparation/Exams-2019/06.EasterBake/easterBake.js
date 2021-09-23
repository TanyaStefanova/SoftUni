function easterBake(input) {
    let index = 0;
    let countBreads = Number(input[index++]);
    let command = input[index];
    let totalSugar = 0;
    let totalFlour = 0;

    let maxSugar = 0;
    let maxFlour = 0;

    for (let i = 0; i < countBreads; i++) {
        let currentSugar = Number(command);
        totalSugar += currentSugar;
        index++;
        command = input[index];
        let currentFlour = Number(command);
        totalFlour += currentFlour;

        if (currentSugar > maxSugar) {
            maxSugar = currentSugar;
        }
        if (currentFlour > maxFlour) {
            maxFlour = currentFlour;
        }
        index++;
        command = input[index];
    }

    console.log(`Sugar: ${Math.ceil(totalSugar/950)}`);
    console.log(`Flour: ${Math.ceil(totalFlour/750)}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);
}
easterBake([
    '4',   '500', '350',
    '560', '430', '600',
    '345', '578', '543',
    ''
  ])