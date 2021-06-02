function censoredWords(text, word) {
    while (text.includes(word)) {
        text = text.replace(word, '*'.repeat(word.length));
    }
    console.log(text);

	//Second way:
    // let start = text.indexOf(word);
    // while (start != -1) {
    //     let first = text.substring(0, start);
    //     let second = text.substring(start + word.length);
    //     text = first + '*'.repeat(word.length) + second;

    //     start = text.indexOf(word);
    // }
    // console.log(text);

	//Third way:
    // console.log(text.split(word).join('*'.repeat(word.length)));
}
censoredWords("A small sentence with some words", "small")