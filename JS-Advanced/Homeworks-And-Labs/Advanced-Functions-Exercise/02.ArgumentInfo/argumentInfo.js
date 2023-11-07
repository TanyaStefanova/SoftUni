function argumentInfo() {

    let arr = [];
    let count = {};

    for (let arg of arguments) {
        let type = typeof arg;
        arr.push({ type, value: arg });

        if (!count[type]) {
            count[type] = 0;
        }
        count[type]++;
    }

    arr.forEach(x => console.log(`${x.type}: ${x.value}`));

    let sorted = Object.entries(count).sort((a, b) => b[1] - a[1]);
    sorted.forEach(el => console.log(`${el[0]} = ${el[1]}`))
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); })