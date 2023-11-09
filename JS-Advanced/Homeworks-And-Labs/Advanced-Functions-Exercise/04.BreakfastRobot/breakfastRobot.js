function solution() {

    let recipies = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
        }
    };

    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };

    return function executeCommands(input) {
        let [command, ingredient, quantity] = input.split(' ');
        quantity = Number(quantity);

        if (command == 'restock') {
            stock[ingredient] += quantity;
            return 'Success';
        } else if (command == 'prepare') {
            let neededMicroElements = Object.values(Object.keys(recipies[ingredient]));
            for (let el of neededMicroElements) {
                if (stock[el] < recipies[ingredient][el] * quantity) {
                    return `Error: not enough ${el} in stock`;
                }
            }

            // for (let el of neededMicroElements) {
            //     stock[el] -= recipies[ingredient][el] * quantity;
            // }

            neededMicroElements.forEach(el => stock[el] -= recipies[ingredient][el] * quantity);
            return 'Success';

        } else if (command == 'report') {
            let output = '';
            Object.keys(stock).forEach(key => {
                output += `${key}=${stock[key]} `
            })
            return output.trim();
        }
    }
}

let manager = solution();
// manager("restock flavour 50");  // Success
// manager("prepare lemonade 4");  // Error: not enough carbohydrate in stock
// manager("restock carbohydrate 10");
// manager("restock flavour 10");
// manager("prepare apple 1");
// manager("restock fat 10");
// manager("prepare burger 1");
// manager("report");

manager("prepare turkey 1");
manager("restock protein 10");
manager("prepare turkey 1");
manager("restock carbohydrate 10");
manager("prepare turkey 1");
manager("restock fat 10");
manager("prepare turkey 1");
manager("restock flavour 10");
manager("prepare turkey 1");
manager("report");
