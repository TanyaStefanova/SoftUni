function train(arr) {
    let wagons = arr.shift().split(' ').map(Number);
    let max = Number(arr.shift());

    for (let command of arr) {
        if (command.includes('Add')) {
            command = command.split(' ');
            wagons.push(Number(command[1]));
        } else{
            command = Number(command);
            for(let i = 0; i < wagons.length; i++ ){
                if(wagons[i] + command <= max){
                   wagons[i] += command;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}

// function train(arr) {
//     let wagons = arr.shift().split(' ').map(Number);
//     let maxCapacity = Number(arr.shift());

//     for (let i = 0; i < arr.length; i++) {
//         let isAdd = arr[i].split(' ').includes('Add');
//         if (isAdd) {
//             let newWagon = arr[i].split(' ')[1];
//             wagons.push(Number(newWagon));
//         } else {
//             let n = Number(arr[i]);
//             for (let j = 0; j < wagons.length; j++) {
//                 if (wagons[j] + n <= maxCapacity) {
//                     wagons[j] += n;
//                     break;
//                 }
//             }
//         }
//     }
//     console.log(wagons.join(' '));
// }
train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']);