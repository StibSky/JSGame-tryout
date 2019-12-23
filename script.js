let solutionsTitle = [
    {
        title: "the final countdown", artist: "europe"
    },
    {
        title: "welcome to the jungle", artist: "guns 'n roses"
    }
    ];




numberSong = 1;



songtoPlay = document.getElementById("Song"+ numberSong);

// play and pause
document.getElementById("play").addEventListener("click", function () {
songtoPlay.play();
});
document.getElementById("pause").addEventListener("click", function () {
    songtoPlay.pause();
});




document.getElementById("sumbit").addEventListener("click", function () {
    let score = document.getElementById("playerScore").innerHTML;


    console.log(document.getElementById("artistName").value.toLowerCase());
    console.log(solutionsTitle[0].artist.toLowerCase());

    if (document.getElementById("songName").value.toLowerCase() === solutionsTitle[0].title.toLowerCase()) {
        score++;
        document.getElementById("playerScore").innerHTML = score;
    }
    else  {
        alert("wrong title, go next")
    }
    if (document.getElementById("artistName").value.toLowerCase() === solutionsTitle[0].artist.toLowerCase()) {
        score++;
        document.getElementById("playerScore").innerHTML = score;
    }
    else  {
        alert("wrong artist, go next")
    }
    onclick: this.disabled = true;
});


document.getElementById("nextSong").addEventListener("click", function () {
numberSong++;

});
