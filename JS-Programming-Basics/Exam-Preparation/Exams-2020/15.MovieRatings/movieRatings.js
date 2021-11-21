function movieRatings(input) {
    let index = 0;
    let movies = Number(input[index++]);
    let command = input[index];

    let allRatings = 0;
    let maxRating = 0;
    let minRating = Number.MAX_SAFE_INTEGER;
    let minRatingName = "";
    let maxRatingName = "";

    for (let i = 1; i <= movies; i++) {
        let name = command;
        index++;
        command = input[index];
        let rating = Number(command);
        allRatings += rating;
        if (rating > maxRating) {
            maxRating = rating;
            maxRatingName = name;
        }
        if (rating < minRating) {
            minRating = rating;
            minRatingName = name;
        }
        index++;
        command = input[index];
    }
    console.log(`${maxRatingName} is with highest rating: ${maxRating.toFixed(1)}`);
    console.log(`${minRatingName} is with lowest rating: ${minRating.toFixed(1)}`);
    console.log(`Average rating: ${(allRatings / movies).toFixed(1)}`);
}
movieRatings(['3', 'Interstellar', '8.5', 'Dangal', '8.3', 'Green Book', '8.2'])