function swimmingRecord(arg1, arg2, arg3) {
    let record = Number(arg1);
    let distance = Number(arg2);
    let timeForMeter = Number(arg3);
    let taskDistance = distance * timeForMeter;
    let delay = Math.floor(distance / 15) * 12.5;
    let totalTime = taskDistance + delay;
    if (totalTime < record) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(totalTime - record).toFixed(2)} seconds slower.`)
    }
}
swimmingRecord("55555.67","3017","5.03")