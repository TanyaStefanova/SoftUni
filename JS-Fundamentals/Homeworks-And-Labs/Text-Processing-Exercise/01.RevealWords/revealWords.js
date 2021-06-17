function revealWords(words, text) {
    words = words.split(', ');

    for (let word of words) {
        let starsCount = '*'.repeat(word.length);
        text = text.replace(starsCount, word);
    }
    console.log(text);
}
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');