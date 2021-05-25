function travelTime(arr) {
    let destinations = {};

    for (let line of arr) {
        let [country, town, costs] = line.split(' > ');
        costs = Number(costs);

        if (!destinations.hasOwnProperty(country)) {
            destinations[country] = { [town]: costs };
        } else {
            if (destinations[country].hasOwnProperty(town)) {
                if (destinations[country][town] > costs) {
                    destinations[country][town] = costs;
                }
            } else {
                destinations[country][town] = costs;
            }
        }
    }
    
    destinations = Object.entries(destinations).sort((a, b) => a[0].localeCompare(b[0]))

    for (let [key, valKey] of destinations)
        console.log(key + ' ->', Object.entries(valKey).map(city => city.join(' -> ')).join(' '))
}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"])