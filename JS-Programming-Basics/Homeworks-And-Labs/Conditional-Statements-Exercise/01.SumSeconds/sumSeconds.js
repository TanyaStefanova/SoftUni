function sumSeconds(firstNum, secondNum, thirdNum) {
    let timeFirst = Number(firstNum);
    let timeSecond = Number(secondNum);
    let timeThird = Number(thirdNum);
    let totalTime = timeFirst + timeSecond + timeThird;
    let totalTimeMin = Math.floor(totalTime / 60);
    let totalTimeSec = totalTime % 60;
    if (totalTimeSec < 10) {
        console.log(`${totalTimeMin}:0${totalTimeSec}`);

    } else {
        console.log(`${totalTimeMin}:${totalTimeSec}`);
    }

}
sumSeconds("35", "45", "44")
