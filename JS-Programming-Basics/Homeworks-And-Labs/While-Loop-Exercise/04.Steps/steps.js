function walking(input) {
    let index = 0;
    let command = input[index];
    let sum = 0;
    let goal = 10000;

    while (command !== "Going home") {

        sum += Number(command);
        if (sum > goal) {
            break;
        }
        index++;
        command = input[index];
    }

    if (command === "Going home") {
        sum += Number(input[index + 1]);
    }
    if (sum >= goal) {
        console.log("Goal reached! Good job!");
        console.log(`${sum - goal} steps over the goal!`);
    } else if (sum < goal) {
        console.log(`${goal - sum} more steps to reach goal.`);
    }

}
walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"])
