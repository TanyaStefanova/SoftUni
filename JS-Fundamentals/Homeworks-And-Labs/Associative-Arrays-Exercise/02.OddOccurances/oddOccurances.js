function oddOccurances(str) {
    let arr = str.split(' ');
    let occurances = new Map();

    for (let el of arr) {
        el = el.toLowerCase();
        if (occurances.has(el)) {
            let current = occurances.get(el);
            current.push(1);
            // let newValue = occurances.get(el);
            // occurances.set(el, newValue)
        } else {
            occurances.set(el, [1]);
            // occurances.set(el, 1)
        }
    }

    let result = [];
    for (let [key, value] of occurances) {
        if (value.length % 2 !== 0) {
            result.push(key);
        }
    }
    console.log(result.join(' '));
}
oddOccurances('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');