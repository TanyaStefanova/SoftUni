// По условието от курса Септември 2020:
// function result(currencyFormatter){

//     let separator = ',';
//     let symbol = '$';
//     let symbolFirst = true;

//     return currencyFormatter.bind(null, separator, symbol, symbolFirst);

//     // Another way:
//     // return value => currencyFormatter(separator, symbol, symbolFirst, value);
// }

// let dollarFormatter = result(currencyFormatter);
// console.log(dollarFormatter(5345));   // $ 5345,00
// console.log(dollarFormatter(3.1429)); // $ 3,14
// console.log(dollarFormatter(2.709));  // $ 2,71


// function currencyFormatter(separator, symbol, symbolFirst, value) {
//     let result = Math.trunc(value) + separator;
//     result += value.toFixed(2).substr(-2,2);
//     if (symbolFirst) return symbol + ' ' + result;
//     else return result + ' ' + symbol;
// }


// Задачата с малко променено условие от по-актуалния курс:


function createFormatter(separator, symbol, symbolFirst, currencyFormatter){

    // Това всъщност е partial application (bind ще ни извика currencyFormatter с вече предефинирани separator, symbol, symbolFirst и ще остане само едно = value, което ще е това, което подаваме долу в console.log):
    return currencyFormatter.bind(null, separator, symbol, symbolFirst)
}

let dollarFormatter = createFormatter(',', '$', true, currencyFormatter);
console.log(dollarFormatter(5345));   // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709));  // $ 2,71



function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}
