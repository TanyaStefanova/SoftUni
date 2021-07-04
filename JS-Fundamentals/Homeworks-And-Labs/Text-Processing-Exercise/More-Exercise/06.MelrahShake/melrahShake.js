function melrahShake(arr) {
    let str = arr[0];
    let pattern = arr[1];

    let first = str.indexOf(pattern);
    let last = str.lastIndexOf(pattern);


    while (pattern.length > 0 && first !== -1 && last !== -1) {
        if (first > 0) {
            let firstRemove = str.substring(0, first);
            let secondRemove = str.substring(first + pattern.length);
            str = firstRemove + secondRemove;
        } else if (first == 0) {
            str = str.substring(first + pattern.length);
        }
        last = str.lastIndexOf(pattern);
        let firstToRemove = str.substring(0, last);
        let nextToRemove = str.substring(last + pattern.length);
        str = firstToRemove + nextToRemove;
        // str = str.replace(pattern, '');
        // str = str.replace(pattern, '');

        let char = pattern[Math.trunc(pattern.length / 2)];
        pattern = pattern.replace(char, '');
        first = str.indexOf(pattern);
        last = str.lastIndexOf(pattern);
        console.log('Shaked it.');
    }
    console.log('No shake.');
    console.log(str);
}
// melrahShake(['astalavista baby', 'sta', '']);
melrahShake(['##mtm!!mm.mm*mtm.#', 'mtm', '']);