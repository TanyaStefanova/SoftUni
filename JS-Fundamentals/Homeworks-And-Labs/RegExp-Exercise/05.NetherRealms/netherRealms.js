function netherRealms(arr) {
    let deamons = arr.shift().split(/[, ]+/g);
    let deamonsBook = {};

    for (let deamon of deamons) {
        let totalHealth = 0;
        let damage = 0;
        let healthPattern = /[^\d\+\-\*\/\.]/g;
        let damagePattern = /[-+]?[\d]+(\.[\d]+)?/g;
        let matches = deamon.match(damagePattern);

        if (matches) {
            for (let num of matches) {
                num = Number(num);
                damage += num;
            }
        }

        for (let char of deamon) {
            let match = char.match(healthPattern);
            if (match) {
                let num = char.charCodeAt();
                totalHealth += num;
            }

            if (char == '*') {
                damage *= 2;
            } else if (char == '/') {
                damage /= 2;
            }
        }

        deamonsBook[deamon] = {
            health: totalHealth,
            damage: damage
        }
    }

    Object.keys(deamonsBook).sort((a, b) => a.localeCompare(b))
        .forEach(deamon => {
            console.log(`${deamon} - ${deamonsBook[deamon]['health']} health, ${deamonsBook[deamon]['damage'].toFixed(2)} damage`);
        });
}
netherRealms(['M3ph-0.5s-0.5t0.0**']);
netherRealms(['M3ph1st0**, Azazel']);
netherRealms(['Gos/ho']);