function hardWords(arr) {
    let letter = arr.shift().split(' ');
    let words = arr.shift();
    let result = [];

    for (let el of letter) {

        if (el.includes('_')) {
            for (let word of words) {
                if (el.includes('.') && word.length + 1 == el.length) {
                    word = `${word}.`;
                    result.push(word);
                    break;
                } else if (el.includes(',') && word.length + 1 == el.length) {
                    word = `${word},`;
                    result.push(word);
                    break;
                } else if (word.length == el.length) {
                    result.push(word);
                    break;
                }
            }
        } else {
            result.push(el)
        }
    }
    console.log(result.join(' '));
}
hardWords([
    "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
    [
        'pie',
        'bring',
        'glad',
        'During',
        'amazing',
        'pharmacist',
        'sprained'
    ]
])