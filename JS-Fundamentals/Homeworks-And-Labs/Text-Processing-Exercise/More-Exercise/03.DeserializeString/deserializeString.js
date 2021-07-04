function deserializedString(arr) {
    let result = [];

    let command = arr.shift();

    while (command !== 'end') {
        command = command.replace(':', '/').split('/');
        let key = command.shift();
        command = command.map(Number);

        for (let num of command) {
            result[num] = key;
        }
        command = arr.shift()
    }
    console.log(result.join(''));
}
// deserializedString(['a:0/2/4/6', 'b:1/3/5', 'end']);
deserializedString([
    'a:0/3/5/11', 'v:1/4',
    'j:2',        'm:6/9/15',
    's:7/13',     'd:8/14',
    'c:10',       'l:12',
    'end'])
