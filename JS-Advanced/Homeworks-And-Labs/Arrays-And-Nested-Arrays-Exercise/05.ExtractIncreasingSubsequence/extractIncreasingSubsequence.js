function solve(arr) {

    let num = Number.MIN_SAFE_INTEGER;

    return arr.reduce((acc, x) => {
        if (x >= num) {
            acc.push(x);
            num = x;
        }
        return acc;
    }, [])
}
console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]))