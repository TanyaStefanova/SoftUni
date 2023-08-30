// 100/100:
// function lowestPrices(input) {
//     let products = {};
//     let sequence = [];
 
//     for (let line of input){
//         let arr = line.split(' | ');
//         let town = arr[0];
//         let product = arr[1];
//         let price = Number(arr[2]);
 
//         if (product in products){
//             if (price < products[product].price){
//                 products[product].price = price;
//                 products[product].town = town;
//             }
//         }
//         else{
//             let obj = {};
//             obj.price = price;
//             obj.town = town;
//             products[product] = obj;
//             sequence.push(product);
//         }
//     }
 
//     for (let pr of sequence){
//         console.log(pr + " -> " + products[pr].price + ' (' + products[pr].town + ')');
//     }
// }

function lowestPricesInCities(input) {
    let products = {};
    let sequence = [];
 
    for (let line of input){
        let arr = line.split(' | ');
        let[town, product, price] = arr;
 
        if (product in products){
            if (price < products[product].price){
                products[product].price = price;
                products[product].town = town;
            }
        }else{
            let obj = {};
            obj.price = price;
            obj.town = town;
            products[product] = obj;
            sequence.push(product);
        }
    }
 
    // for (let pr of sequence){
    //     console.log(pr + " -> " + products[pr].price + ' (' + products[pr].town + ')');
    // }
    Object.keys(products).forEach(product => {
                console.log(`${product} -> ${products[product].price} (${products[product].town})`);
            })
}
lowestPricesInCities(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10'])


function solve(arr) {
    let obj = {};

    arr.forEach(x => {
        let [town, product, price] = x.split(' | ');
        price = Number(price);

        if (!obj[product]) {
            obj[product] = {
                price,
                town,
            }
        } else {
            if (obj[product]['price'] > price) {
                obj[product]['town'] = town;
            }
        }
    });

    Object.keys(obj).forEach(key => {
        console.log(`${key} -> ${obj[key].price} (${obj[key].town})`);
    });
}
solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);

