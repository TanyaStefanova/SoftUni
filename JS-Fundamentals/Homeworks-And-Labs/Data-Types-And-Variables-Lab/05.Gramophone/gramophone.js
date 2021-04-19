function gramophone(bandInput,albumInput, songInput){
let bandName = bandInput;
let albumName = albumInput;
let songName = songInput;

let songDuration = (albumName.length * bandName.length) * songName.length / 2;
let rotations = Math.ceil(songDuration / 2.5);
console.log(`The plate was rotated ${rotations} times.`);
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')