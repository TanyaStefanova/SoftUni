function trainTheTrainers(input) {
    let index = 0;
    let judges = Number(input[index++]);
    let presentation = input[index++];

    let totalSum = 0;
    let counter = 0;

    while (input[index] !== "Finish") {
        let currentSum = 0;
        for (let i = 1; i <= judges; i++) {
            let currentGrade = Number(input[index]);
            currentSum += currentGrade;
            totalSum += currentGrade;
            counter++;
            index++;
        }
        console.log(`${presentation} - ${(currentSum / judges).toFixed(2)}.`);
        if (input[index] === "Finish") {
            break;
        }
        presentation = input[index];
        index++;
    }

    if (input[index] === "Finish") {
        console.log(`Student's final assessment is ${(totalSum / counter).toFixed(2)}.`);
    }
}
trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])



