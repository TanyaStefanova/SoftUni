function rageQuit(arr) {
    let uniqueSymbols = new Set();
    let result = '';
    let array = arr[0].split(/(\d+)/).filter(x => x !== '');

    for (let i = 0; i < array.length; i++) {
        let current = array[i].toUpperCase();
        i++;
        let num = Number(array[i]);
        if (num > 0) {
            for (let char of current) {
                uniqueSymbols.add(char)
            }
        }
        result += current.repeat(num);
    }
    console.log(`Unique symbols used: ${uniqueSymbols.size}`);
    console.log(result);
}

rageQuit([
    'e-!btI17z=E:DMJ19U1Tvg VQ>11P"qCmo.-0YHYu~o%/%b.}a[=d15fz^"{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/{D\'xi]-~17 *%p"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p"Z<v13fI]\':\\Iz.17*W:\\mwV`z-15g@hUYE{_$~}+X%*nytkW15'
])