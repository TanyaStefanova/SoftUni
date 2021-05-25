function piccolo(arr) {
    let parking = {};

    for (let line of arr) {
        let [command, number] = line.split(', ');
        if (command === 'IN') {
            parking[number] = 1;
        } else if (command === 'OUT') {
            delete parking[number];
        }
    }
    if (Object.keys(parking).length === 0) {
        console.log('Parking Lot is Empty');
    } else {
        let sorted = Object.keys(parking).sort((a, b) => a.localeCompare(b));
        for (let key of sorted) {
            console.log(`${key}`);
        }
    }
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);

    // piccolo(['IN, CA2844AA',
    // 'IN, CA1234TA',
    // 'OUT, CA2844AA',
    // 'OUT, CA1234TA'])