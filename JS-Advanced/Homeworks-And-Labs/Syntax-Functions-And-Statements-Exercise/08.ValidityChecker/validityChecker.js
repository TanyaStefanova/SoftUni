function validityChecker(x1, y1, x2, y2) {
    function isValid(x1, y1, x2, y2) {
        const distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
        if (Number.isInteger(distance)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }

    isValid(x1, y1, 0, 0);
    isValid(x2, y2, 0, 0);
    isValid(x1, y1, x2, y2);

}



// function validityChecker(x1,y1,x2,y2) {

//     console.log(`{${x1}, ${y1}} to {0, 0} is ${checkValidity(isValid(x1, y1, 0, 0))}`);
//     console.log(`{${x2}, ${y2}} to {0, 0} is ${checkValidity(isValid(x2, y2, 0, 0))}`);
//     console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${checkValidity(isValid(x1, y1, x2, y2))}`);

//     function isValid(x1, y1, x2, y2) {
//         let value = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
//         return Number.isInteger(value);
//     }

//     function checkValidity(validity) {
//         return validity ? 'valid' : 'invalid';
//     }
// }
// validityChecker(3, 0, 0, 4);
// validityChecker(2, 1, 1, 1);

// function demo(x1, y1, x2, y2) {
//     let firstDistance = Math.sqrt((Math.pow((0 - x1), 2)) + Math.pow((0 - y1), 2));
//     let secondDistance = Math.sqrt((Math.pow((x2 - 0), 2)) + Math.pow((y2 - 0), 2));
//     let thirdDistance = Math.sqrt((Math.pow((x2 - x1), 2)) + Math.pow((y2 - y1), 2));

//     if (Number.isInteger(firstDistance)) {
//         console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
//     } else {
//         console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
//     }

//     if (Number.isInteger(secondDistance)) {
//         console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
//     } else {
//         console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
//     }

//     if (Number.isInteger(thirdDistance)) {
//         console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
//     } else {
//         console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
//     }
// }