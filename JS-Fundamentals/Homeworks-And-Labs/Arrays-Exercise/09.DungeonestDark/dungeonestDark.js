function dungeon(arr) {
    let health = 100;
    let coins = 0;

    let rooms = arr.toString();
    rooms = rooms.split('|');

    let roomsCounter = 0;

    for (let i = 0; i < rooms.length; i++) {
        let currentEl = rooms[i].split(' ');
        let command = currentEl[0];
        let number = Number(currentEl[1]);
        roomsCounter++;

        if (command === 'potion') {
            health += number;
            if (health > 100) {
                console.log(`You healed for ${100 - (health - number)} hp.`);
                health = 100;
            } else {
                console.log(`You healed for ${number} hp.`);
            }
            console.log(`Current health: ${health} hp.`);
        } else if (command === 'chest') {
            coins += number;
            console.log(`You found ${number} coins.`);
        }
        if (command !== 'potion' && command !== 'chest') {
            health -= number;
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else if (health <= 0) {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${roomsCounter}`);
                break;
            }
        }

    }
    if (health > 0) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

dungeon(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);

// ["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]
// ["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]