function furniture(arr) {

    let totalPrice = 0;
    let command = arr.shift();
    let result = 'Bought furniture:\n'

    while (command !== 'Purchase') {
        let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+(\.[\d]+)?)!(?<quantity>\d+)/g;
        let matches = pattern.exec(command);
        if (matches) {
            result += matches.groups.name + '\n';
            totalPrice += Number(matches.groups.price) * Number(matches.groups.quantity);
        }
        command = arr.shift();
        matches = pattern.exec(command);
    }

    result += `Total money spend: ${totalPrice.toFixed(2)}`;
    console.log(result);
}

furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase'])