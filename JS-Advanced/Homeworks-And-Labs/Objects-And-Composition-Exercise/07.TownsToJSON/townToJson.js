function townsToJson(arr) {

    let data = arr
        .map(row => row.split('|')
            .filter(x => x.length > 0)
            .map(x => x.trim()));

    let properties = data.shift();

    let result = [];

    data.forEach(row => {
        let town = {
            [properties[0]] /* по този н-н можем динамично да присвояваме стойности*/: row[0],
            [properties[1]]: Number(Number(row[1]).toFixed(2)),
            [properties[2]]: Number(Number(row[2]).toFixed(2))
        }

        result.push(town);
    });

    console.log(JSON.stringify(result));
}
townsToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])