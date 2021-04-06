function moving(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let height = Number(input[index]);
    index++;
    let boxesSpace = 0;
    let spaceTaken = width * length * height;

    while (input[index] !== "Done") {
        let currentBox = Number(input[index]);
        boxesSpace += currentBox;
        index++;
        if (boxesSpace > spaceTaken) {
            break;
        }
    }

    if (boxesSpace > spaceTaken) {
        console.log(`No more free space! You need ${boxesSpace - spaceTaken} Cubic meters more.`);
    }
    if (input[index] === "Done" && spaceTaken > boxesSpace) {
        console.log(`${spaceTaken - boxesSpace} Cubic meters left.`);
    }
}
moving(["10", "1", "2", "4", "6", "Done"])

