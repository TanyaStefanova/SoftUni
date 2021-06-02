function strOccurances(sentence, word) {
    let counter = 0;
    let arr = sentence.split(' ');
    for (let char of arr) {
        if (char === word) {
            counter++;
        }
    }
    console.log(counter);

    // console.log(sentence.split(' ').filter(w => w== word).length);
}
strOccurances("This is a word and it also is a sentence", "is")