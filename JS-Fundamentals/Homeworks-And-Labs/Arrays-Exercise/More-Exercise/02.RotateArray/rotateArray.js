function rotateArray(arr) {
    let rotations = Number(arr.pop());

    let i = 0;
    while (i < rotations) {
        arr.unshift(arr.pop());
        i++
    }
    console.log(arr.join(' '));
}
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])


// ['1', '2', '3', '4', '2']
// ['Banana', 'Orange', 'Coconut', 'Apple', '15']
// ['remove', 'remove', 'remove']
