function oldBooks(input) {
    let index = 0;
    let favouriteBook = input[index];
    index++;
    let currentBook = input[index];
    let counter = 0;

    while (input[index] !== "No More Books") {

        if (currentBook === favouriteBook) {
            console.log(`You checked ${counter} books and found it.`);
            break;
        }
        index++;
        counter++;
        currentBook = input[index];
    }

    if (currentBook === "No More Books") {
        console.log("The book you search is not here!");
        console.log(`You checked ${counter} books.`);
    }
}
oldBooks(["Troy", "Stronger", "Life Style", "Troy"])