function storage(arr) {
    let map = new Map();

    for (let line of arr) {
        let [item, quantity] = line.split(' ');
        quantity = Number(quantity);

        if (map.has(item)) {
            let existing = map.get(item);
            map.set(item, existing + quantity);
        } else {
            map.set(item, quantity);
        }

        // if (map.has(item)) {
        //     quantity += map.get(item);
        // }
        // map.set(item, quantity);
    }
    for (let [key, value] of map) {
        console.log(`${key} -> ${value}`);
    }

    // for (let kvp of map.entries()) {
    //     console.log(`${kvp[0]} -> ${kvp[1]}`);
    // }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
)