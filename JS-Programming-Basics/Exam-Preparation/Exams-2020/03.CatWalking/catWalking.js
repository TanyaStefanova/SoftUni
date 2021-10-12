function catWalking(arg1, arg2, arg3) {
    let minsWalking = arg1;
    let dailyWalkingCount = arg2;
    let eatenCalories = arg3;

    let totalMinsDaily = dailyWalkingCount * minsWalking;
    let dailyCalories = totalMinsDaily * 5;

    if (dailyCalories >= (eatenCalories / 2)) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${dailyCalories}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${dailyCalories}.`);
    }
}

catWalking(40, 2, 300)
