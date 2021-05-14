function movies(arr) {

    let moviesArr = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i].includes('addMovie')) {
            let currentMovie = {};
            let name = arr[i].substring('addMovie'.length + 1);
            currentMovie.name = name;
            moviesArr.push(currentMovie);
        } else if (arr[i].includes('directedBy')) {
            let [name, director] = arr[i].split(' directedBy ');
            let myMovie = moviesArr.find(x => x.name === name);
            if (myMovie) {
                myMovie.director = director;
            }
        } else if (arr[i].includes('onDate')) {
            let [name, date] = arr[i].split(' onDate ');
            let myMovie = moviesArr.find(x => x.name === name);
            if (myMovie) {
                myMovie.date = date;
            }
        }

    }

    moviesArr.map(x => {
        if (x.hasOwnProperty('name') && x.hasOwnProperty('director') && x.hasOwnProperty('date')) {
            console.log(JSON.stringify(x))
        }
    })
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])