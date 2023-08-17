function solve(arr) {
    return arr.sort((a, b) => a.length - b.length || a.localeCompare(b))
        .join(`\n`);
}
console.log(solve(['alpha',
    'beta',
    'gamma']
))


// function sortArrByTwoCriteria(arr){

//     arr.sort((a,b) => a.length - b.length || a.localeCompare(b))
//     .forEach(x => console.log(x));
// }