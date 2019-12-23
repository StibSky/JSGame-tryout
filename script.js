let solutionsTitle = [
    {
        title: "the final countdown", artist: "europe"
    },
    {
        title: "welcome to the jungle", artist: "guns 'n roses"
    }
    ];

songtoPlay = document.getElementById("Song1");

songInput = document.getElementById("songName").innerHTML;

document.getElementById("play").addEventListener("click", function () {
songtoPlay.play();
});

document.getElementById("pause").addEventListener("click", function () {
    songtoPlay.pause();
});
document.getElementById("sumbit").addEventListener("click", function () {
    let score = document.getElementById("playerScore").innerHTML;
    console.log(score);

    console.log(document.getElementById("songName").value.toLowerCase());
    console.log(solutionsTitle[0].title.toLowerCase());

    if (document.getElementById("songName").innerHTML === songName.title) {
        score++;
    }
});
