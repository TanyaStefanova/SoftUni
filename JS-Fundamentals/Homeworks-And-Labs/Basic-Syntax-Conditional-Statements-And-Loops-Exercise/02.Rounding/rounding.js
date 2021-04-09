function rounding(arg1, arg2) {
    let n = arg1;
    let precision = arg2;
    if (precision > 15) {
        precision = 15;
    }
    n = n.toFixed(precision);
    console.log(parseFloat(n));
}
rounding(10.5, 3)