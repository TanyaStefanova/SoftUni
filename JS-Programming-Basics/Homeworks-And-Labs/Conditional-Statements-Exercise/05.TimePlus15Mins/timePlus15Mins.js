function timePlus15Mins(hourInput, minsInput) {
    let hour = Number(hourInput);
    let mins = Number(minsInput) + 15;
    if (mins >= 60) {
        hour = hour + 1;
        mins = mins - 60;
    }
    if (hour >= 24) {
        hour = hour - 24;

    }
    if (mins <= 9) {
        console.log(`${hour}:0${mins}`);
    } else {
        console.log(`${hour}:${mins}`);
    }

}
timePlus15Mins("1", "46")