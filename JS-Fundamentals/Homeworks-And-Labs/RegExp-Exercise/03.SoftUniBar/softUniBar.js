function softUniBar(arr) {
    let total = 0;

    for (let line of arr) {

        let pattern = /%(?<name>[A-Z][a-z]+)%([^\|\$%\.]+)?<(?<product>\w+)>([^\|\$%\.]+)?\|(?<quantity>\d+)\|([^\|\$%\.\d]+)?(?<price>\d+(\.[\d]+)?)\$/g;
        let match = pattern.exec(line);
        if (match) {
            let price = Number(match.groups.quantity) * Number(match.groups.price);
            console.log(`${match.groups.name}: ${match.groups.product} - ${price.toFixed(2)}`);
            total += price;
        }
    }
    console.log(`Total income: ${total.toFixed(2)}`);
}

softUniBar([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'])