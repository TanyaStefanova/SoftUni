function houseParty(arr) {
    let output = [];

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i].split(' ');
        let name = current[0];

        if (arr[i] === `${name} is going!`) {
            if (output.includes(name)) {
                console.log(`${name} is already in the list!`)
            } else {
                output.push(name);
            }
        }

        if (arr[i] === `${name} is not going!`) {
            if (output.includes(name)) {
                let index = output.indexOf(name);
                output.splice(index, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(output.join('\n'));
}
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
);