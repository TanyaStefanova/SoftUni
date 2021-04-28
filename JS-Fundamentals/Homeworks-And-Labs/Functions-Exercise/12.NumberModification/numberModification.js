function numberModification(num) {

    let arr = String(num).split('');
    let sum = 0;
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        counter++;
        sum += Number(arr[i]);
    }

    if (sum / counter > 5) {
        console.log(num);
    } else {
        while (sum / counter < 5) {
            arr.push(9);
            counter++;
            sum += 9;
        }
        console.log(arr.join(''));
    }
}
numberModification(5835);