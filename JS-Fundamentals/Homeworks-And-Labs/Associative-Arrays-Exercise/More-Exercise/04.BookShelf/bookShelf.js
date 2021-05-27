function bookShelf(arr) {
    let shelfs = {};
    for (let line of arr) {
        if (line.includes('->')) {
            let [id, genre] = line.split(' -> ');
            if (!shelfs.hasOwnProperty(id)) {
                shelfs[id] = {};
                shelfs[id][genre] = [];
            }
        } else {
            let [title, info] = line.split(': ');
            let [author, currentGenre] = info.split(', ');
            let kvp = Object.entries(shelfs);
            for (let el of kvp) {
                if (el[1].hasOwnProperty(currentGenre)) {
                    let id = el[0];
                    let info = shelfs[id][currentGenre];
                    info.push(`${title}: ${author}`);
                    break;
                }
            }
        }
    }

    Object.keys(shelfs).sort((a, b) => Object.entries(shelfs[b])[0][1].length - Object.entries(shelfs[a])[0][1].length)
    .forEach(id => {
        console.log(`${id} ${Object.keys(shelfs[id])}: ${Object.values(shelfs[id])[0].length}`);
        Object.values(shelfs[id]).forEach(values => {
            values.sort((a, b) => a.localeCompare(b)).forEach(v => {
                console.log(`--> ${v}`);
            });
        });
    });
}

bookShelf(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery',
    '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history'])
