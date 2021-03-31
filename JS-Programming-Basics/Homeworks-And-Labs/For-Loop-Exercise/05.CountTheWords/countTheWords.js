function countTheWords(arg) {
    let message = arg;
    let words = 0;
    let spaces = 0;

    for (let i = 0; i < message.length; i++) {
        if (message[i] === " ") {
            spaces += 1;
        }
    }

    words = spaces + 1;
    if (words > 10) {
        console.log(`The message is too long to be send! Has ${words} words.`);
    } else {
        console.log("The message was send successfully!");
    }
}
countTheWords("This message has ten words and you can send it!")