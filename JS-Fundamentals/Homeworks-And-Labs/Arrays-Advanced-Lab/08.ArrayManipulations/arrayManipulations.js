function arrManipulations(arr) {
    let numbers = arr.shift().split(' ').map(Number);

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i].split(' ');
        let command = current[0];
        let num = Number(current[1]);
        let index= Number(current[2]);

        if (command === 'Add') {
            numbers.push(num);
        }

        if (command === 'Remove') {
            numbers = numbers.filter(x => x !== num);
        }

        if (command === 'RemoveAt') {
            numbers.splice(num, 1);
        }

        function insert(num, index){

        }
        let output = [];
        if (command === 'Insert') {
            output = numbers.splice(index, 0, num)
        }
    }

    console.log(numbers.join(' ')); 
}
arrManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'])