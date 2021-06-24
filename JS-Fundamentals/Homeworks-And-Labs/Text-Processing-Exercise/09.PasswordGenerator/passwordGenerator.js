function passGenerator(arr) {
    let third = arr.pop().toUpperCase();
    let str = arr[0] + arr[1];
    counter = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i].charCodeAt();
        if (counter >= third.length) {
            counter = 0;
        }
        if (char == 97 || char == 101 || char == 105 || char == 111 || char == 117) {
            str = str.replace(str[i], third[counter]);
            counter++;
        }
    }
    let result = str.split('').reverse().join('');
    console.log(`Your generated password is ${result}`);
}

passGenerator(['areyousureaboutthisone', 'notquitebutitrustyou',
    'disturbed']);
    // SIytsDrtDtEbBtRUqtTnSnIsDhttDEbBRrUsTSyIrD



