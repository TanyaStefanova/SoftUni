function loadingBar(num) {
    let percent = num / 10;
    let loader = ['.','.','.','.','.','.','.','.','.','.'];

    function complete(num) {
        let result = [];
        result.push('100% Complete!');
        result.push('[%%%%%%%%%%]');
        return result.join('\n');
    }

    for (let i = 0; i < percent; i++) {
        loader.pop();
        loader.unshift('%');
    }

    if (num === 100) {
        console.log(complete(num));
    } else {
        console.log(`${num}% [${loader.join('')}]`);
        console.log('Still loading...');
    }
}
loadingBar(30);