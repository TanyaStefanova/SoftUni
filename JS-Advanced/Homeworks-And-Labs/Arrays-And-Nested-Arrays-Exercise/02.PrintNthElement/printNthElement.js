function solve(arr, num) {
    // let output = [];

    // for (let i = 0; i < arr.length; i += num) {
    //     output.push(arr[i]);
    // }

    // return output;

    return arr.filter((el, index) => {
        if(index % num == 0){
            return el;
        }
    })

    // return arr.filter(_, index => index % num == 0) - тук е с долна черта, защото реално не го използваме този първия елем.
}
console.log(solve(['5',
    '20',
    '31',
    '4',
    '20'],
    2))