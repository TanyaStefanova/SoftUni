function calorieObj(arr) {

    let output = {};

    for (let i = 0; i < arr.length; i++) {
        let product = arr[i];
        i++;
        let calories = Number(arr[i]);

        output[product] = calories;
    }

    console.log(output);
}
calorieObj(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])