function andProcessors(arg1, arg2, arg3) {
    let processorsNeeded = Number(arg1);
    let workers = Number(arg2);
    let workingDays = Number(arg3);

    let totalWorkingHours = workers * workingDays * 8;
    let processors = Math.floor(totalWorkingHours / 3);
    if (processors < processorsNeeded) {
        let losses = (processorsNeeded - processors) * 110.10;
        console.log(`Losses: -> ${losses.toFixed(2)} BGN`);
    } else if (processors >= processorsNeeded) {
        let profit = (processors - processorsNeeded) * 110.10;
        console.log(`Profit: -> ${profit.toFixed(2)} BGN`);
    }

}
andProcessors(150, 7, 18)