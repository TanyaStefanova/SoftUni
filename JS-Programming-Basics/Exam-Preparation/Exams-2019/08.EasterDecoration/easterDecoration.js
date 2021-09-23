function easterDecoration(input) {
    let index = 0;
    let customers = Number(input[index++]);
    let command = input[index];

    let totalBill = 0;

    for (let i = 0; i < customers; i++) {
        let currentBill = 0;
        let items = 0;
        while (command !== "Finish") {
            if (command === "basket") {
                items++;
                currentBill += 1.50;
                totalBill += 1.50;
            } else if (command === "wreath") {
                items++;
                currentBill += 3.80;
                totalBill += 3.80;
            } else if (command === "chocolate bunny") {
                items++;
                currentBill += 7;
                totalBill += 7;
            }
            index++;
            command = input[index];
        }
        index++;
        command = input[index];
        if (items % 2 === 0) {
            totalBill -= currentBill * 0.20;
            currentBill *= 0.80;
        }
        console.log(`You purchased ${items} items for ${currentBill.toFixed(2)} leva.`);
    }

    console.log(`Average bill per client is: ${(totalBill / customers).toFixed(2)} leva.`);

}
easterDecoration([
    '1',
    'basket',
    'wreath',
    'chocolate bunny',
    'wreath',
    'basket',
    'chocolate bunny',
    'Finish'
  ])