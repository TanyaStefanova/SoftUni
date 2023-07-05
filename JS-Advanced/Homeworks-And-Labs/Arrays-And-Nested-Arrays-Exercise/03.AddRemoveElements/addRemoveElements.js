function addRemoveElements(arr) {
    let num = 1;
    let result = [];

    for (let command of arr) {
        if (command == 'add') {
            result.push(num);
        } else if (command == 'remove') {
            result.pop();
        }

        num++;
    }

    result.length == 0 ? console.log('Empty') : console.log(result.join('\n'));
}

addRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']

)