function reverseArrayOfStrings(arr) {
    let result = '';
    for (let i = arr.length - 1; i >= 0; i--) {
        result += `${arr[i]} `;
    }
    console.log(result);
}
reverseArrayOfStrings(['33', '123', '0', 'dd'])