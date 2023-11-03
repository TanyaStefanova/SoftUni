function solve(inputArr) {

    let collection = [];

    let obj = {
        add: str => collection.push(str),
        remove: str => (collection = collection.filter(x => x !== str)),
        print: () => console.log(collection.join(",")),
    }

    inputArr.forEach(str => {
        let [command, value] = str.split(' ');

        obj[command](value)  /*IIFE?*/
    });
}

solve(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);