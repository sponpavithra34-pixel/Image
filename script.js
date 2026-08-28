function playSong() {

    const song =
        document.getElementById("song");


    if (song.paused) {

        song.play();

    } else {

        song.pause();

    }

}
