function rightPlace(string, char, finalString) {
    let result = string.replace("_", char);

    if (result === finalString) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
}
rightPlace('Str_ng', 'i', 'String');