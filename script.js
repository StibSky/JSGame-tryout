const solutionsTitle = [
    {
        title: "the final countdown", artist: "europe"
    },
    {
        title: "piano man", artist: "billy joel"
    },
    {
        title: "lose yourself", artist: "eminem"
    },
    {
        title: "dance monkey", artist: "tones and i"
    },
    {
        title: "one", artist: "metallica"
    },
    {
        title: "do i wanna know", artist: "arctic monkeys"
    },
    {
        title: "year 3000", artist: "busted"
    },
    {
        title: "scar tissue", artist: "red hot chili peppers"
    },
    {
        title: "whats my age again", artist: "blink 182"
    },
    {
        title: "snake jazz", artist: "snake planet"
    }
    ];



//
let numberSong = 0;
// Declaring buttons as variables
var playButton = document.getElementById("play");
var pauseButton = document.getElementById("pause");
var nextButton = document.getElementById("nextSong");
var submitButton = document.getElementById("sumbit");

// song and artist name
var songName = document.getElementById("songName");
var artistName = document.getElementById("artistName");
var songtoPlay = document.getElementById("Song"+ numberSong);
var playerScore = document.getElementById("playerScore");

// play and pause

playButton.addEventListener("click", function () {
    songtoPlay.play();
    document.getElementById("currentSong").innerHTML = `Song ${numberSong + 1}`;


});
pauseButton.addEventListener("click", function () {
    songtoPlay.pause();
});

//Loading song

nextButton.addEventListener("click", function () {
    if (numberSong == (solutionsTitle.length-1)) {
        document.getElementById("nextSong").innerHTML = "Finish Game";
    }
    if (numberSong == solutionsTitle.length) {
        alert(`The game has finished. Your score is ${playerScore.innerHTML}/${(solutionsTitle.length)*2}`);
        document.getElementById("currentSong").innerHTML = "Finished!";

    } else {
        songtoPlay.pause();
        ++numberSong;
        songtoPlay = document.getElementById("Song"+ numberSong);
        document.getElementById("currentSong").innerHTML = `Song ${numberSong + 1}`;

    }
    submitButton.disabled = false;
    console.log(numberSong);
    console.log(solutionsTitle.length);

});






submitButton.addEventListener("click", function () {
    let score = document.getElementById("playerScore").innerHTML;
    submitButton.disabled = true;
    songtoPlay.pause();

    if (songName.value.toLowerCase() === solutionsTitle[numberSong].title.toLowerCase()) {
        score++;
        playerScore.innerHTML = score;
    }
    else  {
        alert("wrong title, go next");
    }
    if (artistName.value.toLowerCase() === solutionsTitle[numberSong].artist.toLowerCase()) {
        score++;
        playerScore.innerHTML = score;
    }
    else  {
        alert("wrong artist, go next");
    }
});



