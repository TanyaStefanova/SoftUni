function arenaTier(arr) {
    let arena = {};
    let command = arr.shift();

    while (command !== 'Ave Cesar') {
        if (command.includes('vs')) {
            let [firstGladiator, secondGladiator] = command.split(' vs ');
            if (arena.hasOwnProperty(firstGladiator) && arena.hasOwnProperty(secondGladiator)) {
                let first = Object.entries(arena[firstGladiator]);
                let second = Object.entries(arena[secondGladiator]);
                for (let [tech, skill] of first) {
                    for (let [t, s] of second) {
                        if (tech === t) {
                            if (skill < s) {
                                delete arena[firstGladiator];
                            } else {
                                delete arena[secondGladiator];
                            }
                        }
                    }
                }
            }
        } else {
            let [gladiator, technique, skill] = command.split(' -> ');
            skill = Number(skill);
            if (!arena.hasOwnProperty(gladiator)) {
                arena[gladiator] = { [technique]: skill }
            } else {
                if (!arena[gladiator].hasOwnProperty(technique)) {
                    arena[gladiator][technique] = skill;
                } else {
                    let oldSkill = arena[gladiator][technique];
                    if (oldSkill < skill) {
                        arena[gladiator][technique] = skill;
                    }
                }
            }
        }
        command = arr.shift();
    }

    let gladiators = Object.keys(arena);
    for (let gladiator of gladiators) {
        let skills = arena[gladiator];
        let skillsArr = Object.entries(skills);
        let totalSkill = 0;
        for (let kvp of skillsArr) {
            totalSkill += Number(kvp[1]);
        }
        let current = arena[gladiator];
        current['totalSkill'] = totalSkill;
    }

    let entries = Object.entries(arena);
    entries.sort((a, b) => {
        let totalA = a[1].totalSkill;
        let totalB = b[1].totalSkill;
        return totalB - totalA;
    });

    entries.forEach(gladiator => {
        let name = gladiator[0];
        let total = arena[name];
        console.log(`${name}: ${total['totalSkill']} skill`);
        delete total['totalSkill'];
        let skills = Object.entries(total);
        skills.sort((a, b) => a[0].localeCompare(b[0]));
        skills.sort((a, b) => b[1] - a[1]);
        for (let el of skills) {
            console.log(`- ${el[0]} <!> ${el[1]}`);
        }
    });
}

arenaTier([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Gosho',
    'Ave Cesar'])