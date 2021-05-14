function storeProvision(firstArr, secondArr) {
    let store = {};
    for (let i = 0; i < firstArr.length; i++) {
        let currentProduct = firstArr[i];
        i++;
        let quantity = Number(firstArr[i]);
        store[currentProduct] = quantity;
    }

    for (let i = 0; i < secondArr.length; i++) {
        let currentProduct = secondArr[i];
        i++;
        let quantity = Number(secondArr[i]);

        if (!store.hasOwnProperty(currentProduct)) {
            store[currentProduct] = quantity;
        } else {
            store[currentProduct] += quantity;
        }
    }
    
    Object.keys(store).forEach(key => {
        console.log(`${key} -> ${store[key]}`);
    });
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],

    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])