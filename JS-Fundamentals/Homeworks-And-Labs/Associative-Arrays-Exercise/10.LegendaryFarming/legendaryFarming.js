function legendaryFarming(str) {
    let arr = str.split(' ');
    let items = {
        legendary: {
            shards: 0,
            fragments: 0,
            motes: 0
        }, junk: {}
    };

    for (let i = 0; i < arr.length; i++) {
        let quantity = Number(arr[i]);
        i++;
        let item = arr[i].toLowerCase();

        if (item == 'shards' || item == 'fragments' || item == 'motes') {
            items.legendary[item] += quantity;

            if (items.legendary[item] >= 250) {
                if (item == 'shards') {
                    console.log('Shadowmourne obtained!');
                    items.legendary[item] -= 250;
                    break;
                } else if (item == 'fragments') {
                    console.log('Valanyr obtained!');
                    items.legendary[item] -= 250;
                    break;
                } else if (item == 'motes') {
                    console.log('Dragonwrath obtained!');
                    items.legendary[item] -= 250;
                    break;
                }
            }
        } else {
            if (!items.junk.hasOwnProperty(item)) {
                items.junk[item] = quantity;
            } else {
                items.junk[item] += quantity;
            }
        }
    }

    Object.entries(items.legendary).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .forEach(arr => console.log(`${arr[0]}: ${arr[1]}`));

    Object.entries(items.junk).sort((a, b) => a[0].localeCompare(b[0])).forEach(arr => {
        console.log(`${arr[0]}: ${arr[1]}`);
    });
}
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')