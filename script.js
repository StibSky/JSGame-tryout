let solutions = [
    {
        title: "the final countdown", artist: "europe"
    },
    {
        title: "welcome to the jungle", artist: "guns 'n roses"
    }
    ];

Audio.play();

let score = 0;

for (let i = 0; i <solutions.length ; i++) {
    songName = solutions[i];
}
if (document.getElementById("songName").value === songName.title) {
    score++
}