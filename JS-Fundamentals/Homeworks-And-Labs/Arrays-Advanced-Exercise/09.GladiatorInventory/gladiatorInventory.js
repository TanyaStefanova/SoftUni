function gladiatorInventory(arr) {

    let inventory = arr.shift().split(' ');

    for (let i = 0; i < arr.length; i++) {
        let commands = arr.slice()[i].split(' ')
        let command = commands[0];
        let equipment = commands[1];

        switch (command) {
            case 'Buy': buy(equipment);
                break;
            case 'Trash': trash(equipment);
                break;
            case 'Repair': repair(equipment);
                break;
            case 'Upgrade': upgrade(equipment);
                break;
        }
    }
    console.log(inventory.join(' '));

    function buy(eqp) {
        if (!inventory.includes(eqp)) {
            inventory.push(eqp);
        }
        return inventory;
    }

    function trash(eqp) {
        for (let i = 0; i < inventory.length; i++) {
            if (eqp === inventory[i]) {
                inventory.splice(i, 1);
            }
        }
        return inventory;
    }

    function repair(eqp) {
        for (let i = 0; i < inventory.length; i++) {
            if (eqp === inventory[i]) {
                let repaired = inventory.splice(i, 1);
                inventory.push(repaired.toString());
            }
        }
        return inventory;
    }

    function upgrade(eqp) {
        let item = eqp.split("-");
        for (let i = 0; i < inventory.length; i++) {
            if (item[0] === inventory[i]) {
                let newItem = item[0] + ":" + item[1];
                inventory.splice(i + 1, 0, newItem);
            }
        }
        return inventory;
    }
}
gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']);

// gladiatorInventory(['SWORD Shield Spear',
// 'Trash Bow',
// 'Repair Shield',
// 'Upgrade Helmet-V']);
