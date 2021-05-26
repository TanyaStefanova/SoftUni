function minerTask(arr) {
    let resources = {};
    // let resources = new Map();

    for (let i = 0; i < arr.length; i++) {
        let resource = arr[i];
        i++;
        let quantity = Number(arr[i]);
        if (!resources.hasOwnProperty(resource)) {
            resources[resource] = quantity;
        } else {
            resources[resource] += quantity;
        }
        // if (!resources.has(resource)) {
        //     resources.set(resource, quantity);
        // } else {
        //     let newQty = resources.get(resource) + quantity;
        //     resources.set(resource, newQty);
        // }
    }
    for (let [resource, quantity] of Object.entries(resources)) {
        console.log(`${resource} -> ${quantity}`);
    }
    // for (let kvp of Array.from(resources)) {
    //         console.log(`${kvp[0]} -> ${kvp[1]}`);
    //     }
}

minerTask([
    'gold', '155',
    'silver', '10',
    'copper', '17',
    'gold', '15'])