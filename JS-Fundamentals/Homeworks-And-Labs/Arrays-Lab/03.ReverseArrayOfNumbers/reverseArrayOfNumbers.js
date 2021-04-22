function reverseAnArray(n, arr) {
    let newArray = [];

    for (let i = 0; i < n; i++) {
        newArray.push(arr[i]);
    }

    let output = '';

    for (let i = newArray.length - 1; i >= 0; i--) {
        output += `${newArray[i]} `;
    }
    console.log(output);
}
reverseAnArray(2, [66, 43, 75, 89, 47])