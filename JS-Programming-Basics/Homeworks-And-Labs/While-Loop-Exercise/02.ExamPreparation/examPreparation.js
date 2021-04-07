function examPreparation(input) {
    let index = 1;
    let badGrades = 0;
    let minimumBadGrades = Number(input[0]);

    let exam = input[index];
    let solvedExams = 0;
    let lastProblem = "";
    let totalSumOfGrdes = 0;
    let isTired = false;

    while (exam !== "Enough") {
        let grade = Number(input[index + 1]);
        if (grade <= 4) {
            badGrades++;
        }

        if (badGrades === minimumBadGrades) {
            isTired = true;
            break;
        }

        lastProblem = exam;
        totalSumOfGrdes += grade;
        solvedExams++;
        index += 2;

        exam = input[index];
    }

    if (isTired === true) {
        console.log(`You need a break, ${minimumBadGrades} poor grades.`);

    } else {
        console.log(`Average score: ${(totalSumOfGrdes / solvedExams).toFixed(2)}`);
        console.log(`Number of problems: ${solvedExams}`);
        console.log(`Last problem: ${lastProblem}`);
    }

}
examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])
