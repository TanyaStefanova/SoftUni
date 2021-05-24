function neighborhoods(arr) {
    let neighborhoodsList = {};
    // let neighborhoodsList = new Map();
    let streets = arr.shift().split(', ');

    for (let street of streets) {
        if (!neighborhoodsList.hasOwnProperty(street)) {
            neighborhoodsList[street] = [];
        }
        // if (!neighborhoodsList.has(street)) {
        //     neighborhoodsList.set(street, []);
        // }
    }

    for (let line of arr) {
        let [neighborhood, name] = line.split(' - ');
        if (streets.includes(neighborhood)) {
            neighborhoodsList[neighborhood].push(name);
            // let current = neighborhoodsList.get(neighborhood);
            // current.push(name);
        }
    }
    
//  let quartal = Array.from(neighborhoodsList)
    let quartal = Object.entries(neighborhoodsList)
        .sort((a, b) => b[1].length - a[1].length);

    for (let [street, people] of quartal) {
        console.log(`${street}: ${people.length}`);
        for (let person of people) {
            console.log(`--${person}`);
        }
    }
}
neighborhoods(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy'])