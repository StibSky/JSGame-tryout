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
        title: "whats my name again", artist: " blink 182"
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


//Loading song

nextButton.addEventListener("click", function () {
    ++numberSong;
    songtoPlay = document.getElementById("Song"+ numberSong);
    submitButton.disabled = false;


});

// play and pause

playButton.addEventListener("click", function () {
songtoPlay.play();

});
pauseButton.addEventListener("click", function () {
    songtoPlay.pause();
});




submitButton.addEventListener("click", function () {
    let score = document.getElementById("playerScore").innerHTML;
    submitButton.disabled = true;

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



