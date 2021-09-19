function darts(input) {
    let index = 0;
    let name = input[index++];
    let command = input[index];

    let points = 301;
    let successfulShots = 0;
    let unsuccessfulShots = 0;

    while (command !== "Retire") {
        let currentPoints = 0;
        if (command === "Single") {
            index++;
            command = Number(input[index]);
            currentPoints += command;
            if (currentPoints <= points) {
                successfulShots++;
            } else {
                unsuccessfulShots++;
                index++;
                command = input[index];
                continue;
            }
            points -= currentPoints;
            index++;
            command = input[index];
        } else if (command === "Double") {
            index++;
            command = Number(input[index]);
            currentPoints += (2 * command);
            if (currentPoints <= points) {
                successfulShots++;
            } else {
                unsuccessfulShots++;
                index++;
                command = input[index];
                continue;
            }
            points -= currentPoints;
            index++;
            command = input[index];
        } else if (command === "Triple") {
            index++;
            command = Number(input[index]);
            currentPoints += (3 * command);
            if (currentPoints <= points) {
                successfulShots++;
            } else {
                unsuccessfulShots++;
                index++;
                command = input[index];
                continue;
            }
            points -= currentPoints;
            index++;
            command = input[index];
        }
        if (points === 0) {
            console.log(`${name} won the leg with ${successfulShots} shots.`);
            break;
        }
    }
    if (command === "Retire") {
        console.log(`${name} retired after ${unsuccessfulShots} unsuccessful shots.`);
    }
}
darts(["Michael van Gerwen",
    "Triple",
    "20",
    "Triple",
    "19",
    "Double",
    "10",
    "Single",
    "3",
    "Single",
    "1",
    "Triple",
    "20",
    "Triple",
    "20",
    "Double",
    "20"])

//     ["Rob Cross",
//     "Triple",
//     "20",
//     "Triple",
//     "20",
//     "Triple",
//     "20",
//     "Triple",
//     "20",
//     "Double",
//     "20",
//     "Triple",
//     "20",
//     "Double",
//     "5",
//     "Triple",
//     "10",
//     "Double",
//     "6",
//     "Retire"
// ])


