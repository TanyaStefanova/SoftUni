function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;
    let counter = 1;
    let excluded = 0;
    let averageGrade = 0;

    while (counter <= 12) {
        let grade = Number(input[index]);
        index++;
        if (grade < 4.00) {
            excluded++;
            if (excluded === 2) {
                console.log(`${name} has been excluded at ${counter} grade`);
                break;
            }
            continue;
        }
        averageGrade += grade;
        counter++;

    }
    if (excluded <= 1) {
        console.log(`${name} graduated. Average grade: ${(averageGrade / 12).toFixed(2)}`);
    }
}
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"])
