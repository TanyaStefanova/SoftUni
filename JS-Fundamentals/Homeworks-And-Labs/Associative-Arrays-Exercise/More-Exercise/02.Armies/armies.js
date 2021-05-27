function armies(arr) {
    let armiesObj = {};

    for (let line of arr) {
        if (line.includes('arrives')) {
            let leader = line.substring(0, (line.length - 'arrives'.length - 1));
            armiesObj[leader] = {};
            armiesObj[leader]['total'] = 0;
        } else if (line.includes(':')) {
            let [leader, armyInfo] = line.split(': ');
            if (armiesObj.hasOwnProperty(leader)) {
                let [army, count] = armyInfo.split(', ');
                count = Number(count);
                armiesObj[leader][army] = count;
                armiesObj[leader]['total'] += count;
            }
        } else if (line.includes('+')) {
            let [armyName, points] = line.split(' + ');
            points = Number(points);
            let leaders = Object.keys(armiesObj);
            for (let leader of leaders) {
                let keys = Object.keys(armiesObj[leader]);
                for (let key of keys) {
                    if (key == armyName) {
                        armiesObj[leader][key] += points;
                        armiesObj[leader].total += points;
                        break;
                    }

                }
            }
        } else if(line.includes('defeated')){
            let leader = line.substring(0,  (line.length - 'defeated'.length - 1));
            delete armiesObj[leader];
        }
    }
    
        let names = Object.keys(armiesObj).sort((a,b) => armiesObj[b].total - armiesObj[a].total);
        
        for(let name of names){
            console.log(`${name}: ${armiesObj[name].total}`);
            delete armiesObj[name].total;
            Object.keys(armiesObj[name]).sort((a,b) => armiesObj[name][b] - armiesObj[name][a]).forEach(army => {
                console.log(`>>> ${army} - ${ armiesObj[name][army]}`);
            })
        }
}
armies(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000',
    'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350',
    'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302',
    'Rick Burr defeated', 'Porter: Retix, 3205'])