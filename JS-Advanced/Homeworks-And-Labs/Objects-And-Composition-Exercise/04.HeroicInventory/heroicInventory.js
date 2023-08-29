function solve(arr) {

    let output = [];

    arr.map(x => {

        let [name, level, items] = x.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        let currentHero = {
            name,
            level,
            items
        }

        output.push(currentHero);
    })

     return JSON.stringify(output);
}
solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])