function onTime(arg1, arg2, arg3, arg4) {

    let examHour = Number(arg1);
    let examMins = Number(arg2);
    let arrivalHour = Number(arg3);
    let arrivalMins = Number(arg4);
    let mins = 0
    let hours = 0
    let examTime = examHour * 60 + examMins;
    let arrivalTime = arrivalHour * 60 + arrivalMins;

    let difference = examTime - arrivalTime;

    if (difference < 0) {
        console.log("Late");
        if (difference > -60) {
            console.log(`${Math.abs(difference)} minutes after the start`)
        } else {
            let hours = Math.floor(Math.abs(difference) / 60);
            let mins = Math.abs(difference) % 60;
            if (mins < 10) {
                console.log(`${hours}:0${mins} hours after the start`);
            } else {
                console.log(`${hours}:${mins} hours after the start`);
            }
        }

    } else if (difference <= 30) {
        console.log("On time");
        if (difference > 0) {
            console.log(`${difference} minutes before the start`)
        }
    } else {
        console.log("Early")
        if (difference < 60) {
            console.log(`${difference} minutes before the start`);
        } else {
            let hours = Math.floor(difference / 60);
            let mins = difference % 60;
            if (mins < 10) {
                console.log(`${hours}:0${mins} hours before the start`);
            } else {
                console.log(`${hours}:${mins} hours before the start`);
            }
        }

    }

}
exam("11", "30", "12", "29")