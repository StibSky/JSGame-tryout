let solutions = [
    {
        title: "the final countdown", artist: "europe"
    },
    {
        title: "welcome to the jungle", artist: "guns 'n roses"
    }
    ];

songtoPlay = document.getElementById("Song1");

let score = 0;

for (let i = 0; i <solutions.length ; i++) {
    songName = solutions[i];
}
if (document.getElementById("songName").value === songName.title) {
    score++;
    console.log(songName.title)
}

document.getElementById("play").addEventListener("click", function () {
songtoPlay.play();
});

document.getElementById("pause").addEventListener("click", function () {
    songtoPlay.pause();
});
