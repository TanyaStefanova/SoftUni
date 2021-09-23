function easterEggs(input) {
    let index = 0;
    let allEggs = Number(input[index++]);
    let command = input[index];

    let red = 0;
    let orange = 0;
    let blue = 0;
    let green = 0;

    let maxEggsName = "";
    let maxCount = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i <= allEggs; i++) {
        if (command === "red") {
            red++;
            if (red > green) {
                maxEggsName = command;
            }
        } else if (command === "orange") {
            orange++;
            if (orange > red) {
                maxEggsName = command;
            }
        } else if (command === "blue") {
            blue++;
            if (blue > orange) {
                maxEggsName = command;
            }
        } else if (command === "green") {
            green++;
            if (green > blue) {
                maxEggsName = command;
            }
        }

        index++;
        command = input[index];
    }
    if (red > maxCount) {
        maxCount = red;
    }
    if (orange > maxCount) {
        maxCount = orange;
    }
    if (blue > maxCount) {
        maxCount = blue;
    }
    if (green > maxCount) {
        maxCount = green;
    }

    console.log(`Red eggs: ${red}`);
    console.log(`Orange eggs: ${orange}`);
    console.log(`Blue eggs: ${blue}`);
    console.log(`Green eggs: ${green}`);
    console.log(`Max eggs: ${maxCount} -> ${maxEggsName}`);
}
easterEggs([
    '7',     'orange',
    'blue',  'green',
    'green', 'blue',
    'red',   'green'])