function postOffice(array) {
    let arr = array[0].split('|');
    let firstPart = arr.shift();
    let secondPart = arr.shift();
    let capitalLettersPattern = /([\#\$\%\&\*])[A-Z]+\1/g;
    let matchCapitalLetters = firstPart.match(capitalLettersPattern);
    let letters = matchCapitalLetters.join('');
    letters = letters.substring(1, letters.length - 1);
    let obj = {};

    for (let char of letters) {
        let currentChar = char.charCodeAt();
        let pattern = /[0-9]{2}:[0-9]{2}/g;
        let match = secondPart.match(pattern);
        for (let line of match) {
            line = line.split(':');
            if (line[0] >= 65 && line[0] <= 90) {
                if (currentChar == line[0]) {
                    line[1] = Number(line[1]);
                    obj[char] = line[1];
                }
            }
        }
    }

    let thirdPart = arr[0].split(' ');

    for (let char of letters) {
        for (let word of thirdPart) {
            if (word[0] == char && word.length == obj[char] + 1) {
                console.log(word);
            }
        }
    }
}
// postOffice([
//     'sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos']);

    postOffice([
        'Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig']);