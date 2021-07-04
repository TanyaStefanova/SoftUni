function serializeStr(arr) {
    let str = arr.shift();
    let obj = {};

    for (let i = 0; i < str.length; i++) {
        if (!obj.hasOwnProperty(str[i])) {
            obj[str[i]] = [];
        }
        obj[str[i]].push(i);
    }
    for (let [key, value] of Object.entries(obj)) {
        console.log(`${key}:${value.join('/')}`);
    }
}
// serializeStr(['abababa', '']);
serializeStr(['avjavamsdmcalsdm', ''])