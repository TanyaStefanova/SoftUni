function santaHelper(arr) {
    let key = arr.shift();
    key = Number(key);

    for (let command of arr) {
        if (command === 'end') {
            break;
        }
        let current = '';
        for (let char of command) {
            let currentChar = char.charCodeAt() - key;
            current += String.fromCharCode(currentChar);
        }
        let pattern = /@(?<name>[A-Za-z]+)[^\@\-\!\:\>]+!(?<behaviourType>[GN])!/;
        let match = pattern.exec(current);
        if (match) {
            if (match.groups.behaviourType == 'G') {
                console.log(match.groups.name);
            }
        }
    }
}
santaHelper([
    '3',
    'CNdwhamigyenumje$J$',
    'CEreelh-nmguuejn$J$',
    'CVwdq&gnmjkvng$Q$',
    'end']);

    // santaHelper([
    //     '4',
    //     '~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%',
    //     '0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf',
    //     ';:<lyiljz{onzDPere=;=9<;8=rhknlf%K%',
    //     "Wonvfkmwzkmpwvzkm'lhjnlDWeqerxle0wlnzj{nz%K%nohwn",
    //     'DReh}e=<4lhzj1%K%',
    //     'end']);

    // santaHelper([
    //     '3',
    //     "N}eideidmk$'(mnyenmCNlpamnin$J$",
    //     'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
    //     'ppqmkkkmnolmnnCEhq/vkievk$Q$',
    //     'yyegiivoguCYdohqwlqh/kguimhk$J$',
    //     'end']);