function starEnigma(arr) {
    let num = Number(arr.shift());

    let attacked = [];
    let destroyed = [];

    for (let i = 0; i < num; i++) {
        let count = 0;
        for (let char of arr[i]) {
            if (char == 'S' || char == "T" || char == "A" || char == 'R'
                || char == 's' || char == "t" || char == "a" || char == 'r') {
                count++;
            }
        }
        let decrypted = '';

        for (let char of arr[i]) {
            let current = char.charCodeAt() - count;
            decrypted += String.fromCharCode(current);
        }

        let pattern = /@(?<planet>[A-Za-z]+)[^@\-!\:>]*:(?<population>\d+)[^@\-!\:>]*!(?<attackType>[AD])![^@\-!\:>]*->(?<soldiers>\d+)/g;

        let match = pattern.exec(decrypted);

        if (match) {
            if (match.groups.attackType == 'A') {
                attacked.push(match.groups.planet);
            } else if (match.groups.attackType == 'D') {
                destroyed.push(match.groups.planet);
            }
        }
    }

    attacked.sort((a,b) => a.localeCompare(b));
    console.log(`Attacked planets: ${attacked.length}`);
    attacked.forEach(planet => console.log(`-> ${planet}`));

    destroyed.sort((a,b) => a.localeCompare(b));
    console.log(`Destroyed planets: ${destroyed.length}`);
    destroyed.forEach(planet => console.log(`-> ${planet}`));
}

starEnigma([
    '3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'
]);