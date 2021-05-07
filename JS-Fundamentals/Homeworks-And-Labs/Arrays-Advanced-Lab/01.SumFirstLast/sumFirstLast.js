function sumFirstLast(arr) {

    let first = Number(arr[0]);
    let last = Number(arr.pop());
    let sum = first + last;
    return sum;
}
let sum = sumFirstLast(['20', '30', '40']);
console.log(sum);