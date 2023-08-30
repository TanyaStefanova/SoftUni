function solve(arr) {
    let output = {};

    arr.map(x => {
        let [product, price] = x.split(' : ');
        price = Number(price);
        let firstLetter = product[0];

        // if(output.hasOwnProperty(firstLetter)){
        //     output[firstLetter][product] = price;
        // } else{
        //     output[firstLetter] = {[product]: price}
        // }

        output.hasOwnProperty(firstLetter) ? output[firstLetter][product] = price : output[firstLetter] = { [product]: price };
    })

    let sorted = Object.keys(output).sort((a, b) => a.localeCompare(b));
    sorted.forEach(x => {
        console.log(x);
        Object.entries(output[x])
            .sort((a, b) => a[0].localeCompare(b[0]))
            .forEach(([key, value]) => {
                console.log(`  ${key}: ${value}`);
            })
    })
}
solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])