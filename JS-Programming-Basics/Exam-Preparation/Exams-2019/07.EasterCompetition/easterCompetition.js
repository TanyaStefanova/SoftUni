function easterCompetition(input){
    let index = 0;
    let count = Number(input[index++]);
    let name = input[index++];
    let command = input[index];

    let numberOne = '';
    let numberOnePoints = 0;

    for (let i = 1; i <= count; i++) {
        let points = 0;
        while (command !== "Stop") {
            let tempPoint = Number(command);
            points += tempPoint;
            index++;
            command = input[index];
        }
        console.log(`${name} has ${points} points.`);

        if (numberOnePoints < points) {
            numberOne = name;
            numberOnePoints = points;
            console.log(`${numberOne} is the new number 1!`);
        }

        index++;
        name = input[index++];
        command = input[index];
    }
    console.log(`${numberOne} won competition with ${numberOnePoints} points!`);
}
easterCompetition(["3", "Chef Manchev", "10", "10", "10", "10", "Stop",
    "Natalie", "8", "2", "9", "Stop",
    "George", "9", "2","4", "2", "Stop"])