function meetings(arr) {

    let appointments = {};

    for (let line of arr) {
        let [weekday, name] = line.split(' ');
        if (!appointments.hasOwnProperty(weekday)) {
            console.log(`Scheduled for ${weekday}`);
            appointments[weekday] = name;
        } else {
            console.log(`Conflict on ${weekday}!`);
        }
    }

    for (let key in appointments) {
        console.log(`${key} -> ${appointments[key]}`);
    }

    // for(let [weekday, name] of Object.entries(appointments)){
    //     console.log(`${weekday} -> ${name}`);
    // }
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])