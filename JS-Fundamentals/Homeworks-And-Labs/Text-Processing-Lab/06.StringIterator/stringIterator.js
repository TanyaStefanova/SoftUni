function stringIterator(str) {
    // let words = str.split(' ');

    // let iterator = {
    //     next: function () {
    //         let isDone = words.length === 0;
    //         let currentWord = words.shift()
    //         return {
    //             value: currentWord,
    //             done: isDone
    //         }
    //     }
    // }

    // let nextElement = iterator.next();

    // while (!nextElement.done) {
    //     console.log(nextElement.value);
    //     nextElement = iterator.next();
    // }

    let splitWords = str.split(' ');

    let words = {
        [Symbol.iterator]: function () {
            return {
                next: function () {
                    let isDone = splitWords.length === 0;
                    let currentWord = splitWords.shift()
                    return {
                        value: currentWord,
                        done: isDone
                    }
                }
            }
        }
    }

    for (let word of words) {
        console.log(word);
    }

}
stringIterator("Et cillum do voluptate cillum ut cupidatat aliqua.");