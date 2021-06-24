function lettersChangeNums(str) {

    let alphabet = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8,
        i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15,
        p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22,
        w: 23, x: 24, y: 25, z: 26
    }

    let arr = str.split(' ');
    let finalNum = 0;

    for (let command of arr) {

        if (command === '') {
            continue;
        } else {
            let firstLetter = command.substring(0, 1);
            let lastLetter = command.substring(command.length - 1);
            let n = Number(command.substring(1, command.length - 1));

            if (firstLetter.toUpperCase() == firstLetter) {
                firstLetter = firstLetter.toLowerCase();
                n /= alphabet[firstLetter];
            } else {
                n *= alphabet[firstLetter];
            }

            if (lastLetter.toUpperCase() == lastLetter) {
                lastLetter = lastLetter.toLowerCase();
                n -= alphabet[lastLetter];
            } else {
                n += alphabet[lastLetter];
            }

            finalNum += n;
        }

    }
    console.log(finalNum.toFixed(2));
}
// lettersChangeNums('A12b s17G');
lettersChangeNums('P34562Z q2576f   H456z');
// lettersChangeNums('a1A')