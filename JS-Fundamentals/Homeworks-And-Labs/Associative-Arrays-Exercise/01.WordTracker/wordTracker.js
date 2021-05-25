function wordTracker(arr) {
    let words = arr.shift().split(' ');
    let tracker = {};
    // let tracker = new Map();

    for (let word of words) {
        // tracker.set(word, []);
        tracker[word] = 0;
        for (let el of arr) {
            if (el === word) {
                tracker[word]++;
                // tracker.get(word).push(1);
            }
        }
    }
    // let sorted = Array.from(tracker).sort((a, b) => b[1].length - a[1].length);
    let sorted = Object.entries(tracker).sort((a, b) => b[1] - a[1]);
    for (let kvp of sorted) {
        console.log(`${kvp[0]} - ${kvp[1]}`);
    }
}
wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of',
    'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'])