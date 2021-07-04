function treasureFinder(arr) {
    let keys = arr.shift().split(' ').map(Number);
    let counter = 0;
    let str = '';
    let output = [];

    let command = arr.shift();

    while (command !== 'find') {
        for (let i = 0; i < command.length; i++) {
            let char = command[i].charCodeAt();
            if (counter >= keys.length) {
                counter = 0;
            }
            char -= keys[counter];
            counter++;
            str += String.fromCharCode(char);
        }
        output.push(str);
        counter = 0;
        str = '';
        command = arr.shift();
    }

    output.forEach(line => {
        let type = line.split('&')[1];
        let index = line.indexOf('<');
        let coordinates = line.substring(index + 1, line.length - 1);
        console.log(`Found ${type} at ${coordinates}`);
    })
}

treasureFinder([
    '1 2 1 3',
    "ikegfp'jpne)bv=41P83X@",
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    'find']);