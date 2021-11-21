function passengersPerFlight(input) {
    let index = 0;
    let companies = Number(input[index++]);
    let name = input[index++];
    let command = input[index];
    let average = Number.MIN_SAFE_INTEGER;
    let companyWithMostPassengers = "";

    for (let i = 1; i <= companies; i++) {
        let currentPassengers = 0;
        let averagePassengers = 0;
        let flights = 0;

        while (command !== "Finish") {
            command = Number(input[index]);
            currentPassengers += command;
            flights++;
            index++;
            command = input[index];
        }
        averagePassengers = Math.floor(currentPassengers / flights);
        console.log(`${name}: ${averagePassengers} passengers.`);


        if (averagePassengers > average) {
            average = averagePassengers;
            companyWithMostPassengers = name;
        }
        if (companies === i) {
            console.log(`${companyWithMostPassengers} has most passengers per flight: ${average}`);
            break;
        }

        index++;
        name = input[index++];
        command = input[index];
    }

}
passengersPerFlight([3, "WizzAir", 180, 230, 100, "Finish",
    "BulgariaAir", 50, 60, 90, "Finish",
    "Lufthansa", 260, 320, "Finish"])

// ([2, "Qatar Airways", 95, 231, 323, "Finish",
    // "LOT", 76, 89, 55, "Finish"])





