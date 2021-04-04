function readText(input) {
    let index = 0;

    while (true) {
        let name = input[index];
        index++
        if (name === "Stop") {
            break;
        }
        console.log(name);
    }
}
readText(["Sofia",
"Berlin",
"Moscow",
"Athens",
"Madrid",
"London",
"Paris",
"Stop",
"AfterStop"])

