function suitcasesLoad(input) {
    let index = 0;
    let capacity = Number(input[index++]);
    let command = input[index];
    let suitcases = 0;
    let spaceTaken = 0;

    while (command !== "End") {
        command = Number(input[index]);

        if (input.length === 3 + 1) {
            command += command * 0.10;
        }
        capacity -= command;
        if (spaceTaken >= capacity) {
            console.log("No more space!");
            console.log(`Statistic: ${suitcases} suitcases loaded.`);
            break;
        }
        suitcases++;
        index++;
        command = input[index];
    }
    if (command === "End") {
        console.log("Congratulations! All suitcases are loaded!");
        console.log(`Statistic: ${suitcases} suitcases loaded.`);
    }

}
suitcasesLoad([1200.2, 260, 380.5, 125.6, 305,"End"])
    