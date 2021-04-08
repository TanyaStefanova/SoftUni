function cake(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let index = 2;
    let command = input[index];

    let cakeSize = width * length;
    let takenSlices = 0;

    while (command !== "STOP") {
        takenSlices += Number(command);

        if (takenSlices >= cakeSize) {
            break;
        }

        index++;
        command = input[index];
    }
    if (takenSlices >= cakeSize) {
        console.log(`No more cake left! You need ${takenSlices - cakeSize} pieces more.`);
    }
    if (command === "STOP") {
        console.log(`${cakeSize - takenSlices} pieces are left.`);
    }
}

cake(["10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21"])


