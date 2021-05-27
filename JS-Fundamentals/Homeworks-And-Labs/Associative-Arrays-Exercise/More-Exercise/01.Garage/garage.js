function garage(arr) {
    let garages = new Map();

    for (let line of arr) {
        let [number, carInfo] = line.split(' - ');
        number = Number(number);
   
        if (!garages.has(number)) {
            garages.set(number, []);
        }

        let current = garages.get(number);
        current.push(carInfo);
    }

        Array.from(garages).forEach(([garage, cars]) => {
            console.log(`Garage № ${garage}`);
            for (let car of cars) {
                while (car.includes(':')) {
                    car = car.replace(': ', ' - ');
                }
                console.log(`--- ${car}`);
            }
        });
    }

    // function solveGarageObject(input) {
    //     let garages = {};
    //     for (const line of input) {
    //         let [garage, carInfo] = line.split(' - ');
    //         if (!garages.hasOwnProperty(garage)) {
    //             garages[garage] = [];
    //         }
    //         garages[garage].push(carInfo);
    //     }
    //     let output = '';
    //     Object.entries(garages).forEach(([garage, cars]) => {
    //         output += `Garage № ${garage}\n`;
    //         for (let currCar of cars) {
    //             currCar = currCar.replace(/: /g, ' - ');
    //             output += `--- ${currCar}\n`;
    //         }
    //     });
    //     console.log(output);
    // }
    garage(['1 - color: blue, fuel type: diesel',
        '1 - color: red, manufacture: Audi',
        '2 - fuel type: petrol',
        '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])

