function renovation(input) {
    let index = 0;
    let height = Number(input[index++]);
    let width = Number(input[index++]);
    let percentWithoutPaint = Number(input[index++]);
    let command = input[index];

    let area = height * width * 4;
    let paintNeeded = Math.ceil(area - (area * (percentWithoutPaint / 100)));
    let totalPaint = 0;

    while (command !== "Tired!") {

        let paint = Number(command);
        paintNeeded -= paint;
        totalPaint += paint;

        if (paintNeeded <= 0) {
            break;
        }
        index++;
        command = input[index];
    }
    if (paintNeeded < 0) {
        console.log(`All walls are painted and you have ${Math.abs(paintNeeded)} l paint left!`);
    } else if (command === "Tired!") {
        console.log(`${paintNeeded} quadratic m left.`);
    } else {
        console.log("All walls are painted! Great job, Pesho!");
    }
}
renovation([3, 5, 10, 2, 3, 4, "Tired!"])