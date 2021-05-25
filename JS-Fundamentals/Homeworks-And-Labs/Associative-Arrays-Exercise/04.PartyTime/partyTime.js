function partyTime(arr) {
    let guestList = { vip: [], regular: [] };

    let command = arr.shift();
    while (command !== 'PARTY') {
        if (isNaN(command[0])) {
            guestList['regular'].push(command);
        } else {
            guestList['vip'].push(command);
        }
        command = arr.shift();
    }

    for (let guest of arr) {
        if (guestList['vip'].includes(guest)) {
            let index = guestList['vip'].indexOf(guest);
            guestList['vip'].splice(index, 1);
        } else if (guestList['regular'].includes(guest)) {
            let index = guestList['regular'].indexOf(guest);
            guestList['regular'].splice(index, 1);
        }
    }

    let counter = guestList.regular.length + guestList.vip.length
    console.log(counter);
    console.log(guestList['vip'].join('\n'));
    console.log(guestList['regular'].join('\n'));

    // list.vip.forEach(guest => console.log(guest));
    // list.regular.forEach(guest => console.log(guest));
}

partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc']);
