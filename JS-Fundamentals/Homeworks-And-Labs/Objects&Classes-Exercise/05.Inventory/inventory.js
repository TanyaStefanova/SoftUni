function inventory(arr) {
    let register = [];

    for (let i = 0; i < arr.length; i++) {
        let currentHero = arr[i].split(' / ');
        let [heroName, heroLevel, items] = currentHero;
        heroLevel = Number(heroLevel);
        items = items.split(', ').sort((a, b) => a.localeCompare(b)).join(', ');

        let hero = {};
        hero.Hero = heroName;
        hero.level = heroLevel;
        hero.items = items;
        register.push(hero);
    }

    register
    .sort((a,b) => a.level - b.level)
    .forEach(hero => {
        console.log(`Hero: ${hero.Hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    })
}
inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"])