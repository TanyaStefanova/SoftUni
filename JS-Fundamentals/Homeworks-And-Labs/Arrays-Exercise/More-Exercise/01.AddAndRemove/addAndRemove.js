function addOrRemove(arr) {
    let result = [];
    let numbers = 0;

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];
        numbers++;
        if (command === 'add') {
            result.push(numbers);
        } else if (command === 'remove') {
            result.pop();
        }
    }
    
    if (result.length === 0) {
        console.log('Empty');
    } else {
        console.log(result.join(' '));
    }
}
addOrRemove(['add', 'add', 'remove', 'add', 'add'])