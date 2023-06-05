function cookingByNumbers(num, ...params) {
    let output = Number(num);

    let commands = {
        chop: output => output /= 2,
        dice: output => Math.sqrt(output),
        spice: output => output += 1,
        bake: output => output *= 3,
        fillet: output => output *= 0.80,
    }

    params.forEach(param => {
      output = commands[param](output);
      console.log(output);
    })
}


// cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');

// function demo(...arr) {
//     let num = Number(arr.shift());

//     for (let command of arr) {
//         if (command == 'chop') {
//             num /= 2;
//         } else if (command == 'dice') {
//             num = Math.sqrt(num);
//         } else if (command == 'spice') {
//             num += 1;
//         } else if (command == 'bake') {
//             num *= 3;
//         } else if (command == 'fillet') {
//             num *= 0.80;
//         }
//         console.log(num);
//     }
// }



// function cookingByNumbers(num, firstCommand, secondCommand, thirdCommand, fourthCommand, fifthCommand) {
//     num = Number(num);
//     let arr = [firstCommand, secondCommand, thirdCommand, fourthCommand, fifthCommand];

//     for (let command of arr) {
//         if (command == 'chop') {
//             num /= 2;
//         } else if (command == 'dice') {
//             num = Math.sqrt(num);
//         } else if (command == 'spice') {
//             num += 1;
//         } else if (command == 'bake') {
//             num *= 3;
//         } else if (command == 'fillet') {
//             num *= 0.80;
//         }
//         console.log(num);
//     }
// }