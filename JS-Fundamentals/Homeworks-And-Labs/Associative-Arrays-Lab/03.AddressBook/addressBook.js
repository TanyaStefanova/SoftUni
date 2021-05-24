function addressBook(arr) {
    let book = {};

    for (let line of arr) {
        let [name, address] = line.split(':');
        book[name] = address;
    }

    let entries = Object.entries(book);
    entries = entries.sort((a, b) => a[0].localeCompare(b[0]));

    for (let key in entries) {
        console.log(`${entries[key][0]} -> ${entries[key][1]}`);
    }

    // for (let [name, address] of entries) {
    //     console.log(`${name} -> ${address}`);
    // }
}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])