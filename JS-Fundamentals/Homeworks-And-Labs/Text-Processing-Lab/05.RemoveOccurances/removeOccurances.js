function removeOccurances(word, text) {
    while (text.includes(word)) {
        text = text.replace(word, '');
    }
    console.log(text);
}
removeOccurances('ice', 'kicegiciceeb')