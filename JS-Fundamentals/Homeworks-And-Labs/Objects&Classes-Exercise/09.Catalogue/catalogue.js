function catalogue(arr) {

    arr.sort((a, b) => a.localeCompare(b));

    let arrFirstLetters = [];

    for (let i = 0; i < arr.length; i++) {
        let firstLetter = arr[i].substring(0, 1);
        if (!arrFirstLetters.includes(firstLetter)) {
            arrFirstLetters.push(firstLetter);
        }
    }

    for (let el of arrFirstLetters) {
        console.log(el);
        for (let i = 0; i < arr.length; i++) {
            let currentProduct = arr[i];
            let currentFirstLetter = currentProduct.substring(0, 1);
            if (currentFirstLetter === el) {
                let [productName, productPrice] = currentProduct.split(' : ');
                console.log(`  ${productName}: ${productPrice}`);
            }
        }
    }
}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])