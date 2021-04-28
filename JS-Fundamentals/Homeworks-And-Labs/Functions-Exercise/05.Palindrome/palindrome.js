function palindrome(arr) {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        let current = String(arr[i]);
        let stringReversed = current.split('').reverse().join('');
        if (current === stringReversed) {
            result = true;
        } else {
            result = false;
        }
        console.log(result);
    }
}
// palindrome([123, 323, 421, 121]);
palindrome([32,2,232,1010]);