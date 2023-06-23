function sumFirstLast(arr) {
    arr = arr.map(Number);
    let sum = arr[0] + arr[arr.length - 1];
    console.log(sum);

    // let first = Number(arr.shift());
    // let last = Number(arr.pop());
    // let sum = first + last;
    // console.log(sum);
}
sumFirstLast(['20', '30', '40'])