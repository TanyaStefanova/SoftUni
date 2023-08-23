function solve(arr) {
    let obj = {};

    arr.forEach(line => {
        let [town, population] = line.split(' <-> ');
        population = Number(population);

        if (!obj.hasOwnProperty(town)) {
            obj[town] = population;
        } else {
            obj[town] += population;

        }
    });

    Object.keys(obj).forEach(key => {
        console.log(`${key} : ${obj[key]}`);
    });
}