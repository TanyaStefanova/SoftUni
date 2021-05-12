function arrManipulator(firstArr, secondArr) {
    let result = [];
    for (let i = 0; i < secondArr.length; i++) {
        let current = secondArr[i].split(' ');
        let command = current[0];

        if (command === 'add') {
            let index = Number(current[1]);
            let num = Number(current[2]);
            firstArr.splice(index, 0, num);
        } else if (command === 'addMany') {
            let index = Number(current[1]);
            for (let i = 2; i < current.length; i++) {
                firstArr.splice(index, 0, Number(current[i]))
                index++;
            }
        } else if (command === 'contains') {
            let num = Number(current[1]);
            console.log(firstArr.indexOf(num));
        } else if (command === 'remove') {
            let index = Number(current[1]);
            firstArr.splice(index, 1);
        } else if (command === 'shift') {
            let positions = Number(current[1]);
            for (let i = 0; i < positions; i++) {
                let n = firstArr.shift();
                firstArr.push(n);
            }
        } else if (command === 'sumPairs') {
            for (let i = 0; i < firstArr.length; i += 2) {
                if (i === firstArr.length - 1 && firstArr.length % 2 !== 0) {
                    result.push(firstArr[firstArr.length - 1]);
                    break;
                }
                let sum = firstArr[i] + firstArr[i + 1];
                result.push(sum);
            }
            firstArr = result;
            result = [];
        } else if (command === 'print') {
            console.log(`[ ${firstArr.join(', ')} ]`);
        }
    }
}

// function manipulator(arr, strArr) {
//     let result = [];

//     for (let command of strArr) {
//         if (command.includes('addMany')) {
//             let [action, index, ...elements] = command.split(' ');
//             elements = elements.map(Number);
//             index = Number(index);
//             arr.splice(index, 0, ...elements);
//         } else if (command.includes('add')) {
//             let [action, index, el] = command.split(' ');
//             index = Number(index);
//             el = Number(el);
//             arr.splice(index, 0, el);
//         } else if (command.includes('contains')) {
//             let [action, el] = command.split(' ');
//             el = Number(el);
//             console.log(arr.indexOf(el));
//         } else if (command.includes('remove')) {
//             let [action, index] = command.split(' ');
//             index = Number(index);
//             arr.splice(index, 1);
//         } else if (command.includes('shift')) {
//             let [action, positions] = command.split(' ');
//             positions = Number(positions);
//             for (let i = 0; i < positions; i++) {
//                 let current = arr.shift();
//                 arr.push(current);
//             }
//         } else if (command == 'sumPairs') {
//             for (let i = 0; i < arr.length; i += 2) {
//                 if (i === arr.length - 1 && arr.length % 2 !== 0) {
//                     result.push(arr[arr.length - 1]);
//                     break;
//                 }
//                 let sum = arr[i] + arr[i + 1];
//                 result.push(sum);
//             }
//             arr = result;
//             result = [];
//         } else if(command == 'print'){
//             console.log(`[ ${arr.join(', ')} ]`);
//             break;
//         }
//     }
// }
// arrManipulator([1, 2, 4, 5, 6, 7],
//     ['add 1 8', 'contains 1', 'contains 3', 'print']);

// arrManipulator([1, 2, 3, 4, 5],
//     ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);

arrManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]);

