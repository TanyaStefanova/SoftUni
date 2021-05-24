function words(arr) {
    let wordsCounter = {};
    // let wordCounter = new Map();

    for (let word of arr) {
        if (!wordsCounter.hasOwnProperty(word)) {
            wordsCounter[word] = [1];
        } else {
            wordsCounter[word].push(1);
        }

        // if (!wordCounter.has(word)) {
        //     wordCounter.set(word, [1]);
        // } else {
        //     let existing = wordCounter.get(word);
        //     existing.push(1);
        // }
    }

    // let sorted = Array.from(wordCounter)
    let sorted = Object.entries(wordsCounter).sort((a, b) => {
        let lengthA = a[1].length;
        let lengthB = b[1].length
        return lengthB - lengthA;
    });

    for (let [word, count] of sorted) {
        console.log(`${word} -> ${count.length} times`);
    }
}
words(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence",
    "And", "finally", "the", "third", "sentence"])