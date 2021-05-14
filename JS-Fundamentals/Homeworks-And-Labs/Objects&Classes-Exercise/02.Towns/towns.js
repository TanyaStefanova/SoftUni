function towns(arr) {

    for (let i = 0; i < arr.length; i++) {
 
        let [city, latitude, longitude] = arr[i].split(' | ');

        let currentTown = {
            town: city,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }

        console.log(currentTown);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])