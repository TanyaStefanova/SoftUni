function distinctArr(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let indexOfEl = arr.indexOf(arr[i]);
        if (i === indexOfEl) {
            newArr.push(arr[i])
        }
    }
    console.log(newArr.join(' '));
}
distinctArr([7, 8, 9, 7, 2, 3, 4, 1, 2]);



    // for (let i = 0; i < arr.length; i++) {
    //     let index = arr.indexOf(arr[i], i + 1)

    //     if (index !== -1) {
    //         arr.splice(index, 1);
    //     }
    // }