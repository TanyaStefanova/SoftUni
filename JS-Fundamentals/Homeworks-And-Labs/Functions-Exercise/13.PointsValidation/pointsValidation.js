function pointsValidation(arr) {
    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];

    function firstDistance(a, b) {
        let isValid = true;
        let distance = Math.sqrt((0 - a) ** 2 + (0 - b) ** 2);
        if (Number.isInteger(distance)) {
            isValid = true;
        } else {
            isValid = false;
        }
        return isValid;
    }

    function secondDistance(a, b) {
        let isValid = true;
        let distance = Math.sqrt((0 - a) ** 2 + (0 - b) ** 2);
        if (Number.isInteger(distance)) {
            isValid = true;
        } else {
            isValid = false;
        }
        return isValid;
    }

    function thirdDistance(a, b, c, d) {
        let isValid = true;
        let distance = Math.sqrt((c - a) ** 2 + (d - b) ** 2);
        if (Number.isInteger(distance)) {
            isValid = true;
        } else {
            isValid = false;
        }
        return isValid;
    }

    if (firstDistance(x1, y1) === true) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (secondDistance(x2, y2) === true){ 
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (thirdDistance(x1, y1, x2, y2) === true) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}
// pointsValidation([3, 0, 0, 4]);
pointsValidation([2, 1, 1, 1]);