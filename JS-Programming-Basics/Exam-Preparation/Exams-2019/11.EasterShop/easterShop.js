function easterShop(input) {
    let index = 0;
    let eggs = Number(input[index++]);
    let command = input[index];
    let counter = 0;

    while (command !== "Close") {
        if (command === "Buy") {
            index++;
            command = Number(input[index]);

            if (command > eggs) {
                console.log("Not enough eggs in store!");
                console.log(`You can buy only ${eggs}.`);
                break;
            }
            counter += command;
            eggs -= command;
        } else if (command === "Fill") {
            index++;
            command = Number(input[index]);
            eggs += command;
        }

        index++;
        command = input[index];
    }
    if (command === "Close") {
        console.log("Store is closed!");
        console.log(`${counter} eggs sold.`);
    }
}
easterShop(["20",
    "Fill",
    "30",
    "Buy",
    "15",
    "Buy",
    "20",
    "Close"
])