function phoneBook(arr) {
    let assocArr = {};

    for (let line of arr) {
        let current = line.split(' ');
        let [name, phone] = current;
        assocArr[name] = phone;
    }

    for (let key in assocArr) {
        console.log(`${key} -> ${assocArr[key]}`);
    }

    // Object.keys(assocArr).forEach(key => console.log(`${key} -> ${assocArr[key]}`));
}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'])