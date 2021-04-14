function multiplicationTable() {
    for (let i = 1; i <= 10; i++) {
        for (let s = 1; s <= 10; s++) {
            console.log(`${i} * ${s} = ${i * s}`);
        }
    }

}
multiplicationTable()