function pascal(str) {
    let result = [];
    let capIndex = 0;

    for (let i = 1; i < str.length; i++) {
        if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90) {
            result.push(str.substring(capIndex, i));
            capIndex = i;
        }
        if (i == str.length - 1) {
            result.push(str.substring(capIndex));
        }
    }
    console.log(result.join(', '));
}

pascal('SplitMeIfYouCanHaHaYouCantOrYouCan');