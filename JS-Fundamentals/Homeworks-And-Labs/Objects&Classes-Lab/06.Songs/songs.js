function songs(arr) {

    class Songs {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time
            console.log(this.name);
        }
    }

    let songsCount = arr.shift();
    let category = arr.pop();
    for (let i = 0; i < arr.length; i++) {
        let songData = arr[i].split('_');
        let currentCategory = songData[0];
        let songName = songData[1];
        let songTime = songData[2];

        if (category === 'all' || category === currentCategory) {
            let song = new Songs(currentCategory, songName, songTime);
        }
    }
}
// songs([4,
//     'favourite_DownTown_3:14',
//     'listenLater_Andalouse_3:24',
//     'favourite_In To The Night_3:58',
//     'favourite_Live It Up_3:48',
//     'listenLater'])

songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
)