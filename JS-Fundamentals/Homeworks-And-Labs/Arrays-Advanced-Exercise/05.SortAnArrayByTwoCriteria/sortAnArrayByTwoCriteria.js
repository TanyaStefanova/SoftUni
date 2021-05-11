function sortByTwoCriteria(arr) {

    arr.sort(sorting);
    console.log(arr.join('\n'));

    function sorting(a, b) {
        if (a.length > b.length) {
            return 1;
        } else if (a.length < b.length) {
            return -1;
        } else {
            return a.localeCompare(b);
        }
    }
}

// function sort(arr){
//     let sorted = arr.sort((a,b) => a.length - b.length || a.localeCompare(b));
//     console.log(sorted.join('\n'));
//     }

sortByTwoCriteria(["alpha", "beta", "gamma"]);
// sortByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);