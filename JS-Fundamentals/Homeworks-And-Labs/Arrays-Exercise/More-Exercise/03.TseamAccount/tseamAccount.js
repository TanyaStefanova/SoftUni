function tseam(arr) {
    let account = arr.shift().split(' ');

    let command = arr.shift();
    while (command !== 'Play!') {
        let [action, game] = command.split(' ');
        if (action == 'Install') {
            if (!account.includes(game)) {
                account.push(game);
            }
        } else if (action == 'Uninstall') {
            if (account.includes(game)) {
                let index = account.indexOf(game);
                account.splice(index, 1);
            }
        } else if (action == 'Update') {
            if (account.includes(game)) {
                let index = account.indexOf(game);
                let lastGame = account.splice(index, 1);
                account.push(lastGame.join(''));
            }
        } else if (action == 'Expansion') {
            let [gameName, expansion] = game.split('-');
            if (account.includes(gameName)) {
                let index = account.indexOf(gameName);
                account.splice(index + 1, 0, `${gameName}:${expansion}`);
            }
        }
        command = arr.shift();
    }

    console.log(account.join(' '));
}
// tseam(['CS WoW Diablo',
//     'Install LoL',
//     'Uninstall WoW',
//     'Update Diablo',
//     'Expansion CS-Go',
//     'Play!']);

    tseam(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!'])