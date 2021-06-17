function stringSubstring(word, text) {
    text = text.toLowerCase().split(' ');
    word = word.toLowerCase();

    for (let str of text) {
        if (str === word) {
            console.log(word);
            break;
        }
    }
    if (!text.includes(word)) {
        console.log(`${word} not found!`);
    }
}
stringSubstring('javascript', 'JavaScript is the best programming language');
stringSubstring('python', 'JavaScript is the best programming language');